import { z } from "zod"
export const HeroSchema = z.object({
    nameLabel: z.string().min(2, { message: "Escribe el nombre de tu heroe" }),
    genderLabel: z.string().min(2, { message: "Escribe el genero de tu heroe" }),
    citizenshipLabel: z.string().min(2, { message: "Escribe la ciudadania de tu heroe" }),
    skillsLabel: z.string().min(2, { message: "Escribe las habilidades de tu heroe" }),
    occupationLabel: z.string().min(2, { message: "Escribe el trabajo de tu heroe" }),
    memberOfLabel: z.string().min(2, { message: "Escribe el grupo de tu heroe" }),
    creatorLabel: z.string().min(2, { message: "Escribe el creador de tu heroe" }),
})
