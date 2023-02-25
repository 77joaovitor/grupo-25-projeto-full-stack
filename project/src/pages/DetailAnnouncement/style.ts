import styled from "styled-components";

export const Container = styled.main`
    main{
        display: flex;
        background-image: linear-gradient(to top, #f1f3f5 0, #f1f3f5 60%, #5126ea 40%);
        justify-content: center;
    }
    .container1{
        display: flex;
        flex-direction: column;
        max-width: 50%;
        margin-top: 20px;
    }
    .logoPrincipal{
        background-color: white;
    }
    h1{
        font-size: 20px;
    }
    .descricao{
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        
    }
    .peapleComents{
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column; 
    }
    .peapleComents-peap{
        display: flex;
        align-items: center;
    }
    .input{
        display: flex;
    }
    input{
        width: 600px;
        padding-right: 40px;
        align-items: flex-start;
        height: 100px;
    }
    .comentButton{
        background-color: #5126ea;
        color: white;
        width: 70px;
        height:30px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        border-style: none;
        padding: 10px;
        position: absolute;
    }
    .coments{
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
       
    }
    .fotoPrincipal{
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        justify-content: center;
        
    }
    .info{
        background-color: white;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        padding:20px;
    }
    span{
        background-color: #edeafd;
        color: #5126ea;
        border-radius: 5px;
        display: flex;
        font-size: 15px;
    }
    .info-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info-text-span{
        display: flex;
    }
    button{
        background-color: #5126ea;
        color: white;
        width: 70px;
        height:30px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        border-style: none;
        padding: 10px;
    }
    img {
        width: 400px;
        height: 300px;
        border: 10px solid white;
        background-color: #f1f3f5;
    }
    .container{
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    
    .fotos{
        display: flex;
        flex-wrap: wrap;
        max-width: 400px;
        align-items: center;
        justify-content: center;
        
    }
    .details{
        width: 100px;
        height: 100px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .peapleAnnouncement{
        max-width: 500px;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .peapleAnnouncement-icon{
        border-radius: 50%;
        
    }
    aside{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
    .peapleAnnouncement-button{
        background-color: black;
        width: 150px;
        display: flex;
        justify-content: center;
        height: 40px;
    }
    .coments-name{
        display: flex;
        align-items: center;
    }
    h3{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #edeafd;
    }
    h5{
        color: gray;
        margin: 5px;
    }
    h4{
        margin: 5px;
    }
    
    .container2{
        max-width: 500px;
        border-radius: 5px;
        height: 300px;
        margin: 10px;
        padding: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;