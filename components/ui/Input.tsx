'use client';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`p-2 border rounded text-black w-full ${className}`}
    />
  );
}
