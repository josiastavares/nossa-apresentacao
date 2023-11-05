import './App.css';
import Experiencia from './componentes/experiencia';
import Formacao from './componentes/formacao';
import Hobbies from './componentes/hobbies';
import Menu from './componentes/menu';
import Sobre from './componentes/sobre';
import Titulo from './componentes/titulo';


function App() {
  return (
    <div className="App">
      <Menu />
      <Titulo titulo="SOBRE NÓS"/>
      <section className='secao' id='sobrenos'>
        <Sobre imagem="./imagens/augusto.png" nome="Augusto" idade="22 anos" cep="12949-264" />
        <Sobre imagem="./imagens/beatriz.png" nome="Beatriz" idade="17 anos" cep="12949-264" />
        <Sobre imagem="./imagens/cibele.png" nome="Cibele" idade="18 anos" cep="12949-264" />
        <Sobre imagem="./imagens/eduardo.png" nome="Eduardo" idade="18 anos" cep="12949-264" />
      </section>
      <Titulo titulo="FORMAÇÃO"/>
      <section className='secao' id='formacao'>
        <Formacao nome="Augusto" formacao="Desenvolvedor Web" />
        <Formacao nome="Beatriz" formacao="Desenvolvedor Web" />
        <Formacao nome="Cibele" formacao="Desenvolvedor Web" />
        <Formacao nome="Eduardo" formacao="Desenvolvedor Web" />
      </section>
      <Titulo titulo="EXPERIÊNCIA"/>
      <section className='secao' id='experiencia'>
        <Experiencia nome="Augusto" resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac faucibus augue, ut tempor dolor. Morbi non massa non justo vehicula vulputate ut id nisl. Sed rutrum sapien at finibus malesuada. Integer lacinia feugiat nibh, id sagittis orci ultricies sit amet. Proin euismod, odio id consectetur eleifend, nibh urna convallis ipsum, sit amet fringilla ante sem et nunc." />
        <Experiencia nome="Beatriz" resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac faucibus augue, ut tempor dolor. Morbi non massa non justo vehicula vulputate ut id nisl. Sed rutrum sapien at finibus malesuada. Integer lacinia feugiat nibh, id sagittis orci ultricies sit amet. Proin euismod, odio id consectetur eleifend, nibh urna convallis ipsum, sit amet fringilla ante sem et nunc." />
        <Experiencia nome="Cibele" resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac faucibus augue, ut tempor dolor. Morbi non massa non justo vehicula vulputate ut id nisl. Sed rutrum sapien at finibus malesuada. Integer lacinia feugiat nibh, id sagittis orci ultricies sit amet. Proin euismod, odio id consectetur eleifend, nibh urna convallis ipsum, sit amet fringilla ante sem et nunc." />
        <Experiencia nome="Eduardo" resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac faucibus augue, ut tempor dolor. Morbi non massa non justo vehicula vulputate ut id nisl. Sed rutrum sapien at finibus malesuada. Integer lacinia feugiat nibh, id sagittis orci ultricies sit amet. Proin euismod, odio id consectetur eleifend, nibh urna convallis ipsum, sit amet fringilla ante sem et nunc." />
      </section>
      <section className='secao-escura'>
        <Titulo titulo="HOBBIES"/>
        <section className='secao' id='hobbies'>
          <div className='secao-hobbies'>
            <p className='nome'>Augusto</p>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
          </div>
          <div className='secao-hobbies'>
            <p className='nome'>Beatriz</p>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
          </div>
          <div className='secao-hobbies'>
            <p className='nome'>Cibele</p>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
          </div>
          <div className='secao-hobbies'>
            <p className='nome'>Eduardo</p>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
            <Hobbies className='hobbie' hobbie="hobbie 1"/>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
