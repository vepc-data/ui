let data_y = [['2016', 95.88783466207498, 1065.231484042957, 1559.4, 457.8], ['2017', 98.15217514897262, 1126.1582694063927, 1717.3, 617.55], ['2018', 73.73099325266362, 1145.4928517884323, 1647.83, 756.6], ['2019', 94.02867904138128, 1098.1777049086759, 1745.35, 622.48], ['2020', 43.0192108772579, 1104.593401164997, 1689.78, 512.77], ['2021', 33.58806241229072, 1143.2829072488585, 1686.02, 671.51], ['2022', 160.9063475059681, 1182.661736517881, 1733.0, 619.99]]

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
