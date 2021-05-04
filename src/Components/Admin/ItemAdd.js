import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2)
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
}));

const ItemAdd = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [type, setType] = useState("south");
    const [price, setPrice] = useState("");
    const [avail, setAvail] = useState(1);
    const [img, setImg] = useState("");
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openFailure, setOpenFailure] = React.useState(false);
    const [types, setTypes] = React.useState([]);
    const history = useHistory();

    const handleChange = (event) => {
        console.log(type)
        setType(event.target.value);
    };

    const handleChangeAvail = (event) => {

        setAvail(event.target.value);
    };

    async function loadData() {
        let result = await fetch("http://localhost:8000/api/viewCuisine", {
            method: 'GET'
        })
        result = await result.json();
        setTypes(result);
        console.log(types)

    }

    useEffect(() => {
        loadData();
    }, [])


    async function add() {

        const formData = new FormData();
        formData.append('img', img);
        formData.append('name', name);
        formData.append('type', type);
        formData.append('price', price);
        formData.append('avail', avail);

        let result = await fetch("http://localhost:8000/api/addItem", {
            method: 'POST',
            body: formData
        })

        if (result.status === 200 || result.status === 201) {
            setOpenSuccess(true);
        }
        else {
            setOpenFailure(false);
        }

    }

    const handleClose = (event, reason) => {

        setOpenSuccess(false);
        setOpenFailure(false);
    };


    const Upload = (e) => {
        console.log("hello")
        let file = e.target.files[0];
        setImg(file);

    }

    return (
        <Container component="main" maxWidth="xs">

            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <AddShoppingCartIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    <div style={{ textTransform: 'capitalize' }} className={clsx("header", classes.title)}>Add Item</div>
                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Item Name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                    />


                    <Box display="flex">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Availibility</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={avail}
                                onChange={handleChangeAvail}
                                label="Availibilty"
                            >

                                <MenuItem value={1}>Available</MenuItem>
                                <MenuItem value={0}>Not Available</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Type</InputLabel>
                            <Select
                                labelId="type"
                                id="demo-simple-select-outlined"
                                value={type}
                                onChange={handleChange}
                                label="Type">
                                {
                                    types.map((i) => (
                                        
                                        <MenuItem value={i.itemType}>{i.itemType}</MenuItem>
                                     ))                              
                                }
                            </Select>
                        </FormControl>
                    </Box>


                    <TextField m={2}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="price"
                        label="Price"
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Box display="flex" justifyContent="flex-end">

                        <input
                            accept="image/*"
                            className={classes.input}
                            id="img"
                            name="img"
                            multiple
                            type="file"
                            onChange={(e) => Upload(e)}
                        />
                        <label htmlFor="img">
                            <Button variant="outlined" color="secondary" component="span">
                                Upload
                                </Button>
                        </label>
                    </Box>




                    <Button
                        onClick={add}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Add Item
                    </Button>

                    <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Items Added !
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Failed !
                        </Alert>
                    </Snackbar>

                </div>
            </div>
            <Box mb={20}>

            </Box>
        </Container>
    );
}

export default ItemAdd;