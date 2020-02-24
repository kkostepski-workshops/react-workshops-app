import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  padding: 0 20px;
`;

const DarkModeSwitch = styled.label`
  display: flex;
  align-items: center;
`;

const DarkModeSwitchLabel = styled.span`
  margin-right: 10px;
`;

export { Page, Header, DarkModeSwitch, DarkModeSwitchLabel };
