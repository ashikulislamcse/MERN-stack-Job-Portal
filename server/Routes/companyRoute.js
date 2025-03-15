import express from 'express';
import isAuthenticated from '../Middleweres/isAuthenticated.js';
import { getCompany, getCompanyById, RegisterCompany, UpdateCompany } from '../controllers/companyController.js';
import { singleUpload } from '../Middleweres/multer.js';


const Router = express.Router();

Router.post('/register',isAuthenticated, RegisterCompany);
Router.get('/get',isAuthenticated, getCompany);
Router.get('/get/:id',isAuthenticated, getCompanyById);
Router.put('/update/:id',isAuthenticated,singleUpload, UpdateCompany);


export default Router;