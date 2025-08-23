import {
   AutoComplete,
   Box,
   Button,
   Form,
   FormControl,
   FormGroup,
   TextField,
   Typography,
} from "@/src/html";
import validate from "@/src/utils/lib/validation";
import { SyntheticEvent, useRef, useState } from "react";

const BookConsultation = () => {
   const formRef = useRef<null | HTMLFormElement>(null);

   const [formState, useFormState] = useState([
      {
         name: "yourName",
         label: "Your name",
         errorMessage: "",
         rules: "required",
         error: false,
         multiline: false,
         type: "text",
         maxLength: 30,
         disabled: false,
      },
      {
         name: "yourEmail",
         label: "Your email",
         errorMessage: "",
         rules: "required|email",
         error: false,
         multiline: false,
         type: "text",
         maxLength: 50,
         disabled: false,
      },
      {
         name: "yourCountry",
         label: "Your country",
         errorMessage: "",
         rules: "required",
         error: false,
         type: "autocomplete",
         maxLength: 25,
      },
      {
         name: "yourPhone",
         label: "Your phone",
         errorMessage: "",
         rules: "required",
         error: false,
         multiline: false,
         type: "tel",
         maxLength: 15,
         disabled: true,
      },
      {
         name: "yourMessage",
         label: "Your message",
         errorMessage: "",
         rules: "required",
         error: false,
         multiline: true,
         type: "textarea",
         maxLength: 250,
         disabled: false,
      },
   ]);

   const onSubmitForm = (event: SyntheticEvent) => {
      event.preventDefault();
      if (formRef.current) {
         const formData = new FormData(formRef.current);
         const formStateCompy = [...formState];
         for (const form of formStateCompy) {
            const value = formData.get(form.name) as string;
            const validationResult = validate({
               value,
               label: form.label,
               rules: form.rules,
            });

            const message = validationResult?.message || "";
            form.error = !!message;
            form.errorMessage = message;
         }
         useFormState(formStateCompy);

         if (formStateCompy.some((item) => item.error)) return;

         console.log("call the api");
      }
   };

   const onChnageEventInput = (event: SyntheticEvent) => {
      const target = event.target as HTMLInputElement;
      const name = target.name;
      const value = target.value;
      const formCopy = [...formState];

      const form = formCopy.find((item) => item.name === name);
      if (form) {
         const validationResult = validate({
            value,
            label: form.label,
            rules: form.rules,
         });

         const message = validationResult?.message || "";
         form.error = !!message;
         form.errorMessage = message;

         useFormState(formCopy);
      }
   };

   const autoCompleteChangeEvent = (value: unknown) => {
      const formCopy = [...formState];
      const form = formCopy.find((item) => item.name === "yourCountry");
      const phone = formCopy.find((item) => item.name === "yourPhone");

      if (form && phone) {
         const validationResult = validate({
            value: (value ? value : "") as string,
            label: form.label,
            rules: form.rules,
         });

         const message = validationResult?.message || "";
         form.error = !!message;
         form.errorMessage = message;
         phone.disabled = !!message;

         useFormState(formCopy);
      }
   };

   return (
      <Box
         id="bookConsultation"
         sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "primary.contrast",
            padding: "35px 20px",
            boxSizing: "border-box",
         }}
      >
         <Typography
            variant="h2"
            component="div"
            sx={{
               fontWeight: 600,
               fontSize: "2rem",
               fontFamily: "Open Sans",
               color: "text.secondary",
               textAlign: "center",
               marginBottom: 2,
            }}
         >
            Your Ideas Matter – Let’s Discuss!
         </Typography>
         <Typography
            variant="body1"
            component="div"
            sx={{
               fontSize: "1.2rem",
               fontFamily: "Open Sans",
               color: "text.secondary",
               textAlign: "center",
            }}
         >
            Discuss how we can help your business grow.
         </Typography>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               marginTop: 3,
               gap: 2,
            }}
         >
            {/* <Box
               sx={{
                  flex: 1,
                  boxSizing: "border-box",
                  width: "100%",
               }}
            ></Box> */}
            <Box
               sx={{
                  flex: 1,
                  boxSizing: "border-box",
                  width: "100%",
                  maxWidth: {
                     md: "45%",
                  },
               }}
            >
               <Form
                  ref={formRef}
                  onSubmit={onSubmitForm}
                  style={{
                     width: "100%",
                     display: "flex",
                     flexDirection: "column",
                     gap: "10px",
                  }}
               >
                  <fieldset
                     disabled={false}
                     style={{
                        border: "none",
                        padding: 0,
                        margin: 0,
                     }}
                  >
                     <FormGroup
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                           gap: "10px",
                           width: "100%",
                        }}
                     >
                        {formState.map((item) => (
                           <FormControl variant="outlined" fullWidth key={item.name}>
                              {item.type === "textarea" ? (
                                 <TextField
                                    variant="outlined"
                                    fullWidth
                                    name={item.name}
                                    label={item.label}
                                    slotProps={{
                                       htmlInput: {
                                          maxLength: item.maxLength,
                                          name: item.name,
                                       },
                                    }}
                                    error={item.error}
                                    helperText={item.errorMessage}
                                    multiline={item.multiline}
                                    minRows={6}
                                    maxRows={7}
                                    onChange={onChnageEventInput}
                                    disabled={item.disabled}
                                 />
                              ) : item.type === "autocomplete" ? (
                                 <AutoComplete
                                    options={[
                                       "Philippines",
                                       "Canada",
                                       "Austrilla",
                                       "United States",
                                    ]}
                                    renderInput={(params) => (
                                       <TextField
                                          variant="outlined"
                                          {...params}
                                          label={item.label}
                                          disabled={item.disabled}
                                          error={item.error}
                                          helperText={item.errorMessage}
                                       />
                                    )}
                                    onChange={(_, value) =>
                                       autoCompleteChangeEvent(value)
                                    }
                                    slotProps={{
                                       paper: {
                                          sx: {
                                             backgroundColor: "background.default",
                                             color: "text.secondary",
                                          },
                                       },
                                       popper: {
                                          modifiers: [
                                             {
                                                name: "offset",
                                                options: {
                                                   offset: [0, 4],
                                                },
                                             },
                                          ],
                                       },
                                    }}
                                 />
                              ) : (
                                 <TextField
                                    variant="outlined"
                                    fullWidth
                                    name={item.name}
                                    label={item.label}
                                    slotProps={{
                                       htmlInput: {
                                          maxLength: item.maxLength,
                                          name: item.name,
                                       },
                                    }}
                                    error={item.error}
                                    helperText={item.errorMessage}
                                    onChange={onChnageEventInput}
                                    disabled={item.disabled}
                                 />
                              )}
                           </FormControl>
                        ))}
                     </FormGroup>

                     <Button
                        type="submit"
                        variant="contained"
                        sx={{
                           "backgroundColor": "primary.main",
                           "color": "text.primary",
                           "padding": "10px 20px",
                           "fontSize": "1rem",
                           "fontFamily": "Open Sans",
                           "width": "100%",
                           "marginTop": 3,
                           "&:hover": {
                              backgroundColor: "primary.dark",
                           },
                        }}
                     >
                        Submit inquiry
                     </Button>
                  </fieldset>
               </Form>
            </Box>
         </Box>
      </Box>
   );
};

export default BookConsultation;
