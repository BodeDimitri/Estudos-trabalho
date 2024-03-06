import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {

    const times = ['Programação','Front-end']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTimes] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //Por ter o controle da situação vai evitar o recarregamento
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencher as informações: </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o URL da sua imagem" valor ={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa required={true} label='Time' itens={times} valor = {time} oaAlterado={valor => setTimes(valor)}/>
                <Botao>
                    Criando card!
                </Botao> 
            </form>
        </section>
    )
}

export default Formulario