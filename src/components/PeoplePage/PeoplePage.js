import React from 'react';
import useAxios from 'axios-hooks';
import { NavLink } from 'react-router-dom';

import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Heading from '../../layouts/Heading';
import Page from '../../layouts/Page';
import DataTable from '../DataTable';

const PeoplePage = () => {
  const [{ data, loading, error }, refetchPeople] = useAxios('/api/person', {
    useCache: false
  });
  const [{}, executeDeletePerson] = useAxios(
    {
      method: 'DELETE'
    },
    {
      manual: true
    }
  );

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
            renderActions={[
              <Button>
                <NavLink to="/people/new">Add new person</NavLink>
              </Button>
            ]}
          >
            People
          </Heading>

          <DataTable
            data={data.data}
            columns={[
              { name: 'name', label: 'Name' },
              { name: 'surname', label: 'Surname' },
              { name: 'email', label: 'Email' },
              { name: 'gender', label: 'Gender' }
            ]}
            renderActions={[
              id => <NavLink to={`/people/edit/${id}`}>edit</NavLink>,
              id => (
                <a
                  href="#remove"
                  onClick={async e => {
                    e.preventDefault();
                    await executeDeletePerson({
                      data: { id },
                      url: `/api/person/${id}`
                    });
                    refetchPeople();
                  }}
                >
                  remove
                </a>
              )
            ]}
          />
        </>
      )}
    </Page>
  );
};

export default PeoplePage;
