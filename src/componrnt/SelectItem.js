import * as React from "react";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const Selectitem = () => {
    /** "selected" here is state variable which will hold the
    * value of currently selected dropdown.
    */
    const [selected, setSelected] = React.useState("");

    /** Function that will set different values to state variable
    * based on which dropdown is selected
    */
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    /** Different arrays for different dropdowns */
    const algorithm = [
        "Searching Algorithm",
        "Sorting Algorithm",
        "Graph Algorithm",
    ];
    const language = ["C++", "Java", "Python", "C#"];
    const dataStructure = ["Arrays", "LinkedList", "Stack", "Queue"];

    /** Type variable to store different array for different dropdown */
    let type = null;

    /** This will be used to create set of options that user will see */
    let options = null;

    /** Setting Type variable according to dropdown */
    if (selected === "Algorithm") {
        type = algorithm;
    } else if (selected === "Language") {
        type = language;
    } else if (selected === "Data Structure") {
        type = dataStructure;
    }

    /** If "Type" is null or undefined then options will be null,
    * otherwise it will create a options iterable based on our array
    */
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
        <div

        >
            <form>

                {/** Bind changeSelectOptionHandler to onChange method of select.
            * This method will trigger every time different
            * option is selected.
            */}
                <FormControl sx={{ m: 1 }} variant="standard">

                    <InputLabel htmlFor="uncontrolled-native">
                        Select
                    </InputLabel>
                    <NativeSelect
                        value={selected}
                        input={<BootstrapInput />}
                        onChange={changeSelectOptionHandler}>
                        <option>Choose...</option>
                        <option>Algorithm</option>
                        <option>Language</option>
                        <option>Data Structure</option>
                    </NativeSelect>


                    <NativeSelect value={selected}
                        input={<BootstrapInput />} className="mt-3">
                        {
                            /** This is where we have used our options variable */
                            options
                        }
                    </NativeSelect>

                </FormControl>
            </form>
        </div >
    );
};

export default Selectitem;
