"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { UploadIcon } from "lucide-react";

interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onFilesSelected?: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, id, onFilesSelected, accept, multiple, disabled, "aria-invalid": ariaInvalid, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onFilesSelected?.(e.target.files);
      e.target.value = "";
    };

    const handleClick = () => {
      inputRef.current?.click();
    };

    return (
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-labelledby={id ? `${id}-label` : undefined}
        aria-invalid={ariaInvalid}
        className={cn(
          "flex min-h-[120px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed border-input bg-muted/30 px-4 py-8 transition-colors",
          "hover:border-ring hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "aria-invalid:border-destructive",
          className
        )}
        aria-label="Upload files"
        aria-disabled={disabled}
      >
        <input
          ref={(node) => {
            (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          type="file"
          id={id}
          className="sr-only"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          tabIndex={-1}
          {...props}
        />
        <UploadIcon className="size-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Drag and drop or click to upload
        </p>
        {accept && (
          <p className="text-xs text-muted-foreground">{accept}</p>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";

export { FileUpload };
