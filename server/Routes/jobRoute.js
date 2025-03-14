import express from 'express';
import isAuthenticated from '../Middleweres/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, JobPost } from '../controllers/jobController.js';



const Router = express.Router();

Router.post('/postjob',isAuthenticated, JobPost);
Router.get('/getjob',isAuthenticated, getAllJobs);
Router.get('/getadminjob',isAuthenticated, getAdminJobs);
Router.get('/get/:id',isAuthenticated, getJobById);


export default Router;