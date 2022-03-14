import {useDispatch} from "react-redux";
import {useEffect} from "react";

const useSetActiveDispatch = active => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "update-active", active: active});
    })

}

export default useSetActiveDispatch;