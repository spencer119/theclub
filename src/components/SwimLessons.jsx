import React, { useState } from 'react';
import { Grid, Input, Container, Text, Button, Spacer, Row, Checkbox } from '@nextui-org/react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { GrSwim } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import validator from 'validator';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
const SwimLessons = ({ db }) => {
  {
    /* Beginner 1, 2, and 3, Parent and me  */
  }
  const [swimmerCount, setSwimmerCount] = useState(1);
  const [swimmers, setSwimmers] = useState([{ firstName: '', lastName: '', age: 0 }]);
  const [parentFirst, setParentFirst] = useState('');
  const [parentLast, setParentLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isMember, setIsMember] = useState(false);
  const [groupLessons, setGroupLessons] = useState(false);
  const [privateLessons, setPrivateLessons] = useState(false);

  const validate = () => {
    let valid = true;
    swimmers.forEach(s => {
      if (s.firstName === '' || s.lastName === '' || s.age === 0 || s.age === '') {
        valid = false;
      }
    })
    if (parentFirst === '' || parentLast === '') {
      return false;
    }
    if (!validator.isEmail(email)) {
      return false;
    }
    if (!validator.isMobilePhone(phone)) {
      return false;
    }
    if (!valid) alert('Please ensure all swimmer fields are filled out')
    return true;
  }
  const submit = async () => {
    if (validate()) {
      const res = await addDoc(collection(db, 'swim-lessons'), {
        parentFirst,
        parentLast,
        email,
        phone,
        swimmers
      })
      console.log(res)
    } else alert('Please fill out all fields')
  }

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
      <Container sm css={{ mt: 5 }}>
        <Grid.Container justify='center' gap={1}>
          <Grid xs={12} justify='center'>
            {/* <Link to='/'>
              <GrSwim size={64} />
            </Link> */}
            <GrSwim size={64} />
          </Grid>
          <Grid xs={12} justify='center'>
            <Text h2>Swim Signups at The Club</Text>
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
                <Grid xs={5}>
                  <Input
                    id={index}
                    fullWidth
                    label='Last Name'
                    aria-label='Last Name'
                    value={swimmers[index].lastName}
                    placeholder="Enter the swimmer's last name"
                    onChange={(e) => updateSwimmers(e, index)}
                    name='lastName'
                  />
                </Grid>
                <Grid xs={2}>
                  <Input type='number' fullWidth label='Age' placeholder='Age' value={swimmers[index].age} onChange={(e) => updateSwimmers(e, index)} name='age' />
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <Grid sm={5} xs={5}>
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
                <Grid sm={5} xs={4}>
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
                <Grid xs={2} sm={1}>
                  <Input type='number' fullWidth placeholder='Age' value={swimmers[index].age} onChange={(e) => updateSwimmers(e, index)} name='age' />
                </Grid>
                <Grid xs={1} sm={1}>
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
            <Input fullWidth placeholder='First Name' value={parentFirst} onChange={(e) => setParentFirst(e.target.value)} />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Last Name' value={parentLast} onChange={(e) => setParentLast(e.target.value)} />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Email' contentRight={<MdEmail />} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid xs={6}>
            <Input fullWidth placeholder='Phone' contentRight={<MdLocalPhone />} value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Grid>
          <Grid xs={12} justify='flex-start'>
            <Text h4>What type of lessons are you interested in? (Select one or both)</Text>
          </Grid>
          <Grid xs={12} justify='flex-start'>
            <Checkbox label='Group Lessons' value={groupLessons} onChange={(e) => setGroupLessons(e)} />
            <Spacer x={4} />
            <Checkbox label='Private Lessons' value={privateLessons} onChange={(e) => setPrivateLessons(e)} />
          </Grid>
          {/* <Grid xs={12} justify='flex-start'>
            <Text h4>Are you a member at The Club?</Text>
          </Grid> */}
          <Grid xs={12} justify='flex-start' >
            <Checkbox label='Are you a member at The Club?' value={isMember} onChange={(e) => setIsMember(e)} />
          </Grid>
          {/* <Grid xs={12} justify='flex-start'>
            <Text h4>Are you a member at The Club?</Text>
          </Grid> */}
          <Grid xs={12} justify='flex-start' >
            <Checkbox label='I would like to receive future swim notifications.' value={isMember} onChange={(e) => setIsMember(e)} />
          </Grid>
          <Spacer y={1} />
          <Grid xs={12} justify='center'>
            <Button onClick={submit}>Sign Up</Button>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default SwimLessons;
