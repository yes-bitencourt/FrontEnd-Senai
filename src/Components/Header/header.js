 import '../../App.css'
 import Logo from '../../assets/logo.png'
 import { Link } from 'react-router-dom' 
 
 export default function Header(){

    function loggout(){
        localStorage.removeItem('usuario-login')
    }
    
    return(
        <div className="aside">
        <img src={Logo} alt="Logo senai"></img>
        <nav className="menu">
            <ul>
                <li><Link className="a" to="/painel" >Painel</Link></li>
                <li><Link className="a" to="/listarturmas">Ordem de Serviço</Link></li>
                <li><Link className="a" to="/cadastrarRelatorio">Solicitar suporte</Link></li>
                <li><Link className="a" to="/historico" >Historico de serviço</Link></li>
                <li><Link className="a" to="/perfil">Perfil</Link></li>
                <li><Link className="a" to="/cadastrarColaborador" >Cadastrar Colaborador</Link></li>
                <li class="sair"><Link onClick={loggout} className="a" to="/">Sair</Link></li>
            </ul>
        </nav>
    </div>
    )
}