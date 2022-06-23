import React, { useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

export const SpinnChart = () => {
  const [spine, setSpine] = useState({
    series: [
      {
        name: "Weekly",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Over all project",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <div className="chartLeft  p-1 rounded text-white my-2" id="lineGraph">
      <h5 className="ps-2 overflow-hidden position-absolute">
        Live Learning Activity
      </h5>
      <div id="spineChart overflow-hidden">
        <Chart
          options={spine.options}
          series={spine.series}
          type="area"
          id="spinningChart"
          className=" text-white"
        />
      </div>
    </div>
  );
};

export const DonutChart = () => {
  const [donut, setDonut] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="d-block m-2">
      <div className="chartRight bg-white mb-3 rounded  p-2">
        <div id="donutChart">
          <Chart
            options={donut.options}
            series={donut.series}
            type="donut"
            width={380}
          />
        </div>
      </div>
      <div className="chartRight bg-white rounded  p-2 h-100 w-100"></div>
    </div>
  );
};

export const ProgressChart = () => {
  var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    series: [83],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 1,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Your GPA"],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  return (
    <div className="gradeProgress">
      <div className="position-absolute overflow-hidden pt-2 ps-4"><h5 className=" overflow-hidden ">Total Score</h5></div>
      <div id="chart" className="h-100 w-100 overflow hidden"></div>
    </div>
  );
};


export const CourseProgressTabel = () => {
  return (
    
    <div className="card-body px-0 pb-2">
    <div className="table-responsive">
      <table className="table align-items-center mb-0">
        <thead>
          <tr>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Courses
            </th>
            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Groups
            </th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Projects
            </th>
            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Completion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex px-2 py-1">
                <div>
                  <img src="img/bootstrap.png" className="avatar avatar-sm me-3" alt="xd" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-sm"> Bootstrap 5 Version</h6>
                </div>
              </div>
            </td>
            <td>
              <div className="avatar-group mt-2">
                <a href="" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Ryan Tompson">
                  <img src="img/p1.jpg" alt="team1" />
                </a>
                <a href="" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Romina Hadid">
                  <img src="img/p2.jpg" alt="team2" />
                </a>
                <a href="" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Alexander Smith">
                  <img src="img/p3.jpg" alt="team3" />
                </a>
                <a href="" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Jessica Doe">
                  <img src="img/p4.jpg" alt="team4" />
                </a>
              </div>
            </td>
            <td className="align-middle text-center text-sm">
              <span className="text-xs font-weight-bold">
                122
              </span>
            </td>
            <td className="align-middle">
              <div className="progress-wrapper w-75 mx-auto">
                <div className="progress-info">
                  <div className="progress-percentage">
                    <span className="text-xs font-weight-bold">25%</span>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="25"></div>
                </div>
              </div>
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};
