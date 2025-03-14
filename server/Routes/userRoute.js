import express from 'express';
import { Login, Logout, Register, UpdateProfile } from '../controllers/userControllers.js';
import isAuthenticated from '../Middleweres/isAuthenticated.js';
import { singleUpload } from '../Middleweres/multer.js';


const Router = express.Router();

Router.post('/register',singleUpload, Register);
Router.post('/login', Login);
Router.post('/logout', Logout);
Router.post('/profile/update',isAuthenticated, UpdateProfile);


export default Router;