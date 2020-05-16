export const SET_NAME_VALUE: "SET_NAME_VALUE" = "SET_NAME_VALUE";
export const setNameValue = (name: string) => ({
  type: SET_NAME_VALUE,
  payload: { name },
});
export type SetNameValueAction = ReturnType<typeof setNameValue>;

export const SET_GREETINGS_MESSAGE: "SET_GREETINGS_MESSAGE" =
  "SET_GREETINGS_MESSAGE";
export const setGreetingsMessage = (message: string) => ({
  type: SET_GREETINGS_MESSAGE,
  payload: { message },
});
export type SetGrettingsMessageAction = ReturnType<typeof setGreetingsMessage>;

export type BuilderAction = SetNameValueAction | SetGrettingsMessageAction;
