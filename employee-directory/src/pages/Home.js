import React, { useState } from 'react';
import employees from '../utils/employees';
import themes from '../utils/themes';
import Container from '../components/Container/index';
import Row from '../components/Row/index';
import Col from '../components/Col/index';
import Table from '../components/Table/index';
import Button from '../components/Button/index';
import Jumbotron from '../components/Jumbotron/index';
import '../styles/home.css';

function Home() {
  const [orderBy, setOrderBy] = useState('id');
  const [filterPosBy, setFilterPosBy] = useState('none');
  
  const handleButtonClick = (action, actionBy) => {
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
          text={position}
          theme={getRandomTheme()}
          action='filter'
          actionBy={position}
          key={index}
        ></Button>
      );
    });

    return buttons;
  }

  const getRandomTheme = () => {
    let length = themes.length;
    let random = Math.floor(Math.random() * length);

    return themes[random];
  }
  
  return(
    <div>
      <Jumbotron fluid='fluid'>
        <Container>
          <h1 className='text-center display-4 rainbow-text'>Employee Directory</h1>
        </Container>
      </Jumbotron>
      <div className='no-jumbo'>
        <Container>
          <Row>
            <Col size='md-6'>
              <h2 className='text-center heading'>Sort</h2>
              <Button handleButtonClick={handleButtonClick} text='ID' theme={getRandomTheme()} action='order' actionBy='id'></Button>
              <Button handleButtonClick={handleButtonClick} text='Position' theme={getRandomTheme()} action='order' actionBy='position'></Button>
              <Button handleButtonClick={handleButtonClick} text='First Name' theme={getRandomTheme()} action='order' actionBy='fname'></Button>
              <Button handleButtonClick={handleButtonClick} text='Last Name' theme={getRandomTheme()} action='order' actionBy='lname'></Button>
            </Col>
            <Col size='md-6'>
              <h2 className='text-center heading'>Filter By Position</h2>
              {renderFilterPosButtons()}
              <Button handleButtonClick={handleButtonClick} text={`No Filter`} theme={getRandomTheme()} action='filter' actionBy='none'></Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Jumbotron>
        <Container fluid='fluid'>
          <Row>
            <Col size='md-12'>
              <Table employees={employees} theme={getRandomTheme} orderBy={orderBy} filterPosBy={filterPosBy}></Table>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  ); 
}

export default Home;
