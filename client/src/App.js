import Navbar from './Navbar';
import TodoItems from './TodoItems';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SecondPage = () => {
  const onClick = () => {
    fetch('/api/send')
      .then(res => res.json())
      .then(value => alert(value.value));
  }
  return (
    <>
      <Navbar />
      <button onClick={onClick}>Send smth</button>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoItems />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
