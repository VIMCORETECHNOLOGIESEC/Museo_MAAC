import type { Metadata } from 'next';

import { CollectionStore } from '@/modules/museum-store/components/CollectionStore';

export const metadata: Metadata = {
  title: 'Colecciones | MAAC',
  description: 'Productos y recuerdos inspirados en el MAAC.',
};

export default function CollectionsPage() {
  return <CollectionStore />;
}
