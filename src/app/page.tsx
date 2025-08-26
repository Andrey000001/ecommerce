'use client';
import React from 'react';
import Card from '@/components/Card';

const placeholderProducts = [
  {
    id: 'p-1',
    name: 'Air Max Alpha',
    price: 129.99,
    imageSrc: '/shoes/shoe-1.jpg',
    badge: { text: 'Best Seller', color: 'orange' as const },
  },
  {
    id: 'p-2',
    name: 'Pegasus Trail',
    price: 139.99,
    imageSrc: '/shoes/shoe-2.webp',
  },
  {
    id: 'p-3',
    name: 'Jordan Lift Off',
    price: 159.99,
    imageSrc: '/shoes/shoe-3.webp',
    badge: { text: 'Best Seller', color: 'orange' as const },
  },
  {
    id: 'p-4',
    name: 'Metcon Flex',
    price: 119.99,
    imageSrc: '/shoes/shoe-4.webp',
  },
];

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6">

      <section aria-labelledby="Latest-shoes" className="mt-10">
        <h2 id="latest-shoes" className="text-heading-3 font-semibold">
          Latest shoes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderProducts.map((p) => (
            <Card
              key={p.id}
              imageSrc={p.imageSrc}
              title={p.name}
              price={p.price}
              badge={p.badge}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
