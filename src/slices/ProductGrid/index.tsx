'use client'

import { SkateboardProduct } from './SkateboardProduct'

const products = [
  {
    id: '1',
    name: 'Urban Shredder',
    price: '$89.99',
    image: '/products/board-1.jpg',
    color: 'Navy Blue',
  },
  {
    id: '2',
    name: 'Neon Vibes',
    price: '$94.99',
    image: '/products/board-2.jpg',
    color: 'Lime Green',
  },
  {
    id: '3',
    name: 'Fire Rider',
    price: '$99.99',
    image: '/products/board-3.jpg',
    color: 'Electric Orange',
  },
  {
    id: '4',
    name: 'Purple Dream',
    price: '$89.99',
    image: '/products/board-4.jpg',
    color: 'Deep Purple',
  },
]

export function ProductGrid() {
  return (
    <section className="bg-brand-gray py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-5xl font-bold text-brand-purple">
            Featured Products
          </h2>
          <p className="font-mono text-lg text-zinc-700">
            Check out our latest skateboard designs and premium collections
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <SkateboardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
