import React, { useState } from 'react';
import { render } from 'react-dom';
import employees from '../utils/employees';
import Container from '../components/Container/index';
import Row from '../components/Row/index';
import Col from '../components/Col/index';
import Table from '../components/Table/index';
import Button from '../components/Button/index';

function Home() {
  console.log('EMPLOYEES: ', employees);
  const [orderBy, setOrderBy] = useState('position');
  const [filterPosBy, setFilterPosBy] = useState('none');
  
  const handleButtonClick = (action, actionBy) => {
    console.log('INSIDE HANDLEBUTTONCLICK');
    if (action !== 'order' && action !== 'filter') { return };

    (action === 'order') ? setOrderBy(actionBy) : setFilterPosBy(actionBy);
  };

  const renderFilterPosButtons = () => {
    const positions = employees.map(employee => employee.position);
    const filteredPositions = positions.filter((position, index) => positions.indexOf(position) === index);

    let buttons = filteredPositions.map((position, index) => {
      return (
        <Button 
          handleButtonClick={handleButtonClick} 
          text={`Filter only ${position} positions`} 
          theme='primary'
          action='filter'
          actionBy={position}
          key={index}
        ></Button>
      );
    });

    return buttons;
  }
  
  return(
    <Container>
      <Row>
        <Col size='md-12'>
          <Table employees={employees} theme='dark' orderBy={orderBy} filterPosBy={filterPosBy}></Table>
        </Col>
      </Row>
      <Row>
        <Col size='md-6'>
          <Button handleButtonClick={handleButtonClick} text='Sort By ID' theme='primary' action='order' actionBy='id'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By Position' theme='primary' action='order' actionBy='position'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By First Name' theme='primary' action='order' actionBy='fname'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By Last Name' theme='primary' action='order' actionBy='lname'></Button>
        </Col>
        <Col size='md-6'>
          {renderFilterPosButtons()};
        </Col>
      </Row>
    </Container>
  ); 
}

export default Home;