import { Response, Request } from "express";
import { updateAddressService } from "../../services/address/update.service";

export const updateAddressController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const updated = await updateAddressService(body, id);

    return res.status(200).json(updated);
}