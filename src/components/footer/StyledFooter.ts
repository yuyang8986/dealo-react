import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

export const FooterItemA = styled.a`
  :not(:last-child) {
    margin-right: 1rem;
  }

  color: inherit;
`;
