import * as React from 'react';
import styled from 'styled';
import Icon from 'components/atoms/Icon';

const AddButton: React.SFC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Icon icon="add" />
      <span>{children}</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${props => props.theme.brandPrimary};
  padding: ${props => props.theme.sizeBase};

  svg {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0 ${props => props.theme.sizeBaseIconKerning} 0 0;
    > circle {
      fill: ${props => props.theme.white} !important;
    }
    > line {
      stroke: ${props => props.theme.brandPrimary} !important;
    }
  }

  span {
    display: block;
    color: ${props => props.theme.white};
    font-weight: bold;
    line-height: 1em;
  }
`;

export default AddButton;
