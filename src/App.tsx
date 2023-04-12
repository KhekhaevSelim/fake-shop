import React, {useEffect} from 'react';

import './App.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/Store";
import {useAppDispatch} from "./customHooks/useAppDispatch";
import {ProductBusinessType, setProductsTC} from "./BLL/Products-reducer";
import ProductItem from "./UI/productItem/ProductItem";
import style from "./App.module.css"

function App() {
    const products = useSelector<AppRootStateType, Array<ProductBusinessType>>(state => state.products)
    const dispatch = useAppDispatch()
    useEffect(() => {
    dispatch(setProductsTC())
    }, [])
    return (
        <div className={style.items}>
            {products.map(el => {
                return (
                   <ProductItem productItem={el} key={el.id}/>
                )
            })}
        </div>
    );
}

export default App;
