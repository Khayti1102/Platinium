import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";
import Todo from "./MyComponents/Todo Items.js";

function App() {
  return (
    <> <Header title="My Todo Lists" searchbar={false}/>
    <Todo/>
    
    <Footer/>
    <Todos/>
        </>
    
  );
}

export default App;

