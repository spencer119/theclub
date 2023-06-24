import React, { useState } from 'react';
import {
  Grid,
  Input,
  Container,
  Text,
  Button,
  Spacer,
  Row,
  Checkbox,
  Radio,
} from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import AbilityModal from './AbilityModal';

const SwimLessons = () => {
  const [swimmerCount, setSwimmerCount] = useState(1);
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '', abilityLevel: '' }]);
  const [parent, setParent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    futureEmails: false,
  });
  const [showModal, setShowModal] = useState(false);
  const addSwimmer = () => {
    setSwimmers([...swimmers, { firstName: '', lastName: '', abilityLevel: '' }]);
  };
  const updateSwimmers = (e, index) => {
    let newArr = [...swimmers];
    newArr.at(index)[e.target.name] = e.target.value;
    setSwimmers(newArr);
  };
  const updateAbility = (e, index) => {
    let newArr = [...swimmers];
    newArr.at(index)['abilityLevel'] = e;
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
  const submitSignup = () => {};

  return (
    <>
      <AbilityModal showModal={showModal} setShowModal={setShowModal} />
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
                  size='sm'
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
                <Grid xs={12}>
                  <Radio.Group
                    size='xs'
                    orientation='horizontal'
                    value={swimmers[index].abilityLevel}
                    onChange={(e) => updateAbility(e, index)}
                    defaultValue='1'
                  >
                    <Radio value='0'>Parent and Me</Radio>
                    <Radio value='1'>Beginner 1</Radio>
                    <Radio value='2'>Beginner 2</Radio>
                    <Radio value='3'>Beginner 3</Radio>
                  </Radio.Group>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <Grid xs={6} css={{ mt: 25 }}>
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
                <Grid xs={5} css={{ mt: 25 }}>
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
                <Grid xs={1} css={{ mt: 25 }}>
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
                <Grid xs={12}>
                  <Radio.Group
                    size='xs'
                    orientation='horizontal'
                    value={swimmers[index].abilityLevel}
                    onChange={(e) => updateAbility(e, index)}
                  >
                    <Radio value='0'>Parent and Me</Radio>
                    <Radio value='1'>Beginner 1</Radio>
                    <Radio value='2'>Beginner 2</Radio>
                    <Radio value='3'>Beginner 3</Radio>
                  </Radio.Group>
                </Grid>
              </React.Fragment>
            );
          })}
          <Spacer y={1} />
          <Grid xs={12} justify='center'>
            <Button size='lg' color='primary' onClick={() => setShowModal(!showModal)}>
              View ability level descriptions
            </Button>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12} justify='flex-start'>
            <Text h4>Parent</Text>
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              placeholder='First Name'
              value={parent.firstName}
              onChange={updateParent}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              placeholder='Last Name'
              value={parent.lastName}
              onChange={updateParent}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              placeholder='Email'
              contentRight={<MdEmail />}
              value={parent.email}
              onChange={updateParent}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              fullWidth
              placeholder='Phone'
              contentRight={<MdLocalPhone />}
              value={parent.phone}
              onChange={updateParent}
            />
          </Grid>
          <Grid xs={12} justify='flex-start'>
            <Checkbox size='sm'>
              Are you interested in recieving future emails about swim team signups?
            </Checkbox>
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
