"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-bold text-base sm:text-lg cursor-pointer hover:translate-x-1 transition-transform ease-in-out duration-300 delay-200 disabled:opacity-60 disabled:hover:translate-x-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    >
      {pending ? "Sending…" : "Send"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initial);

  return (
    <form
      action={formAction}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-full sm:max-w-4xl"
    >
      <div className="flex flex-col gap-2 sm:col-span-2" aria-live="polite">
        {state.message ? (
          <p
            className={
              state.ok ? "text-green-800 text-sm" : "text-red-800 text-sm"
            }
            role={state.ok ? "status" : "alert"}
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="font-semibold">
          Email<span className="text-[var(--accent)]">*</span>
        </label>
        <input
          id="contact-email"
          className="p-3 rounded bg-white/20 border border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          placeholder="you@example.com"
          name="email"
          required
          type="email"
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="contact-message" className="font-semibold">
          Message<span className="text-[var(--accent)]">*</span>
        </label>
        <textarea
          id="contact-message"
          className="p-3 rounded bg-white/20 border border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          placeholder="Write your message…"
          rows={4}
          name="message"
          required
          minLength={10}
        />
      </div>
      <div className="col-span-1 sm:col-span-2 flex justify-center mb-5">
        <SubmitButton />
      </div>
    </form>
  );
}
