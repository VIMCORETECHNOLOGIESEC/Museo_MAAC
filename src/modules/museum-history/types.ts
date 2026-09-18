export type HistoryEntry = {
  year: string;
  title: string;
  body: string;
};

export type HistoryData = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  entries: HistoryEntry[];
  quote?: { text: string; attribution: string };
};

export const historyData: HistoryData = {
  eyebrow: 'Museo · Guayaquil, Ecuador',
  title: 'Donde la memoria se vuelve arte',
  titleAccent: 'memoria',
  lead: 'En el corazón del Malecón 2000, cinco mil años de patrimonio prehispánico —Valdivia, Chorrera, Manteña— conversan con el arte contemporáneo de Ecuador y América Latina.',
  entries: [
    {
      year: '1920',
      title: 'Origen del museo',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      year: '1965',
      title: 'Nueva sede',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
      year: '2000',
      title: 'Renovación contemporánea',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
  ],
  quote: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    attribution: 'Lorem Ipsum',
  },
};
