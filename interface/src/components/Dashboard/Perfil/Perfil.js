import './Perfil.css'
import idoso from '../../../assets/img/idoso.jpg'

function Perfil(){
    return(
        <div className="box">
            <div className="box-img">
                <img src={idoso}></img>
            </div>
            <div className="box-text">
                <h2>Maria da Silva</h2>
                <br></br>
                <h3>Idade: 65</h3>
                <h3>Sexo: Feminino</h3>
                <h3>Tipo Sanguíneo: A+</h3>
                <h3>Estado Civil: Casada</h3>
            </div>
        </div>
    )
}

export default Perfil