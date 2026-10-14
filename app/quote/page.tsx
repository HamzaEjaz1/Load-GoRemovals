import type { Metadata } from "next";
import { QuoteContact } from "@/components/QuoteContact";

export const metadata: Metadata = { title: "Free quote" };

export default function QuotePage() {
  return (
    <>
      <div className="wrap page-hero">
        <span className="label">Free quote</span>
        <h1>Tell us what’s going.</h1>
        <p>Fill this in or message us directly. We usually reply the same day.</p>
      </div>
      <QuoteContact />
    </>
  );
}
