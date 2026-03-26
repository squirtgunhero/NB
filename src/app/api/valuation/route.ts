import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, unit, propertyType, bedrooms, bathrooms, sqft, yearBuilt, notes } = body;

    if (!name || !email || !address) {
      return NextResponse.json(
        { error: "Name, email, and property address are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend for email delivery
    console.log("Valuation request:", {
      name, email, phone, address, unit, propertyType,
      bedrooms, bathrooms, sqft, yearBuilt, notes,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! Nikki will prepare your personalized home valuation and be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
