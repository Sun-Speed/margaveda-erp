import clsx from "clsx";

import { iconButtonVariants, iconButtonSizes } from "./iconButtonVariants";

export default function IconButton({
  icon: Icon,

  variant = "ghost",

  size = "md",

  badge,

  className = "",

  ...props
}) {
  return (
    <button
      className={clsx(
        `
                relative
                inline-flex
                items-center
                justify-center
                rounded-[var(--radius-md)]
                transition-all
                duration-200
                disabled:opacity-50
                disabled:cursor-not-allowed
                `,

        iconButtonVariants[variant],

        iconButtonSizes[size],

        className,
      )}
      {...props}
    >
      <Icon size={20} />

      {badge > 0 && (
        <span
          className="
                            absolute
                            -top-1
                            -right-1
                            min-w-5
                            h-5
                            rounded-full
                            bg-danger
                            text-white
                            text-[10px]
                            flex
                            items-center
                            justify-center
                            px-1
                        "
        >
          {badge}
        </span>
      )}
    </button>
  );
}
