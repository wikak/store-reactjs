import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background-color:transparent;
border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props =>
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 25px;
padding: 0.2rem 0.5rem;
margin-right: 0.5rem;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
  background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color:var(--mainBlue)
}
&:focus {
  outline: none
}
`;
