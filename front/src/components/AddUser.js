import  { useState } from 'react';
import { FormControl,Button, FormGroup, Typography,styled,Input, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../services/api';

const initialValue={
    name:'',
    username:'',
    email:'',
    phone:''
};
const AddUser=()=>{
    const [user, setUser] = useState(initialValue);
    const { name,username,email,phone } = user;
    let navigate = useNavigate();
const onValueChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
    console.log(e.target.name,e.target.value);
}
const addUserDetails = async() => {
    await addUser(user);
    navigate('/allUser');
}
const Container=styled(FormGroup)`
width:100%;
margin:5% 0 0 0;
& > div{
    margin-top:20px;
}`
    return(
        <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
       <InputLabel>Name</InputLabel>
       <Input onChange={(e)=>onValueChange(e)} name='name' value={name} id="my-input"/>
      </FormControl>
      
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
        </FormControl>
<FormControl>
    <InputLabel htmlFor='my-input'>Email</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="email" value={email} id="my-input"/>
</FormControl>
<FormControl>
    <InputLabel htmlFor='my-input'>Phone</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone} id="my-input" /></FormControl>
       
    <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    );
}
export default AddUser;