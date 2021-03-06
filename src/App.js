import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Footer from "./components/Footer";

import Home from "./views/Home";
import Presentation from "./views/Presentation";


const App = () => 
	<div>
		<BrowserRouter>
			<Header />
		
			<Switch>

				<Route exact path ="/" render = { () => ( <Home />) } />
				<Route exact path ="/presentation" render = { () => ( <Presentation />) } />
				<Route path ="/presentation/:society" render = { () => ( <Presentation />) } />
			</Switch>

			<Footer />
		</BrowserRouter>
		
	</div>

export default App;
