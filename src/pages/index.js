import React, { Component } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />     
                <Section
                    title="Aproveite na TV."
                    content="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos."
                    image="/tv.png"
                />
                
                <Section
                    title="Baixe séries e assista em qualquer lugar."
                    content="Baixe suas séries e filmes favoritos e assista offline"
                    image="/mobi.jpg"
                />
                
                <Section
                    title="Assista quando quiser."
                    content="Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso."
                    image="/tv-apple.png"
                />

                <Section
                    title="Nefflix Clone"
                    content="Glauber Gonçalves"
                    image="/eu.jpg"
                    border="10%"
                />
                
            </div>
        )
    }
}