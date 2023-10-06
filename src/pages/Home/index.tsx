import Headline from "@/shared/Headline";
import {Receitas } from "@/shared/types";
import { motion } from "framer-motion";
import Home from "./Home";
import { useEffect, useState } from 'react';
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



const HomePage = ()  => {
  const [dados, setDados] = useState<Receitas[]>([]);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchMeals = async () => {
    try {
      const responses = await Promise.all(
        Array.from({ length: 10 }, () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        )
      );

      const responseData = await Promise.all(
        responses.map(async (response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data.meals[0];
        })
      );

      setDados(responseData.filter((meal) => meal));
      setHasFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (!hasFetched) {
      fetchMeals();
    }
  }, [hasFetched]);

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
          <Headline>RECEITAS ALEATÓRIAS DE HOJE</Headline>
        </motion.div>

        <motion.div
          className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {dados.map((receita: Receitas) => (
            <Home
              key={receita.idMeal}
              strMeal={receita.strMeal}
              strInstructions={truncateString(receita.strInstructions, 120)}
              strMealThumb={receita.strMealThumb}
              strYoutube={receita.strYoutube}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default HomePage;
