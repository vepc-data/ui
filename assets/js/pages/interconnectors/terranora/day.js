let schema_d = [{
    "name": "Date",
    "type": "date",
    "format": "%Y-%m-%d"
}, {
    "name": "Flow (MW)",
    "type": "number"
}, {
    "name": "QLD Price ($/MWh)",
    "type": "number"
}, {
    "name": "NSW Price ($/MWh)",
    "type": "number"
}]

let fusionDataStore_d = new FusionCharts.DataStore();
let fusionTable_d = fusionDataStore_d.createDataTable(data_d, schema_d);

var chartProfileVisit_d = new FusionCharts({
      type: 'timeseries',
      renderAt: 'day-g',
      id: "day-graph",
      width: "100%",
      height: 1500,
      dataSource: {
        data: fusionTable_d,
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
                    plottype: "smooth-line",
                    referenceLine: {
                      label: "Max",
                      value: 15500
                    }
                },

        xaxis: {
                  binning: {
                    year:[],
                    month: [],
                    day: [1],
                    hour: [],
                    minute: []
                  },
                  initialinterval: {
                    from: "2022-01-01"
                  }
                }
      }
    })

chartProfileVisit_d.render()

document.getElementById('btnradio1d').addEventListener('click', () => {
  let yAxisInfo = FusionCharts.items["day-graph"].getYAxis();
   yAxisInfo.plottype = "smooth-line"
  FusionCharts.items["day-graph"].setYAxis(yAxisInfo);
});

document.getElementById('btnradio2d').addEventListener('click', () => {
  let yAxisInfo = FusionCharts.items["day-graph"].getYAxis();
  yAxisInfo.plottype = "column"
  FusionCharts.items["day-graph"].setYAxis(yAxisInfo);
});
