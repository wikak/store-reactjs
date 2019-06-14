import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background-color:transparent;
border-radius: 25px;
padding: 0.2rem 0.5rem;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
  background:var(--lightBlue);
  color:var(--mainBlue)
}
&:focus {
  outline: none
}
`;
