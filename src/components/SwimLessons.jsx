import React, { useState } from 'react';
import { Grid, Input, Container, Text, Button, Spacer, Row } from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const SwimLessons = () => {
  {
    /* Beginner 1, 2, and 3, Parent and me  */
  }
  const [swimmerCount, setSwimmerCount] = useState(1);
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '' }]);

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
            <Text h2>Swim Lesson Signups</Text>
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
          {/* <Grid xs={6}>
            <Input fullWidth placeholder='First Name' />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Last Name' />
          </Grid> */}
          {swimmers.map((swimmer, index) => {
            return index === 0 ? (
              <React.Fragment key={index}>
                <Grid xs={6}>
                  <Input
                    id={index}
                    aria-label='First Name'
                    onChange={(e) => updateSwimmers(e, index)}
                    fullWidth
                    value={swimmers[index].firstName}
                    name='firstName'
                    label='First Name'
                    placeholder="Enter the swimmer's first name"
                  />
                </Grid>
                <Grid xs={6}>
                  <Input
                    id={index}
                    fullWidth
                    label='Last Name'
                    aria-label='Last Name'
                    value={swimmers[index].lastName}
                    placeholder="Enter the swimmer's last name"
                    // placeholder={`Swimmer #${index + 1} Last Name`}
                    onChange={(e) => updateSwimmers(e, index)}
                    name='lastName'
                  />
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <Grid xs={6}>
                  <Input
                    id={index}
                    aria-label='First Name'
                    onChange={(e) => updateSwimmers(e, index)}
                    fullWidth
                    value={swimmers[index].firstName}
                    name='firstName'
                    placeholder={`Swimmer #${index + 1} First Name`}
                  />
                </Grid>
                <Grid xs={5}>
                  <Input
                    id={index}
                    fullWidth
                    aria-label='Last Name'
                    value={swimmers[index].lastName}
                    placeholder={`Swimmer #${index + 1} Last Name`}
                    onChange={(e) => updateSwimmers(e, index)}
                    name='lastName'
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
          <Spacer y={1} />
          <Grid xs={12} justify='center'>
            <Button>Submit</Button>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default SwimLessons;
