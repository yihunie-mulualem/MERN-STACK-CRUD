import { AppBar, Toolbar, styled } from '@mui/material';
import { BrowserRouter, Routes,Route, NavLink } from "react-router-dom";
import Interview from '../components/codeForInterview';
import AllUser from './AllUser.js';
import User from "./AddUser.js";
import EditUser from './EditUser';
import Delete from './Delete';
const Header = styled(AppBar)`
    background: #111111;
`;
const NavBar = () => {
    return (
        <BrowserRouter>
        <Header position="static">
            <Toolbar>
              
                <NavLink to="/" style={({
                    isActive
                })=>({
                    color: isActive ? 'red':'white'
                })}>
                            code for interview
                </NavLink>
                <NavLink to="/allUser"  style={({
                    isActive
                })=>({
                    marginLeft:"20px",
                    color: isActive ? 'red':'white'
                })}>
                            All users
                        </NavLink>
                        <NavLink to="/addUser" style={({
                    isActive
                })=>({
                    marginLeft:"20px",
                    color: isActive ? 'red':'white'
                })}>
                            Add user
                        </NavLink>
                        <NavLink to="/addUser" style={({
                    isActive
                })=>({
                    marginLeft:"20px",
                    color: isActive ? 'red':'white'
                })}>
                            Delete user
                        </NavLink>
                        <NavLink to="/delete" style={({
                    isActive
                })=>({
                    marginLeft:"20px",
                    color: isActive ? 'red':'white'
                })}>
                            Edit user
                        </NavLink>
            </Toolbar>
        </Header>
        <Routes>
        <Route exact path="/" element={<Interview />} />
        <Route exact path="/addUser" element={<User />} />
        <Route exact path="/allUser" element={<AllUser />} />
        <Route exact path="/Delete" element={<Delete />} />
        <Route exact path="/Edit" element={<EditUser />} />

        </Routes>
        </BrowserRouter>

    )
}

export default NavBar;