let data_q = []

let schema_q = [{
    "name": "Date",
    "type": "date",
    "format": "%Y-%-m-%-d %H:%M"
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

let fusionDataStore_q = new FusionCharts.DataStore();
let fusionTable_q = fusionDataStore_q.createDataTable(data_q, schema_q);

var chartProfileVisit_q = new FusionCharts({
      type: 'timeseries',
      renderAt: 'quarter',
      width: "100%",
      height: 600,
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
                        round: "0"
                    },
                    plottype: "smooth-line"
                },
        xaxis: {
                  binning: {
                    year:[1],
                    month: [3, 6],
                    day: [],
                    hour: [],
                    minute: []
                  }
                }
      }
    })

chartProfileVisit_q.render()
