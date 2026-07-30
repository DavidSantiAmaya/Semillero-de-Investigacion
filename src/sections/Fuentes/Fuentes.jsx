import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToContent } from "../../utils/contentNavigation";
import { CATEGORIES } from "../../data/fuentesData";
import styles from "./Fuentes.module.css";

const ICONS = {
  home: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 11 12 4l8 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 9.5V20h13V9.5" strokeLinejoin="round" />
      <path d="M9.5 20v-6h5v6" strokeLinejoin="round" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20c0.9-4 3.6-6.2 7.2-6.2S18.3 16 19.2 20" strokeLinecap="round" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 4h11a2 2 0 0 1 2 2v11a2.5 2.5 0 0 1-2.5 2.5H8" strokeLinejoin="round" />
      <path d="M6 4a2 2 0 0 0-2 2v12a2.5 2.5 0 0 0 2.5 2.5H17" strokeLinejoin="round" />
      <path d="M9 9h7M9 12.5h7" strokeLinecap="round" />
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
