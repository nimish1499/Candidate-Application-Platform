import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import JobCard from "../../components/JobCard";
import { getJobListing } from "../../api";

// Debouncing Function
function debounce(func, timeout) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}

const JobListing = () => {
  const [page, setPage] = useState(0); // offset
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await getJobListing(pageNumber);
      if (response?.jdList?.length > 0) {
        setJobData((prevData) => ({
          ...prevData,
          jdList: prevData
            ? [...prevData?.jdList, ...response?.jdList]
            : response?.jdList,
        }));
        setPage(pageNumber + 1); // Increasing the page/offset for next api call
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    const container = containerRef.current;

    // Check if user has reached bottom of container
    if (
      container.scrollTop + container.clientHeight >=
        container.scrollHeight - 50 &&
      !loading
    ) {
      fetchData(page);
    }
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 150); // Using debouncing for limitimg the number of api calls while scrolling
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", debouncedHandleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", debouncedHandleScroll);
      }
    };
  }, [page]);

  useEffect(() => {
    fetchData(page);
  }, []);

  return (
    <Box>
      <Box
        ref={containerRef}
        style={{ overflowY: "scroll", maxHeight: "80vh", position: "relative" }}
      >
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          {jobData ? (
            <JobCard data={jobData} />
          ) : (
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CircularProgress style={{ color: "green" }} />
            </Box>
          )}
        </Grid>
        {loading && page && (
          <Box
            style={{
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            <CircularProgress style={{ color: "green" }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JobListing;
