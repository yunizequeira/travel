"use client";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LoginForm = () => {
  const path = usePathname();
  return (
    <motion.form
      className="space-y-2 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {path === "/register" && (
        <div className="flex flex-col lg:px-5 lg:py-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>
      )}
      <div className="flex flex-col lg:px-5 lg:py-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>

      <div className="w-full flex flex-col lg:px-5 lg:py-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>
      {path === "/register" && (
        <div className="w-full flex flex-col lg:px-5 lg:py-2">
          <label htmlFor="password">Re-Enter Password</label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>
      )}
      <div className="flex flex-col lg:px-5 py-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded w-full">
          Submit
        </button>
      </div>
      {path === "/login" && (
        <div className="py-2 text-xs px-5">
          <Link href={"/register"}>Don&apos;t have an account? Sign up</Link>
        </div>
      )}
      {path === "/register" && (
        <div className="py-2 text-xs px-5">
          <Link href={"/login"}>Do you have an account? login</Link>
        </div>
      )}
    </motion.form>
  );
};

export default LoginForm;
