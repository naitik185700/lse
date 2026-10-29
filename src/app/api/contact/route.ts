import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, loanType, debtAmount, city, message } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: "Valid 10-digit phone number is required." },
        { status: 400 }
      );
    }

    // Optional webhook forward if CRM_WEBHOOK_URL or ZOHO_WEBHOOK_URL is set in environment
    const webhookUrl = process.env.CRM_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: fullName.trim(),
            phone: cleanPhone,
            email: email ? email.trim() : "",
            loanType: loanType || "Personal Loan",
            debtAmount: debtAmount || "",
            city: city || "",
            message: message || "",
            source: "LoanSettlementExpert Website",
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook forwarding error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
