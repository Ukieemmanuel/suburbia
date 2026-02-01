'use client'

import { FaStar } from 'react-icons/fa6'

type Product = {
  id: string
  name: string
  price: string
  image: string
  color: string
}

type Props = {
  product: Product
}

export function SkateboardProduct({ product }: Props) {
  return (
    <div className="group relative mx-auto w-full rounded-lg border border-zinc-200 p-6 transition-all hover:border-brand-purple hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-lg font-bold text-brand-purple">{product.price}</span>
        <span className="inline-flex items-center gap-1 font-mono text-sm">
          <FaStar className="text-yellow-400" /> 4.8
        </span>
      </div>
      
      <div className="mb-4 h-48 overflow-hidden rounded-md bg-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-zinc-300 mb-2">{product.color.charAt(0)}</div>
          <p className="text-zinc-500 font-mono">{product.color}</p>
        </div>
      </div>

      <h3 className="mb-3 text-center font-sans text-lg font-bold text-zinc-800">
        {product.name}
      </h3>

      <button className="w-full rounded-lg bg-brand-purple py-2 font-mono font-bold text-white transition-colors hover:bg-brand-navy">
        Add to Cart
      </button>
    </div>
  )
}
