import { About } from '@/app/_components/About'
import { Blog } from '@/app/_components/Blog'
import { Contact } from '@/app/_components/Contact'
import { Footer } from '@/app/_components/Footer'
import { Header } from '@/app/_components/Header'
import { Products } from '@/app/_components/Products'
import { Works } from '@/app/_components/Works'

export default function Home() {
  return (
    <main className='mx-auto flex min-h-screen max-w-5xl flex-col gap-y-16 px-5'>
      <Header />
      <About />
      <Works />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
