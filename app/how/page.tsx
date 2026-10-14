import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = { title: "How it works" };

const steps = [
  {
    title: "Tell us what’s going",
    text: "Fill in the quote form, send a DM, or text a photo. A rough description is fine.",
  },
  {
    title: "Get your price",
    text: "We send back a fixed quote, usually the same day. No obligation, no pressure.",
  },
  {
    title: "We load it up",
    text: "We arrive at the booked time and do all the carrying, from wherever the rubbish is sitting.",
  },
  {
    title: "And go",
    text: "We sweep up, take it away, and sort what can be recycled. You get your space back.",
  },
];

const notes = [
  { label: "Bookings", title: "Same-week jobs", text: "Most jobs are booked within a few days. Ask about same-day if it’s urgent." },
  { label: "Payment", title: "Pay on completion", text: "You pay once the job is done and you’re happy. Card, cash or bank transfer." },
  { label: "Disposal", title: "Sorted properly", text: "Metal, cardboard and green waste go to recyclers. Usable items can go to charity." },
];

export default function HowPage() {
  return (
    <>
      <div className="wrap page-hero">
        <span className="label">How it works</span>
        <h1>Four steps. You only do the first one.</h1>
        <p>No bins to hire, no trailer to borrow, no trip to the dump.</p>
      </div>

      <section className="block wrap tight">
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block wrap">
        <div className="grid3">
          {notes.map((note) => (
            <div className="tile" key={note.title}>
              <span className="label">{note.label}</span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Ready for step one?" text="It takes about a minute." />
    </>
  );
}
