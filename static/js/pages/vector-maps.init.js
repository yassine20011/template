var data = {
  "AF": 16.63,
  "AL": 11.58,
  "DZ": 158.97,
  "US": 26.67,
  "MA": 28.93,
};


!(function (a) {
  "use strict";
  function n() {}
  (n.prototype.init = function () {
    a("#world-map-markers").vectorMap({
      map: "world_mill_en",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: !1,
      regionStyle: { initial: { fill: "#d4dadd" } },
      markerStyle: {
        initial: {
          r: 9,
          fill: "#525ce5",
          "fill-opacity": 0.9,
          stroke: "#fff",
          "stroke-width": 7,
          "stroke-opacity": 0.4,
        },
        hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
      },
      backgroundColor: "transparent",
      markers: [
        { latLng: [50, -70], name: province_id[0] + " " + job_number[0] },
      ],
    }),
      a("#usa-vectormap").vectorMap({
        map: "us_merc_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },
      }),
      a("#india-vectormap").vectorMap({
        map: "in_mill_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },
      }),
      a("#australia-vectormap").vectorMap({
        map: "au_mill_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },
      }),
      a("#chicago-vectormap").vectorMap({
        map: "us-il-chicago_mill_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },
      }),
      a("#uk-vectormap").vectorMap({
        map: "uk_mill_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },
      }),
      a("#canada-vectormap").vectorMap({
        map: "ca_lcc_en",
        backgroundColor: "transparent",
        regionStyle: { initial: { fill: "#525ce5" } },

      });
      
  }),
    (a.VectorMap = new n()),
    (a.VectorMap.Constructor = n);
})(window.jQuery),
  (function () {
    "use strict";
    window.jQuery.VectorMap.init();
  })();
