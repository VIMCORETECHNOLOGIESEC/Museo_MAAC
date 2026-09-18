'use client';

import { useRef } from 'react';
import { Container } from '@/shared/ui';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { heroData } from '../types';
import { HeroCTA } from './HeroCTA';
import { HeroEyebrow } from './HeroEyebrow';
import { HeroLead } from './HeroLead';
import { HeroTitle } from './HeroTitle';

export function MuseumHero() {
  const rootRef = useRef<HTMLElement>(null);
  useHeroAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/GPT.png')] bg-cover bg-center bg-no-repeat"
    >
      <Container className="relative z-10 flex flex-col items-center text-center md:mx-0">
        <HeroEyebrow eyebrow={heroData.eyebrow} className="text-white/70" />
        <HeroTitle title={heroData.title} className="mt-4 text-white" />
        <HeroLead
          lead={heroData.lead}
          className="mt-6 max-w-2xl text-white/80"
        />
        <HeroCTA
          primary={heroData.primaryCta}
          secondary={heroData.secondaryCta}
          className="mt-8"
        />
      </Container>
    </section>
  );
}
