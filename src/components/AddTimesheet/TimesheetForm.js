import { useState } from 'react';
import './TimesheetForm.css';

function UpperCase(texto) {
    let resposta = texto.charAt(0).toLocaleUpperCase() + texto.slice(1)
    return resposta;
};

function TimesheetForm(props) {
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    };

    const setChangeDescription = (event) =>{
        setEnteredDescription(event.target.value);
    }

    const timeChangerHandler = event => {
        setEnteredTime(event.target.value);
    };

    const dateChangerHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const timesheetData = {
            task: UpperCase(enteredTask),
            desc: UpperCase(enteredDescription),
            time: +enteredTime,
            date: new Date(enteredDate)
        };
        props.onSaveTimesheetData(timesheetData);
        setEnteredTask('');
        setEnteredTime('');
        setEnteredDate('');
    };

    return(
    <form onSubmit={submitHandler}>
        <div className="add-timesheet__controls">
        <div className="add-timesheet__control">
                <label>Tarefa:</label>
                <input type='text' value={enteredTask} onChange={taskChangeHandler} />
            </div>
            <div className="add-timesheet__control">
                <label>Descrição:</label>
                <input type='text' value={enteredDescription} onChange={setChangeDescription} />
            </div>
            <div className="add-timesheet__control">
                <label>Tempo gasto:</label>
                <input type='number' min="0.1" step="0.1" value={enteredTime} onChange={timeChangerHandler}/>
            </div>
            <div className="add-timesheet__control">
                <label>Data:</label>
                <input type='date' min="2023-01-01" value={enteredDate} onChange={dateChangerHandler} />
            </div>
        </div>
        <div className='add-timesheet__actions'>
            <button type='submit'>Adicionar</button>
            <button type='button' onClick={props.onCancel}>Cancelar</button>
        </div>
    </form>
    );
};

export default TimesheetForm;