import React from 'react';
import useAxios from 'axios-hooks';
import { useParams, useHistory } from 'react-router-dom';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import AddEditPersonForm from '../AddEditPersonForm';

const AddPersonPage = () => {
  const params = useParams();
  const history = useHistory();
  const [{ data, loading }] = useAxios(`/api/person/${params.id}`);
  const [{}, executeEditPerson] = useAxios(
    { url: `/api/person/${params.id}`, method: 'PUT' },
    {
      manual: true
    }
  );

  if (loading) {
    return 'Loading...';
  }

  return (
    <Page hasNavigation>
      <Heading>Edit person</Heading>

      <AddEditPersonForm
        executeAddOrEditPerson={executeEditPerson}
        initialValues={data.data}
        onComplete={() => {
          history.push('/people');
        }}
      />
    </Page>
  );
};

export default AddPersonPage;
