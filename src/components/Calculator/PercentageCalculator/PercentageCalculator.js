import React, { useState } from "react";
import {
    FormInput,
    FormGroup,
    FormButton,
    Form,
    Message,
  } from 'semantic-ui-react';

const PercentageCalculator = () => {
  const [pointsGiven, setPointsGiven] = useState('');
  const [pointsPossible, setPointsPossible] = useState('');
  const [percentage, setPercentage] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +pointsGiven >= 0 && +pointsPossible > 0;

    if (!formValid) {
      return;
    }

    setPercentage((+pointsGiven / +pointsPossible) * 100);
  };

  return (
    <Form success>
        <FormGroup widths='equal'>
            <FormInput fluid type='number' label='Points Given' value={pointsGiven} onChange={(e) => setPointsGiven(e.target.value)} placeholder='Points Given' />
            <FormInput fluid label='Points Possible' type='number' value={pointsPossible} onChange={(e) => setPointsPossible(e.target.value)} placeholder='Points Possible' />
        </FormGroup>
        <FormButton onClick={calculate}>Calculate Percentage</FormButton>
        {
            percentage > 0 && <Message icon='rupee sign' success header={`Percentage: ${percentage}%`} content='' />
        }
    </Form>
  );
};

export default PercentageCalculator;
