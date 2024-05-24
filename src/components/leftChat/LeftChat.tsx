import { LeftChat } from "./LeftChat.styled"
import ReactMarkdown from "react-markdown";

interface LeftProps{
    responses: string;
    dateAndTime: string;
}

export function LeftChatting(props: LeftProps){




    return(
        <LeftChat>
            <ReactMarkdown>{props.responses}</ReactMarkdown>
            <span>{props.dateAndTime}</span>
            
        </LeftChat>
    )
}