import * as yup from 'yup';

export const AnnouncementRequestSchema = yup.object({
    title: yup
        .string()
        .required("Coloque o titulo do anuncio"),
    description: yup
        .string()
        .required('Coloque a descrição do anuncio.'),

    price: yup
        .number()
        .required("Coloque o valor cobrado no veículo"),
    year: yup  
        .string()
        .required("Coloque a data de fabricação do veículo."),
    mileage: yup
        .number()
        .required("Coloque quilometragem do veículo."),
    coverImage: yup
        .string()
        .required("Coloque a imagem principal do anuncio")

    
});
