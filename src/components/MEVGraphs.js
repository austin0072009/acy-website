import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
  AreaChart,
  Area,
  Label,
} from "recharts";
import axios from "axios";
import moment from "moment";
import Gradient from "javascript-color-gradient";
import { isMobile } from "react-device-detect";
import CountUp from "react-countup";

const colorGradient = new Gradient();

const color1 = "#ffffff";
const color2 = "#999999";

colorGradient.setGradient(color1, color2);

const colors = [
  "#FFE46D",
  "#FFBD17",
  "#FF8A25",
  "#FE5431",
  "#E22246",
  "#AF0429",
  "#ad4134",
  "#d3847d",
  "#a0b864",
  "#c4d49e",
  "#3f7bb7",
  "#7eb2e0",
  "#4fa896",
  "#81e6d6",
];

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-brown-100 p-4 rounded-md">
        <p className="label">{label}</p>
        <p>{`$ ${(parseFloat(payload[0].value) / 1000000).toFixed(2)}M`}</p>
      </div>
    );
  }
  return null;
}

function toLineItems(raw) {
  let cols = raw.cols;
  let rows = raw.rows;
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
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 10) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12;
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
      <path d={`M${sx},${sy}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={5}
        fontSize="0.8em"
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
  let processed = rows.map((item, index) => {
    return {
      [cols[0].display_name]: item[0] || 0,
      [cols[1].display_name]: item[1],
      fill: colors[index],
    };
  });

  return processed;
}

function CustomLabel(props) {
  const { cx, cy } = props.viewBox;
  let percent = `${(props.Percentage * 100).toFixed(2)}%`;
  let longLabel = props.label.indexOf("+") !== -1;
  return (
    <>
      <text
        x={cx}
        y={cy - (longLabel ? 15 : 5)}
        fill={props.color}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontFamily="Roboto">
          {props.label.indexOf("+") !== -1
            ? props.label.slice(0, props.label.indexOf("+"))
            : props.label}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + (longLabel ? 3 : 5)}
        fill={props.color}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontFamily="Roboto">
          {props.label.indexOf("+") !== -1
            ? props.label.slice(props.label.indexOf("+"))
            : ""}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + (longLabel ? 25 : 20)}
        fill={props.color}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontFamily="Roboto">{percent}</tspan>
      </text>
    </>
  );
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
  let [totalExtractedMEV, setTotalExtractedMEV] = useState(0);
  let [loadedTotalExtractedMEV, setLoadedTotalExtractedMEV] = useState(null);

  const onMEVByTypePieEnter = (_, index) => {
    setExtractedMEVByTypeIndex(index);
  };

  const onMEVByProtocolPieEnter = (_, index) => {
    setExtractedMEVByProtocolIndex(index);
  };

  useEffect(() => {
    axios
      .get(
        "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/32"
      )
      .then((data) => {
        setLoadedTotalExtractedMEV(true);
        setTotalExtractedMEV(data.data.data.rows[0][0]);
      })
      .catch((e) => {
        console.log(`An error occured: ${e}`);
      });

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
    <div className=" mb-20">
      <div className="px-0 flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-full md:w-2/5 justify-between">
          <div className=" p-2 sm:p-5 md:p-8 mb-5 md:mr-5 rounded-md">
            <p className="text-xl lg:text-2xl text-white my-0">
              Total extracted MEV
            </p>
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold"
              style={{ color: "#cf6335" }}
            >
              $
              {(loadedTotalExtractedMEV && (
                <CountUp
                  end={totalExtractedMEV && totalExtractedMEV / 1000000}
                  decimals={3}
                  duration={2.75}
                />
              )) ||
                0}{" "}
              M
            </h1>
          </div>
          <div className=" p-2 sm:p-3 md:p-8 mb-5 md:mr-5 h-2/5 rounded-md">
            <p className="text-xl lg:text-2xl text-white my-0 p-3">
              MEV by Protocol
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart width="100%" height="100%">
                <Legend align="left" wrapperStyle={{ bottom: "0vw" }} />

                <Pie
                  onMouseEnter={onMEVByProtocolPieEnter}
                  data={extractedMEVByProtocol}
                  dataKey="Percentage"
                  nameKey="label"
                  innerRadius={isMobile ? "60%" : 90}
                  outerRadius={isMobile ? "75%" : 120}
                  fill="#8884d8"
                >
                  <Label
                    content={
                      extractedMEVByProtocol && (
                        <CustomLabel
                          label={
                            extractedMEVByProtocol[extractedMEVByProtocolIndex]
                              .label
                          }
                          Percentage={
                            extractedMEVByProtocol[extractedMEVByProtocolIndex]
                              .Percentage
                          }
                          color={colors[extractedMEVByProtocolIndex]}
                        ></CustomLabel>
                      )
                    }
                  ></Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className=" p-2 sm:p-3 md:p-8 mb-5 md:mr-5 mb-5 h-2/5  rounded-md">
            <p className="text-xl lg:text-2xl text-white my-0 p-3">
              MEV by types
            </p>
            <ResponsiveContainer
              width="100%"
              height={350}
              className="mb-10 md:mb-0"
            >
              <PieChart width="100%" height="100%">
                <Legend align="left" wrapperStyle={{ bottom: "0vw" }} />
                <Pie
                  onMouseEnter={onMEVByTypePieEnter}
                  data={extractedMEVByType}
                  dataKey="Percentage"
                  nameKey="label"
                  innerRadius={isMobile ? "60%" : 90}
                  outerRadius={isMobile ? "75%" : 120}
                  cx="50%"
                  cy="50%"
                  fill="#fff"
                >
                  <Label
                    content={
                      extractedMEVByType && (
                        <CustomLabel
                          label={
                            extractedMEVByType[extractedMEVByTypeIndex].label
                          }
                          Percentage={
                            extractedMEVByType[extractedMEVByTypeIndex]
                              .Percentage
                          }
                          color={colors[extractedMEVByTypeIndex]}
                        ></CustomLabel>
                      )
                    }
                  ></Label>
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="flex flex-col w-full md:w-3/5 justify-between"
          style={{ minHeight: "400px" }}
        >
          <div className=" p-5 mb-5 h-1/2 rounded-md">
            <p className="text-2xl text-white my-1">
              Culmulative extracted MEV ($)
            </p>

            <ResponsiveContainer
              width="100%"
              height="100%"
              minHeight="500px"
              className="mb-10 md:mb-0"
            >
              <AreaChart
                width="100%"
                height="100%"
                data={cumulativeExtractedMEV}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFE46D" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF8A25" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey={cumulativeExtractedMEVXAxisName} />
                <YAxis
                  tickFormatter={(tick) => {
                    return `${parseInt(tick / 1000000)} M`;
                  }}
                />
                <Tooltip content={renderTooltip} />
                <Area
                  type="monotone"
                  dataKey={cumulativeExtractedMEVYAxisName}
                  stroke="white"
                  strokeWidth={0.2}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className=" p-5 mb-5 h-1/2 rounded-md">
            <p className="text-2xl text-white my-1">Daily extracted MEV ($)</p>
            <ResponsiveContainer
              width="100%"
              height="100%"
              minHeight="500px"
              className="mb-10 md:mb-0"
            >
              <AreaChart
                width="100%"
                height="100%"
                data={dailyExtractedMEV}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFE46D" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF8A25" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey={dailyExtractedMEVXAxisName} />
                <YAxis
                  tickFormatter={(tick) => {
                    return `${parseInt(tick / 1000000)} M`;
                  }}
                />
                <Tooltip content={renderTooltip} />
                <Area
                  type="monotone"
                  dataKey={dailyExtractedMEVYAxisName}
                  stroke="white"
                  strokeWidth={0.2}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <small className="text-white">
        <i>
          <a className="text-gray" href="https://explore.flashbots.net/">
            explore.flashbots.net/
          </a>
        </i>
      </small>
    </div>
  );
};

export default MEVGraphs;
