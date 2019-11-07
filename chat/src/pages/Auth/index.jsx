import React from 'react';
import { Route } from "react-router-dom"
import { LoginForm } from 'modules';
 
import './Auth.scss';

const Auth = () => (
    <section className='auth'> 
    <div className="auth__content">
        <Route exact path="/" component={LoginForm}></Route>
        <Route exact path="/register" render={() => <h1>Hello</h1>}></Route>
    </div>
    </section>
)
    
export default Auth; 