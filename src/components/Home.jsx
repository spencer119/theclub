import { Container, Button, Spacer } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container css={{ mt: 100 }}>
      <Button as={Link} to='/swimteam'>
        Swim Team
      </Button>
      <Spacer y={1} />
      <Button as={Link} to='/swimlessons'>
        Swim Lessons
      </Button>
    </Container>
  );
};

export default Home;
