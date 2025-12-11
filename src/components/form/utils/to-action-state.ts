import * as z from "zod";

export type ActionState = { message: string; payload?: FormData };

const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof z.ZodError) {
    // if validation error with zod
    return {
      message: error.issues.map((e) => e.message).join(""),
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if another error instance e.g. database error
    return { message: error.message, payload: formData };
  } else {
    return {
      // return generic error
      message: "An unknown error occured",
      payload: formData,
    };
  }
};

export default fromErrorToActionState;
