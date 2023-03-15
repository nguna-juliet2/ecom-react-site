import Header from './componets/Header/header';
// import Data from './componets/Data/Data';
// import Imagecard from './componets/ImageSelection/Imagecard.js';
import Imagecard from './componets/ImageSelection/Imagecard.js';
// import Sidebar from './componets/navigation/SideBar';
 import MyComponent from './componets/navigation/Carausel';
import './App.css';

const App=() =>{
  return (
     <div>
      <Header/>
      <Imagecard />
       <MyComponent/>
       
      </div>
  );
}

export default App;
