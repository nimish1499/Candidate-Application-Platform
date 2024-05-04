import React from "react";
import { Box, Grid } from "@mui/material";

import JobCard from "../../components/JobCard";
import { jobData } from "../../data/jobData";

const JobListing = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <JobCard data={jobData} />
      </Grid>
    </Box>
  );
};

export default JobListing;
