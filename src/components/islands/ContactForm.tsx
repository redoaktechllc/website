import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";

const WEB3FORMS_KEY = "3c1c8805-9c09-4215-b9ce-2c5383b1d6e6";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently drop bot submissions.
    if (data.get("botcheck")) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Request sent — we'll reply within one business day.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please call or email us instead.");
      }
    } catch {
      toast.error("Network error. Please call or email us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white p-6 text-ink shadow-soft sm:p-8">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="grid gap-4"
      >
        <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
        <input type="hidden" name="subject" value="New preview request from redoakllc.tech" />
        <input type="hidden" name="from_name" value="Red Oak website" />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid gap-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="business">Business name</Label>
          <Input id="business" name="business" type="text" autoComplete="organization" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">What does your business do?</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. We're a plumbing company in Akron and don't have a website yet."
          />
        </div>

        <Button type="submit" variant="default" size="xl" className="mt-1 w-full" disabled={submitting}>
          {submitting ? "Sending…" : "Send my preview request"}
        </Button>
      </form>
      <Toaster richColors position="top-center" />
    </div>
  );
}
