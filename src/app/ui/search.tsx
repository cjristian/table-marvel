
import * as React from "react";
import { Input } from "@/app/ui/componentes/input";

interface SearchInput {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; 
}

export function SearchInput({ value, onChange }: SearchInput) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder=" Busca tu héroe favorito...."
        value={value}
        onChange={onChange}
        className="max-w-sm bg-gradient-to-r from-gray-400 "
      />
    </div>
  );
}
