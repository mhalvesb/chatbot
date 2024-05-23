import { RightChat } from "./RightChat.styled";


interface ChatProps{
    msg: string;
    dateAndTime: string;
}

export function RightChatting(props: ChatProps){
    return(
        <RightChat>
            <h4>{props.msg}</h4>
            <p>{props.dateAndTime}</p>
        </RightChat>
    )
}