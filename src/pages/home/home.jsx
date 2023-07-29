import { Link } from "react-router-dom";
import { useData } from "../../context/dataContext";
import { categories } from "../../db/categories";
import css from "./home.module.css"
export const Home = () => {
    const {dispatch}=useData();
    const clickHandler=(category)=>{
        dispatch({type:"SET_CATEGORY",payload:category})
    }
  return (
    <div className={css.home}>
      <h1>Categories</h1>
      <div className={css.categoryContainer}>
      {categories?.map((category, index) => {
        return <Link to={`/home/${category?.category}`} key={index} className={css.categoryCard} onClick={()=>clickHandler(category?.category)}>
            <img src={category?.thumbnail} alt={category?.category} />
            <span>{category?.category}</span>
        </Link>;
      })}
      </div>
    </div>
  );
};
