import React, { useRef } from "react";
import { Upload, Trash2, FileText, Image as ImageIcon } from "lucide-react";

const ImageUploadCard = ({
  title,
  preview,
  name,
  onChange,
  accept = "image/*,.pdf",
}) => {
  const fileInputRef = useRef(null);

  console.log("Preview received:ddd", preview);

  console.log("IMG SRC =", preview);

  const handleBrowse = () => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    fileInputRef.current.value = "";

    onChange({
      target: {
        name,
        files: [],
      },
    });
  };

  const isPdf =
    preview &&
    (preview.toLowerCase().endsWith(".pdf") ||
      preview.includes("application/pdf"));

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Header */}
      <div className="px-5 py-4 border-b bg-gray-50">
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Preview */}
      <div className="p-5">
        <div className="h-52 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden">
          {preview ? (
            isPdf ? (
              <div className="flex flex-col items-center gap-3">
                <FileText className="w-14 h-14 text-red-500" />
                <span className="text-sm text-gray-600">PDF Selected</span>
              </div>
            ) : (
              <img
    src={preview}
    alt={title}
    className="object-contain h-full w-full"
    onLoad={() => console.log("Image Loaded")}
    onError={(e) => {
        console.log("Image Error");
        console.log("Failed URL:", e.currentTarget.src);
    }}
/>
            )
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <ImageIcon size={42} />
              <p className="mt-2 text-sm">No file selected</p>
            </div>
          )}
        </div>

        {/* Hidden Input */}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          name={name}
          onChange={onChange}
          className="hidden"
        />

        {/* Buttons */}

        <div className="flex gap-3 mt-5">
          <button
            type="button"
            onClick={handleBrowse}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2.5 transition"
          >
            <Upload size={18} />
            {preview ? "Replace" : "Upload"}
          </button>

          {preview && (
            <button
              type="button"
              onClick={handleRemove}
              className="px-4 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>

        {/* Help Text */}

        <p className="mt-3 text-xs text-gray-500 text-center">
          Supported: JPG, JPEG, PNG, SVG, PDF
        </p>
      </div>
    </div>
  );
};

export default ImageUploadCard;
