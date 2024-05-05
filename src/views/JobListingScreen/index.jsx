import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import JobCard from "../../components/JobCard";
import { getJobListing } from "../../api";

const JobListing = () => {
  const [offset, setOffset] = useState(0);
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log("asd", offset, jobData?.jdList?.length);
      const response = await getJobListing(offset);
      let newData;
      if (jobData) {
        newData = {
          ...jobData,
          jdList: [...jobData?.jdList, ...response?.jdList],
        };
      } else {
        newData = response;
      }
      setJobData(newData);
      setOffset(offset + 1); // Updating offset for next api call
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
        container.scrollHeight - 50 &&
      !loading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [offset]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box
        ref={containerRef}
        style={{ overflowY: "scroll", maxHeight: "80vh" }}
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
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CircularProgress style={{ color: "green" }} />
            </Box>
          )}
        </Grid>
        {offset > 0 && loading && (
          <Box
            style={{
              textAlign: "center",
              marginTop: "20px",
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
