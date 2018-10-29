import React,{Component} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component{
	render(){
		return(
				<div className="jumbortan jumbortan-fluid">
					<div className="container">
						<h1 className="display-3 text_la">{this.props.title}</h1>
						<p className="lead text_pa">{this.props.subtitle}</p>

					</div>
				</div>
			);
	}
}
export default Jumbotron