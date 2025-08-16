import { Box, Typography } from "@/src/html";
import {
   AccessTime,
   AttachMoney,
   EmojiPeople,
   Group,
   RocketLaunch,
   Schedule,
} from "@mui/icons-material";
const WhyChooseUs = () => {
   const items = [
      {
         title: "Skilled Talent Pool",
         icon: <Group fontSize="medium" color="primary" />,
         description:
            "Our VAs are college-educated, fluent in English, and trained for global business needs.",
      },
      {
         title: "Cost-Effective Solutions",
         icon: <AttachMoney fontSize="medium" color="primary" />,
         description: "Save on labor costs without compromising quality.",
      },
      {
         title: "Flexible Support",
         icon: <AccessTime fontSize="medium" color="primary" />,
         description: "Part-time, full-time, or project-based—your choice.",
      },
      {
         title: "24/7 Availability",
         icon: <Schedule fontSize="medium" color="primary" />,
         description: "Time zone flexibility to match your business hours.",
      },
      {
         title: "Experienced Leadership",
         icon: <EmojiPeople fontSize="medium" color="primary" />,
         description:
            "Our management brings years of expertise in leadership and VA team handling, ensuring client satisfaction and long-term growth.",
      },
      {
         title: "No Setup Fee",
         icon: <RocketLaunch fontSize="medium" color="primary" />,
         description: "Get started with zero upfront costs!",
      },
   ];
   return (
      <Box
         sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "background.default",
            boxSizing: "border-box",
            padding: "20px",
         }}
      >
         <Typography
            sx={{
               fontSize: "2rem",
               fontWeight: 600,
               textAlign: "center",
               padding: "20px",
               color: "text.hint",
               margin: "0 auto",
               fontFamily: "Open Sans",
            }}
         >
            Why Choose Us
         </Typography>
         <Typography
            variant="body1"
            component={"p"}
            sx={{
               fontSize: "1.2rem",
               textAlign: "center",
               padding: "0 20px",
               color: "text.secondary",
               margin: "0 auto",
               maxWidth: "800px",
               fontFamily: "Open Sans",
            }}
         >
            We provide an end-to-end solution that makes it easy to find and vet
            international workers, monitor productivity.
         </Typography>

         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
               gap: "20px",
               marginTop: "35px",
            }}
         >
            {items.map((item, index) => (
               <Box
                  key={index}
                  sx={{
                     "padding": "20px",
                     "borderRadius": "8px",
                     "backgroundColor": "#f8fafc",
                     "transition": "transform 0.3s ease",
                     "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                     },
                  }}
               >
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: 2,
                        marginBottom: "10px",
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: "1.5rem",
                           fontWeight: 600,
                           color: "text.secondary",
                           fontFamily: "Open Sans",
                           letterSpacing: "0.02rem",
                        }}
                     >
                        {item.title}
                     </Typography>
                     {item.icon}
                  </Box>
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1.2rem",
                        color: "text.secondary",
                        fontFamily: "Raleway",
                        fontWeight: 400,
                     }}
                  >
                     {item.description}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default WhyChooseUs;
