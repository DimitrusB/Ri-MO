import styled from "styled-components";

export const pImg = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  img {
    width: 200px;
    height: auto;
    margin: 0px;
  }

  // &:hover img {
  //   width: auto;
  //   height: 100px;
  // }
`;

export const mainArticle = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
`;

export const characterCard = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const itemCharacter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const mainDiv = styled.div`

`;
