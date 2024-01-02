import { About } from '@/app/_components/About'
import { Header } from '@/app/_components/Header'
import { Works } from '@/app/_components/Works'

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-5xl p-5'>
      <Header />
      <About />
      <Works />
    </main>
  )
}
