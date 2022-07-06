
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <header>  <NavBar/> </header>
    <body> 
        <ItemListContainer
      titulo = "Titulo"
      cuerpo = "Contenido de la tarjeta"
      ></ItemListContainer>
    </body>
    </>
   
  );
}

export default App;
