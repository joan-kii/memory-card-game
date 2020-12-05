import styled from 'styled-components';

const CardStyled = styled.div`
  margin-top: 20px;
  box-shadow: 5px 2px 20px #457b9d;
  cursor: pointer;
  transition: transform 0.2s linear;
  :hover{
    transform: scale(1.03);
  };

  .title {
    color: white;
    background-image: radial-gradient(#457b9d, #457b9d, white);
    text-align: center;
    border-radius: 5px;
  }
`;

export default CardStyled;