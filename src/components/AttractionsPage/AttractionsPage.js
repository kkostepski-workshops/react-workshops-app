import React from 'react';
import useAxios from 'axios-hooks';
import { NavLink } from 'react-router-dom';

import Button from '../../components/Button'
import Spinner from '../../components/Spinner';
import Heading from '../../layouts/Heading';
import Page from '../../layouts/Page';
import DataTable from '../DataTable';

const AttractionsPage = () => {
  const [{ data, loading, error }, refetchAttractions] = useAxios('/api/attraction', {
    useCache: false
  });
  const [{}, executeDeleteAttraction] = useAxios(
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
            renderActions={() => (
              <Button>
                <NavLink to="/attractions/new">Add attraction</NavLink>
              </Button>
            )}
          >
            Attractions
          </Heading>

          <DataTable
            data={data.data}
            columns={[
              { name: 'name', label: 'Name' },
            ]}
            renderActions={[
              id => <NavLink to={`/attractions/edit/${id}`}>edit</NavLink>,
              id => (
                <a
                  href="#remove"
                  onClick={async e => {
                    e.preventDefault();
                    await executeDeleteAttraction({
                      data: { id },
                      url: `/api/attraction/${id}`
                    });
                    refetchAttractions();
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

export default AttractionsPage;
