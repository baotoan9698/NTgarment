import Link from "next/link";

const items = ["Essential Tee", "Linen Overshirt", "Tailored Trouser", "Utility Jacket", "Studio Set"];
const categories = [
  { name: "All products", count: "05" },
  { name: "T-Shirts", count: "01" },
  { name: "Shirts", count: "01" },
  { name: "Trousers", count: "01" },
  { name: "Outerwear", count: "01" },
  { name: "Sets", count: "01" },
];

export default function ProductPage() {
  return (
    <main className="catalog-page">
      <header className="site-header wrap">
        <Link className="brand" href="/" aria-label="NT Garment home">
          <span aria-hidden="true">✣</span>NT GARMENT
        </Link>
        <Link className="back-link" href="/">← Back home</Link>
      </header>
      <div className="wrap catalog-heading">
        <p className="eyebrow">Collection 01 / 2026</p>
        <h1>PRODUCTS MADE<br />FOR EVERYDAY LIFE.</h1>
      </div>
      <div className="wrap catalog-layout">
        <aside className="category-list" aria-label="Product categories">
          <p>Categories</p>
          <nav>
            {categories.map((category, index) => (
              <a className={index === 0 ? "active" : undefined} href="#product-list" key={category.name}>
                <span>{category.name}</span><small>{category.count}</small>
              </a>
            ))}
          </nav>
        </aside>

        <div className="catalog-grid" id="product-list">
          {items.map((name, index) => (
            <article key={name}>
              <div className="catalog-photo" style={{ backgroundPosition: `${index * 25}%` }} />
              <p>{String(index + 1).padStart(2, "0")}</p><h2>{name}</h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
