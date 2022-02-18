import{ RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

import '../styles/repositories.scss'

export function RepositoryList(){
        const [repositories, setRepositories] =useState([]);

        useEffect(() => {//faz essa funcao eu quero executar
                fetch('https://api.github.com/users/CarloshLameira/repos')     
                .then(response => response.json())
                .then(data=>setRepositories(data))
        }, []) //Dependencias : quando eu quero executar a funcao (toda vez q repositories mudar), se deixar em branco executra uma unica vez
        
        return(
                <section className="repository-list">
                        <h1>Lista de repositrios</h1>

                        <ul>
                                {repositories.map(repository => {
                                        return <RepositoryItem key={repository.name} repository = {repository}/>
                                  })}

                                
                        </ul>

                </section>
        )
}