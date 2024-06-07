'use client'
import { ColumnDef } from '@tanstack/react-table'
import HoverHero from '@/app/ui/hoverHeroe'
import { UpdateHeroe, DeleteHeroe } from './buttonsEditHero'
import { Hero } from '@/types/hero'
import { DataTableHeaderSort } from './DataTableHeaderSort'

export const columns: ColumnDef<Hero>[] = [
  {
    accessorKey: 'nameLabel',
    header: ({ column }) => {
      return <DataTableHeaderSort column={column} name='NOMBRE' />
    },
    cell: ({ row }) => (
      <div className='lowercase'>
        <HoverHero row={row.getValue('nameLabel')} />
      </div>
    ),
  },
  {
    accessorKey: 'genderLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='GENERO' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('genderLabel')}</div>
    ),
  },
  {
    accessorKey: 'citizenshipLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='CIUDADANIA' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('citizenshipLabel')}</div>
    ),
  },
  {
    accessorKey: 'skillsLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='SKILLS' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('skillsLabel')}</div>
    ),
  },
  {
    accessorKey: 'occupationLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='OCUPACION' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('occupationLabel')}</div>
    ),
  },
  {
    accessorKey: 'memberOfLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='MIEMBRO DE' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('memberOfLabel')}</div>
    ),
  },
  {
    accessorKey: 'creatorLabel',
    header: ({ column }) => {
        return <DataTableHeaderSort column={column} name='CREADOR' />
      },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('creatorLabel')}</div>
    ),
  },
  {
    accessorKey: 'options',
    header: 'OPCIONES',
    cell: ({ row }) => (
      <div className='flex justify-start gap-3'>
        <UpdateHeroe row={row.getValue('nameLabel')} />
        <DeleteHeroe row={row.getValue('nameLabel')} />
      </div>
    ),
  },
]
