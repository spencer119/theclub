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
  Dropdown,
  Radio,
  Card,
  Tooltip,
} from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import AbilityModal from './AbilityModal';

const SwimLessons = () => {
  {
    /* Beginner 1, 2, and 3, Parent and me  */
  }
  const [swimmerCount, setSwimmerCount] = useState(1);
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '', abilityLevel: '' }]);
  const [showModal, setShowModal] = useState(false);
  const addSwimmer = () => {
    setSwimmers([...swimmers, { firstName: '', lastName: '', abilityLevel: '' }]);
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
          {/* <Grid xs={4}>
            <Text h4>Swimmer</Text>
          </Grid>
          <Grid xs={8} justify='flex-end'>
            <Button auto light color='primary'>
              View ability descriptions
            </Button>
            <Spacer x={0.5} />
            <Button icon={<FaPlusCircle />} onClick={() => addSwimmer()} color='success' auto flat>
              Add swimmer
            </Button>
          </Grid> */}

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
                <Grid xs={12}>
                  <Radio.Group size='xs' orientation='horizontal'>
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
                  <Radio.Group size='xs' orientation='horizontal'>
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
            <Button size='lg' light color='primary' onClick={() => setShowModal(!showModal)}>
              View ability level descriptions
            </Button>
          </Grid>
          <Spacer y={1} />
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
        <Spacer y={2} />

        <Text h2 css={{ textAlign: 'center' }}>
          Ability Levels
        </Text>

        <Text h4>Beginner 1</Text>
        <Text>
          This class is designed for children that are unable to go under the water or are fearful.
          Students will be introduced to front and back floating, gliding, breathing and freestyle.
        </Text>
        <Spacer y={0.8} />
        <Text h4>Beginner 2</Text>
        <Text>
          This class is designed for children that are already adjusted to the water (
          <i>able to go under independently</i>) and may be able to swim a short distance
          independently but lack breathing. Students will review front and back floating, gliding,
          and be introduced to breathing, freestyle and backstroke.
        </Text>
        <Spacer y={0.8} />
        <Text h4>Beginner 3</Text>
        <Text>
          This class is designed for children that are able to swim but lack endurance, build
          confidence in the deep end or proper technique. Students will improve their freestyle and
          backstroke, reinforce proper breathing technique, and be introduced to diving.
        </Text>
        <Spacer y={0.8} />
        <Text h4>Parent and Me</Text>
        <Text>
          This class is designed for children 12 months-36 months. Swim diaper/plastic pants are
          required. Parents will be instructed with their children about water safety and beginning
          swimming skills through songs and water play. Parent must be in the water. (Limited to 10)
        </Text>
      </Container>
    </>
  );
};

export default SwimLessons;
