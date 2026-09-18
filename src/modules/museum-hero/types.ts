export type HeroCta = { label: string; href: string };

export type HeroData = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
};

export const heroData: HeroData = {
  eyebrow: 'Museo',
  title: 'MAAC',
  lead: 'Nace con el nombre de “Museo Arqueológico, Etnográfico y de Arte Moderno Latinoamericano”',
  primaryCta: { label: 'Contacto', href: '#contacto' },
  secondaryCta: { label: 'Museo', href: '#museo' },
};
