var Series = /** @class */ (function () {
    function Series(series) {
        this.series = series;
    }
    Series.prototype.darPromedioSeasons = function () {
        var totalSeries = this.series.length;
        var totalSeasons = 0;
        for (var index = 0; index < this.series.length; index++) {
            var serie = this.series[index];
            totalSeasons += serie.seasons;
        }
        var promedio = totalSeasons / totalSeries;
        return promedio;
    };
    return Series;
}());
export { Series };
