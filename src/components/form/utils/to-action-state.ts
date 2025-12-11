import * as z from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
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
      status: "ERROR",
      message: "",
      fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // if another error instance e.g. database error
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  } else {
    return {
      // return generic error
      status: "ERROR",
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return { status, message, fieldErrors: {}, timestamp: Date.now() };
};

export default fromErrorToActionState;
