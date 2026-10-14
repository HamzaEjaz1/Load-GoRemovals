import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = { title: "Services" };

const services = [
  {
    title: "Household rubbish",
    text: "General junk, bags, boxes and the stuff that’s been in the spare room since 2019.",
    items: ["Furniture and mattresses", "Fridges, washers and other whitegoods", "Toys, clothes and household items"],
  },
  {
    title: "Garage & shed clean-outs",
    text: "We empty it out so you can actually park the car again.",
    items: ["Old tools, tins and timber", "Bikes, BBQs and scrap metal", "Shelving and storage junk"],
  },
  {
    title: "Green waste",
    text: "Prunings, branches, lawn clippings and garden clean-ups.",
    items: ["Branches and hedge cuttings", "Old pots, pavers and edging", "Post-storm clean-ups"],
  },
  {
    title: "Office & shop clear-outs",
    text: "Quick turnarounds for moves, refits and end-of-lease cleans.",
    items: ["Desks, chairs and filing cabinets", "Cardboard and packaging", "Computers and e-waste"],
  },
  {
    title: "Builders’ waste",
    text: "Regular or one-off pick-ups for builders, renovators and trades.",
    items: ["Rubble, bricks and tiles", "Timber offcuts and plasterboard", "General site waste"],
  },
  {
    title: "Moving & deceased estates",
    text: "Careful, respectful clearing when a whole house needs emptying.",
    items: ["Whole-house clear-outs", "Items set aside for donation", "End-of-lease rubbish"],
  },
];

const loads = [
  { name: "Single item", note: "A couch or a fridge", height: "18%" },
  { name: "¼ load", note: "A few bulky items", height: "40%" },
  { name: "½ load", note: "A small room’s worth", height: "68%" },
  { name: "Full load", note: "A garage or shed", height: "100%" },
];

export default function ServicesPage() {
  return (
    <>
      <div className="wrap page-hero">
        <span className="label">Services</span>
        <h1>If you can point at it, we can probably take it.</h1>
        <p>Here’s what we clear most often. Not sure about something? Just ask.</p>
      </div>

      <section className="block wrap tight">
        <div className="grid2">
          {services.map((service) => (
            <article className="tile" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="label limit">
          We can’t take: asbestos, chemicals, paint in bulk, gas bottles or medical waste.
        </p>
      </section>

      <section className="block wrap">
        <div className="head">
          <span className="label">Price guide</span>
          <h2>You pay for the space you use.</h2>
          <p>
            Every job is quoted up front, based on how much of the tray it fills. Tip fees and labour
            are included.
          </p>
        </div>
        <div className="loads">
          {loads.map((load) => (
            <div className="load" key={load.name}>
              <div className="tray">
                <div className="fill" style={{ height: load.height }} />
              </div>
              <b>{load.name}</b>
              <small>{load.note}</small>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure how much you’ve got?"
        text="Send a photo with your quote request and we’ll work it out."
      />
    </>
  );
}
