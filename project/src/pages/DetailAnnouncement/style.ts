import styled from "styled-components";

export const Container = styled.main`
  .container-main-detailAnnou {
    /* display: flex; */
    background-image: linear-gradient(
      to top,
      #f1f3f5 0,
      #f1f3f5 80%,
      #5126ea 20%
    );
    padding:50px 0px;
  }
  .container1 {
    display: flex;
    flex-direction: column;
  }
  .logoPrincipal {
    background-color: white;
    width: 95%;
    padding: 1rem;
    height: 16rem;
  }
  h1 {
    font-size: 20px;
    color: black;
    height: 3rem;
  }
  .descricao {
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    padding: 2rem;
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #495057;
        text-align: justify;
        word-wrap: break-word;
        width: 100%;
    }
  }
  .peapleComents {
    background: #FDFDFD;
    border-radius: 5px;
    margin: 10px;
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
  }
  .peapleComents-peap {
    display: flex;
    align-items: center;
  }
  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > textarea {
      border: 1px solid #cdcdcd;
      background-color: white;
      resize: none;
    }
  }
  textarea {
    padding: 10px;
    align-items: flex-start;
    height: 100px;
    font-size: 1rem;
  }
  .comentButton {
    background-color: #5126ea;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border-style: none;
    padding: 10px;
    position: inherit;
    display: flex;
    justify-content: center;
    width: 40%;
  }

  .box{
      display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    padding: 30px 40px;
    margin: 10px;
    height: 700px;
      height: 100%;
      background: #ffff;
      width: 100%;
    }
  .coments {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    background-color: white;
    border-radius: 5px;
    padding: 1.5rem 1rem;
    height: 700px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0px;   
        border: 1px solid ;
    }  
    }
  .fotoPrincipal {
    background-color: white;
    border-radius: 5px;
    margin: 5rem 10px 0px 10px;
    display: flex;
    justify-content: center;
  }
  .info {
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
    height: 15rem;
    gap: 20px;
    justify-content: space-around;
    span {
      background-color: #edeafd;
      color: #5126ea;
      border-radius: 5px;
      display: flex;
      font-size: 15px;
      padding: 0.2rem 0.5rem;
    }
    > button {
      padding: 0.2rem 0.5rem;
      justify-content: center;
      width: 100px;
      height: 38px;
    }
  }
  .info-text {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;
    flex-direction: column;
  }
  .info-text-span {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
  }
  .info > button {
    background-color: #5126ea;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border-style: none;
    padding: 10px;
  }
  > img {
    width: 400px;
    object-fit: contain;
    height: 300px;
    border: 10px solid white;
    background-color: #f1f3f5;
  }
  .container {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fotos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 400px;
    align-items: center;
    justify-content: center;
  }
  .details {
    width: 30%;
    height: 70px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .peapleAnnouncement {
    max-width: 500px;
    height: 25rem;
    gap: 1rem;
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .peapleAnnouncement-icon {
    border-radius: 50%;
  }
  aside {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .peapleAnnouncement-button {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .coments-name {
    display: flex;
    align-items: center;
  }
  h3 {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #edeafd;
  }
  h5 {
    color: gray;
    margin: 5px;
  }
  h4 {
    margin: 5px;
  }

  .container2 {
    padding: 2rem;
    max-width: 500px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    .info-text {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;
    flex-direction: row;
  }
    .container1 {
      margin: auto;
    }
    .container-main-desktop {
      display: flex;
      margin: auto;
      width: 95%;
      align-items: center;
      justify-content: center;
      margin-top: 3.8rem;
      flex-wrap: wrap;
    }
    .conteiner-first-desktop {
      width: 50%;
      .logoPrincipal {
        height: 20rem;
        width: 80%;
      }
    }
    .container2 {
      margin-bottom: 10px;
    }
    .container-second-desktop {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .container-third-desktop {
      padding: 10px;
      width: 87%;
      
      h2{
        font-weight: 600;
        font-size: 20px;
line-height: 25px;
        color: #212529;
        position: relative;
        z-index: 9999;
        inset: 0;

      }
    }
    aside {
    }
    .box{
      display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    height: 700px;
      height: 100%;
      background: #ffff;
      width: 56.5%;
    }
    .coments {
      display: flex;
      margin: 0;
      flex-direction: column;
      gap: 25px;
      width: 100%;
      height: 690px;
      overflow-y: auto;

    }
    .peapleComents {
      width: 57%;
    }
  }
`;
