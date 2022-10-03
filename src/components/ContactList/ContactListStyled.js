import styled from '@emotion/styled';

export const ListItemWrap = styled.li`
  display: flex;
  width: 300px;
  background-color: ${p => p.theme.colors.muted};
  justify-content: space-between;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${props => props.theme.space[2]}px;
`;

export const List = styled.ul`
  padding-left: ${p => p.theme.space[1]}px;
`;
