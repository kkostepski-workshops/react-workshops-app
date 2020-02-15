import React from 'react';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';

const AddPersonPage = () => (
  <Page hasNavigation>
    <Heading>Add new person</Heading>

    <form novalidate>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
    </form>
  </Page>
);

export default AddPersonPage;
