import UserProfile from "@/components/UserProfile";

const UserProfilePage = () => {
  return (
    <div className="h-[calc(100vh-200px)] w-full py-16 overflow-y-hidden px-2">
      <h1 className="font-bold text-5xl text-black mb-16">현재 나의 Stance는?</h1>
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
