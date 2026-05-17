/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/sections/TopBar';
import { Hero } from './components/sections/Hero';
import { Enemy } from './components/sections/Enemy';
import { CarouselSection } from './components/sections/CarouselSection';
import { Mechanism } from './components/sections/Mechanism';
import { Bonuses } from './components/sections/Bonuses';
import { Pricing } from './components/sections/Pricing';
import { SocialProof } from './components/sections/SocialProof';
import { Author } from './components/sections/Author';
import { FAQ } from './components/sections/FAQ';
import { Comments } from './components/sections/Comments';
import { Guarantee } from './components/sections/Guarantee';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-primary selection:text-white">
      <TopBar />
      <Hero />
      <Enemy />
      <CarouselSection />
      <Mechanism />
      <Bonuses />
      <Pricing />
      <SocialProof />
      <Author />
      <FAQ />
      <Comments />
      <Guarantee />
      <Footer />
    </main>
  );
}
