"use server"

import { Resend } from "resend"
import { estimateFormSchema, type EstimateFormValues } from "@/lib/validations"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEstimate(data: EstimateFormValues) {
  try {
    // Validate the data
    const validatedData = estimateFormSchema.parse(data)

    // Send email using Resend
    await resend.emails.send({
      from: "One Detail At A Time <onboarding@resend.dev>",
      to: "estimates@odaat1.com",
      subject: `New Estimate Request - ${validatedData.service}`,
      html: `
        <h2>New Estimate Request</h2>
        
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        
        <h3>Vehicle Information</h3>
        <p><strong>Year:</strong> ${validatedData.vehicleYear}</p>
        <p><strong>Make:</strong> ${validatedData.vehicleMake}</p>
        <p><strong>Model:</strong> ${validatedData.vehicleModel}</p>
        
        <h3>Service Requested</h3>
        <p><strong>${validatedData.service}</strong></p>
        
        ${validatedData.message ? `<h3>Additional Details</h3><p>${validatedData.message}</p>` : ""}
        
        <hr />
        <p><small>Submitted from odaat1.com</small></p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending estimate:", error)
    return {
      success: false,
      error: "Failed to send estimate request. Please try calling us at (726) 207-1007.",
    }
  }
}
