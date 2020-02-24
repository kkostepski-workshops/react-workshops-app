import React, { useState, useEffect, useCallback } from 'react';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page/Page';
import Heading from '../../layouts/Heading';
import Button from '../../components/Button';
import * as Styled from './AssignRoomPage.styles';

const AssignRoomPage = () => {
  const [{ data: peopleData, loading: peopleDataLoading }] = useAxios(
    '/api/person',
    {
      useCache: false
    }
  );
  const [{ data: assignmentData, loading: assignmentDataLoading }] = useAxios(
    '/api/assignRoom',
    {
      useCache: false
    }
  );
  const [{ loading: assignRoomLoading }, executeAssingRoom] = useAxios(
    { url: '/api/assignRoom', method: 'POST' },
    {
      manual: true
    }
  );
  const [roomGroups, setRoomGroups] = useState([]);

  const getPerson = useCallback(
    id => {
      return peopleData.data.find(p => p._id === id) || {};
    },
    [peopleData]
  );

  const handleShuffleClick = () => {
    const groups = shuffle(peopleData.data);
    setRoomGroups(groups);
  };

  const handleClearShuffleClick = () => {
    setRoomGroups([]);
  };

  useEffect(() => {
    if (assignmentData) {
      setRoomGroups(assignmentData.data);
    }
  }, [assignmentData]);

  if (peopleDataLoading || assignmentDataLoading) {
    return <Page hasNavigation>Loading...</Page>;
  }

  return (
    <Page hasNavigation>
      <Heading
        renderActions={[
          <Button onClick={handleShuffleClick}>Shuffle</Button>,
          <Button onClick={handleClearShuffleClick}>Clear</Button>,
          <Button
            onClick={() => {
              executeAssingRoom({ data: { ids: roomGroups } });
            }}
            disabled={assignRoomLoading}
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
            {group.map(id => {
              const person = getPerson(id);
              return (
                <div key={id}>
                  {person.name} {person.surname}
                </div>
              );
            })}
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
  return people
    .map(p => p._id)
    .reduce(
      (acc, curr, index) =>
        (index % roomCount === 0
          ? acc.push([curr])
          : acc[acc.length - 1].push(curr)) && acc,
      []
    );
};

export default AssignRoomPage;
