import { Button, Spacer, Modal, Text } from '@nextui-org/react';
import React from 'react';

const AbilityModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      scroll
      width='800px'
      autoMargin
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      closeButton
      open={showModal}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header>
        <Text b id='modal-title' size={24}>
          Ability Level Descriptions
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text h4>Beginner 1</Text>
        <Text>
          This class is designed for children that are unable to go under the water or are fearful.
          Students will be introduced to front and back floating, gliding, breathing and freestyle.
        </Text>
        <Text h4>Beginner 2</Text>
        <Text>
          This class is designed for children that are already adjusted to the water (
          <i>able to go under independently</i>) and may be able to swim a short distance
          independently but lack breathing. Students will review front and back floating, gliding,
          and be introduced to breathing, freestyle and backstroke.
        </Text>
        <Text h4>Beginner 3</Text>
        <Text>
          This class is designed for children that are able to swim but lack endurance, build
          confidence in the deep end or proper technique. Students will improve their freestyle and
          backstroke, reinforce proper breathing technique, and be introduced to diving.
        </Text>
        <Text h4>Parent and Me</Text>
        <Text>
          This class is designed for children 12 months-36 months. Swim diaper/plastic pants are
          required. Parents will be instructed with their children about water safety and beginning
          swimming skills through songs and water play. Parent must be in the water. (Limited to 10)
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={() => setShowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AbilityModal;
