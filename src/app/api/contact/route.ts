import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend for email delivery
    // const { data, error } = await resend.emails.send({
    //   from: 'Nicole Beauchamp Website <noreply@nicolebeauchamp.com>',
    //   to: 'nicole.beauchamp@sothebys.realty',
    //   subject: `New Contact: ${subject || 'General Inquiry'} from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //          <p><strong>Subject:</strong> ${subject || 'General'}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // });

    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json(
      { success: true, message: "Thank you for your message. Nikki will be in touch shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
