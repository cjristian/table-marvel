import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/ui/componentes/dialog"
import { Button } from "@/app/ui/componentes/button"
import { CreateHeroForm } from "@/app/ui/CreateHeroForm"
import { oswald } from "./fonts/marvel"


export default function CreateHeroe() {
    return (
        <div className="flex items-center py-4 ">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className={`${oswald.className} w-40 text-2xl hover:bg-gray-700 `}>CREAR HEROE</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] bg-gradient-to-r from-black from-50%  to-gray-400 to-50%">
                    <DialogHeader>
                        <DialogTitle className={`text-white text-3xl ${oswald.className}`} >ESCRIBE LAS CARACTERIS<span className="text-black">TICAS DE TU </span><span className={`text-white text-6xl italic mt-6 hover:text-red-600`}>HÉROE</span>  </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center gap-4">
                            <CreateHeroForm />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}