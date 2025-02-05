var options = {
    chart: {
      height: 380,
      type: "bar",
      stacked: !0,
      toolbar: { show: !1 },
      zoom: { enabled: !0 },
    },
    plotOptions: {
      bar: { horizontal: !1, columnWidth: "20%", endingShape: "rounded" },
    },
    dataLabels: { enabled: !0 },
    series: [
      { name: "Earning", data: [9, 7, 7, 6, 7, 5, 7, 6, 7, 4, 6, 7] },
      { name: "Paid", data: [1, 6, 4, 5, 6, 4, 3, 5, 4, 6, 4, 3] },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#525ce5", "#edf1f5"],
    legend: { show: !1 },
    fill: { opacity: 1 },
  },
  chart = new ApexCharts(
    document.querySelector("#stacked-column-chart"),
    options
  );
chart.render();
var options1 = {
  chart: { type: "area", height: 80, sparkline: { enabled: !0 } },
  series: [{ data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10] }],
  stroke: { curve: "smooth", width: 2 },
  colors: ["#525ce5"],
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(document.querySelector("#stastics-chart"), options1).render();
options = {
  fill: { colors: ["#525ce5"] },
  series: [70],
  chart: {
    type: "radialBar",
    width: 65,
    height: 65,
    sparkline: { enabled: !0 },
  },
  dataLabels: { enabled: !1 },
  plotOptions: {
    radialBar: {
      hollow: { margin: 0, size: "60%" },
      track: { margin: 0 },
      dataLabels: { show: !1 },
    },
  },
};
(chart = new ApexCharts(
  document.querySelector("#list-chart-1"),
  options
)).render();
options = {
  fill: { colors: ["#23c58f"] },
  series: [80],
  chart: {
    type: "radialBar",
    width: 65,
    height: 65,
    sparkline: { enabled: !0 },
  },
  dataLabels: { enabled: !1 },
  plotOptions: {
    radialBar: {
      hollow: { margin: 0, size: "60%" },
      track: { margin: 0 },
      dataLabels: { show: !1 },
    },
  },
};
(chart = new ApexCharts(
  document.querySelector("#list-chart-2"),
  options
)).render(),
  $("#world-map-markers").vectorMap({
    map: "world_mill_en",
    normalizeFunction: "polynomial",
    hoverOpacity: 0.7,
    hoverColor: !1,
    regionStyle: { initial: { fill: "#dde3ec" } },
    markerStyle: {
      initial: {
        r: 9,
        fill: "#525CE9",
        "fill-opacity": 0.9,
        stroke: "#fff",
        "stroke-width": 7,
        "stroke-opacity": 0.4,
      },
      hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
    },
    backgroundColor: "transparent",
    markers: [
      { latLng: [41.9, 12.45], name: "USA" },
      { latLng: [12.05, -61.75], name: "Russia" },
      { latLng: [1.3, 103.8], name: "Australia" },
    ],
  });
