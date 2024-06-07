"use client"

import { z } from "zod"
import { Plans, RowHeroe } from "@/lib/typesHero"
import { HeroSchema } from "@/lib/HeroSchema";
import { useHoverHero } from "@/hooks/useHoverHero";
import { FormHero } from "./testForm"


export function TableEdit({ row }: RowHeroe) {
    function onSubmitEdit(values: z.infer<typeof HeroSchema>) {
        if (objetoEncontrado) {
            const updatedObject = {
                ...objetoEncontrado,
                nameLabel: values.nameLabel,
                genderLabel: values.genderLabel,
                citizenshipLabel: values.citizenshipLabel,
                skillsLabel: values.skillsLabel,
                occupationLabel: values.occupationLabel,
                memberOfLabel: values.memberOfLabel,
                creatorLabel: values.creatorLabel,

            };

            const storedHeroesString = localStorage.getItem('heroes');
            if (storedHeroesString) {
                let storedHeroes: { objetosHerores: Plans[] } = JSON.parse(storedHeroesString);
                const updatedHeroes = storedHeroes.objetosHerores.map(hero => {
                    if (hero.nameLabel === objetoEncontrado.nameLabel) {
                        return updatedObject;
                    }
                    return hero;
                });
                storedHeroes.objetosHerores = updatedHeroes;
                const updatedHeroesString = JSON.stringify(storedHeroes);
                localStorage.setItem('heroes', updatedHeroesString);
            }
            console.log("Objeto actualizado:", updatedObject);
            location.reload();
        }
    }
    const objetoEncontrado = useHoverHero(row)

    return (
        <FormHero onSubmit={onSubmitEdit} objetoEncontrado={objetoEncontrado}/>
    )
}