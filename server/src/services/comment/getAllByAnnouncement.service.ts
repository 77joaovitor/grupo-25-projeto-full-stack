import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement, Comment, User } from "../../entities";
import { CommentRequest } from "../../interfaces/comment.interface";

export const getAllByAnnouncementService = async (paramsId: string): Promise<Comment[]> => {

    const commentRepository = AppDataSource.getRepository(Comment);

    const comments = await commentRepository.find({
        where: {
            announcement: {
                id: paramsId
            }
        },
        relations: {
            user: true,
            announcement: true
        }
    });
    
    return instanceToInstance(comments);

}