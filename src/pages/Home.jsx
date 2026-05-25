import Card from "../components/Card"
import {data} from "../data/data" 

const Home = () => {
  return (
    <section>
      <h3 className="product-heading">A​ll Product</h3>
      <div className="card-container">
        <Card products={data}/>
      </div>
    </section>
  )
}

export default Home