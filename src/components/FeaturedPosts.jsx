import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import Loader from "../components/Loader"

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return <Loader comp={"featured"}/>;
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center md:items-start">
        {/* image */}
        {posts[3].img && (
          <div className="md:w-full md:h-full w-72 h-72">
            <Image
              src={posts[3].img}
              className="rounded-3xl object-cover h-full"
              //w="895"
            />
          </div>
        )}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-textColor lg:text-lg">{posts[3].category}</Link>
          <span className="text-gray-500">{format(posts[3].createdAt)}</span>
        </div>
        {/* title */}
        <span
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[3].title}
        </span>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        {posts[1] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[1].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[1].img}
              className="rounded-3xl object-contain w-full h-full"
              w="240"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3 flex flex-col justify-center">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-textColor">{posts[1].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[1].createdAt)}</span>
            </div>
            {/* title */}
            <span
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[1].title}
            </span>
          </div>
        </div>}
        {/* third */}
        {posts[2] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[2].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[2].img}
              className="rounded-3xl object-contain w-full h-full"
              w="240"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3 flex flex-col justify-center">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-textColor">{posts[2].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[2].createdAt)}</span>
            </div>
            {/* title */}
            <span
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[2].title}
            </span>
          </div>
        </div>}
        {/* fourth */}
        {posts[0] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[0].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[0].img}
              className="rounded-3xl object-contain w-full h-full"
              w="240"
            />
          </div>}
          {/* details and title */}
          <div className="w-2/3 flex flex-col justify-center">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-textColor">{posts[0].category}</Link>
              <span className="text-gray-500 text-sm">{format(posts[0].createdAt)}</span>
            </div>
            {/* title */}
            <span
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[0].title}
            </span>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default FeaturedPosts;