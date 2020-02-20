import React from 'react';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import AddEditPersonForm from '../AddEditPersonForm';

const AddPersonPage = () => {
  const [{}, executeAddPerson] = useAxios(
    { url: '/api/person', method: 'POST' },
    {
      manual: true
    }
  );

  return (
    <Page hasNavigation>
      <Heading>Add new person</Heading>

      <AddEditPersonForm executeAddOrEditPerson={executeAddPerson} />
    </Page>
  );
};

export default AddPersonPage;
