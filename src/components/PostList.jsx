import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 10, ...searchParamsObj },
  });
  return res.data;
};

const PostList = ({scrollContainerRef}) => {
  const [searchParams] = useSearchParams();
  const scrollPosition = useRef(0);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  // Save scroll position before new data loads
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollPosition.current = scrollContainerRef.current.scrollTop;
    }
  };

  // Restore scroll position after data loads
  useEffect(() => {
    if (scrollContainerRef.current && !isFetchingNextPage) {
      scrollContainerRef.current.scrollTop = scrollPosition.current;
    }
  }, [data, isFetchingNextPage]);

  if (isFetching && !isFetchingNextPage) return "Loading...";

  if (error) return "Something went wrong!";

  const allPosts = data?.pages?.flatMap((page) => page.posts).filter((post) => !post.isFeatured) || [];

  return (
    <div>
      <InfiniteScroll
        dataLength={allPosts.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading more posts...</h4>}
        endMessage={
          <div className="flex items-center justify-center">
            <p>All posts loaded!</p>
          </div>
        }
        onScroll={handleScroll}
      >
        {allPosts.length > 0 ? (
          allPosts.map((post) => <PostListItem key={post._id} post={post} />)
        ) : (
          <div className="flex justify-center">
            <p>No posts found</p>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;