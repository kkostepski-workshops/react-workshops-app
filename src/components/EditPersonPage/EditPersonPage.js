import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router-dom';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import AddEditPersonForm from '../AddEditPersonForm';

const AddPersonPage = () => {
  const params = useParams();
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
      />
    </Page>
  );
};

export default AddPersonPage;
