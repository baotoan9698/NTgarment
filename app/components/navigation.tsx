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

  return (
    <nav aria-label="Main navigation">
      {items.map((item) => (
        <Link
          key={item.id}
          className={active === item.id ? "active" : undefined}
          href={item.href}
          onClick={() => setActive(item.id)}
          aria-current={active === item.id ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
