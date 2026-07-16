import { Pencil, Power, Eye, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InstitutionTable({ institutions, refresh }) {

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left px-5 py-4">Institution</th>

            <th className="text-left px-5 py-4">Type</th>

            <th className="text-left px-5 py-4">Email</th>

            <th className="text-left px-5 py-4">Phone</th>

            <th className="text-left px-5 py-4">Status</th>

            <th className="text-center px-5 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {institutions.map((institution) => (
            <tr
              key={institution._id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="
                                                w-11
                                                h-11
                                                rounded-xl
                                                bg-blue-100
                                                flex
                                                items-center
                                                justify-center
                                            "
                  >
                    <Building2 size={20} className="text-blue-600" />
                  </div>

                  <div>
                    <h3
    onClick={() =>
        navigate(`/institution/${institution._id}/dashboard`)
    }
    className="
        font-semibold
        cursor-pointer
        hover:text-blue-600
    "
>

    {institution.name}

</h3>

                    <p className="text-sm text-gray-500">{institution.code}</p>
                  </div>
                </div>
              </td>

              <td className="px-5 py-4">{institution.organizationType}</td>

              <td className="px-5 py-4">{institution.email}</td>

              <td className="px-5 py-4">{institution.phone}</td>

              <td className="px-5 py-4">
                <span
                  className={`
                                            px-3
                                            py-1
                                            rounded-full
                                            text-xs
                                            font-medium

                                            ${
                                              institution.status === "ACTIVE"
                                                ? "bg-green-100 text-green-700"
                                                : institution.status ===
                                                    "INACTIVE"
                                                  ? "bg-yellow-100 text-yellow-700"
                                                  : "bg-red-100 text-red-700"
                                            }
                                        `}
                >
                  {institution.status}
                </span>
              </td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-2">
                  <button

    onClick={() =>
    navigate(`/institution/${institution._id}/dashboard`)
}

    className="p-2 rounded-lg hover:bg-blue-100"

>

    <Eye size={18}/>

</button>

                  <button
                    className="
                                                p-2
                                                rounded-lg
                                                hover:bg-yellow-100
                                            "
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    className="
                                                p-2
                                                rounded-lg
                                                hover:bg-red-100
                                            "
                    title="Status"
                  >
                    <Power size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
