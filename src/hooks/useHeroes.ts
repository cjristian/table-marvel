'use client'
import { useEffect, useState } from 'react';
import initialHeroes from '../../data/wikipedia_marvel_data.json'
import { Hero } from '@/types/hero';

export function useHeroes() {    
    const [heroes, setHeroes] = useState<Hero[]>([])

    useEffect(() => {
        const heroesStored = window.localStorage.getItem('heroes')       
        if (heroesStored) {
          setHeroes(JSON.parse(heroesStored));
        } else {
         window.localStorage.setItem('heroes', JSON.stringify(initialHeroes.map((hero, index) => ({
            ...hero,
            id: Date.now() + index
        }))));
        }
      }, [])

    return heroes
}