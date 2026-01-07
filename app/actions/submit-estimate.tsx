"use server"

export async function submitEstimateRequest(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const year = formData.get("year") as string
    const make = formData.get("make") as string
    const model = formData.get("model") as string
    const notes = (formData.get("notes") as string) || "No additional notes"

    // Validate required fields
    if (!name || !email || !phone || !service || !year || !make || !model) {
      return { success: false, error: "Please fill in all required fields" }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address" }
    }

    // TODO: Integrate with Resend when API key is available
    // For now, log the data (in production, this would send via Resend)
    console.log("[v0] Estimate request received:", {
      name,
      email,
      phone,
      service,
      vehicle: `${year} ${make} ${model}`,
      notes,
    })

    // Simulated email sending (replace with actual Resend implementation)
    // const { Resend } = await import("resend")
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // await resend.emails.send({
    //   from: "odaat1 <estimates@odaat1.com>",
    //   to: "your-business-email@example.com",
    //   subject: `New Estimate Request from ${name}`,
    //   html: `
    //     <h2>New Estimate Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Vehicle:</strong> ${year} ${make} ${model}</p>
    //     <p><strong>Notes:</strong> ${notes}</p>
    //   `,
    // })
    //
    // // Send confirmation email to customer
    // await resend.emails.send({
    //   from: "odaat1 <no-reply@odaat1.com>",
    //   to: email,
    //   subject: "We received your estimate request",
    //   html: `
    //     <h2>Thank you for your interest!</h2>
    //     <p>Hi ${name},</p>
    //     <p>We received your request for a ${service} estimate for your ${year} ${make} ${model}.</p>
    //     <p>We'll review your request and send you a detailed quote within 24 hours.</p>
    //     <br/>
    //     <p>Best regards,<br/>The odaat1 team</p>
    //   `,
    // })

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting estimate:", error)
    return { success: false, error: "Failed to submit request. Please try again." }
  }
}
