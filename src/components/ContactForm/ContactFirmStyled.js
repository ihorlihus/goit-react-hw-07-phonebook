import styled from '@emotion/styled';

export const ContactFormWrap = styled.form`
  display: flex;
  width: max-content;
  flex-direction: column;
  background-color: ${p => p.theme.colors.muted};
  gap: ${props => props.theme.space[2]}px;
  margin-left: ${p => p.theme.space[1]}px;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  input:focus,
  input:hover {
    outline: none;
    border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.primary};
  }
`;
