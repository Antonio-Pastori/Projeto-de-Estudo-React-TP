import { useState } from 'react'
import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './forms.css'

function Forms(props){

    function AoSalvar(evento){
        evento.preventDefault()
        props.aoJogadorCadastrado({nome, cargo, imagem, jogo})
    }

    
    
    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [jogo,setJogo] = useState('')
    

    return(
        <section className='forms'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha o formulário para ser jogador dos Tubarões da Pisadinha</h2>
                <CampoTexto value={nome} aoAlterado={valor=>setNome(valor)} obrigatorio = {true} label="Nick" placeholder="Digite seu Nick"/>
                <CampoTexto value={cargo} aoAlterado={valor=>setCargo(valor)} obrigatorio = {true} label="Função" placeholder="Digite sua Função"/>
                <CampoTexto value={imagem} aoAlterado={valor=>setImagem(valor)} label="Foto" placeholder="Digite o endereço de sua Foto" type="image"/>
                <ListaSuspensa value={jogo} aoAlterado={valor=>setJogo(valor)} obrigatorio = {true} label='Jogo' itens={props.jogos}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Forms