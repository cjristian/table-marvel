import { Plans } from "@/lib/typesHero";

export function obtenerObjetoPorNombre(row:string) {
    const datosGuardados = localStorage.getItem('heroes');
    if (datosGuardados) {
        try {
            const datosParseados = JSON.parse(datosGuardados);
            const datos = Array.isArray(datosParseados.objetosHerores) ? datosParseados.objetosHerores : [];
            const objetoEncontrado = datos.find((objeto: Plans) => objeto.nameLabel === row);
            return objetoEncontrado || null;
        } catch (error) {
            console.error("Error en los datos del localStorage:", error);
        }
    }
    return null;
}