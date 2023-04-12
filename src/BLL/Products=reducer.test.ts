import {addInCardAC, ProductBusinessType, productsReducer} from "./Products-reducer";

let startState : Array<ProductBusinessType>;
beforeEach(()=> {
startState =[ {
    category : "mens clothing",
    id : "asdfg",
    image : "aaaa",
    price : 18,
    rating : {
        rate : 12,
            count : 200
    },
    title : "Mens Cotton Jacket",
    inCard : false,
    cardCount : 0
},
    {
        category : "electronic",
        id : "qwert",
        image : "bbbb",
        price : 11,
        rating : {
            rate : 22,
            count : 303
        },
        title : "WD 2TB - USB 3.0",
        inCard : false,
        cardCount : 0
    }
]
})

test("the correct product should be added in card",()=> {
    const endState = productsReducer(startState, addInCardAC("asdfg"))

    expect(startState).not.toEqual(endState)// checking immutable operation
    expect(endState[0].inCard).toBe(true)
})