import React from 'react';

function Table(props) {
  
  const employeeList = () => {
    const employees = props.employees;
    let filteredEmployees = employees;

    if (props.filterPosBy !== 'none') {
      filteredEmployees = employees.filter(employee => {
        employee.position === props.filterPosBy
      });
    }

    return filteredEmployees.map(employee => (
      <tr key={employee.id}>
        <th scope='row'>{employee.id}</th>
        <td>{employee.fname}</td>
        <td>{employee.lname}</td>
        <td>{employee.position}</td>
      </tr>
    ));
  }

  return (
    <table className={`table table-${props.theme}`}>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Position</th>
        </tr>
      </thead>
      <tbody>
        {employeeList()}
      </tbody>
    </table>
  );
}

export default Table;
