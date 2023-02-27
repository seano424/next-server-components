import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={clsx(inter.className, 'text-2xl text-red-400')}>
      hello world
    </main>
  )
}
