import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Column } from './styles'
import { useState } from 'react';

const App = ()=> {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    console.log(handleAddNumber)
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
    }else {
      const op = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(op));
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
    }else {
      const op = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(op));
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
    }else {
      const op = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(op));
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      handleOnClear();
    }else {
      const op = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(op));
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="CA" onClick={handleOnClear} />
          <Button label="CE" onClick={() => handleAddNumber('')} />
          <Button label="%" onClick={() => handleAddNumber('')} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="" onClick={handleSumNumbers} />
        </Row>


      </Content>
    </Container>
  );
}

export default App;
