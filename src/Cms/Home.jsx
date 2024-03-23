import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../Redux/Slice'
import { Link } from 'react-router-dom'

export default function Home() {
    const dispatch = useDispatch()
    const { catego } = useSelector(state => state.Sli)
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    console.log(catego)
    return (
        <div>
            <h1>Categories</h1>
            <div className='container-lg-5' style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "200px" }}>
                {catego.map((item) => (
                    <div className="card" style={{ width: "18rem", border: "3px solid gray" }}>
                        <img src={item.strCategoryThumb}  className="card-img-top" alt="..." />
                        <div className="card-body bg-warning">
                            <h4 className="card-title " style={{ color: "orangered" }}>{item.strCategory}</h4>
                            <p className="card-text text-dark" >
                                {item.strCategoryDescription?.slice(0, 25)}
                            </p>
                            <button className='btn btn-primary '>
                                <Link to={`/${item.strCategory}`} className='text-light'>View Items</Link>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
