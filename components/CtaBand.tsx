import Link from "next/link";

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <div className="cta-band">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn" href="/quote">
          Get a free quote →
        </Link>
      </div>
    </div>
  );
}
