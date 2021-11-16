import React from 'react'

export const RowEdit = () => {
    return (
        <tr className="table__row">
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="firstName"
                 
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="firstName"
                 
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="firstName"
                
                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="firstName"
                 
                ></input>
            </td>
            <td className="table__cell">Actions</td>
        </tr>
    )
}
