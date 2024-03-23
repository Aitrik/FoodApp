import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartData, items } from '../Redux/Slice'

export default function Items() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { item } = useSelector(state => state.Sli)
    const [quantities, setQuantities] = useState({})
    const cartData1 = useSelector(state => state.Sli.cartData1);

    useEffect(() => {
        dispatch(items(id))
    }, [dispatch, id])

    const handleQuantityChange = (itemId, change) => {
        setQuantities(prevQuantities => {
            const newQuantity = (prevQuantities[itemId] || 0) + change;
            return {
                ...prevQuantities,
                [itemId]: newQuantity >= 0 ? newQuantity : 0
            };
        });
    }

    const handleAddToCart = (itemName) => {
        const quantity = quantities;
        dispatch(cartData({ product: itemName, quantity }));
    }

    return (
        <>
            <div>
                <h1>{id} Items</h1>
                <div className='container-lg-5' style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "200px" }}>
                    {item.map((item) => (
                        <div key={item.idMeal} className="card" style={{ width: "18rem", border: "3px solid gray" }}>
                            <img src={item.strMealThumb} className="card-img-top" alt="..." />
                            <div className="card-body bg-warning">
                                <h5 className="card-title " style={{ color: "orangered" }}>{item.strMeal?.slice(0, 20)}</h5>
                                <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                                    <button className='btn btn-light' onClick={() => handleQuantityChange(item.idMeal, -1)}>-</button>
                                    <button className='btn btn-primary' onClick={() => handleAddToCart(item.strMeal)}>Add to Cart</button>
                                    <button className='btn btn-light' onClick={() => handleQuantityChange(item.idMeal, 1)}>+</button>
                                </div>
                                <p>{quantities[item.idMeal] || 0}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
