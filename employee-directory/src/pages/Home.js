import React, { useState } from 'react';
import employees from '../utils/employees';
import Container from '../components/Container/index';
import Row from '../components/Row/index';
import Col from '../components/Col/index';
import Table from '../components/Table/index';
import Button from '../components/Button/index';

function Home() {
  console.log('EMPLOYEES: ', employees);
  const [orderBy, setOrderBy] = useState('position');
  const [filterBy, setFilterBy] = useState('none');
  
  const handleButtonClick = (action, actionBy) => {
    console.log('INSIDE HANDLEBUTTONCLICK');
    if (action !== 'order' && action !== 'filter') { return };

    (action === 'order') ? setOrderBy(actionBy) : setFilterBy(actionBy);
  };

  return(
    <Container>
      <Row>
        <Col size='md-12'>
          <Table employees={employees} theme='dark'></Table>
        </Col>
      </Row>
      <Row>
        <Col size='md-6'>
          <Button handleButtonClick={handleButtonClick} text='Sort By ID' theme='primary' action='sort' actionBy='id'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By Position' theme='primary' action='sort' actionBy='position'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By First Name' theme='primary' action='sort' actionBy='fname'></Button>
          <Button handleButtonClick={handleButtonClick} text='Sort By Last Name' theme='primary' action='sort' actionBy='lname'></Button>
        </Col>
        <Col size='md-6'>
          <Button handleButtonClick={handleButtonClick} text='Filter By ID' theme='primary' action='filter' actionBy='id'></Button>
          <Button handleButtonClick={handleButtonClick} text='Filter By Position' theme='primary' action='filter' actionBy='position'></Button>
          <Button handleButtonClick={handleButtonClick} text='Filter By First Name' theme='primary' action='filter' actionBy='fname'></Button>
          <Button handleButtonClick={handleButtonClick} text='Filter By Last Name' theme='primary' action='filter' actionBy='lname'></Button>
        </Col>
      </Row>
    </Container>
  ); 
}

export default Home;