import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'Opens',
    data: [
      { x: 'Dec 2021', y: 9 },
      { x: 'Feb 2022', y: 5320 },
      { x: 'Mar 2022', y: 6055 },
      { x: 'Jun 2022', y: 2258 },
      { x: 'Sep 2022', y: 139214 },
      { x: 'Dec 2022', y: 4317392 },
      { x: 'Jan 2023', y: 6591940 },
      { x: 'Feb 2023', y: 4139128 },
      { x: 'Mar 2023', y: 5886110 },
      { x: 'Jun 2023', y: 1890931 },
      { x: 'Sep 2023', y: 2275627 },
      { x: 'Dec 2023', y: 2467156 },
      { x: 'Mar 2024', y: 408231 },
      { x: 'Jun 2024', y: 1094980 },
      { x: 'Sep 2024', y: 601952 }
    ]
  },
  {
    id: 'Captures',
    data: [
      { x: 'Dec 2021', y: 2 },
      { x: 'Mar 2022', y: 165 },
      { x: 'Jun 2022', y: 269 },
      { x: 'Sep 2022', y: 10359 },
      { x: 'Dec 2022', y: 922725 },
      { x: 'Jan 2023', y: 1183196 },
      { x: 'Mar 2023', y: 675892 },
      { x: 'Jun 2023', y: 71650 },
      { x: 'Sep 2023', y: 7350 },
      { x: 'Dec 2023', y: 6110 },
      { x: 'Mar 2024', y: 8077 },
      { x: 'Jun 2024', y: 6908 },
      { x: 'Sep 2024', y: 855 }
    ]
  },
  {
    id: 'Saves',
    data: [
      { x: 'Dec 2021', y: 0 },
      { x: 'Mar 2022', y: 19 },
      { x: 'Jun 2022', y: 50 },
      { x: 'Sep 2022', y: 1622 },
      { x: 'Dec 2022', y: 24679 },
      { x: 'Jan 2023', y: 31792 },
      { x: 'Feb 2023', y: 26676 },
      { x: 'Mar 2023', y: 31771 },
      { x: 'Jun 2023', y: 12188 },
      { x: 'Sep 2023', y: 1424 },
      { x: 'Dec 2023', y: 1227 },
      { x: 'Mar 2024', y: 2098 },
      { x: 'Jun 2024', y: 1244 },
      { x: 'Sep 2024', y: 1179 }
    ]
  },
  {
    id: 'Shares',
    data: [
      { x: 'Dec 2021', y: 0 },
      { x: 'Mar 2022', y: 14 },
      { x: 'Jun 2022', y: 20 },
      { x: 'Sep 2022', y: 3298 },
      { x: 'Dec 2022', y: 19874 },
      { x: 'Feb 2023', y: 13995 },
      { x: 'Mar 2023', y: 15719 },
      { x: 'Jun 2023', y: 7326 },
      { x: 'Sep 2023', y: 975 },
      { x: 'Dec 2023', y: 1146 },
      { x: 'Mar 2024', y: 1476 },
      { x: 'Jun 2024', y: 1355 },
      { x: 'Sep 2024', y: 1067 }
    ]
  },
  {
    id: 'Video call uses',
    data: [
      { x: 'Dec 2021', y: 0 },
      { x: 'Mar 2022', y: 36 },
      { x: 'Jun 2022', y: 34 },
      { x: 'Sep 2022', y: 18268 },
      { x: 'Dec 2022', y: 4600 },
      { x: 'Mar 2023', y: 228901 },
      { x: 'May 2023', y: 145243 },
      { x: 'Jun 2023', y: 388746 },
      { x: 'Sep 2023', y: 378418 },
      { x: 'Dec 2023', y: 485214 },
      { x: 'Mar 2024', y: 134520 },
      { x: 'Jun 2024', y: 332895 },
      { x: 'Sep 2024', y: 109777 }
    ]
  },
  {
    id: 'Impressions',
    data: [
      { x: 'Dec 2021', y: 0 },
      { x: 'Mar 2022', y: 1360 },
      { x: 'Jun 2022', y: 479 },
      { x: 'Sep 2022', y: 127742 },
      { x: 'Dec 2022', y: 14159984 },
      { x: 'Jan 2023', y: 15070746 },
      { x: 'Mar 2023', y: 10044291 },
      { x: 'Jun 2023', y: 3179342 },
      { x: 'Sep 2023', y: 8163796 },
      { x: 'Dec 2023', y: 5720772 },
      { x: 'Mar 2024', y: 2695953 },
      { x: 'Jun 2024', y: 2521476 },
      { x: 'Sep 2024', y: 1504832 }
    ]
  }
];

const LineChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Date',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default LineChart;
