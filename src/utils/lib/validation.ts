import message from "@/src/utils/constant/message";
import CustomError from "@/src/utils/helper/CustomError";

type ValidationRules = Record<string, string[]>;

type ValidationParams = {
   [key: string]: string;
   rules: string;
};

type ValidationResult = {
   message: string;
   field?: string;
};

const parserValidationRules = (rules: string): ValidationRules => {
   const rulesArray = rules.split("|");
   const parserdRules: Record<string, string[]> = {};
   rulesArray.forEach((rule) => {
      const [key, value] = rule.split(":");
      if (value) {
         parserdRules[key] = value.split(",");
      } else {
         parserdRules[key] = [];
      }
   });

   return parserdRules;
};

const validateFeild = (value: string, rules: string, label: string, fieldId?: string) => {
   const ruleSet = parserValidationRules(rules);
   for (const rule of Object.keys(ruleSet)) {
      const ruleValue = ruleSet[rule];

      switch (rule) {
         case "required":
            if (!value) {
               return {
                  message: message.required.replace("{0}", label),
                  fieldId,
               };
            }
            break;

         case "min":
            if (value.length < parseInt(ruleValue[0], 10)) {
               return {
                  message: message.min.replace("{0}", ruleValue[0]),
                  fieldId,
               };
            }

            break;

         case "max":
            if (value.length > parseInt(ruleValue[0], 10)) {
               return {
                  message: message.max.replace("{0}", ruleValue[0]),
                  fieldId,
               };
            }
            break;
         case "email":
            const emailRegex =
               /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

            if (!emailRegex.test(value)) {
               return {
                  message: message.email,
               };
            }

            break;

         default:
            throw new CustomError(`Validation rule ${rule} is not supported`, {
               code: "INVALID_VALIDATION_RULES",
            });
      }
   }

   return null;
};

const validate = (...params: ValidationParams[]): ValidationResult | null => {
   let validateResult: ValidationResult | null = null;
   if (params.length === 0) {
      throw new CustomError("No parameters provided for validation", {
         code: "NO_PARAMETES",
      });
   }

   for (const param of params) {
      const { rules, label, value, fieldId } = param;
      return (validateResult = validateFeild(value, rules, label, fieldId));
   }

   return validateResult;
};

export default validate;
