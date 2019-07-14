import React from 'react'

export default class Root extends React.PureComponent {
	state = {

	}

	constructor(props){
		super(props)
	}

	render(){
		return(
				<div>
					{this.props.children}
				</div>
			)
	}
}