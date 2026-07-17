import clsx from "clsx";

export default function Input({
  label,

  error,

  helperText,

  icon: Icon,

  className = "",

  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          className="
                            text-sm
                            font-medium
                            text-text-primary
                        "
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-text-secondary
                            "
          />
        )}

        <input
          className={clsx(
            `
                        w-full
                        h-12
                        rounded-[var(--radius-md)]
                        border
                        border-border
                        bg-surface
                        text-text-primary
                        placeholder:text-text-muted
                        outline-none
                        transition-all
                        focus:border-primary
                        focus:ring-4
                        focus:ring-primary/10
                        `,

            Icon && "pl-11",

            error && "border-danger focus:border-danger",

            className,
          )}
          {...props}
        />
      </div>

      {error ? (
        <p className="text-sm text-danger">{error}</p>
      ) : (
        helperText && (
          <p className="text-sm text-text-secondary">{helperText}</p>
        )
      )}
    </div>
  );
}
