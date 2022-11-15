let schema_m = [{
    "name": "Date",
    "type": "date",
    "format": "%Y-%m"
}, {
    "name": "Flow (MW)",
    "type": "number"
}, {
    "name": "TAS Price ($/MWh)",
    "type": "number"
}, {
    "name": "VIC Price ($/MWh)",
    "type": "number"
}]

let fusionDataStore_m = new FusionCharts.DataStore();
let fusionTable_m = fusionDataStore_m.createDataTable(data_m, schema_m);

var chartProfileVisit_m = new FusionCharts({
  type: 'timeseries',
  renderAt: 'month-g',
  id: "month-graph",
  width: "100%",
  height: 1500,
  dataSource: {
    data: fusionTable_m,
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
                year:[],
                month: [1],
                day: [],
                hour: [],
                minute: []
              }
            }
  }
})

chartProfileVisit_m.render()

document.getElementById('btnradio1m').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["month-graph"].getYAxis();
yAxisInfo.plottype = "smooth-line"
FusionCharts.items["month-graph"].setYAxis(yAxisInfo);
});

document.getElementById('btnradio2m').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["month-graph"].getYAxis();
yAxisInfo.plottype = "column"
FusionCharts.items["month-graph"].setYAxis(yAxisInfo);
});
