import styled from 'styled-components';

export const Forma = styled.form`
  background-color: gold;
  width: 425px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;
  border-radius: 20px;
`;

export const ImgWrap = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const Images = styled.img`
  width: 150px;
  height: 180px;
  border-radius: 20px;
  display: flex;
  margin: 0;
`;
export const LableWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
`;
export const Label = styled.label`
  color: #2020a3;
  font-size: 25px;
  font-weight: 500;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  background-color: #ffffff;
  display: flex;
  width: 100px;
  height: 20px;
`;

export const Btn = styled.button`
  background-color: #e01818;
  display: flex;
  text-align: center;
  width: 170px;

  padding: 10px;
  border-radius: 10px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  margin-top: 20px;
`;
export const BtnText = styled.span`
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  color: #feffff;
  margin-left: auto;
  margin-right: auto;
`;
