'use client'

import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export function Header() {
  const navItems = ['Shop', 'Team', 'About', 'Contact']

  return (
    <header className="header fixed left-0 right-0 top-0 z-50 h-20 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-zinc-200">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="font-sans text-2xl font-bold text-brand-purple">
          SUBURBIA
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-lg font-mono hover:text-brand-blue transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="flex items-center gap-2 rounded-lg bg-brand-purple px-4 py-2 text-white hover:bg-brand-navy transition-colors" aria-label="Cart (1)">
          <FiShoppingCart size={20} />
          <span className="hidden md:inline">Cart (1)</span>
        </button>
      </div>
    </header>
  )
}
