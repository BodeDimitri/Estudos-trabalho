import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/index'
import './Formulario.css'


const Formulario = () => {

    const times = ['Programação','Front-end']

    return (
        <section className='formulario'>
            <form>
                <h2>Preencher as informações: </h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o URL da sua imagem"/>
                <ListaSuspensa label='Time' itens={times}/>
            </form>
        </section>
    )

}

export default Formulario