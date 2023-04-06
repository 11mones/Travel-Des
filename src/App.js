
import Home from "./Components/Home/Home";
let data = require('./data/db.json');

function App() {
  
  return (
    <Home data={data}/>
  );
}

export default App;