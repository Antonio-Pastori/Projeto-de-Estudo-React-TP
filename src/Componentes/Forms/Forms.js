import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './forms.css'

function Forms(){

    function AoSalvar(evento){
        evento.preventDefault()
        console.log('oi')
    }

    const times = ['Valorant', 'Raibow Six Siege', 'Rocket League', 'Counter Strike 2']
    
    return(
        <section className='forms'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha o formulário para ser jogador dos Tubarões da Pisadinha</h2>
                <CampoTexto obrigatorio = {true} label="Nick" placeholder="Digite seu Nick"/>
                <CampoTexto obrigatorio = {true} label="Função" placeholder="Digite sua Função"/>
                <CampoTexto label="Foto" placeholder="Digite o endereço de sua Foto" type="image"/>
                <ListaSuspensa obrigatorio = {true} label='Time' itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Forms