import * as z from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
};

const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof z.ZodError) {
    // if validation error with zod
    const tree = z.treeifyError(error) as {
      properties: Record<string, { errors: string[] }>;
      errors: string[];
    };
    const fieldErrors = Object.fromEntries(
      Object.entries(tree?.properties).map(([key, val]) => [key, val?.errors])
    );

    return {
      message: "",
      fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if another error instance e.g. database error
    return { message: error.message, fieldErrors: {}, payload: formData };
  } else {
    return {
      // return generic error
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
    };
  }
};

export default fromErrorToActionState;
