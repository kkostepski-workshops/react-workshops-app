import React from 'react';
import useAxios from 'axios-hooks';
import { useHistory } from 'react-router-dom';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import AddEditAttractionForm from '../AddEditAttractionForm';

const AddAttractionPage = () => {
  const history = useHistory();
  const [{}, executeAddAttraction] = useAxios(
    { url: '/api/attraction', method: 'POST' },
    {
      manual: true
    }
  );

  return (
    <Page hasNavigation>
      <Heading>Add new attraction</Heading>

      <AddEditAttractionForm
        executeAddOrEditAttraction={executeAddAttraction}
        onComplete={() => {
          history.push('/attractions');
        }}
      />
    </Page>
  );
};

export default AddAttractionPage;
