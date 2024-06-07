import { useEffect, useState } from "react";
import { Plans } from "@/lib/typesHero";
import { obtenerObjetoPorNombre } from "@/app/ui/functions/getObjectWithName";

export function useHoverHero(row: string) {
    const objetoPorNombre = obtenerObjetoPorNombre(row);
    const [objetoEncontrado, setObjetoEncontrado] = useState<Plans | null>(null);

    useEffect(() => {
        const buscarObjeto = () => {
            const objeto = objetoPorNombre;
            if (objeto !== undefined) {
                setObjetoEncontrado(objeto);
            }
        };

        buscarObjeto();
    }, [row]); 

    return objetoEncontrado;
}
