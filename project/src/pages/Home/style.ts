import styled from "styled-components";

export const PresentationSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4%;
    gap: 52px;
    height: 520px;

    p{
        font-weight: 600;
        font-size: 35px;
        line-height: 40px;
        text-align: center;
    }
    span{
        line-height: 20px;
        text-align: center;

    }
    p, span, a, button{
        color: #FDFDFD;
    }


        background: #5126EA;

    @media (min-width: 590px) {
        p{
            width: 548px;
        }   
    }
`;

export const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;

    margin: 0 auto;
    gap: 10px;
    width: 100%;

    button, a{
        width: 100%;
    }

    @media (min-width: 350px) {
        flex-direction: row;
        button, a{
            width: 50%;
        }
    }

    @media (min-width: 434px) {
        width: 400px;
    }


    
`

export const ListSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4%;
    width: 100%;
`;

export const BoxContent = styled.div`
    width: 100%;
`
export const ContainerList = styled.ul`
    display: flex;
    overflow-x: auto;
    /* width: 100%; */
    gap: 5px;
    list-style-type: none;
    padding: 0;
`