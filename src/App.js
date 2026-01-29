import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';
import NavBar from './Components/NavBar';
import ContactForm from './Components/ContactForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/NavBar">NavBar</Link> |{" "}
        <Link to="/TodoList">TodoList</Link> |{" "}
        <Link to="/ContactForm">ContactForm</Link>
      </nav>
      <Routes>
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
