import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "../Utils/constant";
import { setAllAdminJobs } from "../Redux/jobSlice";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getadminjob`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(
            setAllAdminJobs(
              res.data.jobs.map((job) => ({
                ...job,
                company: job.company || {}, // Prevents null errors
              }))
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllAdminJobs();
  }, []);
};

export default useGetAllAdminJobs;
