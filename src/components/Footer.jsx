import React,{Component} from 'react';

import './Footer.css';

class Footer extends Component{
	render(){
		return(
				<footer className="bg-dark text-white mt-4">
      <div className="container">
        <span className="text-muted">My Website &#169;{new Date().getFullYear()}</span>
      </div>
    </footer>
			);
	}
}
export default Footer