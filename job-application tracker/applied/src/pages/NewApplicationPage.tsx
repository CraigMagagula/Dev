// src/pages/NewApplicationPage.tsx

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useApplications } from "../hooks/useApplications";
import type { NewApplication } from "../api/applications";

export function NewApplicationPage() {
  const navigate = useNavigate();
  const { add } = useApplications();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewApplication>({
    defaultValues: {
      company: "",
      role: "",
      link: "",
      dateSent: new Date().toISOString().slice(0, 10),
      stage: "wishlist",
      notes: "",
    },
  });

  async function onSubmit(input: NewApplication) {
    await add(input);
    navigate("/");
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Add an application</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  {/* company — as you have it */}
<div>
  <label htmlFor="company" className="block text-sm font-medium">
    Company
  </label>
  <input
    id="company"
    type="text"
    aria-invalid={errors.company ? "true" : "false"}
    aria-describedby={errors.company ? "company-error" : undefined}
    className="mt-1 w-full rounded-md border px-3 py-2"
    {...register("company", {
      required: "Company is required",
      minLength: { value: 2, message: "At least 2 characters" },
    })}
  />
  {errors.company && (
    <p id="company-error" role="alert" className="mt-1 text-sm text-rose-700">
      {errors.company.message}
    </p>
  )}
</div>

  {/* role — same shape as company, name changed */}
  <div>
    <label htmlFor="role" className="block text-sm font-medium">
      Job title
    </label>
    <input
      id="role"
      type="text"
      aria-invalid={errors.role ? "true" : "false"}
      aria-describedby={errors.role ? "role-error" : undefined}
      className="mt-1 w-full rounded-md border px-3 py-2"
      {...register("role", {
        required: "Job title is required",
        minLength: { value: 2, message: "At least 2 characters" },
      })}
    />
    {errors.role && (
      <p id="role-error" role="alert" className="mt-1 text-sm text-rose-700">
        {errors.role.message}
      </p>
    )}
  </div>

  {/* link — same shape, with URL validate */}
  <div>
    <label htmlFor="link" className="block text-sm font-medium">
      Link to the advert (optional)
    </label>
    <input
      id="link"
      type="url"
      aria-invalid={errors.link ? "true" : "false"}
      aria-describedby={errors.link ? "link-error" : undefined}
      className="mt-1 w-full rounded-md border px-3 py-2"
      {...register("link", {
        validate: (value) => {
          if (!value) return true;
          try {
            new URL(value);
            return true;
          } catch {
            return "Must be a valid URL";
          }
        },
      })}
    />
    {errors.link && (
      <p id="link-error" role="alert" className="mt-1 text-sm text-rose-700">
        {errors.link.message}
      </p>
    )}
  </div>

  {/* dateSent — date input, not in future */}
  <div>
    <label htmlFor="dateSent" className="block text-sm font-medium">
      Date sent
    </label>
    <input
      id="dateSent"
      type="date"
      aria-invalid={errors.dateSent ? "true" : "false"}
      aria-describedby={errors.dateSent ? "dateSent-error" : undefined}
      className="mt-1 w-full rounded-md border px-3 py-2"
      {...register("dateSent", {
        required: "Date is required",
        validate: (value) => {
          const today = new Date().toISOString().slice(0, 10);
          return value <= today || "Date cannot be in the future";
        },
      })}
    />
    {errors.dateSent && (
      <p id="dateSent-error" role="alert" className="mt-1 text-sm text-rose-700">
        {errors.dateSent.message}
      </p>
    )}
  </div>

  {/* stage — wrapped and labelled */}
  <div>
    <label htmlFor="stage" className="block text-sm font-medium">
      Stage
    </label>
    <select
      id="stage"
      aria-invalid={errors.stage ? "true" : "false"}
      aria-describedby={errors.stage ? "stage-error" : undefined}
      className="mt-1 w-full rounded-md border px-3 py-2"
      {...register("stage")}
    >
      <option value="wishlist">Saved</option>
      <option value="applied">Applied</option>
      <option value="interview">Interview</option>
      <option value="offer">Offer</option>
      <option value="closed">Closed</option>
    </select>
    {/* no error slot — a select can't be empty */}
  </div>

  {/* notes — wrapped and labelled */}
  <div>
    <label htmlFor="notes" className="block text-sm font-medium">
      Notes (optional)
    </label>
    <textarea
      id="notes"
      rows={3}
      className="mt-1 w-full rounded-md border px-3 py-2"
      {...register("notes")}
    />
    {/* no error slot — optional, no rules */}
  </div>

  {/* buttons — as you have them */}
  <div className="flex gap-3 pt-2">
  <button
    type="submit"
    disabled={isSubmitting}
    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
  >
    Save application
  </button>
  <button
    type="button"
    onClick={() => navigate("/")}
    className="rounded-md border px-4 py-2 text-sm font-semibold"
  >
    Cancel
  </button>
</div>
</form>
    </main>
  );
}