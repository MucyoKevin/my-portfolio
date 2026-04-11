"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      message: "Please enter a message (at least 10 characters).",
    };
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!key || !from || !to) {
    return {
      ok: false,
      message:
        "Email delivery is not configured. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to .env.local (see .env.example).",
    };
  }

  try {
    const resend = new Resend(key);
    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio contact from ${email}`,
      text: message,
    });
    return { ok: true, message: "Thanks — your message was sent." };
  } catch {
    return {
      ok: false,
      message: "Something went wrong sending your message. Please try again later.",
    };
  }
}
