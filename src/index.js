import Header from './components/header';
import './styles/general.css';

const render = () =>{
  const container = document.querySelector('#content');
  
  container.appendChild(Header());
}

render();