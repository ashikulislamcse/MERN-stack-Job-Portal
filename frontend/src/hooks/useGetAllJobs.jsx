import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { JOB_API_END_POINT } from "../../src/Utils/constant.js";
import { setAllJobs } from '../Redux/jobSlice.js';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getjob`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs