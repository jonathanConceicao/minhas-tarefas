import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../Utils/enums/tarefa'
import { Descricao } from '../../Components/Tarefa/styles'


type TarefasState = {
    itens: Tarefa[]
}


const initialState: TarefasState = {
    itens: [
        {
        id: 1,
        descricao: 'Estudar JavaScript revendo o exercicio do madulo 7',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.COMCLUIDA,
        titulo: 'Estudar JavaScript'
        },
        {
        id: 2,
        descricao: 'Estudar material de apoio',
        prioridade: enums.Prioridade.NORMAL,
        status: enums.Status.PENDENTE,
        titulo: 'Estudar TypeScript'
        },
        {
        id: 3,
        descricao: 'Praticar a constreuçao de uma landing page',
        prioridade: enums.Prioridade.IMPORTANTE,
        status: enums.Status.PENDENTE,
        titulo: 'Estudar Booststrap'
        },
    ]
}



const tarefaSlice = createSlice({
    name: 'tarefa',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
            state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
        },
        editar:(state, action: PayloadAction<Tarefa>) => {
            const  indexDaTarefa = state.itens.findIndex(t => t.id === action.payload.id)


            if (indexDaTarefa >=0) {
                state.itens[indexDaTarefa] = action.payload
            }
        },
        cadastrar:(state, action: PayloadAction<Tarefa>) => {
            const tarefaJaExiste = state.itens.find(tarefa => tarefa.titulo.toLowerCase()  === action.payload.titulo.toLowerCase())


            if(tarefaJaExiste) {
                alert (" ja existe uma tarefa com esse nome ")
            }else{
                const ultimaTarefa = state.itens[state.itens.length - 1]


                const tarefaNova = {
                    ...action.payload,
                    id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
                }
                state.itens.push(tarefaNova)
            }

        },
        alteraStatus: (state, action: 'payloadAction'<{id: Number; finalizado: Boolean}>) => {
            const  indexDaTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )


            if (indexDaTarefa >=0) {
                state.itens[indexDaTarefa].status = action.payload.finalizado 
                ? enums.Status.COMCLUIDA  
                : enums.Status.PENDENTE
            }
        }
    }
})



export const { remover, editar, cadastrar, alteraStatus } = tarefaSlice.actions


export default tarefaSlice.reducer