import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return(
        <div className='listasuspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa