"use client";

import { FormEvent, useState } from "react";

const loads = ["Single item", "1/4 load", "1/2 load", "Full load", "Not sure"];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="copy"
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "Copied" : label}
    </button>
  );
}

export function QuoteContact() {
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ok = ["name", "phone", "suburb"].every((key) => String(data.get(key) || "").trim());
    setError(!ok);
    if (ok) setDone(true);
  }

  return (
    <section className="block wrap contact">
      <form onSubmit={onSubmit} noValidate>
        <div className="row">
          <label htmlFor="q-name">
            Your name
            <input id="q-name" name="name" required autoComplete="name" />
          </label>
          <label htmlFor="q-phone">
            Phone
            <input
              id="q-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="04xx xxx xxx"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="q-suburb">
            Suburb
            <input id="q-suburb" name="suburb" required placeholder="e.g. Norwood" />
          </label>
          <label htmlFor="q-type">
            Job type
            <select id="q-type" name="type" defaultValue="Residential">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Construction</option>
            </select>
          </label>
        </div>
        <fieldset>
          <legend>Roughly how much?</legend>
          <div className="chips">
            {loads.map((load) => (
              <label key={load}>
                <input type="radio" name="size" value={load} defaultChecked={load === "1/2 load"} />
                {load === "1/4 load" ? "¼ load" : load === "1/2 load" ? "½ load" : load}
              </label>
            ))}
          </div>
        </fieldset>
        <label htmlFor="q-msg">
          What needs to go?
          <textarea
            id="q-msg"
            name="message"
            placeholder="e.g. old couch, a fridge and about 10 bags from the garage"
          />
        </label>
        <p className="label form-error" hidden={!error}>
          Please add your name, phone and suburb so we can get back to you.
        </p>
        {done ? (
          <div className="done">Thanks! Your request is in. We’ll be in touch shortly with your price.</div>
        ) : (
          <button className="btn btn-solid" type="submit">
            Send quote request →
          </button>
        )}
      </form>

      <aside className="side">
        <div className="tile">
          <span className="label">Call or text</span>
          <p className="big">04XX XXX XXX</p>
          <CopyButton text="04XX XXX XXX" label="Copy number" />
        </div>
        <div className="tile">
          <span className="label">Email</span>
          <p className="big email">hello@loadandgoremovals.com.au</p>
          <CopyButton text="hello@loadandgoremovals.com.au" label="Copy email" />
        </div>
        <div className="tile">
          <span className="label">Social</span>
          <h3>DM us for a free quote</h3>
          <p>Send a photo of the pile on Instagram or Facebook and we’ll price it from there.</p>
        </div>
        <div className="tile">
          <span className="label">Hours</span>
          <p>
            Mon–Sat, 7am–6pm
            <br />
            Sundays by arrangement
          </p>
        </div>
      </aside>
    </section>
  );
}
