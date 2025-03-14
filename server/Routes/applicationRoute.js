import express from 'express';
import isAuthenticated from '../Middleweres/isAuthenticated.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/applicationController.js';



const Router = express.Router();

Router.get('/apply/:id',isAuthenticated, applyJob);
Router.get('/get',isAuthenticated, getAppliedJobs);
Router.get('/:id/applicants',isAuthenticated, getApplicants);
Router.post('/status/:id/update',isAuthenticated, updateStatus);


export default Router;