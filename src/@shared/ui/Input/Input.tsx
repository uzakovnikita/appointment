import cn from "classnames";

export const Input = ({
  error,
  ...rest
}: React.HTMLProps<HTMLInputElement> & {
  error?: boolean;
}) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2",
        "bg-surface-container-highest",
        "text-on-surface",
        "border-outline border",
        "rounded-md",
        "text-body-md",
        "placeholder:text-on-surface-variant/50",
        "hover:border-outline-variant",
        "focus:border-primary focus:ring-primary focus:ring-1",
        "disabled:bg-on-surface/12 disabled:border-on-surface/12",
        "transition-colors duration-200",
        "peer",
        error && "border-error focus:border-error focus:ring-error",
      )}
      {...rest}
    />
  );
};
