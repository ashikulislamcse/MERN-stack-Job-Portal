import express from 'express';
import { Login, Logout, Register, UpdateProfile } from '../controllers/userControllers.js';


const Router = express.Router();

Router.post('/register', Register);
Router.post('/login', Login);
Router.post('/logout', Logout);
Router.post('/profile/update', UpdateProfile);


export default Router;