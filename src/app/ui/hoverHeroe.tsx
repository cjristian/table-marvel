import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/app/ui/componentes/hover-card";
import { oswald } from "./fonts/marvel";
import { useHoverHero } from "@/hooks/useHoverHero";
import { RowHeroe } from "@/lib/typesHero";

export default function HoverHero({ row }:RowHeroe ) {
    const objetoEncontrado = useHoverHero(row);
    return (
        <HoverCard>
            <HoverCardTrigger className="hover:bg-gradient-to-r from-black">{row}</HoverCardTrigger>
            {objetoEncontrado && (
                <HoverCardContent key={objetoEncontrado.nameLabel} className={`uppercase text-xs bg-gradient-to-r from-red-500 to-gray-400 ${oswald.className}`}>
                    <p className="text-white">NOMBRE: <span className="text-black">{objetoEncontrado.nameLabel} </span></p>
                    <p className="text-white">GENERO: <span className="text-black">{objetoEncontrado.genderLabel} </span></p>
                    <p className="text-white">CIUDADANIA: <span className="text-black">{objetoEncontrado.citizenshipLabel} </span></p>
                    <p className="text-white">SUPERPODER: <span className="text-black">{objetoEncontrado.skillsLabel} </span></p>
                    <p className="text-white">OCUPACIÓN: <span className="text-black">{objetoEncontrado.occupationLabel} </span></p>
                    <p className="text-white">MIEMBRO DE: <span className="text-black">{objetoEncontrado.memberOfLabel} </span></p>
                    <p className="text-white">CREADOR: <span className="text-black">{objetoEncontrado.creatorLabel} </span></p>
                </HoverCardContent>
            )}
        </HoverCard>
    );
}
