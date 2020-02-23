import styled from 'styled-components';

const Room = styled.div`
  padding: 15px;
  background-color: #c0c0c0;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const RoomHeading = styled.h4`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const Roommates = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export { Room, RoomHeading, Roommates };
