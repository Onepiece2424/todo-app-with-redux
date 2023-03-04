import './App.css';
import ChangeForm from './components/changeform/ChangeForm';
import showResults from './func/showResults';

function App() {

  return (
    <div className='App'>
      <ChangeForm onSubmit={showResults} />
    </div>
  );
}

export default App;
