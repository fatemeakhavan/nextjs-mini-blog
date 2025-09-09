"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/common/DatePicker"
import { SearchableDropdown } from "@/components/common/SearchableDropdown"
import { CardContent, CardFooter } from "@/components/ui/card"
import { profileSchema, ProfileFormValues } from "./validation"
import { useQueryClient } from "@tanstack/react-query"
import { useProfile, useUpdateProfile } from "@/hooks/useProfile"
import { useEffect } from "react"
import Loading from "@/app/loading"
import { toast } from 'react-toastify'

const favoriteOptions = [
  { value: "music", label: "Music" },
  { value: "movies", label: "Movies" },
  { value: "sports", label: "Sports" },
  { value: "books", label: "Books" },
  { value: "travel", label: "Travel" },
]

export function ProfileForm() {
  const queryClient = useQueryClient()
  const { data: profile, isLoading, isError } = useProfile()
  const updateProfile = useUpdateProfile()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      family: "",
      email: "",
      mobile: "",
      bio: "",
      favorites: [],
      dateOfBirth: undefined,
    },
  })

  const favorites = watch("favorites")
  const dateOfBirth = watch("dateOfBirth")


  useEffect(() => {
    if (profile) reset(profile)
  }, [profile, reset])

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      await updateProfile.mutateAsync(data)
      queryClient.setQueryData(["profile"], data)
      toast.success('Profile updated successfully!')
    } catch {
      toast.error('Failed to update profile.')
    }
  }

  if (isLoading) return <Loading />
  if (isError) return <p className="text-center mt-10">Error loading profile.</p>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div>
          <Input
            placeholder="First Name"
            {...register("name")}
            className="focus:ring-2 focus:ring-primary transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Last Name"
            {...register("family")}
            className="focus:ring-2 focus:ring-primary transition-all"
          />
          {errors.family && (
            <p className="text-red-500 text-xs mt-1">{errors.family.message}</p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="focus:ring-2 focus:ring-primary transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Mobile"
            {...register("mobile")}
            className="focus:ring-2 focus:ring-primary transition-all"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
          )}
        </div>
        <div>
          <DatePicker
            value={dateOfBirth}
            onChange={(date) =>
              setValue("dateOfBirth", date!, { shouldValidate: true })
            }
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
          )}
        </div>
        <div>
          <SearchableDropdown
            options={favoriteOptions}
            value={favorites[0] || ""}
            onChange={(val) =>
              setValue("favorites", val ? [val] : [], { shouldValidate: true })
            }
            placeholder="Favorites"
          />
          {errors.favorites && (
            <p className="text-red-500 text-xs mt-1">{errors.favorites.message}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <Textarea
            placeholder="Bio"
            {...register("bio")}
            className="focus:ring-2 focus:ring-primary transition-all"
          />
          {errors.bio && (
            <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>
          )}
        </div>
      </CardContent>

      <CardFooter className="md:col-span-2 my-5">
        <Button
          type="submit"
          className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Submit Profile"}
        </Button>
      </CardFooter>
    </form>
  )
}
