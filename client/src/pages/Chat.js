import React, { useState, useRef, useEffect } from 'react';
import io from "socket.io-client";


const Chat = () => {

    const [state, setState] = useState({message: "", name: ""});
    const [chat, setChat] = useState([]);

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect();
        socketRef.current.on("message", ({ name, message }) => {
            setChat([ ...chat, { name, message } ]);
        });
        return () => socketRef.current.disconnect();
        },[ chat ]
    );

    const onTextChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const onMessageSubmit = (e) => {
        const { name, message } = state;
		socketRef.current.emit("message", { name, message });
		e.preventDefault();
		setState({ message: "", name });
    };

    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		));
    };
    
    return (
        <div className="chat">
            <form onSubmit={onMessageSubmit}>
                <input
                    className='input-name'
                    name='name'
                    placeholder='Nom'
                    onChange={(e) => onTextChange(e)} 
                    value={state.name} 
                    label="Name"/>

                <div className="render-chat">
                    {renderChat()}
                </div>

                <div className="input-chat">
                    <input 
                    className='input-message'
                    name='message'
                    placeholder='Envoyer un message'
                    onChange={(e) => onTextChange(e)} 
                    value={state.message} 
                    variant="outlined"
                    label="Message"/>

                    <button>Chat</button>
                </div>
                
            </form>
        </div>
    );
};

export default Chat;