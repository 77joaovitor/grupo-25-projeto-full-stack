import styled from "styled-components";

export const ListComment = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    width: 100%;
    /* height: fit-content; */
    border-bottom: 1px dashed  #868E96;

    h4{
        font-weight: 500;
        font-size: 14px;
        color: #212529;

    }

    .days{
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: #868E96;

    }
    .point{
        width: 4px;
        height: 4px;
        left: 129px;
        top: 14px;
        border-radius: 50%;
       background: #ADB5BD;
    }
    span{
        color: #ffff;
    }
    p{
        /* height: fit-content; */
        padding: 10px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #495057;
        text-align: justify;
        word-wrap: break-word;
        width: 100%;
    }
`

export const BoxUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`