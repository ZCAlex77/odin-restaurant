import Header from './components/Header';
import Nav from './components/Nav';
import './styles/general.css';

const render = () =>{
  const container = document.querySelector('#content');
  
  container.append(Header(), Nav());
}

render();