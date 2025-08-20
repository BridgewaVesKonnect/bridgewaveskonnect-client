import { Semantic } from "@/src/layout";
import CircleIcon from "@mui/icons-material/Circle";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
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
         title: "Virtual Assistant for Senior Homes",
         experience: "2+ Years Experience",
         jobTitle: "Virtual Assistant for Senior Homes",
         location: "Philippines",
         typeOfWork: "Remote",
         jobType: "Full-Time",
         years: "2+ Years",
         overview: [
            {
               jobTitle: "Virtual Assistant for Senior Homes",
               location: "Fully Remote, Philippines",
               rate: "$5 per hour",
               schedule:
                  " 9 AM EST – 5 PM EST, or flexible shifts depending on senior home needs",
               jobType: "Full-Time",
            },
         ],
         jobDescription:
            "We are seeking a Virtual Assistant (VA) to provide reliable, compassionate, and efficient support for senior homes. The VA will help with administrative tasks, communication, scheduling, and resident support to ensure smooth daily operations and improved quality of life for seniors and staff.",
         keyResponsibilities: [
            {
               title: "Administrative Support",
               Requirements: [
                  "Manage calendars, appointments, and reminders for residents and staff.",
                  "Organize documents, records, and reports digitally.",
                  "Assist in coordinating staff schedules and resident activities.",
               ],
            },
            {
               title: "Resident & Family Support",
               Requirements: [
                  "Answer inquiries from residents and family members promptly and professionally.",
                  "Provide reminders for medication, meals, and daily routines.",
                  "Assist residents with virtual communication tools (e.g., video calls, messages).",
               ],
            },
            {
               title: "Communication & Coordination",
               Requirements: [
                  "Act as a communication bridge between residents, families, and healthcare providers.",
                  "Manage email, calls, and messages to ensure timely responses.",
                  "Prepare and send newsletters or updates to families",
               ],
            },
            {
               title: "Operational Assistance",
               Requirements: [
                  "Support event planning and virtual activities for seniors.",
                  "Track resident requests and escalate issues to staff when needed.",
                  "Maintain confidentiality and compliance with privacy regulations.",
               ],
            },
         ],
         Qualifications: [
            "Proven experience as a Virtual Assistant, Administrative Assistant, or similar role.",
            "Strong communication skills (verbal and written).",
            "Tech-savvy with knowledge of scheduling tools, messaging apps, and video conferencing platforms.",
            "Ability to multitask and prioritize efficiently.",
            "High level of empathy, patience, and professionalism when dealing with seniors and families.",
            "Knowledge of healthcare or eldercare settings is an asset.",
            "Reliable internet connection and suitable home office setup.",
         ],
         keyPerformanceIndicators: [
            {
               title: "Efficiency & Responsiveness",
               Requirements: [
                  "Average response time to resident/family/staff requests.",
                  "% of tasks completed within set deadlines.",
               ],
            },
            {
               title: "Resident & Family Satisfaction",
               Requirements: [
                  "Satisfaction rating from residents and families (via surveys/feedback).",
                  "% of positive interactions handled without escalation.",
               ],
            },
            {
               title: "Operational Support",
               Requirements: [
                  "Number of administrative errors reduced (e.g., scheduling conflicts).",
                  "% of resident reminders/notifications successfully delivered.",
               ],
            },
            {
               title: "Engagement & Adoption",
               Requirements: [
                  "Frequency of residents using VA services (calls, reminders, assistance).",
                  "Staff time saved by delegating routine tasks to VA.",
               ],
            },
            {
               title: "Compliance & Confidentiality",
               Requirements: [
                  "% adherence to data privacy and confidentiality standards.",
                  "Zero reported incidents of data breaches or mishandling",
               ],
            },
         ],
      },
      {
         posted: "3 days ago",
         title: "Virtual Assistant – Administrative Assistant",
         experience: "2+ Years Experience",
         jobTitle: "Virtual Assistant – Administrative Assistant",
         location: "Philippines",
         typeOfWork: "Remote",
         jobType: "Full-Time",
         years: "2+ Years",
         overview: [
            {
               jobTitle: "Virtual Assistant – Administrative Assistant",
               location: "Fully Remote, Philippines",
               rate: "$5 per hour",
               schedule: "Flexible, based on employer’s needs",
               jobType: "Full-Time",
            },
         ],
         jobDescription:
            "We are seeking a Virtual Assistant (Administrative Assistant) to provide remote administrative and organizational support. The ideal candidate is detail-oriented, proactive, and highly organized, capable of handling multiple tasks while maintaining professionalism and confidentiality.",
         keyResponsibilities: [
            {
               title: "Administrative Support",
               Requirements: [
                  "Manage calendars, schedule meetings, and organize appointments",
                  "Draft, edit, and manage emails, reports, and other documents.",
                  "Prepare presentations and maintain digital filing systems.",
               ],
            },
            {
               title: "Data & Document Handling",
               Requirements: [
                  "Maintain accurate records, databases, and spreadsheets.",
                  "Assist with data entry, reporting, and research tasks.",
                  "Organize confidential information with discretion.",
               ],
            },
            {
               title: "Task & Project Coordination",
               Requirements: [
                  "Track progress on assigned projects and follow up on pending tasks.",
                  "Support event planning, travel arrangements, and logistics.",
                  "Ensure smooth day-to-day operations and timely task completion.",
               ],
            },
         ],
         Qualifications: [
            "Proven experience as a Virtual Assistant, Administrative Assistant, or similar role.",
            "Strong written and verbal communication skills.",
            "Proficient in Microsoft Office Suite, Google Workspace, and scheduling tools.",
            "Ability to multitask, prioritize, and meet deadlines.",
            "High level of professionalism, discretion, and confidentiality.",
            "Self-motivated with strong organizational and problem-solving skills.",
         ],
         keyPerformanceIndicators: [
            {
               title: "Efficiency & Responsiveness",
               Requirements: ["% of tasks/projects completed on time."],
            },
            {
               title: "Response Time",
               Requirements: [
                  "Average time to respond to emails, messages, and requests.",
               ],
            },
            {
               title: "Accuracy",
               Requirements: [
                  "Reduction in errors within documents, data entry, or scheduling.",
               ],
            },
            {
               title: "Stakeholder Satisfaction",
               Requirements: ["Positive feedback from managers and team members."],
            },
            {
               title: "Efficiency",
               Requirements: [
                  "Demonstrated ability to manage multiple priorities effectively",
               ],
            },
         ],
      },
      {
         posted: "3 days ago",
         title: "VIRTUAL ASSISTANT FOR BOOKKEEPING SUPPORT",
         experience: "2+ Years Experience",
         jobTitle: "VIRTUAL ASSISTANT FOR BOOKKEEPING SUPPORT",
         location: "Philippines",
         typeOfWork: "Remote",
         jobType: "Full-Time",
         years: "2+ Years",
         overview: [
            {
               jobTitle: "VIRTUAL ASSISTANT FOR BOOKKEEPING SUPPORT",
               location: "Fully Remote, Philippines",
               rate: "$5 per hour",
               schedule: "Flexible, based on employer’s needs",
               jobType: "Full-Time",
            },
         ],
         jobDescription:
            "We are seeking a Virtual Assistant specializing in bookkeeping support to assist with financial and administrative tasks. The role involves maintaining accurate records, supporting daily accounting functions, and ensuring smooth financial operations. This position is ideal for someone who is detail-oriented, organized, and confident with accounting tools.",
         keyResponsibilities: [
            {
               title: "Bookkeeping & Accounting Support",
               Requirements: [
                  "Record daily financial transactions (income, expenses, invoices, receipts).",
                  "Maintain and reconcile accounts, ledgers, and financial data.",
                  "Support preparation of monthly/quarterly financial reports.",
               ],
            },
            {
               title: "Accounts Management",
               Requirements: [
                  "Track accounts payable and receivable.",
                  "Assist with preparing invoices and following up on outstanding payments.",
                  "Support payroll preparation and expense reimbursements.",
               ],
            },
            {
               title: "Administrative & Financial Tasks",
               Requirements: [
                  "Organize financial documents and maintain filing systems.",
                  "Assist with budget tracking and expense categorization",
                  "Liaise with accountants, vendors, and clients as needed.",
               ],
            },
            {
               title: "Compliance & Accuracy",
               Requirements: [
                  "Ensure confidentiality of financial data",
                  "Adhere to accounting standards and internal policies",
                  "Minimize errors through consistent double-checking and reporting.",
               ],
            },
         ],
         Qualifications: [
            "Proven experience as a Virtual Assistant, Bookkeeper, or similar role.",
            "Proficiency in accounting software (e.g., QuickBooks, Xero, FreshBooks, or Wave).",
            "Strong knowledge of spreadsheets (Excel, Google Sheets).",
            "Attention to detail, accuracy, and strong organizational skills.",
            "Ability to work independently and meet deadlines.",
            "Familiarity with basic accounting principles.",
         ],
         keyPerformanceIndicators: [
            {
               title: "Accuracy Rate",
               Requirements: ["% of error-free financial entries and reconciliations."],
            },
            {
               title: "Timeliness",
               Requirements: ["Completion of bookkeeping tasks within deadlines."],
            },
            {
               title: "Compliance",
               Requirements: ["Adherence to company and regulatory standards."],
            },
            {
               title: "Efficiency",
               Requirements: ["Number of financial tasks completed per week/month."],
            },
            {
               title: "Stakeholder Satisfaction",
               Requirements: ["Positive feedback from managers/accountants."],
            },
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
                        Overview:
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

                  {jobs[activeIndex].keyResponsibilities.length > 0 && (
                     <Box mt={3}>
                        <Typography
                           variant="subtitle1"
                           fontWeight="bold"
                           sx={{
                              color: "text.secondary",
                              fontFamily: "Open Sans",
                              fontSize: "1.2rem",
                              fontStyle: "italic",
                           }}
                        >
                           Key Responsibilities
                        </Typography>
                        {jobs[activeIndex].keyResponsibilities.map((section, index) => (
                           <Box
                              key={index}
                              sx={{
                                 marginLeft: 2,
                              }}
                           >
                              <Typography
                                 variant="subtitle1"
                                 fontWeight="bold"
                                 sx={{
                                    color: "text.secondary",
                                    fontFamily: "Open Sans",
                                    fontSize: "1.2rem",
                                    fontStyle: "italic",
                                 }}
                              >
                                 {index + 1}. {section.title}
                              </Typography>
                              <List
                                 sx={{
                                    pl: 2,
                                    py: "3px",
                                 }}
                              >
                                 {section.Requirements.map((item, index) => (
                                    <ListItem key={index} sx={{ py: "3px" }}>
                                       <ListItemText
                                          primary={
                                             <Box
                                                sx={{
                                                   display: "flex",
                                                   alignItems: "center",
                                                   justifyContent: "start",
                                                   gap: "10px",
                                                }}
                                             >
                                                <RadioButtonUncheckedIcon
                                                   sx={{
                                                      color: "text.secondary",
                                                      fontSize: "0.7rem",
                                                   }}
                                                />{" "}
                                                <Typography
                                                   sx={{
                                                      color: "text.secondary",
                                                      fontFamily: "Open Sans",
                                                   }}
                                                >
                                                   {item}
                                                </Typography>
                                             </Box>
                                          }
                                       />
                                    </ListItem>
                                 ))}
                              </List>
                           </Box>
                        ))}
                     </Box>
                  )}

                  {jobs[activeIndex].Qualifications.length > 0 && (
                     <Box mt={3}>
                        <Typography
                           variant="subtitle1"
                           fontWeight="bold"
                           sx={{
                              color: "text.secondary",
                              fontFamily: "Open Sans",
                              fontSize: "1.2rem",
                              fontStyle: "italic",
                           }}
                        >
                           Qualifications:
                        </Typography>
                        <List sx={{ pl: 2, py: "3px" }}>
                           {jobs[activeIndex].Qualifications.map((item, index) => (
                              <ListItem key={index} sx={{ py: "3px" }}>
                                 <ListItemText
                                    primary={
                                       <Box
                                          sx={{
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "start",
                                             gap: "10px",
                                          }}
                                       >
                                          <CircleIcon
                                             sx={{
                                                color: "text.secondary",
                                                fontSize: "0.6rem",
                                             }}
                                          />{" "}
                                          <Typography
                                             sx={{
                                                color: "text.secondary",
                                                fontFamily: "Open Sans",
                                             }}
                                          >
                                             {" "}
                                             {item}
                                          </Typography>
                                       </Box>
                                    }
                                 />
                              </ListItem>
                           ))}
                        </List>
                     </Box>
                  )}
                  {jobs[activeIndex].keyPerformanceIndicators.length > 0 && (
                     <Box mt={3}>
                        <Typography
                           variant="subtitle1"
                           fontWeight="bold"
                           sx={{
                              color: "text.secondary",
                              fontFamily: "Open Sans",
                              fontSize: "1.2rem",
                              fontStyle: "italic",
                           }}
                        >
                           Key Performance Indicators (KPIs)
                        </Typography>
                        <List sx={{ pl: 2, py: "3px" }}>
                           {jobs[activeIndex].keyPerformanceIndicators.map(
                              (section, index) => (
                                 <Box key={index}>
                                    <Typography
                                       sx={{
                                          color: "text.secondary",
                                          fontFamily: "Open Sans",
                                          fontWeight: "bold",
                                       }}
                                    >
                                       {index + 1}. {section.title}
                                    </Typography>
                                    {section.Requirements.map((item, index) => (
                                       <ListItem
                                          key={index}
                                          sx={{ py: 0, paddingLeft: 4 }}
                                       >
                                          <ListItemText
                                             primary={
                                                <Box
                                                   sx={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "start",
                                                      gap: "10px",
                                                   }}
                                                >
                                                   <CircleIcon
                                                      sx={{
                                                         color: "text.secondary",
                                                         fontSize: "0.6rem",
                                                      }}
                                                   />{" "}
                                                   <Typography
                                                      sx={{
                                                         color: "text.secondary",
                                                         fontFamily: "Open Sans",
                                                      }}
                                                   >
                                                      {" "}
                                                      {item}
                                                   </Typography>
                                                </Box>
                                             }
                                          />
                                       </ListItem>
                                    ))}
                                 </Box>
                              ),
                           )}
                        </List>
                     </Box>
                  )}
               </Box>
            </Box>
         </Box>
      </Semantic>
   );
};

export default Career;
