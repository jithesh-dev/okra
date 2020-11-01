import React, { Component } from "react";
import CanvasJSReact from "../../../assets/js/canvasjs.react";

import "./sales-regional-national.styles.scss";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SalesRegionalNational extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      width: 600,
      height: 300,
      backgroundColor: "transparent",
      title: {
        text: "Sales in 2018 Q2",
        fontSize: 20,
      },
      axisY: {
        title: "Sales",
        includeZero: false,
      },
      data: [
        {
          type: "boxAndWhisker",
          yValueFormatString: '#,##0.# "sales"',
          dataPoints: [
            { label: "National", y: [179, 256, 300, 418, 274] },
            { label: "Regional", y: [252, 346, 409, 437, 374] },
          ],
        },
      ],
    };

    return <CanvasJSChart options={options} />;
  }
}

export default SalesRegionalNational;
