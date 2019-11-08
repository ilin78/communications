import React, { Component } from 'react'
import { Form, Icon, Input } from 'antd';
import { Link, Route } from 'react-router-dom';

import { Button, Block } from 'components';

class RegisterForm extends Component {
    render() { 
        const succes = true;
        return (
        <div>
        <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>

        { !succes ?
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            
            <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            placeholder="E-Mail"
            validateStatus="success"
            />
    
        </Form.Item>
        <Form.Item>
       
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            type="user"
            placeholder="Ваше имя"
            />
 
        </Form.Item>
        <Form.Item>
       
            <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            type="password"
            placeholder="Пароль"
            />
 
        </Form.Item>
        <Form.Item>
       
            <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            size="large"
            type="password"
            placeholder="Повторить пароль"
            />
 
        </Form.Item>
        <Form.Item>
            <Button type="primary" size="large">
                ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
        </Form.Item>
            <Link className="auth__register-link" to="/login" >
                Войти в аккаунт  
            </Link>
        </Form>  
            : <div className="auth__success-block">
                <div> 
                    <Icon type="info-circle" theme="twoTone"/>
                </div>
            <h2>Подтвердите свой аккаунт </h2>
            <p>На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта</p>            
            </div>
            }

        </Block>
        </div>
        )
    }
}

export default RegisterForm;