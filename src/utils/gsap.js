import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// El registro se hace una sola vez para toda la aplicacion. Todos los
// componentes deben importar GSAP desde este modulo, no desde "gsap".
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
