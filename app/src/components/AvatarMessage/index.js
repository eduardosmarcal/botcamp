import React from 'react';
import AvatarBot from '../AvatarBot';
import MessageBotcamp from '../MessageBotcamp';
import { Wrapper } from '../AvatarMessage/style';

const AvatarMessage = props => (
    <Wrapper>
        <AvatarBot />
        <MessageBotcamp bot>{props.content}</MessageBotcamp>
    </Wrapper>
)

export default AvatarMessage