import { Story } from "@ladle/react";
import { Button as ButtonComponent } from "./Button";

interface ButtonParameter {
  label: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}
export const Button: Story<ButtonParameter> = ({
  label,
  size = "medium",
  disabled = false
}) => (
  <ButtonComponent
    className={`${disabled ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"} ${
      size === "small"
        ? "px-2 py-1 text-sm"
        : size === "medium"
          ? "px-3 py-2 text-base"
          : "px-6 py-3 text-xl"
    }} font-sans text-white rounded-full w-full`}
    type="submit"
    disabled={disabled}
  >
    {label}
  </ButtonComponent>
);

Button.args = {
  label: "Submit",
  disabled: false,
  size: "medium",
};

Button.argTypes = {
  size: {
    control: { type: "radio" },
    defaultValue: "medium",
    options: ["small", "medium", "large"],
  },
};
