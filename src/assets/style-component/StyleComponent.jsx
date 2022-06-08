import styled from 'styled-components';

export const Button = styled.button`
border-radius: 1rem;
box-shadow:none;
font-size:1.5rem;
color:#000;
background:none;
border: none;
&:hover{
    color:#000;
    background:none;
    text-shadow: 1px 2px 2px rgba(0,0,0,.2);

}
&:active{
    background: none;
    border: none;
    box-shadow: none;
}
`