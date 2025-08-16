import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
   Box,
   Button,
   Chip,
   Divider,
   FormControl,
   Grid,
   IconButton,
   InputBase,
   MenuItem,
   Select,
   Stack,
   Typography,
} from "@mui/material";
const Career = () => {
   const jobs = [
      {
         posted: "3 days ago",
         title: "Client Success Specialist",
         experience: "2+ Years Experience",
      },
      {
         posted: "1 week ago",
         title: "Marketing Manager (Manufacturing)",
         experience: "3+ Years Experience",
      },
      {
         posted: "1 week ago",
         title: "Operations Assistant",
         experience: "2 Years Experience",
      },
   ];
   return (
      <div>
         <Box
            sx={{
               p: 1,
               display: "flex",
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
               <InputBase placeholder="Search Job" sx={{ px: 1, width: 160 }} />
               <Divider orientation="vertical" flexItem />
               <Box sx={{ px: 1, display: "flex", alignItems: "center" }}>
                  <LocationOnOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
               </Box>
               <InputBase placeholder="Location" sx={{ px: 1, width: 120 }} />
               <IconButton sx={{ backgroundColor: "#1976d2", color: "white", m: 0.5 }}>
                  <SearchIcon />
               </IconButton>
            </Box>

            {/* Filters */}
            <FormControl sx={{ minWidth: 140 }} size="small">
               <Select displayEmpty defaultValue="">
                  <MenuItem value="">
                     <em>Experience Level</em>
                  </MenuItem>
                  <MenuItem value="entry">Entry Level</MenuItem>
                  <MenuItem value="mid">Mid Level</MenuItem>
                  <MenuItem value="senior">Senior Level</MenuItem>
               </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} size="small">
               <Select displayEmpty defaultValue="">
                  <MenuItem value="">
                     <em>Job Field</em>
                  </MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="sales">Sales</MenuItem>
                  <MenuItem value="support">Support</MenuItem>
               </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} size="small">
               <Select displayEmpty defaultValue="">
                  <MenuItem value="">
                     <em>Job Type</em>
                  </MenuItem>
                  <MenuItem value="full-time">Full-Time</MenuItem>
                  <MenuItem value="part-time">Part-Time</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
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
            }}
         >
            <Box>
               {jobs.map((job, index) => (
                  <Box
                     key={index}
                     sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 2,
                        backgroundColor: index === 0 ? "#f0f6ff" : "#fff",
                        border: index === 0 ? "1px solid #cce4ff" : "1px solid #eee",
                     }}
                  >
                     <Typography variant="caption" color="text.secondary">
                        Posted {job.posted}
                     </Typography>

                     <Typography
                        variant="subtitle1"
                        fontWeight={index === 0 ? "bold" : 600}
                        sx={{ color: index === 0 ? "#1976d2" : "inherit", mt: 0.5 }}
                     >
                        {job.title}
                     </Typography>

                     <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                        <Stack direction="row" spacing={0.5} alignItems="center">
                           <WorkOutlineIcon fontSize="small" />
                           <Typography variant="body2">Full-Time</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                           <HomeWorkOutlinedIcon fontSize="small" />
                           <Typography variant="body2">Remote</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                           <LocationOnOutlinedIcon fontSize="small" />
                           <Typography variant="body2">Philippines</Typography>
                        </Stack>
                     </Stack>

                     <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
                        <InsertDriveFileOutlinedIcon fontSize="small" />
                        <Typography variant="body2">{job.experience}</Typography>
                     </Stack>
                  </Box>
               ))}
            </Box>
            <Box sx={{ p: 4, borderRadius: 3 }}>
               <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" fontWeight="bold">
                     Client Success Specialist
                  </Typography>
                  <Stack direction="row" spacing={2}>
                     <Button variant="text">Share</Button>
                     <Button variant="contained" color="warning">
                        Apply Now
                     </Button>
                  </Stack>
               </Grid>

               <Stack direction="row" spacing={2} mt={2} mb={2}>
                  <Chip icon={<LocationOnIcon />} label="Philippines" />
                  <Chip icon={<WorkIcon />} label="Remote" />
                  <Chip color="primary" label="Full-Time" />
                  <Chip color="primary" label="2+ Years" />
                  <Chip label="Client Success Specialist" />
               </Stack>

               <Box mt={2}>
                  <Typography variant="subtitle1" fontWeight="bold">
                     Overview:
                  </Typography>
                  <Typography>
                     <strong>Job Title:</strong> Client Success Specialist
                  </Typography>
                  <Typography>
                     <strong>Location:</strong> Fully Remote, Philippines
                  </Typography>
                  <Typography>
                     <strong>Rate:</strong> $4.00 – $6.00 per hour based on experience
                  </Typography>
                  <Typography>
                     <strong>Schedule:</strong> Monday to Friday, Eastern Standard Time
                  </Typography>
                  <Typography>
                     <strong>Job Type:</strong> Full-Time
                  </Typography>
               </Box>

               <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                     Job Description:
                  </Typography>
                  <Typography>
                     As a Client Success Specialist, you will serve as the primary point
                     of contact for our clients, ensuring their satisfaction with our
                     staffing solutions. This role requires strong communication,
                     relationship management, and problem-solving skills. The ideal
                     candidate will be proactive, client-focused, and able to balance
                     multiple accounts while ensuring our placed talent meets performance
                     expectations.
                  </Typography>
               </Box>

               <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                     Requirements:
                  </Typography>
                  <ul>
                     <li>
                        Proven experience in client relationship management, account
                        management, or customer success— preferably in the staffing, BPO,
                        or recruitment industry.
                     </li>
                     <li>
                        Strong understanding of the offshore hiring and staffing process.
                     </li>
                     <li>
                        Exceptional communication skills (verbal and written) with a
                        client-focused approach.
                     </li>
                     <li>
                        Strong problem-solving skills and the ability to manage multiple
                        priorities simultaneously.
                     </li>
                  </ul>
               </Box>
            </Box>
         </Box>
      </div>
   );
};

export default Career;
