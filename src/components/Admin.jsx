import React, { useEffect, useState } from 'react';
import {
  Container,
  Loading,
  Table,
  Text,
  Grid,
  Spacer,
} from '@nextui-org/react';
import { collection, getDocs } from 'firebase/firestore';
const Admin = ({ db }) => {
  const [signups, setSignups] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const getData = async () => {
    const q = await getDocs(collection(db, 'swim-lessons'));
    let arr = [];
    q.forEach((doc) => {
      arr.push(doc.data());
    });
    setSignups(arr);
    setLoaded(true);
  };
  useEffect(() => {
    getData();
  }, []);
  if (!loaded)
    return (
      <>
        <Container
          sm
          display='flex'
          justify='center'
          alignContent='center'
          alignItems='center'
          css={{ mt: 35 }}
        >
          <div style={{ display: 'block' }}>
            <Text h3>Loading...</Text>
            <Spacer y={2} />
            <Loading size='xl' />
          </div>
        </Container>
      </>
    );
  return (
    <>
      <Container sm css={{ mt: 5 }}>
        <Table
          aria-label='Swim Lessons'
          selectionMode='multiple'
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
          striped
        >
          <Table.Header>
            <Table.Column>Parent Name</Table.Column>
            <Table.Column>Swimmer Name</Table.Column>
            <Table.Column>Age</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Member</Table.Column>
          </Table.Header>
          <Table.Body>
            {signups.map((signup) => (
              <Table.Row key={signup.email}>
                <Table.Cell>
                  {signup.parentFirst} {signup.parentLast}
                </Table.Cell>
                <Table.Cell>{signup.parentFirst}</Table.Cell>
                <Table.Cell>{signup.swimmerFirst}</Table.Cell>
                <Table.Cell>{signup.email}</Table.Cell>
                <Table.Cell>{signup.phone}</Table.Cell>
                <Table.Cell>{signup.isMember ? 'Yes' : 'No'}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Pagination
            shadow
            noMargin
            align='center'
            rowsPerPage={10}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </Container>
    </>
  );
};

export default Admin;
