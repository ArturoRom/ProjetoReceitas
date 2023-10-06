import HText from "@/shared/Headline";
import { Receitas } from "@/shared/types";
import { motion } from "framer-motion";
import PesquisaNome from "./PesquisaNome";
import { useState } from 'react';
import axios from 'axios';
import Navbar from "../navbar";



const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function truncateString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  }
  return str;
}



const PesquisaNomes = ()  => {
  const [dados, setDados] = useState<Receitas[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event:any) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = async () => {
    console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
  
      if (response.data && response.data.meals) {
        setDados(response.data.meals);
      } else {
        setDados([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
    <Navbar/>
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      >
        <motion.div
          className="md:my-5 md:w-3/5 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>PESQUISAR RECEITA PELO NOME</HText>
          <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border-primary-500 p-2 rounded-l-md focus:border-primary-500 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-primary-500 text-black px-4 py-2 rounded-l-md rounded-r-md"
        >
          Pesquisar
</button>
        </motion.div>
        <motion.div
          className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {dados.length === 0 ? (
              <p>Sem dados disponíveis.</p>
            ) : (
          dados.map((receita: Receitas) => (
            <PesquisaNome
              key={receita.idMeal}
              strMeal={receita.strMeal}
              strInstructions={truncateString(receita.strInstructions, 120)}
              strMealThumb={receita.strMealThumb}
              strYoutube={receita.strYoutube}
            />
          )))}
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default PesquisaNomes;
