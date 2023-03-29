import * as Yup from "yup";

export const inputSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .matches(
      /^[a-zA-Z0-9]{3,16}$/,
      " Username should be 3-16 charecters and shouldn'n include any special charecter!"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("It should be a valid email address!"),
  password: Yup.string()
    .required("password is required")
    .min(8, "Password must be at least 3 characters long")
    .matches(
      /^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*])(?=.*[a-zA-Z]).{8,16}$/,
      "It must be between 8 and 16 characters.It must contain at least 1 uppercase and lowercase letters and special characters."
    ),
  confirmPassword: Yup.string()
    .required("confirmPassword is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

// matches ile regex yazabiliyoruz.
// oneOf özelliği passwordun aynısı olmaslı referansı olmalı. [Yup.ref("password")] ile neyi referans alması gerektiğini yazıyoruz.
