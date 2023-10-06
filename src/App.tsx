import HomePage from "@/pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PesquisaNomes from "./pages/PesquisaNome";
import PesquisaLetra from "./pages/PesquisaLetra";
import PesquisaIngrediente from "./pages/PesquisaIngrediente";


function App() {

return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pesquisa-nomes" element={<PesquisaNomes/>} />    
      <Route path="/pesquisa-letras" element={<PesquisaLetra/>} />    
      <Route path="/pesquisa-ingredientes" element={<PesquisaIngrediente/>} /> 
    </Routes>
  </Router>
);
}

export default App;
