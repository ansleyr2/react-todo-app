import { PropTypes, Component } from 'react'
import { AutoCompleteComponent } from './AutoCompleteComponent'

const predefinedNameList = [
    "Study5",
    "Study6",
    "Activity2",
    "Activity3"
]

//Stateless component syntax
export const AddToDo = ({name, date, study, otherActivity, onNewToDo}) =>{ // props accessible here
    // keeping the variables in scope to use them inside the nested functions
    let _name, _date , _study, _otherActivity
    const submit = (e) =>{
        e.preventDefault()
        // using _refs..
        console.log("name", _name.value)
        console.log("study", _study.checked);
        onNewToDo({
            name: _name.value,
            date: _date.value,
            study: _study.checked,
            otherActivity: _otherActivity.checked
        })

        //Reset values
        _name.value = ''
        _date.value= ''
        _study.checked = false
        _otherActivity.checked = false
        
    }

    // const {name, date, study, otherActivity} = this.props
        return (
            // dont have access to this here. so remove
            <form onSubmit={submit} className="add-day">
                <label htmlFor="name">To-Do Name</label>
                <AutoCompleteComponent options={predefinedNameList}
                        ref={input => _name = input}/> 

                <label htmlFor="date">Date</label>
                <input id="date" 
                        type="date" 
                        required 
                        defaultValue={date}
                        ref={input => _date = input}/>
                <div>
                    <input id="study" 
                            type="checkbox"  
                            defaultChecked={study}
                            ref={input => _study = input}/>
                    <label htmlFor="study">Study</label>
                </div>
                
                <div>
                    <input id="otherActivity" 
                            type="checkbox"  
                            defaultChecked={otherActivity}
                            ref={input => _otherActivity = input}/>
                    <label htmlFor="otherActivity">Other</label>
                </div>
                <button>Add To-Do</button>
                
            </form>
        )
}

// Class syntax
/*export class AddToDo extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        console.log("name",this.refs.name.value)
        console.log("study",this.refs.study.checked);
    }
    render(){
        const {name, date, study, otherActivity} = this.props
        return (
            <form onSubmit={this.submit} className="add-day">
                <label htmlFor="name">To-Do Name</label>
                <input id="name" 
                        type="text" 
                        required 
                        defaultValue={name}
                        ref="name"/>

                <label htmlFor="date">Date</label>
                <input id="date" 
                        type="date" 
                        required 
                        defaultValue={date}
                        ref="date"/>
                <div>
                    <input id="study" 
                            type="checkbox" 
                            required 
                            defaultChecked={study}
                            ref="study"/>
                    <label htmlFor="study">Study</label>
                </div>
                
                <div>
                    <input id="otherActivity" 
                            type="checkbox" 
                            required 
                            defaultChecked={otherActivity}
                            ref="otherActivity"/>
                    <label htmlFor="otherActivity">Other</label>
                </div>
                <button>Add To-Do</button>
                
            </form>
        )
    }
}*/

AddToDo.defaultProps = {
    name: "study3",
    date: "2017-02-02",
    study: true,
    otherActivity: false
}

AddToDo.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    study: PropTypes.bool.isRequired,
    otherActivity: PropTypes.bool.isRequired
}