import React from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
const Delete = () => {
    let {id} = useParams();
    let history = useHistory();
    const[users, setUser] = useState([]);
    useEffect(()=>{
          onSubmit  
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.delete(`http://127.0.0.1:8000/api/forms/${id}`);
        history.push("/details");
    }
    
    return(
        <form onSubmit={onSubmit(e)}>

        </form>

    );
};

export default Delete;