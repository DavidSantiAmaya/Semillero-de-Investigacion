import { motion } from "framer-motion";

export default function DetailCard({ accordion }) {
  return (
    <section className="detail-card-wrap">
      <motion.div
        className="detail-card-static"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="detail-image">
          <img src={accordion.image} alt={accordion.title} />
        </div>
        <div className="detail-content">
          <p className="kicker">Detalle del personaje</p>
          <h3>{accordion.title}</h3>
          <p className="subtitle">{accordion.subtitle}</p>
          <p className="description">{accordion.description}</p>
        </div>
      </motion.div>
    </section>
  );
}