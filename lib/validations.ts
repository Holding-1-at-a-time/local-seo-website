import { z } from "zod"

export const estimateFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^$$?([0-9]{3})$$?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid phone number"),
  vehicleYear: z.string().regex(/^\d{4}$/, "Please enter a valid year"),
  vehicleMake: z.string().min(2, "Please enter vehicle make"),
  vehicleModel: z.string().min(2, "Please enter vehicle model"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
})

export type EstimateFormValues = z.infer<typeof estimateFormSchema>
