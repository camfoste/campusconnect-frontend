'use client';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${className}`}
    />
  );
}
