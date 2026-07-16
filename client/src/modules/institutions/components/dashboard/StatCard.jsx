import React from "react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "blue",
  subtitle,
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div
      className="
                bg-white
                dark:bg-gray-800
                rounded-2xl
                shadow-sm
                border
                dark:border-gray-700
                p-6
                transition
                hover:shadow-lg
            "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>

          {subtitle && <p className="text-xs mt-2 text-gray-400">{subtitle}</p>}
        </div>

        <div
          className={`
                        w-14
                        h-14
                        rounded-xl
                        flex
                        items-center
                        justify-center

                        ${colors[color]}
                    `}
        >
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}
