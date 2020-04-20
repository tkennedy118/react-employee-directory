import React from 'react';

function Table(props) {

  const employeeList = () => {
    const employees = props.employees;
    let filteredEmployees = employees;

    // Apply filters.
    if (props.filterPosBy !== 'none') {
      filteredEmployees = employees.filter(employee => {
        return employee.position === props.filterPosBy;
      });
    }

    // Apply sorting.
    filteredEmployees.sort((first, second) => (first[props.orderBy] > second[props.orderBy]) ? 1 : -1);

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
    <table className={`table table-bordered table-striped table-${props.theme()}`}>
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
