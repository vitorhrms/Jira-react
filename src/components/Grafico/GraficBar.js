import './GraficBar.css';

function GraficBar(props) {
    let barFillHeight = '0%';
    let extraValues = '0%';
    
    if (props.value > props.maxValue){
        barFillHeight = '100%';
        extraValues = Math.round((props.extraValue / props.maxValue) * 100) + '%'
    }
    else {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
        extraValues = Math.round((props.extraValue / props.maxValue) * 100) + '%';
    }



    return(
        <div className='grafic-bar'>
            {props.value > 0 ? <p>{props.value}</p> : ''}
            <div className='grafic-bar__inner'>
                {extraValues > '0%' ? <div className='grafic-bar__fillred' style={{height: extraValues}}></div> :''}
                <div className='grafic-bar__fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='grafic-bar__label'>{props.label}</div>
        </div>
    );
};

export default GraficBar;