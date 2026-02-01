'use client'

import React from 'react'
import Link from 'next/link'
import { FiMail, FiInstagram, FiTwitter } from 'react-icons/fi'

export function Footer() {
  const navItems = ['Shop', 'Team', 'About', 'Contact']

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-sans text-2xl font-bold text-brand-lime mb-4">SUBURBIA</h3>
            <p className="text-zinc-400">Handcrafted skateboard designs and premium quality.</p>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-brand-lime transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-zinc-400 hover:text-brand-lime transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-zinc-400 hover:text-brand-lime transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-zinc-400 hover:text-brand-lime transition-colors">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-brand-lime transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-brand-lime transition-colors">
                <FiTwitter size={24} />
              </a>
              <a href="#" aria-label="Email" className="text-zinc-400 hover:text-brand-lime transition-colors">
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-700 pt-8 text-center text-zinc-400">
          <p>&copy; 2024 Suburbia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
