
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/> 
    
        <ItemListContainer
          titulo = "Producto 1"
          cuerpo = "Contenido de la tarjeta"
         
      ></ItemListContainer>


    </>
   
  );
}

export default App;
