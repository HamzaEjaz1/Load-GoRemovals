import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { HeroTruck } from "@/components/HeroTruck";
import { HouseIcon, ShopIcon, SiteIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <div className="wrap hero">
        <span className="label">Adelaide rubbish removal</span>
        <h1 className="caps wordmark">
          <span>Load &amp; Go</span>
          <span>Removals</span>
        </h1>
        <HeroTruck />
        <p className="lede">
          You point, we load, it’s gone. Fast, affordable rubbish removal for homes, businesses and
          building sites across Adelaide.
        </p>
        <div className="ctas">
          <Link className="btn btn-solid" href="/quote">
            Get a free quote →
          </Link>
          <Link className="btn btn-line" href="/services">
            What we take
          </Link>
        </div>
      </div>

      <div className="strip">
        <ul>
          <li>Residential</li>
          <li>Commercial</li>
          <li>Construction</li>
        </ul>
      </div>

      <section className="block wrap">
        <div className="head">
          <span className="label">What we do</span>
          <h2>One ute, three kinds of mess.</h2>
          <p>
            No skip bin sitting on your lawn for a week. We turn up, do all the lifting, sweep up,
            and take it away the same visit.
          </p>
        </div>
        <div className="grid3">
          <article className="tile">
            <HouseIcon />
            <h3>Residential</h3>
            <p>
              Garage and shed clean-outs, old furniture, mattresses, whitegoods, garden waste and
              moving-day leftovers.
            </p>
          </article>
          <article className="tile">
            <ShopIcon />
            <h3>Commercial</h3>
            <p>
              Office clear-outs, shop fit-out waste, old desks and shelving, cardboard and e-waste,
              worked around your trading hours.
            </p>
          </article>
          <article className="tile">
            <SiteIcon />
            <h3>Construction</h3>
            <p>
              Builders’ rubble, timber offcuts, plasterboard, tiles and general site waste. Ideal
              for renos and small builders.
            </p>
          </article>
        </div>
      </section>

      <section className="block wrap">
        <div className="why">
          <div>
            <b>Reliable</b>
            <p>We show up when we say, and we text when we’re on the way.</p>
          </div>
          <div>
            <b>Affordable</b>
            <p>Priced by how much of the tray you fill. No hidden extras.</p>
          </div>
          <div>
            <b>We do the lifting</b>
            <p>Stairs, backyards, under the house. Just show us what goes.</p>
          </div>
          <div>
            <b>Disposed of properly</b>
            <p>Recyclables and metals are sorted out before anything goes to landfill.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Got junk? Get a price."
        text="Send a quick message or a photo and we’ll come back with a quote."
      />
    </>
  );
}
