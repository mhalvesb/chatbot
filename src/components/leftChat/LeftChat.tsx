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
            
            <p>21 de Maio as 18:16</p>
        </LeftChat>
    )
}