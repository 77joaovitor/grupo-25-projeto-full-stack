import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;    

  input, textarea {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 100%;
    /* background: #ffffff; */
    color: #000000;
    border: 1px solid #E9ECEF;
    border-radius: 4px;
    :focus, :focus-visible{
      outline: none;
    }
  };

 textarea{
    height: 80px;

  }

  .box_input_error {
    display: flex;
    flex-direction: column;
    
    height: 78px;
    gap: 10px;
    .eye{
      position: relative;
      top: 0;
    }
  }
  .box_description{
    display: flex;
    flex-direction: column;
    
    textarea{
      gap: 10px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      /* height: 140px; */
    }

}
  .dropdown {
      position: relative;
      top: 5px;
      display: inline-block;
      height:  16px;
      margin-left: 10px;
      
      .svg{
        color:red;

        width: 10px;
      }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: white;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;
    border-radius: 0.15vw;

    color:red;
    margin: 0;

    p {
        font-size: 60%;
        width: fit-content;
        margin: 0;
        line-height: 20px;
    }
  }

  .dropdown:hover .dropdown-content {
      display: block;
  }
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid;
`

export const ErrorsSpan = styled.span`
  font-size: 8px;
  margin: 0;
`;

