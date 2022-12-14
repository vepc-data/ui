let schema_t = [{
    "name": "Date",
    "type": "date",
    "format": "%Y-%m-%d %H:%M:%S"
}, {
    "name": "Flow (MW)",
    "type": "number"
}, {
    "name": "VIC Price ($/MWh)",
    "type": "number"
}, {
    "name": "NSW Price ($/MWh)",
    "type": "number"
}]

let fusionDataStore_t = new FusionCharts.DataStore();
let fusionTable_t = fusionDataStore_t.createDataTable(data_t, schema_t);

var chartProfileVisit_t = new FusionCharts({
  type: 'timeseries',
  renderAt: 'thirty-g',
  id: "thirty-graph",
  width: "100%",
  height: 1500,
  dataSource: {
    data: fusionTable_t,
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
                month: [],
                day: [],
                hour: [1, 6, 12],
                minute: [30]
              },
              initialinterval: {
                from: "2022-01-01 00:00:00"
              }
            }
  }
})

chartProfileVisit_t.render()

document.getElementById('btnradio1t').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["thirty-graph"].getYAxis();
yAxisInfo.plottype = "smooth-line"
FusionCharts.items["thirty-graph"].setYAxis(yAxisInfo);
});

document.getElementById('btnradio2t').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["thirty-graph"].getYAxis();
yAxisInfo.plottype = "column"
FusionCharts.items["thirty-graph"].setYAxis(yAxisInfo);
});
