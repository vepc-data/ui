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
