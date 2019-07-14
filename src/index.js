import React from 'react'
import ReactDom from 'react-dom'
import Root from './App/Root'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App/App'

ReactDom.render(
	<Root>
		<BrowserRouter>
			<Route path="/" component={App}/>
		</BrowserRouter>
	</Root>
	, document.querySelector('#root'))