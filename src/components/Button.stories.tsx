import { Button } from "./Button";

export const Submit = () => (
  <Button
    className="font-sans bg-blue-600 text-white text-xl rounded-full p-2 w-full"
    type="submit"
  >
    submit
  </Button>
);

export const Reset = () => (
  <Button
    className="font-sans bg-red-600 text-white text-xl rounded-full p-2 w-full"
    type="reset"
  >
    reset
  </Button>
);
