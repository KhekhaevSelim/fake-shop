import {APIproducts, ResponseType} from "../DAL/APIproducts";
import {Dispatch} from "redux";

export type ProductBusinessType = ResponseType & ProductType
const initialState : Array<ProductBusinessType> = []
export const productsReducer = ( state = initialState, action : ActionsType) : Array<ProductBusinessType> => {
    switch (action.type) {
        case "SET-PRODUCTS" : return action.products.map(el => ({...el,inCard: false, cardCount : 0}))
        case "ADD-IN-CARD" : return state.map(el => el.id === action.id ? {...el, inCard : true, cardCount : el.cardCount+1} : el)
        case "DECREMENT": return state.map(el => el.id === action.id ? {...el, cardCount : el.cardCount - 1} : el)
        case "INCREMENT": return state.map(el => el.id === action.id ? {...el, cardCount : el.cardCount + 1} : el)
        case "REMOVE-CARD": return state.map(el => el.id === action.id ? {...el, inCard : false} : el)
        default: return state
    }
}

// ACTION CREATORS
export const setProductsAC = (products : Array<ResponseType>) => ({type : "SET-PRODUCTS",products}as const)
export const addInCardAC = (id : string) => ({type : "ADD-IN-CARD",id}as const)
export const decrementAC = (id : string) => ({type : "DECREMENT",id}as const)
export const removeCardAC = (id : string) => ({type : "REMOVE-CARD",id}as const)
export const incrementAC = (id : string) => ({type : "INCREMENT",id}as const)






// THUNK CREATORS
export const setProductsTC = () => (dispatch : Dispatch) => {
    APIproducts.getProducts()
        .then(res=> {
        dispatch(setProductsAC(res.data))
        })
        .catch(e => {
            console.warn(e)
        })
}

// TYPES
type ActionsType =
      ReturnType<typeof setProductsAC>
    | ReturnType<typeof addInCardAC>
    | ReturnType<typeof decrementAC>
    | ReturnType<typeof removeCardAC>
    | ReturnType<typeof incrementAC>
type ProductType = {
    inCard : boolean
    cardCount : number
}