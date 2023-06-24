import React, { useState } from 'react';
import { Grid, Input, Container, Text, Checkbox, Row, Button } from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import validator from 'validator';
import { addSignup } from '../App';
const SwimTeam = ({ addSignup }) => {
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '', age: '0' }]);
  const [parent, setParent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    futureEmails: false,
  });
  const toggleEmail = (e) => {
    let newArr = { ...parent };
    newArr.futureEmails = e;
    setParent(newArr);
  };
  const addSwimmer = () => {
    setSwimmers([...swimmers, { firstName: '', lastName: '', age: '0' }]);
  };
  const updateSwimmers = (e, index) => {
    console.log(index);
    let newArr = [...swimmers];
    newArr.at(index)[e.target.name] = e.target.value;
    setSwimmers(newArr);
  };
  const removeSwimmer = (index) => {
    let newArr = [...swimmers];
    newArr.splice(index, 1);
    setSwimmers(newArr);
  };
  const updateParent = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setParent({ ...parent, firstName: e.target.value });
        break;
      case 'lastName':
        setParent({ ...parent, lastName: e.target.value });
        break;
      case 'email':
        setParent({ ...parent, email: e.target.value });
        break;
      case 'phone':
        setParent({ ...parent, phone: e.target.value });
        break;
      default:
        break;
    }
  };
  const submitSignup = () => {
    swimmers.forEach((swimmer) => {
      if (
        swimmer.firstName !== '' &&
        swimmer.lastName !== '' &&
        swimmer.age !== '' &&
        swimmer.age !== '0' &&
        parent.firstName !== '' &&
        parent.lastName !== '' &&
        validator.isEmail(parent.email) &&
        validator.isMobilePhone(parent.phone)
      ) {
        // Call the addSignup function from App.js
      } else {
        console.log(swimmer, parent);
        return alert('Please fill out all fields');
      }
      console.log(swimmers, parent);
    });
  };
  return (
    <>
      <Container xs css={{ mt: 5 }}>
        <Grid.Container justify='center' gap={1}>
          <Grid xs={12} justify='center'>
            <Link to='/'>
              <GrSwim size={64} />
            </Link>
          </Grid>
          <Grid xs={12} justify='center'>
            <Text h2>Swim Team Signups</Text>
          </Grid>
          <Grid xs={12} justify='flex-start' alignContent='center' alignItems='center'>
            <Row justify='space-between'>
              <Text h4>Swimmer</Text>
              <>
                <Button
                  icon={<FaPlusCircle />}
                  onClick={() => addSwimmer()}
                  color='success'
                  auto
                  flat
                >
                  Add swimmer
                </Button>
              </>
            </Row>
          </Grid>
          {swimmers.map((swimmer, index) => {
            return index === 0 ? (
              <React.Fragment key={index}>
                <Grid xs={5}>
                  <Input
                    fullWidth
                    label='First Name'
                    name='firstName'
                    aria-label='First Name'
                    placeholder='Swimmer First Name'
                    value={swimmers[index].firstName}
                    onChange={(e) => updateSwimmers(e, index)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Input
                    fullWidth
                    name='lastName'
                    label='Last Name'
                    placeholder='Swimmer Last Name'
                    aria-label='Last Name'
                    value={swimmers[index].lastName}
                    onChange={(e) => updateSwimmers(e, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <Input
                    type='number'
                    fullWidth
                    name='age'
                    label='Age'
                    aria-label='Age'
                    placeholder='0'
                    onChange={(e) => updateSwimmers(e, 0)}
                  />
                </Grid>
                <Grid xs={1}></Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <Grid xs={5}>
                  <Input
                    fullWidth
                    placeholder='Swimmer First Name'
                    name='firstName'
                    aria-label='First Name'
                    value={swimmers[index].firstName}
                    onChange={(e) => updateSwimmers(e, index)}
                  />
                </Grid>
                <Grid xs={4}>
                  <Input
                    fullWidth
                    name='lastName'
                    aria-label='Last Name'
                    placeholder='Swimmer Last Name'
                    value={swimmers[index].lastName}
                    onChange={(e) => updateSwimmers(e, index)}
                  />
                </Grid>
                <Grid xs={2}>
                  <Input
                    type='number'
                    aria-label='Age'
                    name='age'
                    fullWidth
                    placeholder='0'
                    onChange={(e) => updateSwimmers(e, index)}
                  />
                </Grid>
                <Grid xs={1}>
                  <Button
                    auto
                    color='error'
                    icon={<FaMinusCircle />}
                    light
                    rounded
                    ripple={false}
                    onClick={() => removeSwimmer(index)}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid xs={12} justify='flex-start'>
            <Text h4>Parent</Text>
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              placeholder='First Name'
              aria-label='First Name'
              value={parent.firstName}
              id='firstName'
              onChange={updateParent}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              aria-label='Last Name'
              placeholder='Last Name'
              value={parent.lastName}
              onChange={updateParent}
              id='lastName'
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              aria-label='Email'
              placeholder='Email'
              contentRight={<MdEmail />}
              value={parent.email}
              onChange={updateParent}
              id='email'
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              aria-label='Phone'
              placeholder='Phone'
              contentRight={<MdLocalPhone />}
              value={parent.phone}
              onChange={updateParent}
              id='phone'
            />
          </Grid>
          <Grid xs={12} justify='flex-start'>
            <Checkbox size='sm' value={parent.futureEmails} onChange={toggleEmail}>
              Are you interested in recieving future emails about swim team signups?
            </Checkbox>
          </Grid>
          <Grid xs={12} justify='center'>
            <Button color='primary' onClick={submitSignup}>
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default SwimTeam;
