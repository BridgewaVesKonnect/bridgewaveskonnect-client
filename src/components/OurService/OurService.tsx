import { Box, Typography } from "@/src/html";
const OurService = () => {
   return (
      <Box
         sx={{
            width: "100%",
            height: "100%",
            maxWidth: "95%",
            margin: "0 auto",
            backgroundColor: "background.default",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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
               fontFamily: "Open Sans",
            }}
         >
            Our Services
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
               fontWeight: 400,
            }}
         >
            Discover our comprehensive virtual assistant services tailored to streamline
            your business operations.
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
                  title: "Administrative Support",
                  description:
                     "Efficiently manage your day-to-day tasks, including scheduling, email management, and data entry, with our skilled virtual assistants.",
               },
               {
                  title: "Customer Service",
                  description:
                     "Deliver exceptional support to your clients with our professional team, handling inquiries, support tickets, and more.",
               },
               {
                  title: "Bookkeeping Support",
                  description:
                     "Keep your finances in order with our accurate and reliable bookkeeping services, tailored to your business needs.",
               },
            ].map((service, index) => (
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
                     {service.title}
                  </Typography>
                  <Typography
                     variant="body2"
                     sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        letterSpacing: "0.05rem",
                     }}
                  >
                     {service.description}
                  </Typography>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default OurService;
