import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';
import ContactForm from './Components/ContactForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className='router'>
        <Link to="/TodoList">TodoList</Link> |{" "}
        <Link to="/ContactForm">ContactForm</Link>
      </nav>
      <Routes>
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
