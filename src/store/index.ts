import { configureStore } from '@reduxjs/toolkit'

import TarefasReducer from './reducers/tarefa'

import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: TarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
