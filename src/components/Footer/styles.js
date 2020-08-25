import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  img {
    margin-left: 1rem;
    border-radius: 50%;
    height: auto;
    width: 2rem;
  }
`;

export default FooterBase;
