let data_y = [['2016', 47.42889041609745, 5082.839740721767, 9280.31, 3078.47], ['2017', 92.2183731460236, 4956.381038527397, 8709.83, 2940.02], ['2018', 90.45804813337139, 4950.441209665144, 9126.38, 3208.86], ['2019', 109.35234109417809, 4914.144395738204, 9369.85, 3037.21], ['2020', 51.886950795859896, 4764.915507741348, 9607.66, 2258.67], ['2021', 44.91371976512557, 4733.616755232116, 8285.13, 2123.24], ['2022', 154.4458622371409, 4963.033181791716, 8406.29, 2082.75]]

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

