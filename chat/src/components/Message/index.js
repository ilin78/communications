import React from 'react';
import PropTypes from 'prop-types'
import { Button as BaseButton} from 'antd'; 
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru'

import './Message.scss';

const Message = ({avatar, user, text, date }) => (
    <div className="message">
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullname}`} />    
        </div> 
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <span className="message__date">{formatDistanceToNow(new Date, {addSuffix: true, locale: ruLocale}) }</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text:  PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object

};

export default Message;