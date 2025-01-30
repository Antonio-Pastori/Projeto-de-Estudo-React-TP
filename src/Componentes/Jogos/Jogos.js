import './Jogos.css'

function Jogo(props) {
    return(
        
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>

        
    )
}

export default Jogo