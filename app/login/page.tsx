
import Image from "next/image";
import Submit from "./submit";

export default function Login() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/image/bachelor.png"
        alt="Logo"
        width={50}
        height={50}
        className="mb-4 bg-lime-700 rounded-full p-2"
      />
      <h1>School Information System</h1>
      <h2 className="text-gray-500 mt-4">Sign in to access your dashboard</h2>

      <form className="flex flex-col gap-2 mt-8 min-w-xl">
        <label className="font-semibold">Email</label>
        <input type="email" placeholder="example@school.edu" color="gray-200" className="p-2 pl-4 rounded-2xl"></input>
        <label className="font-semibold">Password</label>
        <input type="password" placeholder="Enter your password" className="p-2 rounded-2xl pl-4"></input>
      </form>
      <Submit/>
    </div>
  );
}