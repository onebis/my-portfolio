import { Footer } from '@/app/_components/Footer'
import { Header } from '@/app/_components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mx-auto flex min-h-screen max-w-5xl flex-col gap-y-16 px-5'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
