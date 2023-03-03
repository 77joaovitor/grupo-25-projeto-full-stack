import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement, Comment, User } from "../../entities";
import { CommentRequest } from "../../interfaces/comment.interface";

export const createCommentService = async (data: CommentRequest, paramsId: string, tokenId: string): Promise<Comment> => {

    const commentRepository = AppDataSource.getRepository(Comment);
    const userRepository = AppDataSource.getRepository(User);
    const announcementRepository = AppDataSource.getRepository(Announcement);

    
    const user = await userRepository.findOne({
        where: {
            id: tokenId,
        },
    });
    
    const announcement = await announcementRepository.findOne({
        where: {
            id: paramsId
        }
    });
    
    const newComment = commentRepository.create({
        ...data, 
        user: user!,
        announcement: announcement!,
    });

    await commentRepository.save(newComment);

    return instanceToInstance(newComment);

}