import { Semantic } from "@/src/layout";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
   Box,
   Button,
   Chip,
   Divider,
   FormControl,
   Grid,
   InputBase,
   List,
   ListItem,
   ListItemText,
   MenuItem,
   Select,
   Stack,
   Typography,
} from "@mui/material";
import { useState } from "react";
const Career = () => {
   const jobs = [
      {
         posted: "3 days ago",
         title: "Client Success Specialist",
         experience: "2+ Years Experience",
         jobTitle: "Client Success Specialist",
         location: "Philippines",
         typeOfWork: "Remote",
         jobType: "Full-Time",
         years: "2+ Years",
         overview: [
            {
               jobTitle: "Client Success Specialist",
               location: "Fully Remote, Philippines",
               rate: "$4.00 – $6.00 per hour based on experience",
               schedule: "Monday to Friday, Eastern Standard Time",
               jobType: "Full-Time",
            },
         ],
         jobDescription:
            "As a Client Success Specialist, you will serve as the primary point of contact for our clients, ensuring their satisfaction with our staffing solutions. This role requires strong communication, relationship management, and problem-solving skills. The ideal candidate will be proactive, client-focused, and able to balance multiple accounts while ensuring our placed talent meets performance expectations.",
         Requirements: [
            "Proven experience in client relationship management, account management, or customer success— preferably in the staffing, BPO, or recruitment industry.",
            "Strong understanding of the offshore hiring and staffing process.",
            "Exceptional communication skills (verbal and written) with a client-focused approach.",
            "Strong problem-solving skills and the ability to manage multiple priorities simultaneously.",
         ],
      },
      {
         posted: "1 week ago",
         title: "Marketing Manager (Manufacturing)",
         jobTitle: "Client Success Specialist",
         experience: "3+ Years Experience",
         location: "New York, USA",
         typeOfWork: "On-site",
         jobType: "Full-time",
         years: "3+ Years",
         overview: [
            {
               jobTitle: "Marketing Manager",
               location: "New York, USA",
               rate: "$60,000 – $75,000 annually",
               schedule: "Monday to Friday, 9 AM - 5 PM",
               typeOfWork: "On-site",
            },
         ],
         jobDescription:
            "Lead marketing campaigns for our manufacturing products. Requires experience in B2B marketing, campaign strategy, and team leadership.",
         Requirements: [
            "3+ years experience in marketing management.",
            "Strong analytical and project management skills.",
            "Experience with digital marketing tools and platforms.",
         ],
      },
      {
         posted: "1 week ago",
         title: "Operations Assistant",
         experience: "2+ Years Experience",
         jobTitle: "Operations Assistant",
         location: "London, UK",
         typeOfWork: "Hybrid",
         jobType: "Part-time",
         years: "2+ Years",
         overview: [
            {
               jobTitle: "Operations Assistant",
               location: "London, UK",
               rate: "£15 – £20 per hour",
               schedule: "Flexible, 20 hours per week",
               typeOfWork: "Hybrid",
            },
         ],
         jobDescription:
            "Support daily operations including scheduling, data entry, and vendor coordination.",
         Requirements: [
            "Minimum 2 years experience in operations or administrative roles.",
            "Excellent organizational skills.",
            "Proficient with MS Office and scheduling software.",
         ],
      },
      {
         posted: "2 days ago",
         title: "Software Engineer",
         jobTitle: "Software Engineer",
         experience: "4+ Years Experience",
         location: "Remote",
         jobType: "Remote",
         typeOfWork: "Remote",
         years: "4+ Years",
         overview: [
            {
               jobTitle: "Software Engineer",
               location: "Remote",
               rate: "$50 – $70 per hour",
               schedule: "Flexible hours",
               typeOfWork: "Remote",
            },
         ],
         jobDescription:
            "Develop and maintain web applications. Must be proficient in JavaScript, React, and Node.js.",
         Requirements: [
            "4+ years experience in software development.",
            "Strong knowledge of JavaScript and frameworks.",
            "Experience with REST APIs and cloud services.",
         ],
      },
      {
         posted: "5 days ago",
         title: "Customer Support Representative",
         jobTitle: "Customer Support Representative",
         experience: "1+ Years Experience",
         location: "Toronto, Canada",
         typeOfWork: "On-site",
         jobType: "Full-time",
         years: "1+ Years",
         overview: [
            {
               jobTitle: "Customer Support Representative",
               location: "Toronto, Canada",
               rate: "CAD 18 – 22 per hour",
               schedule: "Monday to Friday, 8 AM - 4 PM",
               typeOfWork: "On-site",
            },
         ],
         jobDescription:
            "Provide excellent customer support via phone, email, and chat. Handle inquiries, complaints, and product questions.",
         Requirements: [
            "1+ year experience in customer support.",
            "Strong communication skills.",
            "Ability to handle high volume of calls and maintain professionalism.",
         ],
      },
   ];

   const jobsFields = [
      {
         label: "Job Field",
         value: "",
      },
      {
         label: "Marketing",
         value: "marketing",
      },
      {
         label: "Sales",
         value: "sales",
      },
      {
         label: "Support",
         value: "Support",
      },
   ];

   const jobTypes = [
      {
         label: "Job Type",
         value: "",
      },
      {
         label: "Full-Time",
         value: "Full-Time",
      },
      {
         label: "Part-Time",
         value: "Part-Time",
      },
      {
         label: "Contract",
         value: "Contract",
      },
   ];

   const experienceLabel = [
      {
         label: "Experience Level",
         value: "",
      },
      {
         label: "Entry Level",
         value: "Entry Level",
      },
      {
         label: "Mid Level",
         value: "Mid Level",
      },
      {
         label: "Senior Level",
         value: "Senior Level",
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   const selectJobs = (id: number) => {
      if (id === activeIndex) return;
      setActiveIndex(id);
   };
   return (
      <Semantic>
         <Box
            sx={{
               overflow: "hidden",
               mt: 9,
            }}
         >
            <Box
               sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                  gap: 2,
                  flexWrap: "wrap",
               }}
            >
               {/* Search Job */}
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     border: "1px solid #ddd",
                     borderRadius: 2,
                     overflow: "hidden",
                  }}
               >
                  <Box sx={{ px: 1, display: "flex", alignItems: "center" }}>
                     <WorkOutlineIcon fontSize="small" sx={{ color: "gray" }} />
                  </Box>
                  <InputBase
                     placeholder="Search Job"
                     sx={{ px: 1, width: 160, color: "text.secondary", height: 50 }}
                  />
                  <Divider orientation="vertical" flexItem />
                  <Box sx={{ px: 1, display: "flex", alignItems: "center" }}>
                     <LocationOnOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
                  </Box>
                  <InputBase
                     placeholder="Location"
                     sx={{ px: 1, width: 120, color: "text.secondary", height: 50 }}
                  />
               </Box>

               {/* Filters */}
               <FormControl sx={{ minWidth: 140 }} size="small">
                  <Select
                     displayEmpty
                     defaultValue=""
                     sx={{
                        color: "text.secondary",
                        height: 50,
                        width: 180,
                        minWidth: 180,
                        maxHeight: 50,
                     }}
                  >
                     {experienceLabel.map((item, index) => (
                        <MenuItem
                           value={item.value}
                           key={index}
                           sx={{
                              color: "text.secondary",
                           }}
                           disabled={!item.value}
                        >
                           {item.label}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>

               <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select
                     displayEmpty
                     defaultValue=""
                     sx={{
                        color: "text.secondary",
                        height: 50,
                        width: 180,
                        minWidth: 180,
                        maxHeight: 50,
                     }}
                  >
                     {jobsFields.map((item, index) => (
                        <MenuItem
                           value={item.value}
                           key={index}
                           sx={{
                              color: "text.secondary",
                           }}
                           disabled={!item.value}
                        >
                           {item.label}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>

               <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select
                     displayEmpty
                     defaultValue=""
                     sx={{
                        color: "text.secondary",
                        height: 50,
                        width: 180,
                        minWidth: 180,
                        maxHeight: 50,
                     }}
                  >
                     {jobTypes.map((item, index) => (
                        <MenuItem
                           value={item.value}
                           key={index}
                           sx={{
                              color: "text.secondary",
                           }}
                           disabled={!item.value}
                        >
                           {item.label}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>

               {/* Reset Filters */}
               <Button variant="text" color="primary">
                  Reset Filters
               </Button>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  overflow: "hidden",
                  width: "100%",
                  padding: "0 20px",
               }}
            >
               <Box
                  sx={{
                     flex: 1,
                     overflow: "hidden",
                     width: "100%",
                  }}
               >
                  {jobs.map((job, index) => (
                     <Box
                        key={index}
                        sx={{
                           "p": 2,
                           "mb": 2,
                           "borderRadius": 2,
                           "backgroundColor":
                              activeIndex === index
                                 ? "background.primary"
                                 : "background.default",
                           "border":
                              activeIndex === index
                                 ? "1px solid #cce4ff"
                                 : "1px solid #eee",
                           "width": "100%",
                           ":hover": {
                              backgroundColor:
                                 activeIndex === index
                                    ? "background.primary"
                                    : "background.primaryLight",
                              transition: "background-color 0.5s ease-in-out 0.1s",
                              cursor: "pointer",
                           },
                        }}
                        onClick={() => selectJobs(index)}
                     >
                        <Typography
                           variant="caption"
                           color="text.primary"
                           sx={{
                              color:
                                 activeIndex === index
                                    ? "text.primary"
                                    : "text.secondary",
                           }}
                        >
                           Posted {job.posted}
                        </Typography>

                        <Typography
                           variant="subtitle1"
                           fontWeight={index === 0 ? "bold" : 600}
                           sx={{
                              color:
                                 activeIndex === index
                                    ? "text.primary"
                                    : "text.secondary",
                              mt: 0.5,
                           }}
                        >
                           {job.title}
                        </Typography>

                        <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                           <Stack direction="row" spacing={0.5} alignItems="center">
                              <WorkOutlineIcon
                                 fontSize="small"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              />
                              <Typography
                                 variant="body2"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              >
                                 Full-Time
                              </Typography>
                           </Stack>
                           <Stack direction="row" spacing={0.5} alignItems="center">
                              <HomeWorkOutlinedIcon
                                 fontSize="small"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              />
                              <Typography
                                 variant="body2"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              >
                                 Remote
                              </Typography>
                           </Stack>
                           <Stack direction="row" spacing={0.5} alignItems="center">
                              <LocationOnOutlinedIcon
                                 fontSize="small"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              />
                              <Typography
                                 variant="body2"
                                 sx={{
                                    color:
                                       activeIndex === index
                                          ? "text.primary"
                                          : "text.secondary",
                                 }}
                              >
                                 {job.location}
                              </Typography>
                           </Stack>
                        </Stack>

                        <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
                           <InsertDriveFileOutlinedIcon
                              fontSize="small"
                              sx={{
                                 color:
                                    activeIndex === index
                                       ? "text.primary"
                                       : "text.secondary",
                              }}
                           />
                           <Typography
                              variant="body2"
                              sx={{
                                 color:
                                    activeIndex === index
                                       ? "text.primary"
                                       : "text.secondary",
                              }}
                           >
                              {job.experience}
                           </Typography>
                        </Stack>
                     </Box>
                  ))}
               </Box>
               <Box sx={{ p: 4, borderRadius: 3, overflow: "hidden", flex: 2 }}>
                  <Grid container justifyContent="space-between" alignItems="center">
                     <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     >
                        {jobs[activeIndex].title}
                     </Typography>
                     <Stack direction="row" spacing={2}>
                        <Button variant="text">Share</Button>
                        <Button variant="contained" color="warning">
                           Apply Now
                        </Button>
                     </Stack>
                  </Grid>

                  <Stack direction="row" spacing={2} mt={2} mb={2}>
                     <Chip
                        icon={<LocationOnIcon />}
                        label={jobs[activeIndex].location}
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     />
                     <Chip
                        icon={<WorkIcon />}
                        label={jobs[activeIndex].typeOfWork}
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     />
                     <Chip
                        color="primary"
                        label={jobs[activeIndex].jobType}
                        sx={{
                           color: "text.primary",
                           fontFamily: "Open Sans",
                        }}
                     />
                     <Chip
                        color="primary"
                        label={jobs[activeIndex].years}
                        sx={{
                           color: "text.primary",
                        }}
                     />
                     <Chip
                        label={jobs[activeIndex].jobTitle}
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     />
                  </Stack>

                  <Box mt={2}>
                     <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     >
                        Overview:
                     </Typography>
                     {jobs[activeIndex].overview.map((item, index) => (
                        <Box key={index}>
                           <Typography
                              sx={{
                                 color: "text.secondary",
                                 fontFamily: "Open Sans",
                              }}
                           >
                              <strong>Job Title:</strong> {item.jobTitle}
                           </Typography>
                           <Typography
                              sx={{
                                 color: "text.secondary",
                                 fontFamily: "Open Sans",
                              }}
                           >
                              <strong>Location:</strong> {item.location}
                           </Typography>
                           <Typography
                              sx={{
                                 color: "text.secondary",
                                 fontFamily: "Open Sans",
                              }}
                           >
                              <strong>Rate:</strong> {item.rate}
                           </Typography>
                           <Typography
                              sx={{
                                 color: "text.secondary",
                                 fontFamily: "Open Sans",
                              }}
                           >
                              <strong>Schedule:</strong> {item.schedule}
                           </Typography>

                           <Typography
                              sx={{
                                 color: "text.secondary",
                                 fontFamily: "Open Sans",
                              }}
                           >
                              <strong>Job Type:</strong> {jobs[activeIndex].jobType}
                           </Typography>
                        </Box>
                     ))}
                  </Box>

                  <Box mt={3}>
                     <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     >
                        Job Description:
                     </Typography>
                     <Typography
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     >
                        {jobs[activeIndex].jobDescription}
                     </Typography>
                  </Box>

                  <Box mt={3}>
                     <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                        }}
                     >
                        Requirements:
                     </Typography>
                     <List>
                        {jobs[activeIndex].Requirements.map((item, index) => (
                           <ListItem key={index}>
                              <ListItemText
                                 primary={
                                    <Typography
                                       sx={{
                                          color: "text.secondary",
                                          fontFamily: "Open Sans",
                                       }}
                                    >
                                       {item}
                                    </Typography>
                                 }
                              />
                           </ListItem>
                        ))}
                     </List>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Semantic>
   );
};

export default Career;
