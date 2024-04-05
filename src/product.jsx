import "./product.css";
import Price from "./Price.jsx";

function Product({title,idx}) {
    let oldPrices= ["12,000","16,000","25,000","50,000"];
    let newPrices= ["8,000","12,000","20,000","40,000"];
    let description= [["intitutive","budget-friendy"],["less cost", "reliable"],["efficient","high performer"],["easy use","fast"]];
    return(
        <div className="product">
            <h4>{title}</h4>
            <p>{description[idx][0]} </p>
            <p>{description[idx][1]} </p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;