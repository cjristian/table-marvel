'use client'
import React, { useState, useCallback } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/app/ui/componentes/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/ui/componentes/table";
import { oswald } from "./fonts/marvel";
import { SearchInput } from "./search";
import CreateHeroe from "./createHeroes";
import StatictsHero from "./statisticsHero";
import { Hero } from '@/types/hero';

interface DataTableProps {
  data: Hero[];
  columns: ColumnDef<Hero>[];
}

export function DataTable({data, columns}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});



  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handlePreviousPage = useCallback(() => {
    if (table.getCanPreviousPage()) {
      table.previousPage();
    }
  }, [table]);

  const handleNextPage = useCallback(() => {
    if (table.getCanNextPage()) {
      table.nextPage();
    }
  }, [table]);

  return (
    <div className="w-full ">
      <div className="flex justify-between ">
        <SearchInput
          value={(table.getColumn("nameLabel")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("nameLabel")?.setFilterValue(event.target.value)}
        />
        <CreateHeroe />
        <StatictsHero />
      </div>

      <Table className="bg-gradient-to-r from-gray-500 rounded-md mt-4">
        <TableHeader className={`${oswald.className} text-xl`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-white">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="text-white">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-white">
                No se encuentran más héroes.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={handlePreviousPage} disabled={!table.getCanPreviousPage()}>
            Anterior
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextPage} disabled={!table.getCanNextPage()}>
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}
