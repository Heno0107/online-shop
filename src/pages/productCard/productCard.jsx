import { useParams , useNavigate} from 'react-router-dom'

import './productCard.css'

export function ProductCard ({products , add}) {
    const {id} = useParams()
    const navigate = useNavigate()

    const prod = products.find((prod) => prod.id === +id)
    console.log(prod)
     return (
        <div className="cardFlex">
            <button className = 'goBack' onClick={() => navigate(-1)}>Go Back</button>

            <div className="productCard">
                <div className='imageDiv'>
                    <img src={prod.image}></img>
                </div>

                <div className="infoDiv">
                    <div className="category">
                        <h2>{prod.title}</h2>
                        <h3>{prod.category}</h3>
                    </div>
                    <p>{prod.description}</p>
                    <div className="priceFlex">
                        <span>{prod.price}$</span>
                        <button onClick={() => add(prod)}>Add To Basket</button>
                    </div>
                </div>
            </div>
        </div>
     )
}