import React from 'react'
import {useDispatch} from 'react-redux'
import increment from '../actions'

const MyButton = () =>{
    let dispatch = userDispatch();

    return (
        <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
    );
}
export default MyButton;