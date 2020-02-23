import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page/Page';
import Heading from '../../layouts/Heading';
import Button from '../../components/Button';
import * as Styled from './AssignRoomPage.styles';

const AssignRoomPage = () => {
  const [{ data, loading }] = useAxios('/api/person', {
    useCache: false
  });
  const [{ assignRoomLoading }, executeAssingRoom] = useAxios(
    { url: `/api/assignRoom`, method: 'POST' },
    {
      manual: true
    }
  );
  const [roomGroups, setRoomGroups] = useState([]);

  if (loading) {
    return 'Loading...';
  }

  const handleShuffleClick = () => {
    const groups = shuffle(data.data);
    setRoomGroups(groups);
  };

  return (
    <Page hasNavigation>
      <Heading
        renderActions={[
          <Button onClick={handleShuffleClick}>Shuffle</Button>,
          <Button
            onClick={() => {
              executeAssingRoom();
            }}
            disabled={roomGroups.length === 0 || assignRoomLoading}
          >
            Save
          </Button>
        ]}
      >
        Assign room page
      </Heading>

      {roomGroups.length === 0 && 'No rooms assigned. Click "Shuffle" button.'}

      {roomGroups.map((group, index) => (
        <Styled.Room key={index}>
          <Styled.RoomHeading>Room #{index + 1}</Styled.RoomHeading>

          <Styled.Roommates>
            {group.map(person => (
              <div key={person._id}>
                {person.name} {person.surname}
              </div>
            ))}
          </Styled.Roommates>
        </Styled.Room>
      ))}
    </Page>
  );
};

const shuffle = (data = []) => {
  const dataShuffled = data
    .map(value => ({ sort: Math.random(), value }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  const peopleMale = groupPeople(
    dataShuffled.filter(person => person.gender === 'male')
  );
  const peopleFemale = groupPeople(
    dataShuffled.filter(person => person.gender === 'female')
  );

  return [...peopleMale, ...peopleFemale];
};

const groupPeople = (people, roomCount = 2) => {
  return people.reduce(
    (acc, curr, index) =>
      (index % roomCount === 0
        ? acc.push([curr])
        : acc[acc.length - 1].push(curr)) && acc,
    []
  );
};

export default AssignRoomPage;
