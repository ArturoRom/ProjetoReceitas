import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
};

const PesquisaNome = ({ strMeal, strInstructions, strMealThumb, strYoutube }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center flex flex-col items-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-4">
        <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>

      <h4 className="font-bold">{strMeal}</h4>
      <p className="my-3">{strInstructions}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={strYoutube}>
        <p>Assista o vídeo</p>
      </AnchorLink>
    </motion.div>
  );
};

export default PesquisaNome;
