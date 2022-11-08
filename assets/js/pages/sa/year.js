let data_y = [['2016', 80.58971070725181, 1342.509245408318, 2758.2, 4.89], ['2017', 105.32663137290714, 1321.9818644406394, 3077.47, 546.57], ['2018', 99.89029978890791, 1296.7560384322678, 2931.79, 492.88], ['2019', 98.82092105622147, 1304.9968748097413, 3119.87, 366.76], ['2020', 43.48917537530359, 1253.8524734365512, 3097.43, 270.25], ['2021', 50.70494145528919, 1202.604674847793, 2765.98, -46.35], ['2022', 180.47105979830678, 1373.440067192249, 2572.04, 61.09]]

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
