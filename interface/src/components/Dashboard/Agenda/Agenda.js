import React, { useState } from 'react';
import './Agenda.css';
import Calendar from './Calendar';
import FullCalendar from './Calendar';

function Agenda() {
    const dataAtual = new Date().toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const [tarefas, setTarefas] = useState([
        { id: 1, nome: 'Consulta com oftalmo', concluida: false },
        { id: 2, nome: 'Hidroginástica', concluida: false },
        { id: 3, nome: 'Reunião com o médico', concluida: false }
    ]);

    const handleCheckboxChange = (id) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ));
    };

    return (
        <div className="box">
            <div className="reminder">
                <h3>Lembretes do dia</h3>
                <p>Data: {dataAtual}</p>  
                <br></br>
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id}>
                            <input 
                                type="checkbox" 
                                checked={tarefa.concluida} 
                                onChange={() => handleCheckboxChange(tarefa.id)}
                            />
                            <label style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                                {tarefa.nome}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="calendar">
                <FullCalendar />
            </div>
        </div>
    );
}

export default Agenda;
