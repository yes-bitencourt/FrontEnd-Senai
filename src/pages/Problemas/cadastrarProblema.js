import { Component, useState, useEffect } from 'react';

import Header from '../../Components/Header/header';

import axios from 'axios';


export default function CadastrarAluno(){
    const[nomeAluno, setNomeAluno] = useState('')
    const[re, setRe] = useState('')
    const[foto, setFoto] = useState('')
    const[dataNascimento, setDataNascimento] = useState('')
    const[telefone, setTelefone] = useState('')
    const[email, setEmail] = useState('')
    const[idSala, setIdSala] = useState('')
    const[anoLetivo, setAnoLetivo] = useState('')
const[statusAluno, setStatusAluno] = useState('')
    const[descricao, setDescricao] = useState('')
    const[endereco, setEndereco] = useState('')
    const[mensageSucess, setMensageSucess] = useState('')
    const[salas, setSalas] = useState([])

    function postAlunos(event){
        event.preventDefault();

        axios.post("http://localhost:8080/chamado/novo", {
            code : "0",
            Name : nomeAluno,
            status : idSala,
            shortDescription: anoLetivo,
            description : descricao
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if(resposta.status === 200){
                setMensageSucess('Problema cadastrado com sucesso')
                console.log('Problema cadastrado com sucesso!');
            }
            else{
                setMensageSucess('Erro de cadastro');
            }
        })

        .catch((erro) => console.log(erro))
    }

    function buscarSalas(){
        axios.get('http://localhost:5000/api/sala',{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if(resposta.status === 200){
                setSalas(resposta.data)
                console.log('Listando Salas')
            }
        })

        .catch((erro) => console.log(erro))
    }

    useEffect(buscarSalas, [])
    
    return(
        
        <body className="body-aluno">
            
        <Header />
            <div className="container">
            <h2>Cadastrar problema</h2>
            <form onSubmit={postAlunos} >
                        <div className="sec-input-1">
                            <div className="sec-superior">
                                <input type="text" className="nome_completo" name="nomeAluno" value={nomeAluno}  onChange={(event) => setNomeAluno(event.target.value)} placeholder="Titulo" required />
                            </div>
                        </div>

                        <div className="sec-input-3">
                            <select className="p" name="idSala" value={idSala} onChange={(event) => setIdSala(event.target.value)} required>
                                       <option Disabled value="3">----Defina a prioridade----</option>
                                       <option value="0">Baixa</option>
                                       <option value="1">Media</option>
                                       <option value="2">Alta</option>
                                   </select>
                            <input className="p" type="ano" onChange={(event) => setAnoLetivo(event.target.value)} name="anoLetivo" value={anoLetivo} id="" placeholder="Qual sala ou local?" required />
                        </div>
                
                        <div className="sec-input-2">
                            <input className="text-area" type="text" value={descricao} name="descricao" id="" onChange={(event) => setDescricao(event.target.value)} placeholder="Qual o problema?" required />
                        </div>
    
                    
                        
                        
                        {/* <div className="file-input">
                                <input type="file" onChange={(event) => setFoto(event.target.value)} name="foto" value={foto} id="foto" accept=".jpg,.png"  />
                                <label className="label-input" for="foto"><img id="img" /></label>
                                <p>Selecionar imagem(EXTRA)</p>
                            </div> */}
            

                        <p className="msgSucess">{mensageSucess}</p>

                    <button type="submit">Cadastrar</button>
            </form>
            
        
        </div>
</body>

    )
}