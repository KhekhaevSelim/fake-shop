import React from 'react';
import style from "./Button.module.css"
import {useAppDispatch} from "../../customHooks/useAppDispatch";
import {decrementAC, incrementAC, removeCardAC} from "../../BLL/Products-reducer";

type ButtonPropsType = {
    inCard : boolean
    cardCount : number
    callBack : (id : string) => void
    id : string
}
const Button = (props : ButtonPropsType) => {
const dispatch = useAppDispatch()
    const decriment = (id: string) => {
        if(props.cardCount > 1){
            dispatch(decrementAC(id))
        }else {
            dispatch(decrementAC(id))
            dispatch(removeCardAC(id))
        }
    }
    const increment = ( id : string) => {
    dispatch(incrementAC(id))
    }

    return (
        props.inCard ?
            <>
                <button className={style.btnOnCard} onClick={()=>props.callBack(props.id)}>в корзине</button>

                <div><button className={style.cardCountBtn} onClick={()=>decriment(props.id)}>-</button> {props.cardCount}
                    <button className={style.cardCountBtn} onClick={()=>increment(props.id)}>+</button></div>
            </>
            :
            <button className={style.btnOutCard} onClick={()=>props.callBack(props.id)}>в корзину</button>
    );
};

export default Button;