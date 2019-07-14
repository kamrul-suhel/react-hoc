import React from 'react'

import ComponentBox from './Components/ComponentBox'
import ComponentList from './Components/ComponentList'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<h2>React HOC</h2>
				<ComponentBox/>
				<ComponentList/>
			</div>
			)
	}
}