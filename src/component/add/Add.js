import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAns, sendNumbersToStore} from '../../redux/addRedux/add.actions'
import { ADD_KEY } from '../../redux/addRedux/addReducer'
import './style.css'


export default function Add() {

    const dispatch = useDispatch()

    const [number, setNumber] = useState({
        num1:'',
        num2:'',
        ans:''  
    })

    const handleChange = (event) => {
        setNumber({
            ...number,[event.target.name] : event.target.value
        })
    }

    const handleReset = (event) => {
        //event.preventDefault();
        setNumber({
            ...number,
            num1:'',
            num2:'',
            ans:''
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(sendNumbersToStore(number))
        dispatch(fetchAns(number))
    }

    const viewAdd = useSelector((state) => {
        return state[ADD_KEY]
    })

    return (
        <div>
            <React.Fragment>
                <div className="background--login"></div>
                <div className="box--login">
                    <h2>Adding Two Numbers!</h2>
                    <p>Let's Add Two Numbers using ReactJS and Redux</p><br/>

                    <form onSubmit={handleSubmit}>

                        {/*Para sa first input*/}
                        <div className="inputBox">
                            <input
                                name="num1"
                                value={number.num1}
                                onChange={handleChange}
                                type="number"
                                placeholder="0"
                                className="form-control"
                            />
                            <label>Enter First Number</label>
                        </div>

                        {/*Para sa second input*/}
                        <div className="inputBox">
                            <input
                                name="num2"
                                value={number.num2}
                                onChange={handleChange}
                                type="number"
                                placeholder="0"
                                className="form-control"
                            />
                            <label>Enter Second Number</label>
                        </div>

                        {/*Para sa Sagot*/}
                        <div className="inputBox">
                            <input
                                name="ans"
                                value={viewAdd.ans}
                                onChange={handleChange}
                                type="number"
                                placeholder="0"
                                className="form-control" 
                                disabled
                            />
                            <label>The SUM of the two numbers is</label>
                        </div>

                      
                        <button type="submit" className="btn btn-success btn-sm">ADD</button>

                        <div className="box1--login">
                             <button onClick={handleReset} type="submit">CLEAR ALL</button>
                        </div>
                    </form>
                    <div class="arr"> <center>First Laboratory Activity 2021 © Bryce Angel Ganotice</center></div>
                </div>
            </React.Fragment>
        </div>
    )
}
