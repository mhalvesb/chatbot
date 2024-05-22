import {Container, InputChat, LeftChat, MainPage} from "./chat.styled";
import {RightChatting} from "../components/RightChat";
import React, {useState, useEffect, useRef} from "react";

export function ChatBot(){

    const [message, setMessage] = useState<string[]>([]);
    const [actualMessage, setActualMessage] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    function AddNewMessage(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setMessage(prevMessages => [...prevMessages, actualMessage]);
        setActualMessage("");
        
    }

    function debbugingInput(e: React.ChangeEvent<HTMLInputElement>){
        setActualMessage(e.target.value);
    }


    useEffect(() =>{
            if(containerRef.current){
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
    }, [message])
    return(
        <MainPage>
            <Container ref={containerRef}>
            <LeftChat>
                <h4>Um monte de coisa a se falar</h4>
                <p>21 de Maio as 18:16</p>
            </LeftChat>
            
            {message.map((msg, index) =>{
                return <RightChatting msg={msg} key={index}/>
            })}

            
                <InputChat>
                    <form onSubmit={(e) => AddNewMessage(e)}>
                        <input type="text" placeholder="Type a message" value={actualMessage} onChange={(e) => debbugingInput(e)}></input>
                        <button type="submit"></button>
                    </form>
                </InputChat>
            </Container>
            
            
        </MainPage>
    )
}