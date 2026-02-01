'use client'

import { Skater } from './Skater'

const skaters = [
  {
    id: '1',
    firstName: 'Alex',
    lastName: 'Rivera',
    role: 'Pro Rider',
    image: '/team/skater-1.jpg',
  },
  {
    id: '2',
    firstName: 'Jordan',
    lastName: 'Smith',
    role: 'Designer',
    image: '/team/skater-2.jpg',
  },
  {
    id: '3',
    firstName: 'Casey',
    lastName: 'Chen',
    role: 'Content Creator',
    image: '/team/skater-3.jpg',
  },
  {
    id: '4',
    firstName: 'Morgan',
    lastName: 'Williams',
    role: 'Community Lead',
    image: '/team/skater-4.jpg',
  },
]

export function TeamGrid() {
  return (
    <section className="bg-brand-navy py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-sans text-5xl font-bold text-white">
            Our Team
          </h2>
          <p className="font-mono text-lg text-zinc-300">
            Meet the passionate riders and creators behind Suburbia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skaters.map((skater, index) => (
            <Skater key={skater.id} index={index} skater={skater} />
          ))}
        </div>
      </div>
    </section>
  )
}
