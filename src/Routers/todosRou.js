import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function Ditail(props){
    const [Todo,setTodo]=useState({})
    const prams =useParams()
    useEffect(()=>{
        axios.get(`https://react-cours.firebaseio.com/todos/${prams.id}.json`)
        .then(Response =>setTodo({...Response.data}))
    },[])

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    {
                            Todo.text
                    }

                </div>
            </div>
            
        </div>

    )
}
export default Ditail