import styled from 'styled-components';

export const CardContainer = styled.a`
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const IframeContainer = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const OverlayContainer = styled.a`
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
