import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
const countInitial = () => {
    console.log('run');
    return 4;
}
const Learning = () => {
    const[count, setCount] = useState(countInitial());
    const decrementCounter = () => {
        // setCount(count-1);
        // setCount(count-1); // avoid this
        setCount(prevCount=>prevCount-1);
    }
    const incrementCounter = () => {
            setCount(prevCount=>prevCount+1);
    }
    return(
        <div>
            <Button onClick={decrementCounter} color="info">-</Button>
            {count}
            <Button onClick={incrementCounter} color="warning">+</Button>

        </div>
    );
};

export default Learning;