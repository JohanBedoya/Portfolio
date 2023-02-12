import logo from './logo.svg';
import './App.css';
import './components/hovereableText';

function Text() {
  return (
    <div className="App flex-container">
      <div>
        <br></br>
      </div>
      <div>
      <h1 onMouseDown={"document.getElementById(text1).innerHTML = 'hola';"} id='text1'> Johan </h1>
      <h1> Bedoya </h1>
      </div>
    </div>
  );
}


export default Text;
