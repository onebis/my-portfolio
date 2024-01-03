import { Spacer } from '@nextui-org/react'
import { About } from '@/app/_components/About'
import { Blog } from '@/app/_components/Blog'
import { Contact } from '@/app/_components/Contact'
import { Footer } from '@/app/_components/Footer'
import { Header } from '@/app/_components/Header'
import { Products } from '@/app/_components/Products'
import { Works } from '@/app/_components/Works'

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-5xl px-5'>
      <Header />
      <Spacer y={20} />
      <About />
      <Spacer y={20} />
      <Works />
      <Spacer y={20} />
      <Products />
      <Spacer y={20} />
      <Blog />
      <Spacer y={20} />
      <Contact />
      <Spacer y={20} />
      <Footer />
    </main>
  )
}
