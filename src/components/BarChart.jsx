import { ResponsiveBar } from '@nivo/bar';

// Sample data
const data = [
    { ageGroup: '<13', percentage: 1 },
    { ageGroup: '13-17', percentage: 20 },
    { ageGroup: '18-24', percentage: 46 },
    { ageGroup: '25-34', percentage: 20 },
    { ageGroup: '35-44', percentage: 9 },
    { ageGroup: '45-54', percentage: 2 },
    { ageGroup: '55-64', percentage: 1 },
    { ageGroup: '65+', percentage: 1 }
];

const BarChart = () => {
    return (
        <ResponsiveBar
            data={data}
            keys={['percentage']}
            indexBy="ageGroup"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#800020']} 
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#cc7722',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'percentage'
                    },
                    id: 'dots'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    ['darker', 1.6]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Age Group',
                legendPosition: 'middle',
                legendOffset: 32,
                tickTextColor: '#FFFFFF', // Color for axis ticks
                legendTextColor: '#FFFFFF', // Color for axis legend
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Percentage',
                legendPosition: 'middle',
                legendOffset: -40,
                tickTextColor: '#FFFFFF', // Color for axis ticks
                legendTextColor: '#FFFFFF', // Color for axis legend
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.8,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => `${e.id}: ${e.formattedValue} in age group: ${e.indexValue}`}
        />
    );
}

export default BarChart;
