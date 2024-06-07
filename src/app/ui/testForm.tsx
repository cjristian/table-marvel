'use client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/ui/componentes/form"
import { useForm } from "react-hook-form"
import { Input } from "@/app/ui/componentes/input"
import { Button } from "@/app/ui/componentes/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { HeroSchema } from "@/lib/HeroSchema"
import { oswald } from "./fonts/marvel"
import { FormHeroProps } from "../../types/formProps";

export function FormHero({ onSubmit, objetoEncontrado }: FormHeroProps) {
    const form = useForm<z.infer<typeof HeroSchema>>({
        resolver: zodResolver(HeroSchema),
        defaultValues: {
            nameLabel: "",
            genderLabel: "",
            citizenshipLabel: "",
            skillsLabel: "",
            occupationLabel: "",
            memberOfLabel: "",
            creatorLabel: "",
        },
    })
    return (
        <Form  {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-3 justify-center items-center ">
                <div className="">
                    <FormField
                        control={form.control}
                        name="nameLabel"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={`text-white text-2xl ${oswald.className}`}>NOMBRE</FormLabel>
                                <FormControl>
                                    <Input defaultValue={objetoEncontrado ? objetoEncontrado.nameLabel : ""} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="genderLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>GÉNERO</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.genderLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="citizenshipLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>CIUDADANÍA</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.citizenshipLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="skillsLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>SUPERPODER</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.skillsLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="occupationLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>OCUAPACIÓN</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.occupationLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="memberOfLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>MIEMBRO DE</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.memberOfLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="creatorLabel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-white text-2xl ${oswald.className}`}>CREADOR</FormLabel>
                            <FormControl>
                                <Input defaultValue={objetoEncontrado ? objetoEncontrado.creatorLabel : ""} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="self-end">
                    <Button className={`${oswald.className} w-full text-2xl bg-red-700 hover:bg-red-500`} type="submit">Guardar</Button>
                </div>
            </form>
        </Form>
    )
}