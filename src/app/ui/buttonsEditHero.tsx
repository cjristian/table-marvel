
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/componentes/dialog"
import { Button } from "@/app/ui/componentes/button"
import { TableEdit } from "@/app/ui/formEditHero"
import { oswald } from "./fonts/marvel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/ui/componentes/alert-dialog"
import imagenFondo from "../../../public/fondoCancelar.jpg"
import { RowHeroe } from '@/lib/typesHero';
import { Plans } from '@/lib/typesHero';
import { useHoverHero } from '../../hooks/useHoverHero';

export function UpdateHeroe({ row }: RowHeroe) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${oswald.className} rounded-md border p-2 hover:bg-gray-700 `}><PencilIcon className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-gradient-to-r from-black from-50%  to-gray-400 to-50%">
        <DialogHeader>
          <DialogTitle className={`text-white text-5xl ${oswald.className}`}>MODIFICANDO<span className={`text-white text-7xl italic mt-6 hover:text-red-600`}> ......HÉROE</span>  </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <TableEdit row={row} />
          </div>
        </div>
      </DialogContent>
    </Dialog>

  );
}

export function DeleteHeroe({ row }: RowHeroe) {

  function borrarObjetoLocalStorage(objetoEncontradoName: string) {
    const storedHeroesString = localStorage.getItem('heroes');
    if (storedHeroesString) {
      let storedHeroes: { objetosHerores: Plans[] } = JSON.parse(storedHeroesString)
      const updatedHeroes = storedHeroes.objetosHerores.filter(hero => hero.nameLabel !== objetoEncontradoName);
      storedHeroes.objetosHerores = updatedHeroes;
      const updatedHeroesString = JSON.stringify(storedHeroes);
      localStorage.setItem('heroes', updatedHeroesString);
      location.reload()
    }
  }

  const objetoEncontrado = useHoverHero(row)
  const handleDelete = () => {
    if (objetoEncontrado) {
      borrarObjetoLocalStorage(objetoEncontrado.nameLabel);
    }
  };
  return (
    <div className="rounded-md border p-2 hover:bg-gray-700">
      <AlertDialog>
        <AlertDialogTrigger><TrashIcon className="w-5" /></AlertDialogTrigger>
        <AlertDialogContent className="bg-cover " style={{ backgroundImage: `url(${imagenFondo.src})`, backgroundSize: '100% 100%' }}>
          <AlertDialogHeader>
            <AlertDialogTitle className={`${oswald.className} text-2xl text-white`}>¿Estas seguro de borrar a {row}?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className='text-white '>
            ........
          </AlertDialogDescription>
          <AlertDialogFooter className='mt-30'>
            <AlertDialogCancel className={`${oswald.className} text-1xl bg-white hover:bg-gray-400`}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className={`${oswald.className} text-1xl bg-red-600 hover:bg-red-400`} >Continar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>

  );
}
