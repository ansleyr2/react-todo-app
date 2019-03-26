import { Component } from 'react'
export class AutoCompleteComponent extends Component{
    get value(){
        return this.refs.inputToDoName.value
    }
    set value(value){
        this.refs.inputToDoName.value = value
    }
    render(){
        return (
            <div>
                <input ref="inputToDoName" type="text" list="predefined-todos-names"/>
                <datalist id="predefined-todos-names">
                    {
                    this.props.options.map((opt, i)=>
                        <option key={i}>{opt}</option>
                    ) 
                    }
                </datalist>
            </div>
        )
    }
}