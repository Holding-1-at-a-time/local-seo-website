"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { estimateFormSchema, type EstimateFormValues } from "@/lib/validations"
import { sendEstimate } from "@/app/actions/send-estimate"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2 } from "lucide-react"

interface EstimateFormProps {
  defaultService?: string
  className?: string
}

export function EstimateForm({ defaultService, className = "" }: EstimateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<EstimateFormValues>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      service: defaultService || "",
    },
  })

  const onSubmit = async (data: EstimateFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const result = await sendEstimate(data)

    if (result.success) {
      setSubmitStatus("success")
      reset()
    } else {
      setSubmitStatus("error")
      setErrorMessage(result.error || "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" {...register("name")} disabled={isSubmitting} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            disabled={isSubmitting}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="(210) 555-0123" {...register("phone")} disabled={isSubmitting} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleYear">Vehicle Year</Label>
          <Input id="vehicleYear" placeholder="2024" {...register("vehicleYear")} disabled={isSubmitting} />
          {errors.vehicleYear && <p className="text-sm text-destructive">{errors.vehicleYear.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleMake">Vehicle Make</Label>
          <Input id="vehicleMake" placeholder="Toyota" {...register("vehicleMake")} disabled={isSubmitting} />
          {errors.vehicleMake && <p className="text-sm text-destructive">{errors.vehicleMake.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleModel">Vehicle Model</Label>
          <Input id="vehicleModel" placeholder="Camry" {...register("vehicleModel")} disabled={isSubmitting} />
          {errors.vehicleModel && <p className="text-sm text-destructive">{errors.vehicleModel.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Needed</Label>
        <Select value={watch("service")} onValueChange={(value) => setValue("service", value)} disabled={isSubmitting}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Ceramic Coating">Ceramic Coating</SelectItem>
            <SelectItem value="Interior Deep Cleaning">Interior Deep Cleaning</SelectItem>
            <SelectItem value="Paint Correction">Paint Correction</SelectItem>
            <SelectItem value="Exterior Hand Wash & Sealant">Exterior Hand Wash & Sealant</SelectItem>
            <SelectItem value="Engine Detailing">Engine Detailing</SelectItem>
            <SelectItem value="Full Body Wash">Full Body Wash</SelectItem>
            <SelectItem value="Headlight Polishing">Headlight Polishing</SelectItem>
            <SelectItem value="Paint Repair">Paint Repair</SelectItem>
            <SelectItem value="Seat Shampooing">Seat Shampooing</SelectItem>
            <SelectItem value="Complete Detail Package">Complete Detail Package</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Tell us about any specific concerns or preferences..."
          rows={4}
          {...register("message")}
          disabled={isSubmitting}
        />
      </div>

      {submitStatus === "success" && (
        <Alert className="border-green-500 bg-green-500/10">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-500">
            Thank you! We've received your estimate request and will contact you within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Free Estimate"
        )}
      </Button>
    </form>
  )
}
