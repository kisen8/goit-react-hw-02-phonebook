import styled from 'styled-components';

export const Forma = styled.form`
  background-color: gold;
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 5px;
  border-radius: 20px;
  /* margin: o auto; */
  /* padding: 20px; */
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
