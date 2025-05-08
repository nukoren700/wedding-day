"use client";
import { useRef, useState } from "react";

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = () => {
    const file = fileInput?.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <form className="flex flex-col gap-6 p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <label className="flex flex-col items-start gap-2">
        <span className="text-lg font-medium">Upload a file</span>
        <input
          type="file"
          name="file"
          ref={fileInput}
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
        />
      </label>

      {preview && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Preview:</span>
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-64 object-contain border rounded-lg"
          />
        </div>
      )}

      <button
        type="submit"
        onClick={uploadFile}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
