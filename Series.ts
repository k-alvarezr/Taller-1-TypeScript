import {Serie} from './Serie.js';

export class Series {

    constructor(public series: Serie[])
    {

    }

    public darPromedioSeasons():number {
        let totalSeries: number = this.series.length;
        let totalSeasons: number = 0;
        for(let index = 0; index < this.series.length; index++){
            let serie:Serie = this.series[index];
            totalSeasons+= serie.seasons;
        }

        let promedio: number = totalSeasons / totalSeries;
        return promedio;
    }
}