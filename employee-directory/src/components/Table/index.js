import React from 'react';

function Table(props) {
  console.log('PROPS: ', props);
  const employeeList = () => {
    // if (props.filterBy !== 'none') {
    //   const filteredEmployees = props.employees.filter(employee => employee.)
    // }
    return props.employees.map(employee => (
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
