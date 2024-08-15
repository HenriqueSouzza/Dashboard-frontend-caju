import { FormHTMLAttributes } from "react";

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {}

export const Form = ({ ...props }: FormProps) => <form {...props} />
