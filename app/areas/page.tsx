import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = { title: "Areas & FAQ" };

const suburbs: [string, string][] = [
  ["Adelaide CBD", "5000"],
  ["North Adelaide", "5006"],
  ["Prospect", "5082"],
  ["Norwood", "5067"],
  ["Unley", "5061"],
  ["Glenelg", "5045"],
  ["Henley Beach", "5022"],
  ["Port Adelaide", "5015"],
  ["Mawson Lakes", "5095"],
  ["Salisbury", "5108"],
  ["Elizabeth", "5112"],
  ["Golden Grove", "5125"],
  ["Tea Tree Gully", "5091"],
  ["Campbelltown", "5074"],
  ["Burnside", "5066"],
  ["Mitcham", "5062"],
  ["Marion", "5043"],
  ["Morphett Vale", "5162"],
  ["Noarlunga", "5168"],
  ["Stirling", "5152"],
  ["West Lakes", "5021"],
];

const faqs = [
  {
    q: "Do I need to be home?",
    a: "Not always. If the rubbish is outside or easy to reach, we can collect while you’re out and send you a photo when it’s done.",
  },
  {
    q: "Do you do the lifting?",
    a: "Yes. That’s the whole point. We carry everything from wherever it is, including stairs and backyards.",
  },
  {
    q: "How is the price worked out?",
    a: "By volume: how much of the tray your rubbish takes up. Labour and tip fees are included in the quote you receive.",
  },
  {
    q: "Is it cheaper than a skip bin?",
    a: "For most small and medium jobs, yes. You also skip the waiting, the permits and the loading yourself.",
  },
  {
    q: "What happens to my rubbish?",
    a: "We separate metals, cardboard, green waste and usable items first. Only what can’t be recycled or donated goes to landfill.",
  },
  {
    q: "Can you do regular pick-ups for my site?",
    a: "Yes. Builders and businesses can book weekly or fortnightly runs.",
  },
];

export default function AreasPage() {
  return (
    <>
      <div className="wrap page-hero">
        <span className="label">Service areas</span>
        <h1>All over Adelaide, from the hills to the coast.</h1>
        <p>Based locally and covering the metro area. If your suburb isn’t listed, ask anyway.</p>
      </div>

      <section className="block wrap tight">
        <ul className="areas">
          {suburbs.map(([name, postcode]) => (
            <li key={name}>
              {name} <span>{postcode}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="block wrap faq">
        <div className="head">
          <span className="label">FAQ</span>
          <h2>Questions people ask.</h2>
        </div>
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <CtaBand title="In your area? Let’s book it." text="Free quotes, no obligation." />
    </>
  );
}
