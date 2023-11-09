import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sobre from './componentes/sobre';
import Experiencia from './componentes/experiencia';
import Formacao from './componentes/formacao';
import Hobbies from './componentes/hobbies';
import Titulo from './componentes/titulo';
import PopUp from './componentes/popUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <section>
          <Titulo titulo="SOBRE NÓS" />
          <section className='secao' id='sobrenos'>
            <PopUp />
            <Sobre imagem="./imagens/augusto.png" nome="Augusto" idade="23 anos" cep="01310-300" />
            <Sobre imagem="./imagens/beatriz.png" nome="Beatriz" idade="17 anos" cep="01001-000" />
            <Sobre imagem="./imagens/cibele.png" nome="Cibele" idade="18 anos" cep="02555-050" />
            <Sobre imagem="./imagens/eduardo.png" nome="Eduardo" idade="18 anos" cep="12949-264" />
          </section>
        </section>
      },
      {
        path: "formacao",
        element: <section>
          <Titulo titulo="FORMAÇÃO" />
          <section className='secao' id='formacao'>
            <Formacao nome="Augusto" formacao="Full Stack Designer" />
            <Formacao nome="Beatriz" formacao="Desenvolvedor Web" />
            <Formacao nome="Cibele" formacao="Web Designer" />
            <Formacao nome="Eduardo" formacao="Desenvolvedor Web" />
          </section>
        </section>
      },
      {
        path: "experiencia",
        element: <section>
          <Titulo titulo="EXPERIÊNCIA" />
          <section className='secao' id='experiencia'>
            <Experiencia nome="Augusto" resumo="Sou um Full Stack Designer, um profissional versátil e capaz de atuar em todas as etapas da criação de uma aplicação web ou móvel. Para isso, estou sempre me atualizando e aprendendo novas ferramentas e tecnologias. Tenho experiência em UX e UI design, pesquisa de usuários, wireframes, protótipos, design de interface e de interação, desenvolvimento front-end, marketing digital, entre outras competências. Meu portfólio mostra a diversidade e a qualidade dos meus projetos. Sou um profissional “coringa”, pronto para ajudar onde for preciso." />
            <Experiencia nome="Beatriz" resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac faucibus augue, ut tempor dolor. Morbi non massa non justo vehicula vulputate ut id nisl. Sed rutrum sapien at finibus malesuada. Integer lacinia feugiat nibh, id sagittis orci ultricies sit amet. Proin euismod, odio id consectetur eleifend, nibh urna convallis ipsum, sit amet fringilla ante sem et nunc." />
            <Experiencia nome="Cibele" resumo="Possuo Nível Técnico em Comunicação Visual pela Etec Albert Einsten, cursando Superior em Tecnologia de Sistemas para Internet na FIAP, e estagiando como Designer na Dynamind. Estou aprofundando meus conhecimentos na área de ux/ui design, que me desperta muito interesse." />
            <Experiencia nome="Eduardo" resumo="Sou um desenvolvedor front end que gosta de estar em constante evolução e não desisto fácil.
    Estou cursando Sistemas para Internet na Faculdade FIAP. Além de ter diversos cursos na área, como HTML, CSS, BootsTrap, JS, React, Node e Wordpress" />
          </section>
        </section>
      },
      {
        path: "hobbies",
        element: <section className='secao-escura'>
          <Titulo titulo="HOBBIES" />
          <section className='secao' id='hobbies'>
            <div className='secao-hobbies'>
              <p className='nome'>Augusto</p>
              <Hobbies className='hobbie' hobbie="Ouvir Música " />
              <Hobbies className='hobbie' hobbie="Cozinhar" />
              <Hobbies className='hobbie' hobbie="Refletir" />
              <Hobbies className='hobbie' hobbie="Aventurar" />
            </div>
            <div className='secao-hobbies'>
              <p className='nome'>Beatriz</p>
              <Hobbies className='hobbie' hobbie="hobbie 1" />
              <Hobbies className='hobbie' hobbie="hobbie 1" />
              <Hobbies className='hobbie' hobbie="hobbie 1" />
              <Hobbies className='hobbie' hobbie="hobbie 1" />
            </div>
            <div className='secao-hobbies'>
              <p className='nome'>Cibele</p>
              <Hobbies className='hobbie' hobbie="Estudar" />
              <Hobbies className='hobbie' hobbie="Escrever" />
              <Hobbies className='hobbie' hobbie="Dançar" />
              <Hobbies className='hobbie' hobbie="Tocar ukulele" />
            </div>
            <div className='secao-hobbies'>
              <p className='nome'>Eduardo</p>
              <Hobbies className='hobbie' hobbie="Programar" />
              <Hobbies className='hobbie' hobbie="Coisas Geeks" />
              <Hobbies className='hobbie' hobbie="Tecnologia" />
              <Hobbies className='hobbie' hobbie="Andar de Skate" />
            </div>
          </section>
        </section>
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

