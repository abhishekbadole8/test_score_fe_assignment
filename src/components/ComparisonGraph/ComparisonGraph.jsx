import Style from "./ComparisonGraph.module.css"
import { LineChart, Line, XAxis, Tooltip,ReferenceLine } from "recharts";

function ComparisonGraph({ percentile=20 }) {

    const data = [
        { x_axis_percentile: 0, user_percentile: 0, amt: 72 },
        { x_axis_percentile: 20, user_percentile: 20, amt: 0 },
        { x_axis_percentile: 40, user_percentile: 15, amt: 0 },
        { x_axis_percentile: 60, user_percentile: 30, amt: 0 },
        { x_axis_percentile: 80, user_percentile: 50, amt: 0 },
        { x_axis_percentile: 100, user_percentile: 0, amt: 0 }
    ];

    return (
        <div className={Style.ComparisonGraph}>

            <div className={Style.ComparisonGraphTop}>

                <div className={Style.ComparisonGraphTopLeft}>
                    <h6>Comparison Graph</h6>
                    <p><span>You scored {percentile}% percentile</span> which is lower than the
                        average percentile 72% of all the engineers who took this assessment</p>
                </div>

                <p className={Style.textIconTag}>📈</p>
            </div>

            <div className={Style.graphContainer}>
                <LineChart
                    className={Style.chartLine}
                    width={750}
                    height={280}
                    data={data}
                    margin={{ top: 5, right: 104, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="x_axis_percentile" className={Style.xAxis} />
                    <Tooltip  />
                    <Line type="monotone" dataKey="user_percentile" stroke="#C8D6E5" />
                </LineChart>
            </div>

        </div>
    )
}

export default ComparisonGraph;