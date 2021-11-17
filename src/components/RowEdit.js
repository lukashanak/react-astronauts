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
                 name="lastName"
                 

                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="birthday"
                 

                ></input>
            </td>
            <td className="table__cell table__cell--edit">
                <input
                 type="text"
                 required="required"
                 name="superpowers"
                 

                ></input>
            </td>
            <td className="table__cell">
                <button className="btn btn--primary">Save</button>
            </td>
        </tr>
    )
}
