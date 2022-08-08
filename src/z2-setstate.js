import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Z2SetState extends Component {	
	
    strdeger = this.props.deneme;

    

	state=
	{
        sayi:0,
		name:"Adım yok benim"
	}

	decrement = () => {
		this.setState({
			sayi:--this.state.sayi
		})
	}

	increment = () => {
		this.setState({
			sayi:++this.state.sayi
		})
	}

    changeName()
    {
        console.log(this.state);
        this.setState({
    
            name: "Adım Serkan oldu benim"
        });
    }

	render() {
		return(
			<div>
                <h1>{this.state.name} - {this.state.sayi}</h1>
                <p>Gardaş adın nedir? </p>
                <p>{this.strdeger}</p>
                <button onClick={this.changeName.bind(this)}>Değiştir</button>
                <button onClick={this.decrement.bind(this)}>Azalt</button>
                <button onClick={this.increment.bind(this)}>Arttır</button>
			</div>
		)
	}
}

export default Z2SetState