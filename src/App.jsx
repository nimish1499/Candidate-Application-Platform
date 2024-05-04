import "./styles.css";
import { jobData } from "./data/jobData";
import { JobListing } from "./views";

export default function App() {
  console.log(jobData);
  return (
    <div className="App">
      <JobListing />
    </div>
  );
}
