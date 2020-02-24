import React from 'react';
import { Formik, Form } from 'formik';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import DataTable from '../DataTable';
import Button from '../Button';
import Select from '../form/Select';

const AssignAttractionPage = () => {
  const [{ data: peopleData, loading: peopleLoading }] = useAxios(
    '/api/person',
    {
      useCache: false
    }
  );
  const [{ data: attractionsData, loading: attractionsLoading }] = useAxios(
    '/api/attraction',
    {
      useCache: false
    }
  );
  const [{ data: assignmentData, loading: assignmentDataLoading }] = useAxios(
    '/api/assignAttraction',
    {
      useCache: false
    }
  );
  const [
    { loading: assignAttractionLoading },
    executeAssingAttraction
  ] = useAxios(
    { url: '/api/assignAttraction', method: 'POST' },
    {
      manual: true
    }
  );

  if (peopleLoading || attractionsLoading || assignmentDataLoading) {
    return <Page hasNavigation>Loading...</Page>;
  }

  return (
    <Page hasNavigation>
      <Formik
        initialValues={assignmentData.data}
        onSubmit={values => {
          executeAssingAttraction({ data: values });
        }}
      >
        {() => (
          <Form>
            <Heading
              renderActions={[
                <Button type="submit" disabled={assignAttractionLoading}>
                  Save
                </Button>
              ]}
            >
              Assign attraction page
            </Heading>

            <DataTable
              data={peopleData.data}
              columns={[
                { name: 'name', label: 'Name' },
                { name: 'surname', label: 'Surname' }
              ]}
              renderActions={[
                id => (
                  <Select name={id} component={Select}>
                    <option>- empty -</option>
                    {attractionsData.data.map((attraction, index) => (
                      <option key={index} value={attraction._id}>
                        {attraction.name}
                      </option>
                    ))}
                  </Select>
                )
              ]}
            />
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default AssignAttractionPage;
