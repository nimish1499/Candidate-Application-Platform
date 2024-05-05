import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filtersSlice";
import styles from "./filter.module.css";

const Filters = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    dispatch(setFilter({ name, value }));
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filter}>
        <select name="role" onChange={handleFilterChange} value={filters.role}>
          <option value="">Roles</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
          <option value="Fullstack">Fullstack</option>
          <option value="Flutter">Flutter</option>
          <option value="Android">Android</option>
          <option value="Ios">Ios</option>
          <option value="Legal">Legal</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <div className={styles.filter}>
        <select
          name="employees"
          onChange={handleFilterChange}
          value={filters.employees}
        >
          <option value="">Number Of Employees</option>
          <option value="1-10">1-10</option>
          <option value="11-20">11-20</option>
          <option value="21-50">21-50</option>
          <option value="51-100">51-100</option>
          <option value="101-200">101-200</option>
          <option value="201-500">201-500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      <div className={styles.filter}>
        <select
          name="experience"
          onChange={handleFilterChange}
          value={filters.experience}
        >
          <option value="">Experience</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
          <option value="6">6 Years</option>
          <option value="7">7 Years</option>
          <option value="8">8 Years</option>
          <option value="9">9 Years</option>
          <option value="10">10 Years</option>
        </select>
      </div>

      <div className={styles.filter}>
        <select
          name="remote"
          onChange={handleFilterChange}
          value={filters.remote}
        >
          <option value="">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>

      <div className={styles.filter}>
        <select
          name="salary"
          onChange={handleFilterChange}
          value={filters.salary}
        >
          <option value="">Minimum Base Pay Salary</option>
          <option value="0">0L</option>
          <option value="10">10L</option>
          <option value="20">20L</option>
          <option value="30">30L</option>
          <option value="40">40L</option>
          <option value="50">50L</option>
          <option value="60">60L</option>
          <option value="70">70L</option>
        </select>
      </div>

      <div className={styles.filter}>
        <input
          type="text"
          placeholder="Search Company Name"
          name="companyName"
          value={filters.companyName}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filters;
