import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
  const genderData = [
    {
      id: "Male",
      label: "Male",
      value: 8253010, 
    },
    {
      id: "Female",
      label: "Female",
      value: 13268765,
    },
    {
      id: "Custom",
      label: "Custom",
      value: 151514, 
    },
  ];

  const colorMapping = { Male: "#4DA3FF", Female: "#FF6EC7", Custom: "#00D1B2" };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Gender</h3>
      <ResponsivePie
        data={genderData}
        colors={({ id }) => colorMapping[id]} 
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={0} 
        arcLinkLabelsTextColor="#ffdf00" 
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLinkLabelsTextOffset={10} 
        arcLinkLabelsDiagonalLength={16}
        arcLinkLabelsStraightLength={24} 
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [['darker', 2]]
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 5,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#999",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
