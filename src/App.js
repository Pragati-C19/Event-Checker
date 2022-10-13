
import './App.css';
import PrimarySearchAppBar from './components/navbar';
import BasicTable from './components/view-event-list';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <BasicTable/>
    </div>
  );
}

export default App;
