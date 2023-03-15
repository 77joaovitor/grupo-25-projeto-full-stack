import axios from "axios";
import { UseFormSetValue } from "react-hook-form";
import { UserRegisterRequest } from "../../interfaces/user.interface";

export const handleCepData = async (eventValue: string, setValue: UseFormSetValue<UserRegisterRequest>) => {
    if(eventValue.length === 9){
        const response = await axios.get(`https://cdn.apicep.com/file/apicep/${eventValue}.json`)
        console.log(response.data);

        if(response.data.status) {
            // object = response.data;
        }
        
    }
}