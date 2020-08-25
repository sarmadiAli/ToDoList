import React , { useContext } from 'react';
//import Context
import AuthContext from '../../Context/auth';
// import ajex
import axios from 'axios'

//import Ling route
import {NavLink} from 'react-router-dom'



function Header() {

  
    const authContext = useContext(AuthContext);


    let doLogin = () =>{
        axios.get(`https://react-cours.firebaseio.com/todos.json`)
        .then(response =>{ GetDate(response.data)})
        authContext.dispatch({ type : 'login_user' });
    }
    let doLogout = () => authContext.dispatch({ type : 'logout_user'});
    let GetDate =(data)=>{
        let todos=Object.entries(data).map(([key,value])=>{
            return{
                ...value,
                key
            }
        })
        console.log(todos);
        authContext.dispatch({type:'init_todo',payload:{todos}})
    }
    return (
        <header>
            <div className="navbar navbar-dark navbar-expand-sm bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                   
                        <strong className="navbar-brand d-flex align-items-center">Todo App</strong>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">  <NavLink to='/' activeStyle={{ color:'red'}}  exact className="nav-link"> home</NavLink></li>
                            <li className="nav-item"> <NavLink to='/about' activeClassName='active' className="nav-link"> about </NavLink></li>
                            <li className="nav-item"> <NavLink to='/contect' className="nav-link"> contect</NavLink></li>

                        </ul>
                   
                    {
                        ! authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;