import React, { useContext, useEffect, useState } from 'react';
import "../App.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Context } from '../contexts/contextAPI';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    final: {
        fontWeight: "bold"
    },
    title: {
        fontSize: "25px",
        marginTop: "40px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

function getSteps() {
    return ['Order Placed', 'Making Order', 'Cooking Order', 'Ready In Store','Out for Delivery'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}


const Delivery = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div>
            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Delivery</div>
            </Typography>

            <div className={classes.root}>
                <Stepper  activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                  </Button>
                                <Button variant="contained" color="secondary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>

    )
}

export default Delivery;
