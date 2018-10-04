import * as React from 'react';
import styled from 'styled';
import { FolderEntities } from 'models';
import CareReceiverInfoDetailItem from 'containers/CareReceiverInfoDetailItem';

export interface Props {
  readonly folderContentIds: FolderEntities['id'][];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoDetailList: React.SFC<Props> = ({
  folderContentIds,
  onClick,
}) => (
  <List>
    {folderContentIds.map(folderContentId => (
      <Item key={folderContentId}>
        <CareReceiverInfoDetailItem
          folderContentId={folderContentId}
          onClick={onClick}
        />
      </Item>
    ))}
  </List>
);

CareReceiverInfoDetailList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled<{}, 'li'>('li')`
  border-top: solid 1px ${props => props.theme.borderColor};
  border-bottom: solid 1px ${props => props.theme.borderColor};

  & + & {
    border-top: 0;
  }
`;

export default CareReceiverInfoDetailList;
