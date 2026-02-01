import { Hero } from '@/slices/Hero'
import { ProductGrid } from '@/slices/ProductGrid'
import { TeamGrid } from '@/slices/TeamGrid'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <ProductGrid />
      <TeamGrid />
      <Footer />
    </>
  )
}
