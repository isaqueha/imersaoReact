import styled from 'styled-components';

const ButtonLink = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: .3rem;
  margin: .3rem;
  font-style: normal;
  font-weight: bold;
  text-decoration: underline;
  font-size: 16px;
  outline: none;
  border-radius: 7px;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default ButtonLink;
