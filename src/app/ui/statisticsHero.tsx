import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/ui/componentes/dialog"
import { Button } from "@/app/ui/componentes/button"
import { oswald } from "./fonts/marvel"

import {useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions} from "ag-charts-community";
import { contarHeroesPorPoderes } from "./functions/functionStatistics";
import { HeroPowerCount,SeriesType } from "@/lib/typesHero";

export default function StatictsHero() {
    const [data, setData] = useState<HeroPowerCount[]>([]);
    const [options, setOptions] = useState<AgChartOptions>({});

    useEffect(() => {
        const fetchedData = contarHeroesPorPoderes();
        setData(fetchedData);

        const series = fetchedData.reduce<SeriesType[]>((acc, item) => {
            const keys = Object.keys(item).filter(key => key !== 'quarter');
            keys.forEach(key => {
                if (!acc.find(serie => serie.yKey === key)) {
                    acc.push({ type: 'bar', xKey: 'quarter', yKey: key, yName: key });
                }
            });
            return acc;
        }, []);

        setOptions({
            title: {
                text: "Características de los poderes más utilizados",
            },
            subtitle: {
                text: "Número de poderes utilizados por personas",
            },
            data: fetchedData,
            series: series,
            
        });
    }, []); 

    return (
        <div className="flex flex-col items-center py-4 sm:flex-row">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className={`${oswald.className} w-40 text-2xl hover:bg-gray-700 `}>ESTADÍSTICA</Button>
                </DialogTrigger>
                <DialogContent  className="sm:max-w-[1025px] ">
                    <DialogHeader>
                        <DialogTitle className={`${oswald.className}`}>ESTADÍSTICA DE HEROES</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <AgChartsReact  options={options} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}