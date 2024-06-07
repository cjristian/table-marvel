import { Column } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Button } from './componentes/button'

export function DataTableHeaderSort<T>({
  column,
  name,
}: {
  column: Column<T>
  name: string
}) {
  return (
    <Button
      variant='ghost'
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      className='text-xl'
    >
      {name}
      <ArrowUpDown className='ml-2 h-4 w-4' />
    </Button>
  )
}
