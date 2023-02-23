import styled from "styled-components";

export const Container = styled.main`
    main{
        display: flex;
        background-color: blue;
    }
    .main{
        display: flex;
       
        flex-direction: column;
      
        margin-left: 70px;
        max-width: 50%;
        
    }
    .descricao{
        background-color: white;
        border-radius: 10px;
        margin: 10px;
        
    }
    .peapleComents{
        background-color: white;
        border-radius: 10px;
        margin: 10px;
        
    }
    .coments{
        background-color: white;
        border-radius: 10px;
        margin: 10px;
       
    }
    .fotoPrincipal{
        background-color: white;
        border-radius: 10px;
        margin: 10px;
        display: flex;
        justify-content: center;
        
    }
    .info{
        background-color: white;
        border-radius: 10px;
        margin: 10px;
        
    }
    img {
        width: 400px;
        height: 300px;
    }
    .container{
        background-color: white;
        
    }
    .fotos{
       
        background-color: grey;
    }
    .details{
        width: 60px;
        height: 60px;
        flex-wrap: wrap;
    }
    .men{
        max-width: 500px;
    }
    aside{
       max-width: 50%;
    }
`;
