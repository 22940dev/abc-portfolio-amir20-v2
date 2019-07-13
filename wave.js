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
  points = 10;

const wave = vis.append("path").attr("class", "wave");
const shape = d3.line().curve(d3.curveBasis);

let w,
  h,
  path = [],
  mousePosition = [100, 700],
  pathHeight;

function init() {
  w = window.innerWidth;
  h = window.innerHeight;
  vis
    .attr("width", w)
    .attr("height", h)
    .select("rect")
    .attr("width", w)
    .attr("height", h);
  const newPath = [];
  newPath.push([-100, h]);
  for (var i = 0; i < points; i++) {
    newPath.push([(w / points) * i, path[i + 1] || h / 4]);
  }
  newPath.push([w + 100, h]);
  pathHeight = h / 2;
  path = newPath;
}

window.addEventListener("mousemove", function(e) {
  mousePosition = [Math.min(e.clientX, 600), e.clientY];
});

d3.select(window).on("resize", init);

function step(elapsed) {
  pathHeight +=
    (h / 2 - (mousePosition[1] / 2 + mousePosition[0] / 2) - pathHeight) / 10;

  for (var i = 1; i < points + 1; i++) {
    const sinSeed = elapsed / 6 + (i + (i % 10)) * 100;
    path[i][1] =
      Math.sin(sinSeed / 100) * Math.sin(sinSeed / 200) * pathHeight + h / 1.1;
  }

  wave.attr("d", shape(path));
}

init();
d3.timer(step);
