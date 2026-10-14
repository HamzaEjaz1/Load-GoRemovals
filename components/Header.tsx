"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Ute } from "./Truck";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how", label: "How it works" },
  { href: "/areas", label: "Areas & FAQ" },
  { href: "/quote", label: "Free quote" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="Load & Go Removals home">
          <Ute />
          <span className="caps name">
            Load &amp; Go
            <br />
            Removals
          </span>
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav id="nav" className={open ? "open" : undefined}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
