let data_y = [['2016', 67.43807523518139, 6271.827855380996, 9157.95, 4798.56], ['2017', 102.34144394073441, 6229.88280955099, 9476.57, 4668.03], ['2018', 74.8149941113965, 6240.198113584475, 9923.99, 4585.02], ['2019', 71.75577586234779, 6213.886527397261, 10052.26, 4049.65], ['2020', 41.22503898878644, 6104.995813410747, 9838.26, 3712.06], ['2021', 87.11963030308219, 6098.5795777207, 9476.75, 3434.09], ['2022', 227.06680092438836, 6080.221477880125, 10118.85, 3310.59]]

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
  renderAt: 'year-g',
  id: "year-graph",
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

document.getElementById('btnradio1y').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["year-graph"].getYAxis();
yAxisInfo.plottype = "smooth-line"
FusionCharts.items["year-graph"].setYAxis(yAxisInfo);
});

document.getElementById('btnradio2y').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["year-graph"].getYAxis();
yAxisInfo.plottype = "column"
FusionCharts.items["year-graph"].setYAxis(yAxisInfo);
});
