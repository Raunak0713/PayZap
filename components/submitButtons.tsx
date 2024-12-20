"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export default function SubmitButton({
  text,
  variant,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <div aria-live="polite">
      {pending ? (
        <Button disabled className="w-full" variant={variant} {...props}>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button type="submit" className="w-full" variant={variant} {...props}>
          {text}
        </Button>
      )}
    </div>
  );
}
