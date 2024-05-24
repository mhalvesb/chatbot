import {Container, InputChat, MainPage} from "./chat.styled";
import {RightChatting} from "../components/RightChat";
import {LeftChatting} from "../components/leftChat/LeftChat";
import React, {useState, useEffect, useRef} from "react";
import date from "date-and-time";
import pt from "date-and-time/locale/pt";
import Axios from "axios";
export function ChatBot(){

    const [message, setMessage] = useState("");
    const [allChatComponents, setAllComponents] = useState<JSX.Element[]>([]);
    const [actualMessage, setActualMessage] = useState("");
    const [messageTime, setMessageTime] = useState<string>("");
    const containerRef = useRef<HTMLDivElement | null>(null);
    async function AddNewMessage (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
         setMessage(actualMessage);
         const time = new Date();
         date.locale(pt);
        const messageDate = date.format(time, "DD de MMMM H:mm");
        setMessageTime(messageDate);
        setActualMessage("");
    }

    

    function debbugingInput(e: React.ChangeEvent<HTMLInputElement>){
        setActualMessage(e.target.value);
    }

   


    useEffect(() =>{
            
            if(message){
                setAllComponents(prevComponent => [...prevComponent, <RightChatting msg={message} dateAndTime={messageTime}/>]);
                const fetchResponse = async () =>{
                    try{
                        const response = await Axios.post("http://localhost:8080/", {
                        message: message
                        });
                        setAllComponents(prevLeftComponent => [...prevLeftComponent, <LeftChatting responses={response.data.data} dateAndTime={messageTime}/>]);
                    } catch(error){
                    }
                }
            fetchResponse();
            console.log(allChatComponents);
            }
    }, [message, messageTime]);

    useEffect(() =>{
        if(containerRef.current){
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
            console.log("ok");
        }
    }, [allChatComponents])
    return(
        <MainPage>
            <header><p>Talk to A.I</p>
            <hr></hr></header>
            <Container ref={containerRef}>
            
                {allChatComponents}
            
                <InputChat>
                    <form onSubmit={(e) => AddNewMessage(e)}>
                        <input type="text" placeholder="Type a message" value={actualMessage} onChange={(e) => debbugingInput(e)}></input>
                        <button type="submit">Enviar</button>
                    </form>
                </InputChat>
            </Container>
            
            
        </MainPage>
    )
}