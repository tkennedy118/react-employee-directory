import React from 'react';
import employees from '../utils/employees';
import Container from '../components/Container/index';
import Row from '../components/Row/index';
import Col from '../components/Col/index';
import Table from '../components/Table/index';

function Home() {
  console.log('EMPLOYEES: ', employees);

  return(
    <Container>
      <Row>
        <Col size='md-12'>
          <Table employees={employees} theme='light'></Table>
        </Col>
      </Row>
    </Container>
  ); 
}

export default Home;