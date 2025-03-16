import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { setSearchedQuery } from "../Redux/jobSlice";
import Job from '../components/Job';

const Browse = () => {
  useGetAllJobs();
  const dispatch = useDispatch();

  // Redux state theke data niya asha
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  console.log("All Jobs:", allJobs);
console.log("Searched Query:", searchedQuery);

  // Component unmount hole search query clear kora
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  // Filtering jobs based on searchedQuery
  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({filteredJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <Job key={job._id} job={job} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No jobs found for "{searchedQuery}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
