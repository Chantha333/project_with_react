import { useParams } from "react-router-dom"
import {data} from "../data/data"
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const {id}= useParams();
    const {
        title,
        img,
        color,
        Camera,
        ram,
        price
    }=data.find(d =>d.id==id);
  return (
    <div className="detail-product">
        <div className="info-container">
      
        <img className="info-img" src={img} alt={title} />
        <ul className="product-info">
            <li>Model: <span>{title}</span> </li>
            <li>Color: <span>{color}</span> </li>
            <li>Camera: <span>{Camera}</span> </li>
            <li>RAM: <span>{ram}</span> </li>
            <li>Price: <span>{price}</span> </li>
        </ul>
        <Link  to="/" className="btn-product">Back</Link>
        </div>
       
    </div>
    
  )
}

export default ProductDetail