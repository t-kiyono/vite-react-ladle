import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">

export function Button({ ...rest }: ButtonProps) {
  return (
    <button {...rest} />
  )
}
