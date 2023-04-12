import GraficBar from './GraficBar';
import './Grafic.css';


const Grafic = props =>{

    return (
    <div className="grafic">
        {props.dataPoints.map((dataPoint) => (
            <GraficBar
                key={dataPoint.label}
                value={dataPoint.value}
                extraValue={dataPoint.value - 8}
                maxValue={8}
                label={dataPoint.label} 
            />
        ))}
    </div>
    );
};

export default Grafic;