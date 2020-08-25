import React, { useReducer } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

// Import Components
import Header from './Layouts/Header';
//import Routers
import Home from './../Routers/home'
import About from './../Routers/about'
import Contect from './../Routers/contect'
import Ditail from './../Routers/todosRou'

// impor Contexts
import TodosContext from './../Context/todos';
import AuthContext from './../Context/auth';

// import Reducers
import AppReducer from './../Reducers/appReducer';

function App() {

    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })

    return (
        <Router>
            <AuthContext.Provider value={{
                authenticated: state.authenticated,
                dispatch
            }}>
                <TodosContext.Provider value={{
                    todos: state.todos,
                    dispatch
                }}>
                    <div className="App">
                        <Header />
                        <main>

                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contect' component={Contect} />
                            <Route path='/todos/:id' component={Ditail} />


                        </main>
                    </div>
                </TodosContext.Provider>
            </AuthContext.Provider>
        </Router>
    )

}

export default App;
