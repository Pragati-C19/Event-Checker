import "./App.css";
import AddEvent from "./components/add-event";
import PrimarySearchAppBar from "./components/navbar";
import BasicTable from "./components/view-event-list";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <BasicTable />
      <AddEvent />
    </div>
  );
}

export default App;
