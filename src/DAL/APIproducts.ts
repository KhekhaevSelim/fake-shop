import axios from "axios";

const instanse = axios.create({
    baseURL : "https://fakestoreapi.com/"
})

export const APIproducts = {
    getProducts(){
       return instanse.get<Array<ResponseType>>("products")
    }
}



// TYPES

export type ResponseType = {
    category : string
    id : string
    image : string
    price : number
    rating : {
        rate : number,
        count : number
    }
    title : string
}