"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Products", href: "/product", id: "products" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="nav-shell">
      <button
        className={`mobile-menu-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span /><span />
      </button>

      <nav id="main-navigation" className={open ? "is-open" : undefined} aria-label="Main navigation">
        {items.map((item) => (
          <Link
            key={item.id}
            className={active === item.id ? "active" : undefined}
            href={item.href}
            onClick={() => {
              setActive(item.id);
              setOpen(false);
            }}
            aria-current={active === item.id ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
