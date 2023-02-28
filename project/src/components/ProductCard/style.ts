import styled from "styled-components";

export const Container = styled.div`
  width: 312px;
  height: 350px;
  margin-bottom: 20px;
  flex: none;
  .imageProduct {
    background: rgba(233, 236, 239, 1);
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  section {
    margin-bottom: 20px;
    > h3 {
      color: rgba(33, 37, 41, 1);
      font-size: 16px;
    }
    > p {
      color: rgba(73, 80, 87, 1);
      font-size: 14px;
    }
  }
  .userConteiner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }

  .logoName {
    display: flex;
    border-radius: 50%;
    background-color: rgba(69, 41, 230, 1);
    justify-content: center;
    align-items: center;
    color: rgba(233, 236, 239, 1);
    width: 32px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
  }

  .infoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .kmAndAge {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 40%;
    }
    .km {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(237, 234, 253, 1);
      color: rgba(69, 41, 230, 1);
      width: 51px;
      font-size: 14px;
      height: 32px;
    }
    .age {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(237, 234, 253, 1);
      color: rgba(69, 41, 230, 1);
      width: 51px;
      height: 32px;
      font-size: 14px;
    }
    .price {
      font-family: "Lexend";
      font-size: 16px;
      color: rgba(33, 37, 41, 1);
      font-weight: 500;
    }
  }
`;
