import { useState } from 'react';
import Banner from './Componentes/Banner/Banner.js';
import Forms from './Componentes/Forms/Forms.js';
import Jogo from './Componentes/Jogos/Jogos.js';

function App() {

  const jogos = [
    {
      nome: 'Valorant',
      corPrimaria: '#fd4556',
      corSecundaria: '#f79fa6',
    },
    {
      nome: 'Raibow Six Siege',
      corPrimaria: '#262626',
      corSecundaria: '#5c5c5c',
    },
    {
      nome: 'Rocket League',
      corPrimaria: '#0060ff',
      corSecundaria: '#5492fb',
    },
    {
      nome: 'Counter Strike 2',
      corPrimaria: '#de9b35',
      corSecundaria: '#e4bc7f',
    }
]

  const [jogadores, setJogadores] = useState([])

  function aoNovoJogadorAdicionado(jogador) {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner/>
      <Forms jogos = {jogos.map(jogo => jogo.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      {jogos.map(jogo => <Jogo key={jogo.nome} nome={jogo.nome} corPrimaria={jogo.corPrimaria} corSecundaria={jogo.corSecundaria}></Jogo>)}
    </div>
    
  );
}

export default App;
