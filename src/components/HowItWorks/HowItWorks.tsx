import { Box, Typography } from "@/src/html";

const HowItWorks = () => {
   return (
      <Box
         sx={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: "background.default",
            borderRadius: "12px",
            padding: "40px",
            boxSizing: "border-box",
            marginTop: 4,
         }}
      >
         <Typography
            sx={{
               fontSize: "2.5rem",
               fontWeight: 700,
               textAlign: "center",
               color: "text.hint",
               marginBottom: "20px",
            }}
         >
            How It Works
         </Typography>
         <Typography
            variant="body1"
            component="p"
            sx={{
               fontSize: "1.2rem",
               textAlign: "center",
               color: "text.secondary",
               marginBottom: "40px",
               maxWidth: "700px",
               margin: "0 auto 40px",
               fontFamily: "Open Sans",
            }}
         >
            Get started with our virtual assistant services in three simple steps,
            designed to save you time and boost efficiency.
         </Typography>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
               gap: "20px",
            }}
         >
            {[
               {
                  title: "Tell Us Your Needs",
                  description:
                     "Fill out our quick questionnaire via Calendly to let us know your specific requirements.",
               },
               {
                  title: "Meet Your VA",
                  description:
                     "We match you with the perfect virtual assistant tailored to your business needs.",
               },
               {
                  title: "Start Delegating",
                  description:
                     "Onboard your VA and start delegating tasks to free up your time.",
               },
            ].map((step, index) => (
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
                  className="bg-slate-50"
               >
                  <Typography
                     sx={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "text.secondary",
                        marginBottom: "10px",
                        fontFamily: "Open Sans",
                        letterSpacing: "0.02rem",
                     }}
                  >
                     {step.title}
                  </Typography>
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                     }}
                  >
                     {step.description}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default HowItWorks;
