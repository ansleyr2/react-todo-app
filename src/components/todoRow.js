// Child component
import {FaCalendarAlt, FaBook} from 'react-icons/fa' // using react-icons
import { IoIosBaseball } from "react-icons/io"
import { PropTypes } from 'react'// for validations

export const ToDoRow = ({ name, date, study, otherActivity }) =>(
    <tr>
        <td>
            {date}
        </td>
        <td>
            {name}
        </td>
        <td>
            {(study) ? <FaBook />: null}
        </td>
        <td>
            { (otherActivity) ? <IoIosBaseball /> : null}
        </td>
    </tr>
)

ToDoRow.propTypes = {
    name : PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    study: PropTypes.bool,
    otherActivity: PropTypes.bool
}