import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 370px;
  max-width: 300px;

  margin-bottom: 20px;
  flex: none;
  .imageProduct {
    background: rgba(233, 236, 239, 1);
    margin-bottom: 20px;
    max-width: 95%;
    max-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 176px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      max-height: 160px;
    }
    figcaption {
      display: none;
    }
  }
  section {
    margin-bottom: 20px;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    > h3 {
      color: rgba(33, 37, 41, 1);
      font-size: 16px;
    }
    > p {
      margin: 10px 0px;
      color: rgba(73, 80, 87, 1);
      font-size: 14px;
      height: 3rem;
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

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-start;

  gap: 10px;
  width: 100%;
  font-size: 13.5px;
  color: #212529;

  .btn_edit {
    width: 80px;
    height: 38px;
    background: transparent;
    font-size: 13.5px;
    padding: 10px 10px;
    border: 1px solid #212529;
    border-radius: 4px;
    :active,
    :focus {
      color: #212529;
    }
  }
  .btn_see {
    background: transparent;
    font-size: 13.5px;
    padding: 12px 8px;
    width: 105px;
    height: 38px;
    border: 1px solid #212529;
  }
`;
