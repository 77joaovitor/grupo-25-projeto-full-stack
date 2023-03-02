import styled from "styled-components";

export const Container = styled.div`
    background-color: #f1f3f5 ;

    display: flex;
    justify-content: center;

    padding: 30px;


form{
    background-color: white;

    width: 500px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input{
    width: 300px;
}
span{
    margin-top: 20px;
    font-weight: 500;
}
.formText{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 65%;
    margin-bottom: 30px;
}
h2{
    padding-bottom: 8px;
    margin-top: 15px;
}
.spanType{
    margin-bottom: 20px;
}
.formButton{
    display: flex;
}

    button{
        background-color: #5126ea;
        color: white;
        border-radius: 5px;
        border-style: none;

        margin: 5px;
        width: 200px;
        height:50px;
        padding: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
    .buttonWhite{
        background-color: white;
        color: black;
        border-radius: 5px;
        border-color: black;
        border: black solid 1px;

    }
    .buttonFinaly {
        background-color: #5126ea;
        color: white;
        border-radius: 5px;
        border-style: none;

        width: 300px;
        height:50px;
        margin: 30px;
        padding: 10px;
    

        display: flex;
        align-items: center;
        justify-content: center;

        
    }


`;
