import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts";
import axios from "axios";
import moment from "moment";
import logomini from "../assets/logomini.png";
import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "#e95d1e";
const color2 = "#ec1c24";

colorGradient.setGradient(color1, color2);

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-brown-400 text-brown-100 p-4 rounded-md">
        <p className="label">{label}</p>
        <p>{`${(parseFloat(payload[0].value) / 1000000).toFixed(2)}M`}</p>
      </div>
    );
  }
  return null;
}

function toLineItems(raw) {
  let cols = raw.cols;
  let rows = raw.rows;
  console.log(rows);
  let processed = rows.map((item) => ({
    [cols[0].display_name]: moment(item[0]).format("MMM Do YY"),
    [cols[1].display_name]: item[1],
  }));

  return processed;
}

function setLineDataWithUrl(url, setData, setDataXAxisName, setDataYAxisName) {
  axios
    .get(url)
    .then((data) => {
      let axesLabels = data.data.data.cols;

      setDataXAxisName(axesLabels[0].display_name);
      setDataYAxisName(axesLabels[1].display_name);

      setData(toLineItems(data.data.data));
    })
    .catch((e) => {
      console.log(`An error occured: ${e}`);
    });
}
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={9}
        textAnchor={textAnchor}
        fill="#fff"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};
function toPieItems(raw) {
  let cols = raw.cols;
  let rows = raw.rows;
  let colors = colorGradient.getArray();
  console.log(raw);
  let labelIndex = cols[0].display_name === "label" ? 0 : 1;
  let processed = rows.map((item, index) => {
    return {
      [cols[0].display_name]: item[0] || 0,
      [cols[1].display_name]: item[1],
      fill: "#" + Math.random().toString(16).substr(-6),
      name: item[labelIndex],
    };
  });

  return processed;
}

function setPieDataWithUrl(url, setData) {
  axios
    .get(url)
    .then((data) => {
      colorGradient.setMidpoint(data.data.data.rows.length);
      setData(toPieItems(data.data.data));
    })
    .catch((e) => {
      console.log(`An error occured: ${e}`);
    });
}

const MEVGraphs = () => {
  let [cumulativeExtractedMEV, setCumulativeExtractedMEV] = useState();
  let [cumulativeExtractedMEVXAxisName, setCumulativeExtractedMEVXAxisName] =
    useState();
  let [cumulativeExtractedMEVYAxisName, setCumulativeExtractedMEVYAxisName] =
    useState();

  let [dailyExtractedMEV, setDailyExtractedMEV] = useState();
  let [dailyExtractedMEVXAxisName, setDailyExtractedMEVXAxisName] = useState();
  let [dailyExtractedMEVYAxisName, setDailyExtractedMEVYAxisName] = useState();

  let [extractedMEVByType, setExtractedMEVByType] = useState();
  let [extractedMEVByTypeIndex, setExtractedMEVByTypeIndex] = useState(0);

  let [extractedMEVByProtocol, setExtractedMEVByProtocol] = useState();
  let [extractedMEVByProtocolIndex, setExtractedMEVByProtocolIndex] =
    useState(0);

  const onMEVByTypePieEnter = (_, index) => {
    setExtractedMEVByTypeIndex(index);
  };

  const onMEVByProtocolPieEnter = (_, index) => {
    setExtractedMEVByProtocolIndex(index);
  };

  useEffect(() => {
    setLineDataWithUrl(
      "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/30",
      setCumulativeExtractedMEV,
      setCumulativeExtractedMEVXAxisName,
      setCumulativeExtractedMEVYAxisName
    );

    setLineDataWithUrl(
      "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/71",
      setDailyExtractedMEV,
      setDailyExtractedMEVXAxisName,
      setDailyExtractedMEVYAxisName
    );

    setPieDataWithUrl(
      "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/20",
      setExtractedMEVByType
    );

    setPieDataWithUrl(
      "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/22",
      setExtractedMEVByProtocol
    );
  }, []);

  return (
    <div className="px-5 flex w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <small className="text-white">Culmulative extracted MEV</small>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width="100%" height={400} data={cumulativeExtractedMEV}>
            <XAxis dataKey={cumulativeExtractedMEVXAxisName} />
            <YAxis
              tickFormatter={(tick) => {
                return `${parseInt(tick / 1000000)} M`;
              }}
            />
            <Tooltip content={renderTooltip} />
            <Line
              type="natural"
              stroke="white"
              dot={false}
              dataKey={cumulativeExtractedMEVYAxisName}
            />
          </LineChart>
        </ResponsiveContainer>

        <small className="text-white">Daily extracted MEV</small>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width="100%" height={400} data={dailyExtractedMEV}>
            <XAxis dataKey={dailyExtractedMEVXAxisName} />
            <YAxis
              tickFormatter={(tick) => {
                return `${parseInt(tick / 1000000)} M`;
              }}
            />
            <Tooltip content={renderTooltip} />
            <Legend />
            <Line
              type="natural"
              stroke="white"
              dot={false}
              dataKey={dailyExtractedMEVYAxisName}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <small className="text-white">Daily extracted MEV</small>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width="100%" height={400}>
            <Legend />
            <Pie
              activeIndex={extractedMEVByTypeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onMEVByTypePieEnter}
              data={extractedMEVByType}
              dataKey="Percentage"
              nameKey="label"
              innerRadius={100}
              outerRadius={120}
              cx="50%"
              cy="50%"
              fill="#fff"
            />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width="100%" height={400}>
            <Legend />
            <Pie
              activeIndex={extractedMEVByProtocolIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onMEVByProtocolPieEnter}
              data={extractedMEVByProtocol}
              dataKey="Percentage"
              nameKey="label"
              innerRadius={100}
              outerRadius={120}
              fill="#8884d8"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MEVGraphs;
