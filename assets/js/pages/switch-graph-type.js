// let choice = "smooth-line"

// document.getElementById('switch-graph-type').addEventListener('click', () => {
//     choice = choice === 'smooth-line' ? 'column' : 'smooth-line'

//     try {
//         let yAxisInfo_Day = FusionCharts.items["day-graph"].getYAxis();
//         yAxisInfo_Day.plottype = yAxisInfo_Day.plottype === 'smooth-line' ? 'column' : 'smooth-line'
//         FusionCharts.items["day-graph"].setYAxis(yAxisInfo_Day);
//     }
//     catch(err) {

//     }
//     try {
//         let yAxisInfo_Month = FusionCharts.items["month-graph"].getYAxis();
//         yAxisInfo_Month.plottype = yAxisInfo_Month.plottype === 'smooth-line' ? 'column' : 'smooth-line'
//         FusionCharts.items["month-graph"].setYAxis(yAxisInfo_Month);
//     }
//     catch(err) {

//     }
//     try {
//         let yAxisInfo_Quarter = FusionCharts.items["quarter-graph"].getYAxis();
//         yAxisInfo_Quarter.plottype = yAxisInfo_Quarter.plottype === 'smooth-line' ? 'column' : 'smooth-line'
//         FusionCharts.items["quarter-graph"].setYAxis(yAxisInfo_Quarter);
//     }
//     catch(err) {

//     }
//     try {
//         let yAxisInfo_Thirty = FusionCharts.items["thirty-graph"].getYAxis();
//         yAxisInfo_Thirty.plottype = yAxisInfo_Thirty.plottype === 'smooth-line' ? 'column' : 'smooth-line'
//         FusionCharts.items["thirty-graph"].setYAxis(yAxisInfo_Thirty);
//     }
//     catch(err) {

//     }
//     try {
//         let yAxisInfo_Year = FusionCharts.items["year-graph"].getYAxis();
//         yAxisInfo_Year.plottype = yAxisInfo_Year.plottype === 'smooth-line' ? 'column' : 'smooth-line'
//         FusionCharts.items["year-graph"].setYAxis(yAxisInfo_Year);
//     } 
//     catch(err){

//     }
//   });