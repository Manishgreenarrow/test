import React,{Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

import './style.css';
class Home extends Component{
	render(){
		return(
			<div>
			<Navbar/>
			<div className="bg">
				<div className="container">
					<h2 className="text_l">CORPORATE WEBSITE</h2>
					<h2 className="text_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
				</div>
			</div>
			<div className="container padd">
				<p className="text-center sm_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ex tortor, 
				pharetra rutrum tortor tincidunt eu. Nullam sed nibh ac neque posuere ullamcorper. 
				Cras mollis nunc nec arcu facilisis pretium. Phasellus lacus mi, vestibulum id rhoncus 
				non, interdum sit amet urna. Nam nec neque dolor. Donec quam lorem, ullamcorper a leo 
				a, suscipit consectetur nisi. </p>
				<div className="row padd">
					<div className="col-lg-6 align-self-center">
					<h3 className="m_text">CORPORATE</h3>
					<p className="sm_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ex tortor, 
					pharetra rutrum tortor tincidunt eu. Nullam sed nibh ac neque posuere ullamcorper. 
					Cras mollis nunc nec arcu facilisis pretium. Phasellus lacus mi, vestibulum id rhoncus 
					non, interdum sit amet urna. Nam nec neque dolor. Donec quam lorem, ullamcorper a leo 
					a, suscipit consectetur nisi. Phasellus vulputate eu sem sed euismod. Aenean ultrices 
					tortor eu felis condimentum laoreet. In quis dignissim orci, in posuere libero. Morbi 
					risus massa, ornare in lacus sed, vehicula facilisis lectus. Nulla orci enim, gravida 
					sit amet nisi a, efficitur viverra ipsum. Suspendisse non mollis justo. </p>
					</div>
					<div className="col-lg-6">
						<img class="box_shadow" src={require('../images/img_2.jpg')} />
					</div>
				</div>
				<div className="container padd">
					<div className="row">
					</div>
				</div>
			</div>
			<Footer />
			</div>
		);
	}
}
export default Home