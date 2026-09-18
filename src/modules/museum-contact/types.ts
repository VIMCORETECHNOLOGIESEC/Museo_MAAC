export type ContactInfo = {
  address: string[];
  phone: string;
  email: string;
  hours: { days: string; hours: string }[];
  social: { label: string; href: string }[];
};

export type ContactData = {
  eyebrow: string;
  title: string;
  lead: string;
  info: ContactInfo;
};

export type FooterLink = { label: string; href: string };
export type FooterData = {
  copyright: string;
  links: FooterLink[];
  legal: string;
};

export const contactData: ContactData = {
  eyebrow: "Contacto · Guayaquil, Ecuador",
  title: "Visítanos o escríbenos",
  lead: "Exposiciones, visitas guiadas, prensa y colaboraciones.",
  info: {
    address: [
      "Av. Malecón Simón Bolívar y Calle Loja",
      "junto al barrio Las Peñas, frente al río Guayas",
      "Guayaquil, Ecuador",
    ],
    phone: "(04) 230 9400",
    email: "maac@cultura.gob.ec",
    hours: [
      { days: "Lun – Vie", hours: "08h30 — 16h30" },
      { days: "Sáb – Dom", hours: "09h00 — 17h00" },
      { days: "Entrada", hours: "Gratuita" },
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/maacguayaquil/" },
      { label: "Facebook", href: "https://www.facebook.com/MAACGuayaquil/" },
      { label: "X", href: "#" },
    ],
  },
};

export const footerData: FooterData = {
  copyright: "© MAAC — Museo Antropológico y de Arte Contemporáneo",
  links: [
    { label: "Exposiciones", href: "#" },
    { label: "Historia", href: "#" },
    { label: "Contacto", href: "#contact" },
  ],
  legal: "Todos los derechos reservados.",
};
