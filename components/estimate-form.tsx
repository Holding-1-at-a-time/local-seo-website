"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"
import { submitEstimateRequest } from "@/app/actions/submit-estimate"

export function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitEstimateRequest(formData)

      if (result.success) {
        setIsSuccess(true)
      } else {
        setError(result.error || "Failed to submit. Please try again.")
      }
    } catch {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-card border-2 border-primary rounded-xl p-8 text-center space-y-4">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
        <h3 className="text-2xl font-bold">Request received!</h3>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for your interest. We'll review your request and send you a detailed estimate within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" type="text" required placeholder="John Smith" className="bg-background" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              pattern="[0-9\s$$$$\-\+]+"
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <Select name="service" required>
            <SelectTrigger id="service" className="bg-background">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ceramic-coating">Ceramic Coating</SelectItem>
              <SelectItem value="interior-deep-cleansing">Interior Deep Cleansing</SelectItem>
              <SelectItem value="both">Both Services</SelectItem>
              <SelectItem value="other">Other / Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="year">Vehicle Year *</Label>
            <Input
              id="year"
              name="year"
              type="number"
              required
              min="1980"
              max={new Date().getFullYear() + 1}
              placeholder="2023"
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="make">Make *</Label>
            <Input id="make" name="make" type="text" required placeholder="Toyota" className="bg-background" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model *</Label>
            <Input id="model" name="model" type="text" required placeholder="Camry" className="bg-background" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Tell us about your vehicle's condition, any specific concerns, or questions you have..."
            className="bg-background min-h-[120px]"
          />
        </div>
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-destructive text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Get Free Estimate"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary hover:underline">
          Terms & Conditions
        </a>
        .
      </p>
    </form>
  )
}
