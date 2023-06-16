import React, { useState } from 'react';
import { Grid, Input, Container, Text, Checkbox, Row, Button } from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const SwimTeam = () => {
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '', age: '0' }]);

  const addSwimmer = () => {
    setSwimmers([...swimmers, { firstName: '', lastName: '' }]);
    // let newArr = swimmers;
    // newArr.push({ firstName: '', lastName: '' });
    // setSwimmers(newArr);
  };
  const updateSwimmers = (e, index) => {
    let newArr = [...swimmers];
    newArr.at(index)[e.target.name] = e.target.value;
    setSwimmers(newArr);
  };
  const removeSwimmer = (index) => {
    let newArr = [...swimmers];
    newArr.splice(index, 1);
    setSwimmers(newArr);
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
              <>
                <Grid xs={5}>
                  <Input fullWidth label='First Name' placeholder='Swimmer First Name' />
                </Grid>
                <Grid xs={4}>
                  <Input fullWidth label='Last Name' placeholder='Swimmer Last Name' />
                </Grid>
                <Grid xs={2}>
                  <Input
                    type='number'
                    fullWidth
                    label='Age'
                    placeholder='0'
                    onChange={(e) => updateSwimmers(e, 0)}
                  />
                </Grid>
                <Grid xs={1}></Grid>
              </>
            ) : (
              <>
                <Grid xs={5}>
                  <Input fullWidth placeholder='Swimmer First Name' />
                </Grid>
                <Grid xs={4}>
                  <Input fullWidth placeholder='Swimmer Last Name' />
                </Grid>
                <Grid xs={2}>
                  <Input
                    type='number'
                    fullWidth
                    placeholder='0'
                    onChange={(e) => updateSwimmers(e, 0)}
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
              </>
            );
          })}
          <Grid xs={12} justify='flex-start'>
            <Text h4>Parent</Text>
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='First Name' />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Last Name' />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Email' contentRight={<MdEmail />} />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Phone' contentRight={<MdLocalPhone />} />
          </Grid>
          <Grid xs={12} justify='flex-start'>
            <Checkbox size='sm'>
              Are you interested in recieving future emails about swim team signups?
            </Checkbox>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default SwimTeam;
