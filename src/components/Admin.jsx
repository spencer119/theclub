import { Container, Grid, Text, Table, Input, Spacer, Dropdown } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [filter, setFilter] = useState('Filter');
  const [filterText, setFilterText] = useState('');

  const onFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const tableSort = () => {};

  return (
    <>
      <Container lg css={{ mt: 75 }}>
        <Grid.Container gap={2}>
          <Grid xs={11}>
            <Input
              clearable
              fullWidth
              value={filterText}
              onChange={onFilterText}
              placeholder='Search...'
            />
          </Grid>
          <Grid xs={1}>
            <Dropdown>
              <Dropdown.Button>Filter</Dropdown.Button>
              <Dropdown.Menu>
                <Dropdown.Item key='Swim Lessons'>Swim Lessons</Dropdown.Item>
                <Dropdown.Item key='Swim Team'>Swim Team</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <Table selectionMode='multiple' css={{ height: 'auto', minWidth: '100%' }}>
          <Table.Header>
            <Table.Column>Swimmer</Table.Column>
            <Table.Column>Age</Table.Column>
            <Table.Column>Parent</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Ability</Table.Column>
            <Table.Column>Class</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key='1'>
              <Table.Cell>Swimmer 1</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Parent 1</Table.Cell>
              <Table.Cell>parentemail1@email.com</Table.Cell>
              <Table.Cell>(123)-456-7890</Table.Cell>
              <Table.Cell>Beginner 1</Table.Cell>
              <Table.Cell>Swim Lesson</Table.Cell>
            </Table.Row>
            <Table.Row key='2'>
              <Table.Cell>Swimmer 2</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Parent 2</Table.Cell>
              <Table.Cell>parentemail2@email.com</Table.Cell>
              <Table.Cell>(123)-456-7890</Table.Cell>
              <Table.Cell>Beginner 2</Table.Cell>
              <Table.Cell>Swim Lesson</Table.Cell>
            </Table.Row>
            <Table.Row key='3'>
              <Table.Cell>Swimmer 3</Table.Cell>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>Parent 3</Table.Cell>
              <Table.Cell>parentemail3@email.com</Table.Cell>
              <Table.Cell>(123)-456-7890</Table.Cell>
              <Table.Cell>N/A</Table.Cell>
              <Table.Cell>Swim Team</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
