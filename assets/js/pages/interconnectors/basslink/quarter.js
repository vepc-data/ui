let schema_q = [{
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

let fusionDataStore_q = new FusionCharts.DataStore();
let fusionTable_q = fusionDataStore_q.createDataTable(data_q, schema_q);

var chartProfileVisit_q = new FusionCharts({
  type: 'timeseries',
  renderAt: 'quarter-g',
  id: "quarter-graph",
  width: "100%",
  height: 1500,
  dataSource: {
    data: fusionTable_q,
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
                month: [3],
                day: [],
                hour: [],
                minute: []
              }
            }
  }
})

chartProfileVisit_q.render()

document.getElementById('btnradio1q').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["quarter-graph"].getYAxis();
yAxisInfo.plottype = "smooth-line"
FusionCharts.items["quarter-graph"].setYAxis(yAxisInfo);
});

document.getElementById('btnradio2q').addEventListener('click', () => {
let yAxisInfo = FusionCharts.items["quarter-graph"].getYAxis();
yAxisInfo.plottype = "column"
FusionCharts.items["quarter-graph"].setYAxis(yAxisInfo);
});
