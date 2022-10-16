import styled from 'styled-components';

export const ItemContacts = styled.li`
  padding: 5px;
  margin: 0;
  display: flex;
`;
export const ContactName = styled.span`
  color: brown;
  font-size: 25px;
  font-style: italic;
  font-weight: 600;
  margin-right: 10px;
`;
export const ContactNumber = styled.a`
  color: brown;
  font-size: 25px;
  font-style: italic;
  font-weight: 600;
  text-decoration: none;
`;
export const BtnDelete = styled.a`
  font-size: 15px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-left: auto;
  font-weight: 400;
  background-color: #ee4e3c;
  cursor: pointer;
`;
export const Delete = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: white;
`;
