import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";
import errImg from '../assets/error-image.jpg';

const PostListItem = ({ post }) => {
  return (
    <div className=" w-full flex flex-col xl:flex-row gap-4 xl:gap-8 mb-12">
      {/* image */}
      {post.img ? (
        <div className="md:hidden xl:block xl:w-1/3 ">
          <Image src={post.img} fallbackSrc={errImg} className="rounded-2xl object-cover" w="450" h="270" />
        </div>
      ): (
        <div className="md:hidden xl:block xl:w-1/3 ">
          <Image src="/logo_PD7dEFN9u.png" alt="blog Logo" fallbackSrc={errImg} className="rounded-2xl object-cover" w="450" h="270" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-3/5">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-textColor" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link>
          <span>on</span>
          <Link className="text-textColor">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
          <span> {post.visit} visits</span>
        </div>
        <p className="line-clamp-3">{post.desc}</p>
        <div className="w-[200px]">
          <Link to={`/${post.slug}`} className="bg-secondary text-textColor font-semibold rounded-full px-4 py-2 ">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;