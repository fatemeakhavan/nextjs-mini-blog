import { z } from "zod"

export const profileSchema = z.object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    family: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
    email: z.string().email("ایمیل معتبر وارد کنید"),
    mobile: z
        .string()
        .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست (مثال: 09123456789)"),
    dateOfBirth: z.date("تاریخ تولد الزامی است"),
    favorites: z
        .array(z.string())
        .min(1, "حداقل یک مورد علاقه باید انتخاب شود"),
    bio: z.string().min(10, "بیو باید حداقل ۱۰ کاراکتر باشد"),
})

export type ProfileFormValues = z.infer<typeof profileSchema>
