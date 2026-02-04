import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="min-h-[70vh] w-full flex justify-center items-center">
      <div className="rounded-2xl">
        <h1 className="py-3 text-2xl text-white font-medium text-center">
          Login here!
        </h1>

        <SignIn />
      </div>
    </div>
  );
}
