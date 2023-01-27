import React from "react";
import '../App.scss';

function DataTable(props) {
    console.log("props in child", props);
    const { data } = props;
    return (
        <div>
            <div className="container">
                <h1 className="caption">The list of employees</h1>
                <table className="table">
                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (
                                data.map((employees) => {
                                    return (
                                        <tr>
                                            <td>{employees[0]}</td>
                                            <td>{employees[1]}</td>
                                            <td>{employees[2]}</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable;