import { ProfileFormValues } from "@/components/pages/dashboard/ProfileForm/validation"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

const PROFILE_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(PROFILE_URL)
      if (!res?.ok) {
        throw new Error("Failed to fetch profile")
      }
      return res?.json()
    },
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (updatedProfile: ProfileFormValues) => {
      const res = await fetch(PROFILE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      })

      if (!res?.ok) {
        throw new Error("Failed to update profile")
      }
      return res?.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] })
    },
  })
}
