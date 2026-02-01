'use client'

import { InteractiveSkateboard } from './InteractiveSkateboard'

const DEFAULT_DECK_TEXTURE = '/skateboard/Deck.webp'
const DEFAULT_WHEEL_TEXTURE = '/skateboard/SkateWheel1.png'
const DEFAULT_TRUCK_COLOR = '#6F6E6A'
const DEFAULT_BOLT_COLOR = '#6F6E6A'

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-brand-pink pt-20">
      <div className="absolute inset-0 flex items-center opacity-20 mix-blend-multiply">
        <div className="w-full text-center font-sans text-6xl font-bold text-brand-purple">
          SUBURBIA
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 font-sans text-6xl font-bold text-brand-purple">
            Premium Skateboards
          </h1>
          <p className="mb-8 max-w-2xl font-mono text-xl font-semibold text-zinc-800">
            Crafted with precision. Designed for freedom. Built to last.
          </p>
          <button className="inline-block rounded-lg bg-brand-purple px-8 py-3 font-mono font-bold text-white hover:bg-brand-navy transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      <InteractiveSkateboard
        deckTextureURL={DEFAULT_DECK_TEXTURE}
        wheelTextureURL={DEFAULT_WHEEL_TEXTURE}
        truckColor={DEFAULT_TRUCK_COLOR}
        boltColor={DEFAULT_BOLT_COLOR}
      />
    </section>
  )
}
