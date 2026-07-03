import { useNavigate } from "react-router-dom";
import HeroHistory from "./Componetes/HeroHistory";
import historyEvents from "./HistoryData/Historydata";
import "./History.css";

export default function History() {
  const navigate = useNavigate();
  return (
    <main className="history-page" aria-label="Historia de la Campaña Libertadora">
      <div className="back-button-container">
        <button
          className="back-button"
          onClick={() =>
            navigate("/", {
              state: { direction: -1 },
            })
          }
        >
          ←
        </button>
      </div>
      <HeroHistory events={historyEvents} />
    </main>
  );
}
