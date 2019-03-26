import { ToDoRow } from './todoRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'
export const ToDoList = ({days, filter}) =>{
    const filteredTodos = (!filter || !filter.match(/study|otherActivity/)) ? days : days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Study</th>
                <th>Other Activity</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="/list-todo">
                        All To-Dos
                    </Link>
                    <Link to="/list-todo/study">
                        Study Days
                    </Link>
                    <Link to="/list-todo/otherActivity">
                        Other Activity Days
                    </Link>
                </td>
            </tr>
        </thead>
        <tbody>
            {
                filteredTodos.map((day, i) =>
                    <ToDoRow key={i}
                            name = {day.name}
                            date={day.date}
                            study={day.study}
                            otherActivity={day.otherActivity}
                    />
                )
            }
        </tbody>
    </table>
    </div>
)
        }

// ToDoList.propTypes={
//     days: PropTypes.array
// }
// Custom Validation with function.
ToDoList.propTypes ={
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error("Please pass in an array for displaying list.")
        }else if(!props.days.length){
            return new Error("ToDo list should have atleast one record")
        }else{
            return null
        }
    }
}