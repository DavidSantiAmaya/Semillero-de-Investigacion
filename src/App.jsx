import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import NavBar from './sections/NavBar';
import Titulo1 from './sections/Titulo1';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import Titulo2 from './sections/Titulo2';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';
import Final from './sections/Final';
import Outro from './sections/Outro';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Titulo1 />
      <Jason />
      <Titulo2 />
      <Lucia />

      {/*<NavBar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />

      <PostCard />
      <Final />
      <Outro /> */}

    </main>
  )
}

export default App