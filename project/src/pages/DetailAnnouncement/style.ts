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
    /* justify-content: center; */
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
  }
  .peapleComents {
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
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
    width: 35%;
  }
  .coments {
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    padding: 2rem;
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
    padding: 20px;
    height: 15rem;
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
      width: 40%;
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
      width: 85%;
    }
    aside {
    }
    .coments {
      width: 57%;
    }
    .peapleComents {
      width: 57%;
    }
  }
`;
