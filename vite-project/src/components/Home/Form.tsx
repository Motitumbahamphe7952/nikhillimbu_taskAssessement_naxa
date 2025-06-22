import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  contact: z
    .string()
    .regex(/^\+?\d{7,15}$/, "Contact must be 7-15 digits, optional +"),
  photo: z
    .any()
    .refine((files) => files && files.length === 1, "Photo is required")
    .refine(
      (files) => files && files[0]?.type.startsWith("image/"),
      "File must be an image"
    ),
  cv: z
    .any()
    .refine((files) => files && files.length === 1, "CV is required")
    .refine(
      (files) => files && files[0]?.type === "application/pdf",
      "CV must be a PDF"
    ),
});

type FormValues = z.infer<typeof formSchema>;

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log({
      name: data.name,
      address: data.address,
      email: data.email,
      contact: data.contact,
      photo: (data.photo as FileList)[0],
      cv: (data.cv as FileList)[0],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-2">Application Form</h2>
          <p className="text-yellow-600">Please fill in your details below</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Name <span className="text-yellow-500">*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full rounded-lg border-2 border-blue-100 px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
            />
            {errors.name?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message?.toString()}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Address <span className="text-yellow-500">*</span>
            </label>
            <input
              type="text"
              {...register("address")}
              className="mt-1 block w-full rounded-lg border-2 border-blue-100 px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
            />
            {errors.address?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Email <span className="text-yellow-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 block w-full rounded-lg border-2 border-blue-100 px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
            />
            {errors.email?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Contact <span className="text-yellow-500">*</span>
            </label>
            <input
              type="text"
              {...register("contact")}
              className="mt-1 block w-full rounded-lg border-2 border-blue-100 px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
            />
            {errors.contact?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Photo <span className="text-yellow-500">*</span>
            </label>
            <div className="mt-1 flex items-center justify-center w-full">
              <label className="flex flex-col w-full border-2 border-blue-100 border-dashed rounded-lg cursor-pointer hover:bg-blue-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                  <svg className="w-8 h-8 mb-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-sm text-gray-500">Upload your photo (JPG, PNG)</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("photo")}
                  className="hidden"
                />
              </label>
            </div>
            {errors.photo?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.photo.message?.toString()}</p>
            )}
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              CV (PDF) <span className="text-yellow-500">*</span>
            </label>
            <div className="mt-1 flex items-center justify-center w-full">
              <label className="flex flex-col w-full border-2 border-blue-100 border-dashed rounded-lg cursor-pointer hover:bg-blue-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                  <svg className="w-8 h-8 mb-3 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-sm text-gray-500">Upload your CV (PDF only)</p>
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  {...register("cv")}
                  className="hidden"
                />
              </label>
            </div>
            {errors.cv?.message && (
              <p className="mt-1 text-sm text-red-500">{errors.cv.message?.toString()}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;