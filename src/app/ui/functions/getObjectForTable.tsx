import { Plans } from "@/lib/typesHero";
export function obtenerTodosLosObjetos(): Plans[] {
    const datosGuardados = localStorage.getItem('heroes');

    if (datosGuardados) {
        try {
            const datosParseados = JSON.parse(datosGuardados);
            const datos = Array.isArray(datosParseados.objetosHerores) ? datosParseados.objetosHerores : [];
            return datos;
        } catch (error) {
            console.error("Error al parsear los datos del localStorage:", error);
        }
    }

    return [];
}
