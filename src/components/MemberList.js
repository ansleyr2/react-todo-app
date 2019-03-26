import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Member } from './Member'

export class MemberList extends Component{
    constructor(props){
        super(props)
        this.state = {
            /*members:[
                {
                    name:"rolf hegdal",
                    thumbnail:"https://randomuser.me/api/portraits/thumb/men/65.jpg",
                    email:"rolf.hegdal@example.com"
                },
                {
                    name:"Jennifer Knight",
                    thumbnail:"https://randomuser.me/api/portraits/thumb/men/65.jpg",
                    email:"jennifer.knight22@example.com"
                }

            ]*/
            members:[],
            loading: false,
            admins: [] // holds email ids of the admin users
        }
        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }
    // First method to fire after render fires for first time.
    componentDidMount(){
        this.setState({loading: true})
        fetch("https://api.randomuser.me/?nat=US&results=12")
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members: members,
                loading:false
            }))
    }
    makeAdmin(email){
        const admins = [
            ...this.state.admins,
            email
        ]
        this.setState({admins: admins})
    }
    removeAdmin(email){
        console.log(email)
        const admins = this.state.admins.filter(
            adminEmail => adminEmail !== email
        )
        this.setState({admins: admins})
    }
    render(){
        const { members, loading } = this.state
        return(
            <div>
                {
                    (loading)?<span>loading...</span>:<span>{members.length} members</span>
                }
            {
                (members.length)?
                members.map((member,i) => <Member key={i} 
                                                    admin = {
                                                        this.state.admins.some(
                                                            adminEmail => adminEmail === member.email
                                                        )
                                                    }
                                                    name={ member.name.first + " "+ member.name.last}
                                                    thumbnail={member.picture.thumbnail}
                                                    email={member.email}
                                                    makeAdmin= {this.makeAdmin}
                                                    removeAdmin={this.removeAdmin}
                                            />) : <span>No Members</span>


            }
            </div>
            
        )
    }
}