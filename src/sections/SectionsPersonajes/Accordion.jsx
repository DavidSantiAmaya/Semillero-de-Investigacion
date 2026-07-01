import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({
  personajes,
  personajeActivo,
  onSelect,
}) {
  const currentAccordion = personajes[personajeActivo].accordion;

  return (
    <section className="accordion-section">
      <div className="section-head">
        <p className="kicker">Personajes históricos</p>
        <h2>Batalla del Pantano de Vargas</h2>
      </div>

      <div className="accordion">
        {personajes.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`accordion-item ${
              personajeActivo === index ? "is-active" : ""
            }`}
            onClick={() => onSelect(index)}
            style={{ backgroundImage: `url(${item.accordion.image})` }}
          >
            <span className="accordion-shade" />

            <div className="accordion-content">
              <h3>{item.accordion.title}</h3>
              <p>{item.accordion.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentAccordion.title}
          className="detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <img src={currentAccordion.image} alt={currentAccordion.title} />

          <div className="detail-copy">
            <p className="kicker">Detalle activo</p>
            <h3>{currentAccordion.title}</h3>
            <p>{currentAccordion.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
