import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="rounded-2xl">
        <h1 className="py-3 text-2xl text-white font-medium text-center">
          Register here!
        </h1>

        <SignUp />
      </div>
    </div>
  );
}
