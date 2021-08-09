import React, { Component } from 'react';
import './App.css';
// EN REACT TENEMOS 2 TIPOS DE COMPONENTES:
// LOS DE TIPO CLASE Y LOS DE TIPO FUNCTION
// LOS COMPONENTES DE TIPO CLASE POSEEN UN METODO RENDER() {}
// LUEGO PODEMOS RETORNAR CODIGO JSX
// ((ANTES))
// CLASE -> CICLOS DE VIDA DE LOS COMPONENTS
// CLASE -> STATE
// FUNCTION -> DUMMY - STATELESS - REPRESENTACIONALES

// COMPONENTS
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import Footer from './components/Footer/Footer';
import IconsContainer from './components/IconsContainer/IconsContainer';
class App extends Component {
	render() {
		const name = 'Daniel Di Salvo';
		return (
			<div>
				<Header title='Nuestra primera app!' subtitle='Subtitulo' />
				<div>
					<IconsContainer />
				</div>
				<div className='Cards-Container'>
					<CardComponent
						name={name}
						date='Joined in Febreaury 2020'
						description='Software Engineer & IT Instructor'
						img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
					/>
					<CardComponent
						name='Ezequiel Copelli'
						date='Joined in March 2021'
						description='Backend Developer & IT Instructor'
						img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
					/>
					<CardComponent
						name='Fransico Perez'
						date='Joined in Febreaury 2019'
						description='Scrum Master & Project Managment'
						img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
