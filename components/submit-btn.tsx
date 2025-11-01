"use client";
import React from "react";
import { Send } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group relative w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center justify-center gap-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <span>Sending...</span>
        </div>
      ) : (
        <span className="flex items-center justify-center gap-2">
          Send Message
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </button>
  );
}
