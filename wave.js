import { select, mouse, event } from "d3-selection";
import { line, curveBasis } from "d3-shape";
import { timer } from "d3-timer";
const d3 = Object.assign(
  {},
  {
    select,
    mouse,
    event,
    line,
    curveBasis,
    timer
  }
);

const vis = d3
    .select("#vis")
    .append("svg")
    .attr("pointer-events", "all"),
  points = 10,
  mousePosition = [500, 700],
  wavesCount = 4,
  waves = [],
  paths = [],
  pathHeights = [],
  seeds = [];

const shape = d3.line().curve(d3.curveBasis);

for (let i = 0; i < wavesCount; i++) {
  waves.push(
    vis
      .append("path")
      .attr("class", "wave")
      .style("opacity", (i + 1) / wavesCount / 2)
  );
  paths.push([]);
  seeds.push(Math.random());
}

let w, h;

function init() {
  w = window.innerWidth;
  h = window.innerHeight;
  vis.attr("width", w).attr("height", h);

  for (let i = 0; i < wavesCount; i++) {
    const path = paths[i];

    path[0] = [-200 * Math.random(), h];
    for (let j = 0; j < points; j++) {
      path[j + 1] = [(w / points) * j, path[j + 1] || h / 4];
    }
    path[points + 1] = [w + Math.random() * 200, h];
    paths[i] = path;
    pathHeights[i] = h / 2;
  }
}

window.addEventListener("mousemove", function(e) {
  mousePosition[0] = Math.min(e.clientX, 200) + 250;
  mousePosition[1] = Math.min(e.clientY, 300) + 400;
});

d3.select(window).on("resize", init);

function step(elapsed) {
  for (let i = 0; i < wavesCount; i++) {
    pathHeights[i] +=
      (h / 2 -
        (mousePosition[1] / 3 + mousePosition[0] / 3 + 200) -
        pathHeights[i]) /
      10;

    update(elapsed, pathHeights[i], waves[i], paths[i], seeds[i]);
  }
}

function update(elapsed, height, wave, path, seed) {
  for (let i = 1; i < points + 1; i++) {
    const sinSeed = seed * elapsed / 6 + (i + (i % 10)) * 100 + seed * 500;
    path[i][1] =
      Math.sin(sinSeed / 100) * Math.sin(sinSeed / 200) * height + (h / 1.04 - seed * 10);
  }

  wave.attr("d", shape(path));
}

init();
d3.timer(step);
