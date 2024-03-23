import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { search } from '../Redux/Slice';

export default function Search() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { searchResult } = useSelector(state => state.Sli);

    useEffect(() => {
        dispatch(search(id));
    }, []);

    console.log(searchResult);

    return (
        <>
            <h1>Searched Items</h1>
            {searchResult && searchResult.length === 0 ? (
                <h3 className='text-dark'>No Data Found</h3>
            ) : (
                <div className='container-lg-5' style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "200px" }}>
                    {searchResult && searchResult.map((item) => (
                        <div className="card" style={{ width: "18rem", border: "3px solid gray" }} key={item.idMeal}>
                            <img src={item.strMealThumb} className="card-img-top" alt="..." />
                            <div className="card-body bg-warning">
                                <h5 className="card-title" style={{ color: "orangered" }}>{item.strMeal}</h5>
                                <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                                    <button className='btn btn-light'>-</button>
                                    <button className='btn btn-primary'>Add to Cart</button>
                                    <button className='btn btn-light'>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
