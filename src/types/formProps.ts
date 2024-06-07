import { HeroSchema } from "@/lib/HeroSchema";
import { Plans } from "@/lib/typesHero";
import { z } from "zod";

export interface FormHeroProps {
    onSubmit: (data: z.infer<typeof HeroSchema>) => void;
    objetoEncontrado: Plans | null;
}