import styled from 'styled-components';

const Text = styled.input.attrs({
  type: 'text',
})`
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 16px;
  border: solid 1px ${props => props.theme.grayMoreLight};
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizeHuge};
  color: ${props => props.theme.subTextColor};
  line-height: 1em;
  width: 100%;
`;

export default Text;
