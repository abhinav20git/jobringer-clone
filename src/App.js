import "./App.css";
import React, { useState } from "react";
import { RiSave3Fill } from "react-icons/ri";
import { MdLocationPin, MdOutlineContactMail } from "react-icons/md";
import { GiShare } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { AiFillWallet } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const jobs = [
    {
      id: 1,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "LEAD OPERATIONAL EXCELLENCE - OSD",
      company: "Dr. Reddy's Laboratories",
      experience: "15-17 Years",
      location: "Hyderabad - Secunderabad",
      skills: "Analytical Skills, Continuous Improvement, Facilitation",
      type: "Full Time",
      salary: "Not Disclosed",
    },
    {
      id: 2,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Software Developer",
      company: "TechCorp",
      experience: "3-5 Years",
      location: "Bangalore",
      skills: "JavaScript, React, Node.js",
      type: "Full Time",
      salary: "₹12-15 LPA",
    },
    {
      id: 3,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Data Analyst",
      company: "DataWorks",
      experience: "2-4 Years",
      location: "Mumbai",
      skills: "SQL, Python, Data Visualization",
      type: "Part Time",
      salary: "₹8-10 LPA",
    },
    {
      id: 4,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Project Manager",
      company: "BuildTech",
      experience: "8-10 Years",
      location: "Chennai",
      skills: "Leadership, Communication, Agile",
      type: "Full Time",
      salary: "₹20-25 LPA",
    },
    {
      id: 5,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Digital Marketing Specialist",
      company: "AdVista",
      experience: "2-3 Years",
      location: "Delhi",
      skills: "SEO, SEM, Content Marketing",
      type: "Full Time",
      salary: "₹6-8 LPA",
    },
    {
      id: 6,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "UI/UX Designer",
      company: "DesignPro",
      experience: "1-3 Years",
      location: "Pune",
      skills: "Figma, Adobe XD, Prototyping",
      type: "Full Time",
      salary: "₹7-9 LPA",
    },
    {
      id: 7,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Network Engineer",
      company: "NetSecure",
      experience: "4-6 Years",
      location: "Hyderabad",
      skills: "Cisco, Network Security, Troubleshooting",
      type: "Full Time",
      salary: "₹10-12 LPA",
    },
    {
      id: 8,
      img: "https://www.jobringer.com/images/content/company-logo/hjpfe53e60e25b9ba961b53cd432383e7d9.png",
      title: "Backend Developer",
      company: "CodeBase",
      experience: "3-5 Years",
      location: "Bangalore",
      skills: "Node.js, Express.js, MongoDB",
      type: "Full Time",
      salary: "₹12-14 LPA",
    },
  ];

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);
  const [isWorkModeOpen, setIsWorkModeOpen] = useState(true);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  return (
    <div className="job-portal">
      <header className="header">
        <div className="logo">
          <img width="160" src="https://www.jobringer.com/images/logonew.svg" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Active Employers</a>
            </li>
            <li>
              <a href="#">Job Blogs</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            {/* <li> */}
            <button className="btn-jobseeker-login">Jobseeker Login</button>
            {/* </li> */}
            {/* <li> */}
            <button className="btn-login">Employer Login</button>
            {/* </li> */}
          </ul>
        </nav>
      </header>
      <div className="status">
        <span className="status-text">Shivam got selected for the job!</span>
      </div>
      <div className="search-bar">
        <p className="search-heading">Search Job</p>
        <input
          className="search-input"
          type="text"
          placeholder="Type keyword.."
        />
        <select
          className="set-location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="" disabled>
            {selectedLocation ? selectedLocation : "Select Location"}
          </option>
          {/* <option>Select Location</option> */}
          <option>Bangalore</option>
          <option>Lucknow</option>
          <option>Noida</option>
          <option>Pune</option>
        </select>
        <select
          className="set-experience"
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option>Select Experience</option>
          <option>0-2</option>
          <option>2-5</option>
          <option>5-12</option>
        </select>
        <select
          className="set-salary"
          value={selectedSalary}
          onChange={(e) => setSelectedSalary(e.target.value)}
        >
          <option>Select Salary</option>
          <option> 10k-20k</option>
          <option>20k-40k</option>
          <option>40k-70k</option>
          <option>70k-100k</option>
        </select>
        <button className="btn-search">Search</button>
      </div>

      <div className="right-side">
        {/* <div className="filters">
          <h3>Filters</h3>
          <label className="keyword-label">Keywords</label>
          <input type="text" placeholder="Type keyword and press enter" className="keyword-input" />
          <details>
            <summary>Experience</summary>
            <ul className="summary-fields">
              <li>0-2 Years</li>
              <li>3-5 Years</li>
            </ul>
          </details>
          <details>
            <summary>Work Mode</summary>
            <ul>
              <li>Remote</li>
              <li>On-Site</li>
            </ul>
          </details>
          <details>
            <summary>Job Type</summary>
            <ul>
              <li>Full Time</li>
              <li>Part Time</li>
            </ul>
          </details>
        </div> */}
        <div className="filter-card">
          <h3 className="filter-title">Filters</h3>

          {/* Keywords Section */}
          <div className="filter-section">
            <label htmlFor="keywords" className="filter-label">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              className="filter-input"
              placeholder="Type keyword and press enter"
            />
          </div>

          {/* Experience Section */}
          <div className="filter-dropdown">
            <div
              className="dropdown-header"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
            >
              Experience
              <span className="dropdown-icon">
                {isExperienceOpen ? "-" : "+"}
              </span>
            </div>
            {isExperienceOpen && (
              <div className="dropdown-content">
                <input
                  type="text"
                  className="filter-input"
                  placeholder="Enter years of experience"
                />
              </div>
            )}
          </div>

          {/* Work Mode Section */}
          <div className="filter-dropdown">
            <div
              className="dropdown-header"
              onClick={() => setIsWorkModeOpen(!isWorkModeOpen)}
            >
              Work Mode
              <span className="dropdown-icon">
                {isWorkModeOpen ? "-" : "+"}
              </span>
            </div>
            {isWorkModeOpen && (
              <div className="dropdown-content">
                <label className="checkbox-label">
                  <input type="checkbox" /> In Office
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Work From Home / WFH
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Hybrid
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Remote
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> On Field
                </label>
              </div>
            )}
          </div>
          <div className="filter-dropdown">
            <div
              className="dropdown-header"
              onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
            >
              Job Type
              <span className="dropdown-icon">{isJobTypeOpen ? "-" : "+"}</span>
            </div>
            {isJobTypeOpen && (
              <div className="dropdown-content">
                <label className="checkbox-label">
                  <input type="checkbox" /> All Jobs
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Classic Jobs
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Featureed Jobs
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Premium Jobs
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="job-side">
          <div className="page-detail">
            <div className="current-page-dropdown">
              <p className="p1">Show</p>
              <span>
                <select onChange={(e) => setJobsPerPage(e.target.value)}>
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>40</option>
                  <option>80</option>
                  <option>100</option>
                </select>
              </span>
              <p className="p2">per page</p>
            </div>
            <div className="range-total">
              <p>
                Showing 1 to {jobsPerPage} of {jobs.length}
              </p>
            </div>
          </div>
          <div className="job-listing ">
            {currentJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <img className="logo" src={job.img} alt="company-logo" />

                  <h3 className="job-company">{job.company}</h3>
                </div>

                <small>
                  <FaBriefcase color="purple" /> {job.experience} |{" "}
                  <AiFillWallet color="purple" /> {job.salary} |{" "}
                  <GoClockFill color="purple" /> {job.type}
                </small>
                <p>
                  <small>
                    <MdLocationPin /> {job.location}
                  </small>
                </p>
                <p>
                  <small>
                    <b>Key Skills:</b> {job.skills}
                  </small>
                </p>
                <div className="contact-section">
                  <div className="details">
                    <MdOutlineContactMail color="white" />
                    <GiShare color="white" />
                    <RiSave3Fill color="white" />
                  </div>
                  {/* <div className="apply-section"> */}
                  <button className="btn-apply">Apply</button>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="app-promo">
          <div className="app-promo-text">
            Apply to JOBS On-The-Go{" "}
            <span className="name-txt"> Jobringer Mobile App</span>
          </div>
          <div className="app-promo-img">
            <img src="https://www.jobringer.com/images/anroid.png" />
          </div>
        </div>
      </div>
      <footer class="footer">
        <div className="jobs">
        <div className="india-jobs"><div><h3>JOBS IN INDIA</h3></div>
        <div class="tags">
          <a href="#">#Mumbai</a>
          <a href="#">#Delhi</a>
          <a href="#">#Ajmer</a>
          <a href="#">#Pune</a>
          <a href="#">#Hyderabad</a>
          <a href="#">#Agra</a>
          <a href="#">#Chennai</a>
          <a href="#">#Kolkata</a>
          <a href="#">#Indore</a>
          {/* <a href="#">#Gurugram</a>
          <a href="#">#Jaipur</a>
          <a href="#">#Ahmedabad</a> */}
        </div></div>
            <div className="v1"></div>
        <div className="inter-jobs"><h3>INTERNATIONAL JOBS</h3>
        <div class="tags">
          <a href="#">#Africa</a>
          <a href="#">#USA</a>
          <a href="#">#UK</a>
          <a href="#">#Australia</a>
          <a href="#">#Canada</a>
          <a href="#">#Singapore</a>
          <a href="#">#Dubai</a>
          <a href="#">#Saudi Arabia</a>
          <a href="#">#New Zealand</a>
        </div></div>

        </div>
        <div class="stats">
          <div>
            <span>32592</span>
            Jobs Posted
          </div>
          <div>
            <span>15153</span>
            Jobs Filled
          </div>
          <div>
            <span>20636</span>
            Employers
          </div>
          <div>
            <span>1300864</span>
            Active Users
          </div>
        </div>

        <div class="disclaimer">
          Disclaimer: All Trademarks and Logos are the property of their
          respective owners, depicted here purely for representation purpose. |
          Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to
          evaluate independently. Jobringer.com shall not have any
          responsibility in this regard. All Jobseeker services are strictly
          designed & meant only for job search assistance and to maximize the
          chances for the jobseekers to get their dream job. All Job Seeker
          Credentials and Employment Opportunities are subject to individual
          merit & evaluation. We do not guarantee any job to any jobseeker.
        </div>

        <div class="social-media">
              <small>
          <a href="#">Terms and conditions</a>|
          <a href="#">Privacy Policy</a>|
          <a href="#">Refund / Cancellation Policy</a>|
          <a href="#">About Us</a>|
          <a href="#">Contact Us</a>|
          <a href="#">FAQ</a>|
          <a href="#">Blogs</a>
          </small>
        </div>

        <div class="startup-recognition">© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</div>
      </footer>
    </div>
  );
}

export default App;
