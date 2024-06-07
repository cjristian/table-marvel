import { obtenerTodosLosObjetos } from "@/app/ui/functions/getObjectForTable";
import { HeroPowerCount } from "@/lib/typesHero";


export function poderesHeroes(): string[] {
    const datos = obtenerTodosLosObjetos();
    const habilidadesUnicas: string[] = [];

    datos.forEach(objeto => {
        const habilidad = objeto.skillsLabel;
        if (habilidad && !habilidadesUnicas.includes(habilidad)) {
            habilidadesUnicas.push(habilidad);
        }
    });

    return habilidadesUnicas;
}


export function contarHeroesPorPoderes(): HeroPowerCount[] {
    const datos = obtenerTodosLosObjetos(); 
    const habilidadesUnicas = poderesHeroes();
    let conteoPorPoder: { [key: string]: number } = {};

    habilidadesUnicas.forEach(habilidad => {
        conteoPorPoder[habilidad] = 0;
    });

    datos.forEach(objeto => {
        const habilidad = objeto.skillsLabel;
        if (habilidad && habilidadesUnicas.includes(habilidad)) {
            conteoPorPoder[habilidad]++;
        }
    });

    return Object.keys(conteoPorPoder).map(habilidad => {
        let obj: HeroPowerCount = { quarter: habilidad };
        obj[habilidad] = conteoPorPoder[habilidad];
        return obj;
    });
}
