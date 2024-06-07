"use client"
import { z } from "zod"
import { Plans } from "@/lib/typesHero"
import { HeroSchema } from "@/lib/HeroSchema"
import { FormHero } from "./testForm"

export function CreateHeroForm() {

    function onSubmitCreate(values: z.infer<typeof HeroSchema>) {
        const storedHeroesString = localStorage.getItem('heroes');
        let storedHeroes: { objetosHerores: Plans[] } = { objetosHerores: [] };
        if (storedHeroesString) {
            storedHeroes = JSON.parse(storedHeroesString);
        }

        storedHeroes.objetosHerores.unshift(values);
        const updatedHeroesString = JSON.stringify(storedHeroes);
        localStorage.setItem('heroes', updatedHeroesString);
    }

    return (
        <FormHero onSubmit={onSubmitCreate} objetoEncontrado={null}/>
    )
}