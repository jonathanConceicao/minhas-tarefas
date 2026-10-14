import { FormEvent, useState } from 'react'
import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {BotaoSalvar, MainContainer, Titulo} from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../Utils/enums/tarefa'

import { cadastrar } from '../../store/reducers/tarefa'
import { Descricao } from '../../Components/Tarefa/styles'


const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    cosnt [titulo, setTitulo] = useState('')
    cosnt [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)



const cadastrarTarefa = (evento: FormEvent) => {
evento.preventDefault()

    dispatch(cadastrar({
        titulo,
        prioridade,
        Descricao,
        status: enums.Status.PENDENTE
    }))
    navigate('/')
}



    return(
        <MainContainer>
            <Titulo>Nova tarefa</Titulo>
            <Form onSubmit={cadastrarTarefa}>
            <Campo value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)} 
            type="text" 
            placeholder="titulo" 
            />
            <Campo value={descricao} 
            onChange={({target}) => setDescricao(target.value)} 
            as="textarea" 
            placeholder="Descriçao da tarefa" 
            />
            <Opcoes>
                <p>Prioridade</p>
                {Object.values(enums.Prioridade).map(Prioridade) => (
                    <Opcao key={prioridade}>
                    <input
                    value={prioridade} 
                    name="prioridade"  
                    type="radio" 
                    onChange={evento => setPrioridade(evento.target.value as enums.Prioridade)}
                    id={prioridade}
                    defaultChecked={prioridade === enums.Prioridade.NORMAL}
                    /> {' '}
                    <label htmlFor={prioridade}>{prioridade}</label>
                    </Opcao>
                )}
            </Opcoes>
            <BotaoSalvar type='submit'>Cadrastar</BotaoSalvar>
        </Form>

    </MainContainer>
    )
}





export default Formulario