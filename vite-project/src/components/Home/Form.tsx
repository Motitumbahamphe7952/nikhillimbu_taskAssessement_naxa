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
    .regex(/^\+?\d{7,15}$/, "Contact must be 7–15 digits, optional +"),
  photo: z
    .any()
    .refine(files => files && files.length === 1, "Photo is required")
    .refine(files => files && files[0]?.type.startsWith("image/"), "File must be an image"),
  cv: z
    .any()
    .refine(files => files && files.length === 1, "CV is required")
    .refine(files => files && files[0]?.type === "application/pdf", "CV must be a PDF"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
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
    <div className="min-h-screen py-12 px-4 mt-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
              Address
            </label>
            <input
              type="text"
              {...register("address")}
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
              placeholder="Your address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
                Contact
              </label>
              <input
                type="text"
                {...register("contact")}
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition"
                placeholder="+123456789"
              />
              {errors.contact && (
                <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
              Photo
            </label>
            <label className="flex flex-col items-center border-2 border-dashed border-gray-200 bg-gray-50 rounded-md cursor-pointer py-6 text-center hover:bg-gray-100 transition">
              <span className="text-gray-500">Click to upload a photo</span>
              <input
                type="file"
                accept="image/*"
                {...register("photo")}
                className="hidden"
              />
            </label>
            {errors.photo && (
              <p className="mt-1 text-sm text-red-500">{errors.photo.message?.toString()}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 uppercase mb-1">
              CV (PDF)
            </label>
            <label className="flex flex-col items-center border-2 border-dashed border-gray-200 bg-gray-50 rounded-md cursor-pointer py-6 text-center hover:bg-gray-100 transition">
              <span className="text-gray-500">Click to upload your CV (PDF)</span>
              <input
                type="file"
                accept="application/pdf"
                {...register("cv")}
                className="hidden"
              />
            </label>
            {errors.cv && (
              <p className="mt-1 text-sm text-red-500">{errors.cv.message?.toString()}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold px-6 py-3 rounded shadow transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
