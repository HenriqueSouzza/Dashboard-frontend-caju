import { FormHTMLAttributes } from "react";

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  onSubmit?: (item: { [key: string]: string | number | File }) => void
}

export const Form = ({ onSubmit, ...props }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const interactorData = new FormData(event.currentTarget).entries();
    onSubmit && onSubmit(Object.fromEntries(interactorData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
    />
  );
};
