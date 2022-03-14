import {useDispatch} from "react-redux";

const useSetActiveDispatch = active => {
    const dispatch = useDispatch();
    dispatch({type: "update-active", active: active})
}

export default useSetActiveDispatch;