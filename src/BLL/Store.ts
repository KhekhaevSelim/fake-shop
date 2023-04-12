import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./Products-reducer";


const rootReducer = combineReducers({
    products : productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
