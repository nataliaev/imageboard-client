import styled from "styled-components";

export const ImgBox = styled.div`
  box-sizing: content-box;
  margin: 10px;
  height: 250px;
  width: 350px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  ${ImgBox}:hover & {
    transform: translateY(-20px);
    opacity: 1;
  }
`;
export const TransparentBox = styled.div`
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
  ${ImgBox}:hover & {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 350px;
  transform: scale(1);
  transition: transform 0.4s ease;
  ${ImgBox}:hover & {
    transform: scale(1.1);
  }
`;
