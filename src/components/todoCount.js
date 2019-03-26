import { Component } from 'react'
import '../stylesheets/ui.scss'
import {FaCalendarAlt, FaBook} from 'react-icons/fa' // using react-icons
import { IoIosBaseball } from "react-icons/io"


const percentCompletion = (decimal) =>{
    return (
        (decimal*100)+'%'
    )
}

const calculateGoalProgress = (total, goal) =>{
    return( percentCompletion(total/goal))
}

// export const ToDoCount = React.createClass({
// export class ToDoCount extends Component {
export const ToDoCount = ({total, study, otherActivity, goal}) => (
    // // Component method
    // percentCompletion(decimal){
    //     return (
    //         (decimal*100)+'%'
    //     )
    // }
    // // Component method
    // calculateGoalProgress(total, goal){
    //     return( this.percentCompletion(total/goal))
    // }
    // Render funtion .
    //render(){
        //return (  
            <div className="ski-day-count">
                <div className="total-days">
                    <FaCalendarAlt />
                    <span>{total}</span>
                    <span>To-Do's</span>
                </div>
                <div className="study-days">
                    <FaBook />
                    <span>{study}</span>
                    <span>To-do's</span>
                </div>
                <div className="other-activity-days">
                    <IoIosBaseball />
                    <span>{otherActivity}</span>
                    <span>To-Do's</span>
                </div>
                <div>
                    <span>
                        {
                            calculateGoalProgress(
                                total, 
                                goal
                            )
                        }
                    </span>
                </div>
            </div>
       // )
    //}
)
//})