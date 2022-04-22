import styled, { css } from "styled-components";

interface TabsProps {
  readonly isSelected: Boolean;
}

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(211, 214, 219);
`

export const TabsTitleTextDiv = styled.div<TabsProps>`
  :not(:last-child) {
    margin-right: 1rem;
  }

  padding-bottom: 0.6rem;

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 2px solid orange;
      font-weight: 500;
    `}
`;
