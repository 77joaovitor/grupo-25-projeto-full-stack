import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AppError } from "../../errors";

export const deleteAnnoucementService = async (id: string) => {
  const annoucementRepository = AppDataSource.getRepository(Announcement);

  const findAnnoucement = await annoucementRepository.findOneBy({ id });

  if (!findAnnoucement) {
    throw new AppError(404, "Annoucement not found");
  }

  await annoucementRepository.delete(id);
};
