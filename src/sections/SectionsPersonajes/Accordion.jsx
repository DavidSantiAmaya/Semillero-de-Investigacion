export default function Accordion({ personajes, personajeActivo, onSelect }) {
  return (
    <section className="accordion-section">
      <div className="section-head">
        <p className="kicker">Personajes históricos</p>
        <h2>Batalla del Pantano de Vargas</h2>
      </div>

      <div className="accordion-container">
        <div className="accordion">
          {personajes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`accordion-item ${
                personajeActivo === index ? "is-active" : ""
              }`}
              onClick={() => onSelect(index)}
              style={{
                backgroundImage: `url(${item.accordion.image})`,
              }}
            >
              <span className="accordion-shade" />

              <div className="accordion-content">
                <h3>{item.accordion.title}</h3>
                <p>{item.accordion.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}