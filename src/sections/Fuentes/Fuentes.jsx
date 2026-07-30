import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToContent } from "../../utils/contentNavigation";
import { CATEGORIES } from "../../data/fuentesData";
import styles from "./Fuentes.module.css";

const ICONS = {
  book: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 5.2c2.2-.9 4.6-.9 7 0v13.6c-2.4-.9-4.8-.9-7 0V5.2Z" strokeLinejoin="round" />
      <path d="M20 5.2c-2.2-.9-4.6-.9-7 0v13.6c2.4-.9 4.8-.9 7 0V5.2Z" strokeLinejoin="round" />
    </svg>
  ),
  archive: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.5" y="4" width="17" height="4.2" strokeLinejoin="round" />
      <path d="M4.5 8.2v10.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V8.2" />
      <path d="M10 12h4" strokeLinecap="round" />
    </svg>
  ),
  seal: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="3.5" width="16" height="13" strokeLinejoin="round" />
      <path d="M7 7h10M7 10h10M7 13h6" strokeLinecap="round" />
      <circle cx="16.5" cy="17.5" r="3" />
      <path d="M15 20.2 15.3 22.5 16.5 21.4 17.7 22.5 18 20.2" strokeLinejoin="round" />
    </svg>
  ),
  article: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.5" y="4.5" width="17" height="15" strokeLinejoin="round" />
      <path d="M7 8.5h10M7 11.5h10M7 14.5h6" strokeLinecap="round" />
    </svg>
  ),
  museum: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 9 12 3.5 21 9" strokeLinejoin="round" />
      <path d="M4.5 9v10M8.5 9v10M12 9v10M15.5 9v10M19.5 9v10" strokeLinecap="round" />
      <path d="M3 19h18" strokeLinecap="round" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.5" y="5" width="17" height="11" rx="1" strokeLinejoin="round" />
      <path d="M9 20h6M12 16v4" strokeLinecap="round" />
    </svg>
  ),
  credits: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M19 5 8.5 15.5 5 19l3.5-3.5L19 5Z" strokeLinejoin="round" />
      <path d="M13 8 16 11" strokeLinecap="round" />
    </svg>
  ),
};

export default function Fuentes() {
  const navigate = useNavigate();

  const volver = useCallback(() => {
    navigateToContent(navigate, { to: "/", direction: -1 });
  }, [navigate]);

  const irACategoria = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={styles.page}>
      <button
        type="button"
        className={styles.backButton}
        onClick={volver}
        aria-label="Volver al inicio"
      >
        ←
      </button>

      <header className={styles.header}>
        <span className={styles.eyebrow}>Semillero de Investigación</span>
        <h1 className={styles.title}>Fuentes y Documentación</h1>
        <p className={styles.subtitle}>
          Bibliografía, archivos y recursos consultados para la elaboración
          de este proyecto.
        </p>
      </header>

      <div className={styles.layout}>
        {/* div en vez de <nav>: index.css trae una regla global "nav { position:
            fixed; inset:0 0 auto 0; ... }" (para otro componente) que rompía
            este índice si se usaba la etiqueta semántica. */}
        <div className={styles.index} role="navigation" aria-label="Índice de categorías">
          <ol className={styles.indexList}>
            {CATEGORIES.map((cat, i) => (
              <li key={cat.id}>
                <button
                  type="button"
                  className={styles.indexButton}
                  onClick={() => irACategoria(cat.id)}
                >
                  <span className={styles.indexIcon} aria-hidden="true">
                    {ICONS[cat.icon]}
                  </span>
                  <span className={styles.indexLabel}>{cat.label}</span>
                  <span className={styles.indexNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* div en vez de <main>: index.css trae "main { width:100dvw; ... }"
            (global) que forzaba esta columna al ancho completo del viewport
            e ignoraba la cuadrícula, causando la superposición reportada. */}
        <div className={styles.documents} role="main">
          {CATEGORIES.map((cat, i) => (
            <section key={cat.id} id={cat.id} className={styles.category}>
              <div className={styles.categoryHeading}>
                <span className={styles.categoryIcon} aria-hidden="true">
                  {ICONS[cat.icon]}
                </span>
                <h2 className={styles.categoryTitle}>{cat.label}</h2>
                <span className={styles.categoryTag}>
                  {String(i + 1).padStart(2, "0")} / {String(CATEGORIES.length).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.rule} aria-hidden="true" />

              {cat.items.map((item, j) => (
                <article key={j} className={styles.sheet}>
                  <span className={styles.sheetType}>{item.type}</span>
                  <h3 className={styles.sheetTitle}>{item.title}</h3>

                  <dl className={styles.sheetMeta}>
                    <div className={styles.sheetMetaItem}>
                      <dt>Autor</dt>
                      <dd>{item.author}</dd>
                    </div>
                    <div className={styles.sheetMetaItem}>
                      <dt>Año</dt>
                      <dd>{item.year}</dd>
                    </div>
                  </dl>

                  <p className={styles.sheetDescriptionLabel}>Descripción</p>
                  <p className={styles.sheetDescription}>{item.description}</p>

                  <a
                    className={styles.sheetLink}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar fuente ↗
                  </a>

                  {j < cat.items.length - 1 && (
                    <div className={styles.sheetDivider} aria-hidden="true" />
                  )}
                </article>
              ))}
            </section>
          ))}

          <footer className={styles.footnote}>
            Semillero de Investigación — Fuentes y Documentación · {CATEGORIES.length} categorías
          </footer>
        </div>
      </div>
    </div>
  );
}
