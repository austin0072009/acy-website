import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import moment from "moment";
import logomini from "../assets/logomini.png";

function toObjectItems(raw) {
  let cols = raw.cols;
  let rows = raw.rows;
  let processed = rows.map((item) => ({
    [cols[0].display_name]: moment(item[0]).format("MMM Do YY"),
    [cols[1].display_name]: item[1],
  }));

  console.log(processed);
  return processed;
}

function renderTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    console.log(payload[0]);
    return (
      <div className="custom-tooltip bg-brown-400 text-brown-100 p-4 rounded-md">
        <p className="label">{label}</p>
        <p>{`${(parseFloat(payload[0].value) / 1000000).toFixed(2)}M`}</p>
      </div>
    );
  }
  return null;
}

const MEVGraphs = () => {
  let [cumulativeExtractedMEV, setCumulativeExtractedMEV] = useState();
  let [cumulativeExtractedMEVXAxisName, setCumulativeExtractedMEVXAxisName] =
    useState();
  let [cumulativeExtractedMEVYAxisName, setCumulativeExtractedMEVYAxisName] =
    useState();

  useEffect(() => {
    axios
      .get(
        "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/30"
      )
      .then((data) => {
        console.log(data);
        let axesLabels = data.data.data.cols;

        setCumulativeExtractedMEVXAxisName(axesLabels[0].display_name);
        setCumulativeExtractedMEVYAxisName(axesLabels[1].display_name);

        setCumulativeExtractedMEV(toObjectItems(data.data.data));
      })
      .catch((e) => {
        console.log(`An error occured: ${e}`);
      });
  }, []);

  return (
    <div className="px-5">
      <LineChart width={900} height={400} data={cumulativeExtractedMEV}>
        <XAxis dataKey={cumulativeExtractedMEVXAxisName} />
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
          dataKey={cumulativeExtractedMEVYAxisName}
        />
      </LineChart>
    </div>
  );
};

export default MEVGraphs;
