import React from 'react';
import useAxios from 'axios-hooks';
import { useParams, useHistory } from 'react-router-dom';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import AddEditAttractionForm from '../AddEditAttractionForm';

const EditAttractionPage = () => {
  const params = useParams();
  const history = useHistory();
  const [{ data, loading }] = useAxios(`/api/attraction/${params.id}`);
  const [{}, executeEditAttraction] = useAxios(
    { url: `/api/attraction/${params.id}`, method: 'PUT' },
    {
      manual: true
    }
  );

  if (loading) {
    return 'Loading...';
  }

  return (
    <Page hasNavigation>
      <Heading>Edit attraction</Heading>

      <AddEditAttractionForm
        executeAddOrEditAttraction={executeEditAttraction}
        initialValues={data.data}
        onComplete={() => {
          history.push('/attractions');
        }}
      />
    </Page>
  );
};

export default EditAttractionPage;
