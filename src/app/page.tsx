'use client'
import { oswald } from '@/app/ui/fonts/marvel'
import { DataTable } from './ui/DataTable'
import { columns } from './ui/columns'
import { useHeroes } from '@/hooks/useHeroes'

export default function Home() {
  const heroes = useHeroes()
  return (
    <main className='flex min-h-screen flex-col items-center bg-black justify-between p-24'>
      <h1
        className={`${oswald.className} flex text-7xl bg-red-600 text-white `}
      >
        MARVEL
        <span
          className={`${oswald.className} text-7xl bg-black border-white border-y-4  text-white `}
        >
          STUDIOS
        </span>
      </h1>
      <DataTable columns={columns} data={heroes} />
    </main>
  )
}
