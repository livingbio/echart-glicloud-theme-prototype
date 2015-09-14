
function mountEchart(option){
    'use strict';
    var domID = option.domID;
    var theme = option.theme;
    var echartOption = option.echartOption;
    var myChart = window.echarts.init(document.getElementById(domID), theme);
    myChart.setOption(echartOption);
}