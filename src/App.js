import './styles.css';
import explorer from './data/folderData';
import Folder from "./components/Folder"

function App() {
  return (
      <div className="App">
        <Folder explorer={explorer} />
      </div>     
  );
}

export default App;
