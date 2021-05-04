import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        marginBottom: `calc(20% + 60px)`
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

const ExploreView = () => {

    const [explore, setExplore] = useState([]);

    async function view() {


        let result = await fetch("http://localhost:8000/api/viewCuisine", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })

        result = await result.json();


        await setExplore([...result]);


    }

    async function deleteExplore(explore) {

        console.log(explore)
        let result = await fetch("http://localhost:8000/api/deleteCuisine", {
            method: 'POST',
            body: JSON.stringify(explore),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'

            }

        })
        result = await result.json();
        console.log(result)
        setExplore([...result]);


    }

    useEffect(() => {

        view();

    }, [])

    const handleClick = (explore) => {
        deleteExplore(explore);
    }

    

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="h1" variant="h5">
                <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Explore Options</div>
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={2} />
                <Grid item xs={12} md={8}>

                    <Paper variant="outlined" >
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="center">Type</TableCell>
                                        <TableCell align="center">Description</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        explore.map((i) => (
                                            <TableRow>
                                                <TableCell align="left">{i.typeId}</TableCell>
                                                <TableCell align="center" style={{ textTransform: 'capitalize' }}>{i.itemType}</TableCell>
                                                <TableCell align="center">{i.description}</TableCell>
                                                <TableCell align="right"><Button variant="outlined" onClick={() => handleClick(i)} color="secondary">DELETE</Button></TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
            </Grid>
            <Grid item md={2} />
        </div>
    )
}

export default ExploreView;