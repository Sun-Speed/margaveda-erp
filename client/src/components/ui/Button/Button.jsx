import clsx from "clsx";

import { Loader2 } from "lucide-react";

import { buttonVariants, buttonSizes } from "./buttonVariants";

export default function Button({
  children,

  variant = "primary",

  size = "md",

  icon: Icon,

  iconPosition = "left",

  loading = false,

  fullWidth = false,

  disabled = false,

  className = "",

  ...props
}) {
  return (
    <button
      disabled={loading || disabled}
      className={clsx(
        `
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-[var(--radius-md)]

                font-medium

                transition-all

                duration-200

                select-none

                disabled:opacity-60

                disabled:cursor-not-allowed
                `,

        buttonVariants[variant],

        buttonSizes[size],

        fullWidth && "w-full",

        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        Icon && iconPosition === "left" && <Icon size={18} />
      )}

      {children}

      {!loading && Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
}
