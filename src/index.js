// create element (<tagName>, <atribute names>,<value>)
/*const title = React.createElement(
	'h1',
	{id: 'title', className:'header'},
	'Hello World'
)

// Render (<element>, <container id>)
ReactDOM.render(
	title,
	document.getElementById('react-container')
)*/

// More cleaner way by importing only whats necessary

/*const { createElement } = React
const { render } =  ReactDOM

const style = {
	backgroundColor: 'Orange',
	color: 'white',
	fontFamily: 'verdana'
}

const title = createElement(
	'h1',
	{id: 'title', className:'header', style:style},
	'Hello World'
)

render(
	title,
	document.getElementById('react-container')
)*/


// Using JSX

import React from 'react'
import { render } from 'react-dom'
import { hello , goodbye } from './lib'
import { ToDoCount } from './components/todoCount'
import { ToDoList } from './components/todoList'
import { App } from './components/App'
import { NotFoundComponent } from './components/NotFound'
import { AddToDo} from './components/AddToDo'
import { Route, Router, hashHistory } from 'react-router'

window.React = React;

const style = {
	backgroundColor: 'Orange',
	color: 'white',
	fontFamily: 'verdana'
}


// createElement is now present as a JSX tag
render(
	// <ToDoCount total={5}
	// 			study={2}
	// 			otherActivity={3}
	// 			goal={10}/>,
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="list-todo" component={App} >
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add-todo" component={ App}/>
		<Route path="members" component={ App}/>
		<Route path="*" component={NotFoundComponent}/>
	</Router>,
	document.getElementById('react-container')
)