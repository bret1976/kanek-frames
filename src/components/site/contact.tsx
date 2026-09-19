import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const field =
  "h-12 border border-line bg-surface px-4 font-sans text-sm tracking-normal text-fg outline-none focus:border-red";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const prev = JSON.parse(localStorage.getItem("kanek-leads") || "[]") as unknown[];
      localStorage.setItem("kanek-leads", JSON.stringify([...prev, { ...payload, at: Date.now() }]));
    } catch {
      /* ignore quota */
    }
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="border-t border-line bg-bg">
      <div className="grid lg:grid-cols-12">
        <div className="px-5 py-16 md:px-10 md:py-24 lg:col-span-6">
          <h2 className="font-display text-5xl tracking-wide text-fg md:text-6xl">
            Build intelligence.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Don't want to wait? Call{" "}
            <a href="tel:+17025550148" className="text-fg underline decoration-red underline-offset-4">
              +1 702 555 0148
            </a>
          </p>

          {sent ? (
            <p className="mt-12 max-w-md border border-line bg-surface px-6 py-8 text-lg text-fg">
              Received. We'll be on it before the next frame leaves the shop.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 grid max-w-xl gap-5">
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                Name *
                <input required name="name" autoComplete="name" suppressHydrationWarning className={field} />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                  Company
                  <input name="company" suppressHydrationWarning className={field} />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                  Phone *
                  <input required name="phone" type="tel" autoComplete="tel" suppressHydrationWarning className={field} />
                </label>
              </div>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                Email
                <input required name="email" type="email" autoComplete="email" suppressHydrationWarning className={field} />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                Message *
                <textarea
                  required
                  name="message"
                  rows={4}
                  suppressHydrationWarning
                  className="border border-line bg-surface px-4 py-3 font-sans text-sm tracking-normal text-fg outline-none focus:border-red"
                />
              </label>
              <label className="flex items-start gap-3 text-sm text-muted">
                <input required type="checkbox" name="consent" className="mt-1 size-4 accent-red" />
                I agree to the handling of this inquiry.
              </label>
              <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
                Request a call
              </Button>
            </form>
          )}
        </div>
        <div className="relative min-h-[70vh] lg:col-span-6 lg:min-h-full">
          <img
            src="/images/shop-interior.jpg"
            alt="Kanek Frames shop"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
