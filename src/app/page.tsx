import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import AdaptiveAudio from '@/components/AdaptiveAudio';
import HeartRateSection from '@/components/FindMySection';

import ValuesSection from '@/components/ValuesSection';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Hero />
      <AdaptiveAudio />
      <FeatureSection />
      <HeartRateSection />
      <ValuesSection />
    </main>
  );
}
