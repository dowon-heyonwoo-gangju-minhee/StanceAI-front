import { auth } from "@/lib/auth";
import UserProfileForm from "./UserProfileForm";

const UserProfile = async () => {
  try {
    const session = await auth();

    return <UserProfileForm initialNickname={session?.user?.name || ""} />;
  } catch (error) {
    console.error("Error fetching session:", error);
    return <div>Error loading user profile</div>;
  }
};

export default UserProfile;
