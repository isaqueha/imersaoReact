import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Header />
      <Main paddingAll={paddingAll}>
        {/* <SimpleBar style={{ height: '80vh' }}> */}
        {children}
        {/* </SimpleBar> */}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
