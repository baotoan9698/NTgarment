import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";
import ScrollReveal from "./components/scroll-reveal";

const products = [
  { name: "Essential Tee", meta: "240 GSM Cotton", pos: "0%" },
  { name: "Linen Overshirt", meta: "Natural Blend", pos: "25%" },
  { name: "Tailored Trouser", meta: "Relaxed Cut", pos: "50%" },
  { name: "Utility Jacket", meta: "Daily Workwear", pos: "75%" },
  { name: "Studio Set", meta: "Soft Knit", pos: "100%" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1Z" /></svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.4 3.2-3 16.1c-.2 1.1-.9 1.4-1.8.9L12 16.8l-2.2 2.1c-.2.3-.5.5-1 .5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 13.4 2 12c-1-.3-1-1 .2-1.4L20 3.7c.8-.3 1.6.2 1.4-.5Z" /></svg>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <section className="gradient-shell hero" id="home">
        <header className="site-header wrap">
          <Link className="brand" href="#home" aria-label="NT Garment home">
            <span aria-hidden="true">✣</span>NT GARMENT
          </Link>
          <Navigation />
        </header>

        <div className="hero-copy wrap reveal-on-scroll">
          <h1>GARMENT DEVELOPMENT<br />AND PRODUCTION FOR<br />BRANDS BUILT TO LAST.</h1>
        </div>

        <div className="thread" />
        <div className="hero-image wrap">
          <Image src="/images/atelier-hero.png" alt="Garment designers working together in a modern atelier" width={1920} height={1015} priority />
        </div>

        <section className="services wrap" id="services">
          <p className="eyebrow reveal-on-scroll">Our services</p>
          <h2 className="reveal-on-scroll">FROM THE FIRST SKETCH TO THE FINAL STITCH, WE SHAPE IDEAS INTO GARMENTS PEOPLE WANT TO LIVE IN.</h2>
          <div className="service-list">
            <article className="reveal-on-scroll"><span>01</span><h3>Local Brand Development</h3><p>From concept to shelf, we handle every step of your local brand journey: identity design, manufacturing, and go-to-market strategy — all under one roof, at an unmatched price point in the market.</p></article>
            <article className="reveal-on-scroll"><span>02</span><h3>Wholesale </h3><p>Source direct from Vietnam factories. Skip the middleman, keep the margin.
Based in Ho Chi Minh City, we supply the latest men's & women's trends at factory-direct prices — with 2-day express shipping to Cambodia.
Hundreds of new styles. Ready to ship. Built for your profit.
Contact us for your exclusive B2B price list.</p></article>
            <article className="reveal-on-scroll"><span>03</span><h3>OEM Manufacturing</h3><p>Have a design in mind? We bring it to life. From private label to full custom production, we manufacture to your exact specifications — fabrics, cuts, branding, and packaging included. Minimum order quantities that work for small businesses and large retailers alike.</p></article>
          </div>
          <Link className="pill" href="#contact">Start a project <Arrow /></Link>
        </section>
      </section>

      <section className="clients" id="clients">
        <div className="thread" />
        <div className="wrap">
          <p className="eyebrow reveal-on-scroll">Our clients</p>
          <h2 className="reveal-on-scroll">TRUSTED BY INDEPENDENT LABELS, CREATIVE TEAMS AND GROWING BRANDS ACROSS THE REGION.</h2>
        </div>
        <div className="client-marquee" aria-label="Selected clients">
          <div className="client-track">
            <div className="client-group">
              <span>NOMA®</span><span>STUDIO 11</span><span>FORME</span><span>KIRI</span><span>COMMON</span><span>MONO</span>
            </div>
            <div className="client-group" aria-hidden="true">
              <span>NOMA®</span><span>STUDIO 11</span><span>FORME</span><span>KIRI</span><span>COMMON</span><span>MONO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="wrap">
          <p className="eyebrow reveal-on-scroll">Trending Products</p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card reveal-on-scroll" key={product.name}>
                <div className="product-photo" style={{ backgroundPosition: product.pos }} role="img" aria-label={product.name} />
                <div><h3>{product.name}</h3><p>{product.meta}</p></div>
              </article>
            ))}
          </div>
          <Link className="pill show-more" href="/product">Show more <Arrow /></Link>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap footer-statement reveal-on-scroll">
          <h2>CLOTHING SHOULD FEEL GOOD, WORK HARD AND CARRY A STORY WORTH TELLING.</h2>
          <a className="round-arrow" href="mailto:hello@ntgarment.com" aria-label="Email NT Garment">→</a>
        </div>
        <div className="wrap footer-contact reveal-on-scroll">
          <div><p>READY TO START<br />YOUR NEXT COLLECTION?</p></div>
          <a className="email" href="mailto:hello@ntgarment.com">HELLO@NTGARMENT.COM</a>
        </div>
        <div className="wrap footer-bottom">
          <span>©2026 NT Garment</span>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon /></a>
          </div>
          <span>Phnom Penh, Cambodia</span>
        </div>
      </footer>
    </main>
  );
}
