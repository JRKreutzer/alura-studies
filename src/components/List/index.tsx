import React from 'react'
import style from "./List.module.scss"
import Item from './Item/index';

function List() {

    const tarefas = [
        {
            tarefa: 'React',
            tempo: '01:30:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '01:15:00'
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item, i) => (
                        <Item
                            key={i} 
                            {...item}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List