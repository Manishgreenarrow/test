import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-md ">
			<div className="container">
			 <Link className="navbar-brand" to="/"><img src={require('../images/logo.png')} /></Link>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>

		      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item active">
		            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link" to="/about">About</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link " to="/contact">Contact</Link>
		          </li>
		        </ul>
		      </div>
		      </div>
		    </nav>
			);
	}
}

export default Navbar