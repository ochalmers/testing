import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldContextValue {
  id: string;
  error?: string;
  disabled?: boolean;
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      id: providedId,
      label,
      error,
      helperText,
      required,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const id = React.useId();
    const fieldId = providedId ?? id;

    return (
      <FormFieldContext.Provider
        value={{
          id: fieldId,
          error,
          disabled,
        }}
      >
        <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
          {label && (
            <Label
              htmlFor={fieldId}
              className={cn(
                error && "text-destructive"
              )}
            >
              {label}
              {required && <span className="text-destructive ml-0.5">*</span>}
            </Label>
          )}
          {React.isValidElement(children) &&
            React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
              id: fieldId,
              "aria-invalid": !!error,
              "aria-describedby": error
                ? `${fieldId}-error`
                : helperText
                ? `${fieldId}-helper`
                : undefined,
              disabled,
            } as Record<string, unknown>)}
          {error && (
            <p
              id={`${fieldId}-error`}
              className="text-sm text-destructive"
              role="alert"
            >
              {error}
            </p>
          )}
          {helperText && !error && (
            <p
              id={`${fieldId}-helper`}
              className="text-sm text-muted-foreground"
            >
              {helperText}
            </p>
          )}
        </div>
      </FormFieldContext.Provider>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };
