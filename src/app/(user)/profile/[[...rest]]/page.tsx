import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="w-full flex justify-center items-center mt-2">
      <div className="max-h-150 rounded-2xl">
        <h1 className="py-3 text-2xl text-white font-medium">Profile</h1>
        <UserProfile />
      </div>
    </div>
  )
}