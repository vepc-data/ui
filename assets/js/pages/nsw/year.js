let data_y = [['2016', 58.97637085761991, 7977.989915091834, 13529.28, 5318.14], ['2017', 95.47962934769787, 8053.854952815829, 14108.41, 5249.86], ['2018', 82.32924021442162, 7999.923163717656, 12878.66, 5524.87], ['2019', 84.84536397070015, 7964.538446156774, 13778.13, 5572.92], ['2020', 59.88640873045689, 7709.75739820507, 13716.83, 5170.56], ['2021', 72.60195663384704, 7551.968315068493, 12982.15, 4286.19], ['2022', 201.06587633132648, 7819.643649575536, 12518.02, 4196.88]]

let schema_y = [{
    "name": "Date",
    "type": "date",
    "format": "%Y"
}, {
    "name": "Price ($/MWh)",
    "type": "number"
}, {
    "name": "Demand (MW)",
    "type": "number"
}, {
    "name": "Maximum Demand (MW)",
    "type": "number"
}, {
    "name": "Minimum Demand (MW)",
    "type": "number"
}]

let fusionDataStore_y = new FusionCharts.DataStore();
let fusionTable_y = fusionDataStore_y.createDataTable(data_y, schema_y);

var chartProfileVisit_y = new FusionCharts({
      type: 'timeseries',
      renderAt: 'year',
      width: "100%",
      height: 1500,
      dataSource: {
        data: fusionTable_y,
        extensions: {
          "customRangeSelector": {
              "enabled": "1"
          },
          "standardRangeSelector": {
            "enabled": "0"
        }
      },
        chart: {
                    exportEnabled: "1",
                    exportFormats: "PNG|JPG|PDF|CSV",
                    exportShowMenuItem: "1"
                },
        yaxis: {
          format: {
            round: "0",
            defaultFormat: 0
        },
                    plottype: "smooth-line"
                },
        xaxis: {
                  binning: {
                    year:[1],
                    month: [],
                    day: [],
                    hour: [],
                    minute: []
                  }
                }
      }
    })

chartProfileVisit_y.render()
