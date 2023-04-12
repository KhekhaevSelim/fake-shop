import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../BLL/Store";
import {AnyAction} from "redux";
import {useDispatch} from "react-redux";

type UseAppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<UseAppDispatch>()