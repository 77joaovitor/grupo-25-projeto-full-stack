import { PropsComment } from "../../interfaces/component.interface"
import InitialLetterName from "../InitialLetterName"
import { BoxUser, ListComment } from "./style"

export const CommentCard = ({comment}: PropsComment): JSX.Element => {
    const now = new Date() 
    const publishedAt = new Date(comment?.createdAt)

    const difference: number = now.getTime() - publishedAt.getTime();
    const daysPublished: number = Math.ceil(difference/(1000 * 60 * 60 * 24));
    return (
        <ListComment >
            
            <BoxUser>
                <InitialLetterName name={comment?.user?.name[0]} />
                <h4>{comment?.user?.name}</h4>
                <div className="point"></div> 
                <span className="days">Há {daysPublished} {daysPublished > 1 ? 'dias' : "dia"}</span>
            </BoxUser>
            <p>
                {comment?.body}
            </p>
        </ListComment>
    )
}