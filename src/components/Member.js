import { Component } from 'react'
import { FaShieldAlt } from 'react-icons/fa'
export class Member extends Component{
    constructor(props){
        super(props)
    }
    // Fires right before the render
    componentWillMount(){
        this.style = {
            backgroundColor: 'gray'
        }
    }
    // Fires when compnent upodates
    componentWillUpdate(nextProps){
        this.style = {
            backgroundColor: (nextProps.admin)?'green':'purple'
        }
    }
    // performs some logical test to check if the compnent should update
    shouldComponentUpdate(nextProps){
        return this.props.admin !== nextProps.admin
    }
    render(){
        const {name, thumbnail, email, admin, makeAdmin, removeAdmin} = this.props
        return (
            <div className="member" style={this.style}>
                <h1>{name} {(admin)? <FaShieldAlt />: null}</h1>
                {
                    (admin)? <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
                            <a onClick={() => makeAdmin(email)}>Make Admin</a>
                }
                
                <img src={thumbnail} />
                <a href={`mail to ${email}`}>{email}</a>
            </div>
        )
        
    }
}