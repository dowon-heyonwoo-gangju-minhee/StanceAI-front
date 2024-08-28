import SelectBox from "@/components/SelectBox";
import PostLists from "@/components/PostLists";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col py-12">
      <div className="w-full flex justify-between items-center mt-16">
        <SelectBox />
      </div>
      <PostLists />
    </div>
  );
};

export default HomePage;
