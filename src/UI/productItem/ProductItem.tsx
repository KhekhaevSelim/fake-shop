import React from 'react';
import {ResponseType} from "../../DAL/APIproducts";
import style from "./ProductItem.module.css"
import Button from "../button/Button";
import hit from "../../assets/hit.webp"
import ruble from "../../assets/ruble.png"
import {addInCardAC, decrementAC, ProductBusinessType, removeCardAC} from "../../BLL/Products-reducer";
import {useAppDispatch} from "../../customHooks/useAppDispatch";
type ProductItemPropsType = {
    productItem : ProductBusinessType
}
const ProductItem = (props : ProductItemPropsType) => {
   const dispatch = useAppDispatch()
    const addInCard = (id : string) => {
    dispatch(addInCardAC(id))
    }

    return (
        <div className={style.item}>
            <div className={style.blockImg}>
                <div className={style.hit}>{props.productItem.rating.count > 300 ? <img className={style.hitImg} src={hit} alt=""/> : <div className={style.hitImg}></div>}</div>
                <img src={props.productItem.image} alt="product image" className={style.img}/>
            </div>
            <div className={style.blockCategory}>
                <p className={style.category}>{props.productItem.category}</p>
            </div>
            <div className={style.blockTitle}>
                <p className={style.title}>{props.productItem.title}</p>
            </div>
            <div className={style.blockPrice}>
                <p className={style.price}>{Math.round(props.productItem.price * 70).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
                <img className={style.ruble} src={ruble} alt=""/>
            </div>
            <div className={style.blockButton}>
               <Button inCard={props.productItem.inCard} cardCount={props.productItem.cardCount} callBack={addInCard} id={props.productItem.id}/>
            </div>
        </div>
    );
};

export default ProductItem;