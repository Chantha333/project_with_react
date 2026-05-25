import { Link } from "react-router-dom"
const Card = ({products}) => {
  return (
    <>
        {products.map(({id,img,title,price})=>(
            <article key={id} className="card">
                <img className="card-img" src={img} alt={title} />
                <h3 className="card-price">{title}</h3>
            
                <h4 className="card-price">{price}</h4>
                <Link to={id.toString()} className="btn">Detail</Link>
            </article>
        ))}
    </>
  )
}

export default Card