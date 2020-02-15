import React from 'react';
import useAxios from 'axios-hooks';
import { NavLink } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import Heading from '../../layouts/Heading';
import Page from '../../layouts/Page';
import * as Styled from './People.styles';

const PeoplePage = () => {
  const [{ data, loading, error }] = useAxios('/api/person');

  if (error) {
    return (
      <Page hasNavigation>
        <div>{`${error}`}</div>
      </Page>
    );
  }

  return (
    <Page hasNavigation>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Heading
            renderActions={() => (
              <Styled.ButtonAddNew>
                <NavLink to="/people/new">Add new person</NavLink>
              </Styled.ButtonAddNew>
            )}
          >
            People
          </Heading>

          <Styled.Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>

            <tbody>
              {data.data.map(({ _id, name, surname, email, gender }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{surname}</td>
                  <td>{email}</td>
                  <td>{gender}</td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>
        </>
      )}
    </Page>
  );
};

export default PeoplePage;
