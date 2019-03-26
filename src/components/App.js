import { Component } from 'react'
import { ToDoList } from './todoList'
import { ToDoCount } from './todoCount'
import { AddToDo  } from './AddToDo'
import { Menu } from './Menu'
import { MemberList } from './MemberList'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            allToDos : [
                {
                    name:"Study1",
                    date:"2018-01-02",
                    study:true,
                    otherActivity:false
                },
                {
                    name:"Activity1",
                    date:"2018-01-03",
                    study:false,
                    otherActivity:true
                },
                {
                    name:"Study2",
                    date:"2018-01-04",
                    study:true,
                    otherActivity:false
                }
            ]
        }
        this.addTodo = this.addTodo.bind(this)
    }
    // Render app state for the first time 
    // use it if not using the ES6 class syntax, but using createClass
    /*getInitialState(){
        return {
           allToDos : [
                {
                    name:"Study1",
                    date:new Date("01/01/2018"),
                    study:true,
                    otherActivity:false
                },
                {
                    name:"Activity1",
                    date:new Date("01/02/2018"),
                    study:false,
                    otherActivity:true
                },
                {
                    name:"Study2",
                    date:new Date("01/03/2018"),
                    study:true,
                    otherActivity:false
                }
            ]
        }
    }*/
    getDayCount(filter){
        return this.state.allToDos.filter(function(day){
            if(filter){
                return day[filter]
            }else{
                return day
            }
        }).length
    }
    addTodo(newTodo){
        this.setState({
            // Es6 syntax for array concat
            allToDos:[
                ...this.state.allToDos,
                newTodo
            ]
        })
    }
    render(){
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ? 
                   <ToDoCount total={this.getDayCount()}
                                study={this.getDayCount("study")}
                                otherActivity={this.getDayCount("otherActivity")}
                    /> :

                   (this.props.location.pathname === "/add-todo")?
                    <AddToDo onNewToDo={this.addTodo}/>
                     :(this.props.location.pathname === "/list-todo")?
                     <ToDoList days={this.state.allToDos}
                                filter={this.props.params.filter}/>
                    : <MemberList />
                
                }
            </div>
        )
    }
}