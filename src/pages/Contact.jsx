import React,{Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

import './style.css';
class Contact extends Component{
	render(){
		return(
				<div>
			<Navbar/>
			<Jumbotron  title="CONTACT US"/>
			<div className="container padd">
				<h2 className="text-center">CONTACT</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ex tortor, 
				pharetra rutrum tortor tincidunt eu. Nullam sed nibh ac neque posuere ullamcorper. 
				Cras mollis nunc nec arcu facilisis pretium. Phasellus lacus mi, vestibulum id rhoncus 
				non, interdum sit amet urna. Nam nec neque dolor. Donec quam lorem, ullamcorper a leo 
				a, suscipit consectetur nisi. Phasellus vulputate eu sem sed euismod. Aenean ultrices 
				tortor eu felis condimentum laoreet. In quis dignissim orci, in posuere libero. Morbi 
				risus massa, ornare in lacus sed, vehicula facilisis lectus. Nulla orci enim, gravida 
				sit amet nisi a, efficitur viverra ipsum. Suspendisse non mollis justo. </p>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ex tortor, 
				pharetra rutrum tortor tincidunt eu. Nullam sed nibh ac neque posuere ullamcorper. 
				Cras mollis nunc nec arcu facilisis pretium. Phasellus lacus mi, vestibulum id rhoncus 
				non, interdum sit amet urna. Nam nec neque dolor. Donec quam lorem, ullamcorper a leo 
				a, suscipit consectetur nisi. Phasellus vulputate eu sem sed euismod. Aenean ultrices 
				tortor eu felis condimentum laoreet. In quis dignissim orci, in posuere libero. Morbi 
				risus massa, ornare in lacus sed, vehicula facilisis lectus. Nulla orci enim, gravida 
				sit amet nisi a, efficitur viverra ipsum. Suspendisse non mollis justo. </p>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ex tortor, 
				pharetra rutrum tortor tincidunt eu. Nullam sed nibh ac neque posuere ullamcorper. 
				Cras mollis nunc nec arcu facilisis pretium. Phasellus lacus mi, vestibulum id rhoncus 
				non, interdum sit amet urna. Nam nec neque dolor. Donec quam lorem, ullamcorper a leo 
				a, suscipit consectetur nisi. Phasellus vulputate eu sem sed euismod. Aenean ultrices 
				tortor eu felis condimentum laoreet. In quis dignissim orci, in posuere libero. Morbi 
				risus massa, ornare in lacus sed, vehicula facilisis lectus. Nulla orci enim, gravida 
				sit amet nisi a, efficitur viverra ipsum. Suspendisse non mollis justo. </p>
			</div>
			<Footer/>
			</div>
			);
	}
}
export default Contact