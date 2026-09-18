'use client';

import Image from 'next/image';
import { useState } from 'react';

import { MuseumFooter } from '@/modules/museum-contact';
import { MuseumHeader } from '@/modules/museum-header';

import styles from './CollectionStore.module.css';

const categories = ['Todo', 'Accesorios', 'Papelería', 'Hogar'] as const;
type Category = (typeof categories)[number];

type Product = {
  id: number;
  name: string;
  description: string;
  category: Exclude<Category, 'Todo'>;
  price: number;
  image: string;
};

const products: readonly Product[] = [
  { id: 1, name: 'Taza MAAC', description: 'Una pieza para acompañar las conversaciones que siguen después de la visita.', category: 'Hogar', price: 16, image: '/products/01-taza-maac.png' },
  { id: 2, name: 'Camiseta MAAC', description: 'Algodón suave y una gráfica pensada para llevar el museo fuera de sus salas.', category: 'Accesorios', price: 28, image: '/products/02-camiseta-maac.png' },
  { id: 3, name: 'Bolsa MAAC', description: 'Bolsa reutilizable para libros, hallazgos cotidianos y visitas futuras.', category: 'Accesorios', price: 18, image: '/products/03-bolsa-maac.png' },
  { id: 4, name: 'Póster MAAC', description: 'Una composición de la colección para convertir cualquier pared en un punto de partida.', category: 'Hogar', price: 14, image: '/products/04-poster-maac.png' },
  { id: 5, name: 'Postal MAAC', description: 'Una postal ilustrada para enviar, guardar o enmarcar.', category: 'Papelería', price: 4, image: '/products/05-postal-maac.png' },
  { id: 6, name: 'Cuaderno MAAC', description: 'Un cuaderno para que las ideas de la visita encuentren dónde quedarse.', category: 'Papelería', price: 12, image: '/products/06-cuaderno-maac.png' },
  { id: 7, name: 'Imanes MAAC', description: 'Pequeñas piezas gráficas para llevar una parte del museo a casa.', category: 'Hogar', price: 10, image: '/products/07-imanes-maac.png' },
  { id: 8, name: 'Botella MAAC', description: 'Una botella reutilizable para acompañar recorridos largos y días activos.', category: 'Accesorios', price: 22, image: '/products/08-botella-maac.png' },
  { id: 9, name: 'Posavasos MAAC', description: 'Una serie de posavasos para que la mesa también cuente una historia.', category: 'Hogar', price: 15, image: '/products/09-posavasos-maac.png' },
  { id: 10, name: 'Caja de regalo MAAC', description: 'Una presentación especial para compartir una selección de objetos del museo.', category: 'Hogar', price: 24, image: '/products/10-caja-regalo-maac.png' },
];

export function CollectionStore() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todo');
  const [flippedProduct, setFlippedProduct] = useState<number | null>(null);
  const visibleProducts = products.filter(
    (product) => activeCategory === 'Todo' || product.category === activeCategory,
  );

  function toggleProduct(id: number) {
    setFlippedProduct((current) => (current === id ? null : id));
  }

  return (
    <>
      <main className={styles.page}>
        <MuseumHeader />
        <div className={styles.catalogShell}>
          <aside className={styles.categoryNav}>
            <nav aria-label="Filtrar productos">
              {categories.map((category, index) => (
                <button key={category} type="button" className={activeCategory === category ? styles.activeCategory : ''} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{category}
                </button>
              ))}
            </nav>
          </aside>

          <section className={styles.catalog} aria-labelledby="catalog-title">
            <h1 id="catalog-title" className={styles.srOnly}>Productos MAAC</h1>
            <div className={styles.mobileFilters} aria-label="Filtrar productos">
              {categories.map((category) => (
                <button key={category} type="button" className={activeCategory === category ? styles.activeCategory : ''} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>
              ))}
            </div>
            <div className={styles.grid}>
              {visibleProducts.map((product) => (
                <article key={product.id} className={styles.card}>
                  <button type="button" className={`${styles.flipCard} ${flippedProduct === product.id ? styles.isFlipped : ''}`} onClick={() => toggleProduct(product.id)} aria-pressed={flippedProduct === product.id} aria-label={`${flippedProduct === product.id ? 'Ocultar' : 'Ver'} información de ${product.name}`}>
                    <span className={`${styles.cardFace} ${styles.cardFront}`}>
                      <Image src={product.image} alt="" width={900} height={900} className={styles.productImage} />
                      <span className={styles.flipHint}>Ver ficha</span>
                    </span>
                    <span className={`${styles.cardFace} ${styles.cardBack}`}>
                      <span className={styles.productCategory}>{product.category}</span>
                      <span className={styles.productName}>{product.name}</span>
                      <span className={styles.productDescription}>{product.description}</span>
                      <span className={styles.price}>$ {product.price},00</span>
                      <span className={styles.flipHint}>Volver al producto</span>
                    </span>
                  </button>
                </article>
              ))}
            </div>
            {visibleProducts.length === 0 && <p className={styles.emptyState}>No encontramos productos.</p>}
          </section>
        </div>
      </main>
      <div id="footer"><MuseumFooter /></div>
    </>
  );
}
