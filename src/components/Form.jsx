import * as React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/Form.css';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const steps = [
  {
    label: 'Create Account',
    description: `You have to create a account to submit a document.`,
  },
  {
    label: 'Schedule Appointment',
    description:'ُSet a date for the meeting.',
  },
  {
    label: 'Upload',
    description: `Upload your document.`,
  },
  {
    label: 'Check',
    description: 'You have provided all requirements. Please start the checking process. '
  }
];

const resStep = [

  'First requirement checked.',
  'Second requirement checked.',
  'Third requirement checked.',
  'Forth requirement checked.',
  'Fifth requirement checked.',

]

export default function Form() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isBtnEnable, setIsBtnEnable] = React.useState(true);
  const [isChecking, setIsChecking] = React.useState(true);
  const [result, setResult] = React.useState(false);
  const [num, setNum] = React.useState(0);


  // const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const signUp = () => {
    setIsBtnEnable(false);
  }

  const Result = () => {
    // navigate("/Result");
    setIsChecking(false);
    setResult(true);
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    setNum(rand);
  }

//   const handleReset = () => {
//     setActiveStep(0);
//   };


  return (
    <div className="form">
        {isChecking && <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
            <Step key={step.label} style={{color: '#fff'}}>
                <StepLabel
                className='text'
                // optional={
                //     index === 3 ? (
                //     <Typography variant="caption" className='text'>Last step</Typography>
                //     ) : null
                // }
                >
                {step.label}
                </StepLabel>
                <StepContent>
                    <Typography className='text'>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                    <div>
                        {/* {index === 1 && <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Date" />
                            </DemoContainer>
                        </LocalizationProvider>} */}
                        {index === 0 && <Button
                        variant="contained"
                        onClick={signUp}
                        sx={{ mt: 1, mr: 1 }}
                        className='text'
                        >
                            Sign Up
                        </Button>}
                        {<Button
                            className='text'
                            variant="contained"
                            onClick={handleNext}
                            disabled={isBtnEnable}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button> }
                        {index !== 0 && <Button
                            className='text'
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Back
                        </Button>}
                    </div>
                </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper className='paper' square elevation={0} sx={{ p: 3 }}>
            <Typography className='text'>All steps completed. Please wait for checking.</Typography>
            <Button className='text'
                    variant="contained"
                    onClick={Result}> Result </Button>
            {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
            </Button> */}
            </Paper>
        )}
        </Box>}

        {result && <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={resStep.length} orientation="vertical">
            {resStep.map((label) => (
            <Step key={label} style={{color: '#fff'}}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                    <Box sx={{ mb: 2 }}>
                    <div>
                    </div>
                </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper className='paper' square elevation={0} sx={{ p: 3 }}>
              <Typography className='text'>{num > 50 ? 'Check success!' : 'Check failed!'}</Typography>
            </Paper>
        )}
        </Box>}
    </div>
  );
}
