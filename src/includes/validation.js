import {
  Field as veeField,
  Form as veeForm,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  email,
  alpha_spaces as alphaSpaces,
  min,
  max,
  confirmed,
  min_value as minValue,
  max_value as maxValue,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("veeField", veeField);
    app.component("veeForm", veeForm);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("email", email);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("confirmed", confirmed);
    defineRule("min_value", minValue);
    defineRule("max_value", maxValue);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required`,
          min: `the field ${ctx.field} is too short`,
          max: `the field ${ctx.field} is too long`,
          email: `the field ${ctx.field} must be a valid email`,
          confirmed: "the password don't much ",
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;

        return message;
      },
    });
  },
};
