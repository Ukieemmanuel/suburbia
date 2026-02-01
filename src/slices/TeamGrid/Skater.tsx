'use client'

type Skater = {
  id: string
  firstName: string
  lastName: string
  role: string
  image: string
}

type Props = {
  skater: Skater
  index: number
}

const colors = [
  'text-brand-blue',
  'text-brand-lime',
  'text-brand-orange',
  'text-brand-pink',
  'text-brand-purple',
]

export function Skater({ skater, index }: Props) {
  const bgColor = colors[index % colors.length]

  return (
    <div className="group relative flex flex-col items-center gap-4">
      <div className="relative w-full overflow-hidden rounded-lg bg-zinc-800">
        <div className="aspect-square bg-gradient-to-b from-zinc-700 to-zinc-900 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
          <div className="text-center">
            <div className="text-6xl font-bold text-zinc-500 mb-2">{skater.firstName.charAt(0)}</div>
            <p className="text-zinc-400 font-mono">{skater.role}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-sans text-2xl font-bold">
            <span className="block">{skater.firstName}</span>
            <span className="block">{skater.lastName}</span>
          </h3>
        </div>
      </div>
      <button className="rounded-lg border-2 border-brand-lime bg-transparent px-4 py-2 font-mono font-bold text-brand-lime transition-colors hover:bg-brand-lime hover:text-brand-navy">
        Learn More
      </button>
    </div>
  )
}
