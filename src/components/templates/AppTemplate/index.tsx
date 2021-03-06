import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly header: React.ReactNode;
}

const AppTemplate: React.SFC<Props> = ({ header, children }) => (
  <Wrapper>
    <Header>{header}</Header>
    <Main>{children}</Main>
  </Wrapper>
);

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: main;
  overflow: auto;
`;

const Wrapper = styled.div`
  /* stylelint-disable declaration-colon-space-after, indentation */
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-template-columns: 100vw;
  grid-template-rows: calc(${props => props.theme.sizeBase} * 6) calc(
      100vh - ${props => props.theme.sizeBase} * 6
    );
  background-color: ${props => props.theme.grayLighter};
`;

export default AppTemplate;
