"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/common/DatePicker"
import { SearchableDropdown } from "@/components/common/SearchableDropdown"
import { ProfileFormValues, profileSchema } from "./validation"


const favoriteOptions = [
  { value: "music", label: "موسیقی" },
  { value: "movies", label: "فیلم" },
  { value: "sports", label: "ورزش" },
  { value: "books", label: "کتاب" },
  { value: "travel", label: "سفر" },
]

export function ProfileForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
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

  const onSubmit = (data: ProfileFormValues) => {
    console.log("✅ Form Data:", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 p-4 max-w-xl mx-auto"
    >
      <div>
        <Input placeholder="نام" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input placeholder="نام خانوادگی" {...register("family")} />
        {errors.family && (
          <p className="text-red-500 text-sm mt-1">{errors.family.message}</p>
        )}
      </div>
      <div>
        <Input type="email" placeholder="ایمیل" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Input type="tel" placeholder="موبایل" {...register("mobile")} />
        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
        )}
      </div>
      <div>
        <DatePicker
          value={dateOfBirth}
          onChange={(date) => setValue("dateOfBirth", date!, { shouldValidate: true })}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dateOfBirth.message as string}
          </p>
        )}
      </div>
      <div>
        <SearchableDropdown
          options={favoriteOptions}
          value={favorites[0] || ""}
          onChange={(val) =>
            setValue("favorites", val ? [val] : [], { shouldValidate: true })
          }
          placeholder="موارد مورد علاقه"
        />
        {errors.favorites && (
          <p className="text-red-500 text-sm mt-1">
            {errors.favorites.message}
          </p>
        )}
      </div>
      <div>
        <Textarea placeholder="بیو" {...register("bio")} />
        {errors.bio && (
          <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        ثبت پروفایل
      </Button>
    </form>
  )
}
