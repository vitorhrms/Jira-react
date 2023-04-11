import Grafic from "../Grafico/Grafic";


function TimesheetsGrafic(props) {
    const year = 2023;
    const month = parseInt(props.selected);
    const numDays = new Date(year, month + 1, 0).getDate();

    const GraficDataPoints = [];
    
    for (let i = 1; i <= numDays; i++){
        GraficDataPoints.push({label: `${i}`, value: 0});
    }
    
    
    for (const timesheet of props.timesheets) {
        const timesheetDay = timesheet.date.getDate();
        GraficDataPoints[timesheetDay].value += timesheet.time;
    }

    return (
        <Grafic dataPoints={GraficDataPoints} />
    )
};

export default TimesheetsGrafic;