import './App.css';
import TodoList from './Components/TodoList';
import NavBar from './Components/NavBar';
import ContactForm from './Components/ContactForm'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">NavBar</Link> |{" "}
        <Link to="/">TodoList</Link> |{" "}
        <Link to="/about">ContactForm</Link>
      </nav>
      <Routes>
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
     

    </BrowserRouter>
  );
}

export default App;
