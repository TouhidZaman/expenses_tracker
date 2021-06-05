import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint=> dataPoint.value);
    const totalMaximu = Math.max(...dataPointValues)
    // console.log(totalMaximu)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximu}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;