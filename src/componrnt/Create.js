
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';

function CreateSubCategory() {


    const [values, setValues] = useState({});

    const [selected, setSelected] = React.useState("")

    const handleChange = event => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }))

        setSelected(event.target.value);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setValues("")


        try {
            await axios.post("https://6278f6666ac99a9106601019.mockapi.io/subcategory", values);
            alert("Data Has Been Fetched To Api");
            console.log(values);
        } catch (error) {
            console.log(error);
        }

    }


    /** If "Type" is null or undefined then options will be null,
     * otherwise it will create a options iterable based on our array
     */



    const electronics = [

        'Fashion',
        'Mobiles and Tablets',
        'Consumer Electronics',
        'Books',
        'Movie Tickets',
        'Baby Products',
        'Groceries',
        'Food Takeaway/Delivery',
        'Home Furnishings',
    ];
    const tv_appliance = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const men = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const women = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const baby_kids = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const sports = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const book = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];
    const food = [
        ' some',
        ' make',
        ' electronics',
        ' food',
        ' fracies',
        " nada",
        ' leather',
        '  pipe',
        '  bike',
        '  cycle',
        '  bag',
        '  adam',
        '  kjs',
        '  groceries',
        '  clothes',
        '  fresh',

    ];

    let type = null;

    /** This will be used to create set of options that user will see */
    let options = null;

    /** Setting Type variable according to dropdown */
    if (selected === "Electronics") {
        type = electronics;
    } else if (selected === "Tv_Appliance") {
        type = tv_appliance;
    } else if (selected === "Men") {
        type = men;
    }
    else if (selected === "Women") {
        type = women;
    }
    else if (selected === "Baby_Kids") {
        type = baby_kids;
    }
    else if (selected === "Sports") {
        type = sports;
    }
    else if (selected === "Book") {
        type = book;
    }
    else if (selected === "Food") {
        type = food;
    }


    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }


    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3)
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>


                <div className="row">
                    <div className="col-lg-4">


                        <FormControl sx={{ m: 1 }} variant="standard">

                            <InputLabel htmlFor="select">
                                Select
                            </InputLabel>
                            <NativeSelect
                                id="select"
                                value={selected}
                                input={<BootstrapInput />}
                                onChange={handleChange} name="select">

                                <option>Choose...</option>
                                <option >Electronics</option>
                                <option>Tv_Appliance</option>
                                <option>Men</option>
                                <option>Women</option>
                                <option>Baby_Kids</option>
                                <option>Sports</option>
                                <option>Book</option>
                                <option>Food</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">

                        <FormControl sx={{ m: 1 }} variant="standard">

                            <InputLabel htmlFor="sub">
                                Type
                            </InputLabel>
                            <NativeSelect
                                id="sub"
                                name='sub'
                                value={selected}
                                onChange={handleChange}
                                input={<BootstrapInput />}>
                                {
                                    /** This is where we have used our options variable */
                                    options
                                }

                            </NativeSelect>
                        </FormControl>
                    </div>

                </div>
                <FormControl fullWidth>


                    <TextField id="subCategoryName" label="SubCategory Name" variant="outlined" onChange={handleChange} name="subCategoryName" value={values.subCategoryName || ""} />


                </FormControl>


                <Button type="submit" color="secondary" variant="outlined">
                    submit
                </Button>
            </form>
        </>
    )
}




export default CreateSubCategory