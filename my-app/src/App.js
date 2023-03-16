import './App.css';
import SearchFilter from './SearchFilter';
import Menu from './Menu'
import TextArea from './TextArea';
import {Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Menu/>
      <Route path='/'>
        <TextArea name= "Paras Kalyan"/>
      </Route>
      <Route path='/search'>
        <SearchFilter />
      </Route>
     
    </Router>
      
    </>  
  );
}

export default App;
