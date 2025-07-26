import { Link } from 'react-router'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'
import { useRef } from "react";

const Homepage = () => {
  const scrollContainerRef = useRef(null);
  return (
    <div className='mt-4 flex flex-col gap-4' >
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 w-full'>
        <div className='w-full md:w-auto'>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold uppercase break-words'>
            Where developers <span className='text-primary'>suffer</span> together
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            I know how hard it is to be a developer. Since the easy problems are always solved first, what is left behind are the hard problems.
          </p>
        </div>
        <div className='w-2 h-2 md:w-48 md:h-48 hidden md:flex md:flex-row relative flex-shrink-0 overflow-hidden cursor-pointer'>
          <Link
            to="write"
            className="md:flex relative"
          >
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Write your story •
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Share your idea •
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-2 h-2 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <MainCategories/>
      <FeaturedPosts />
      <div>
        <h1 className='my-8 text-gray-800 text-2xl md:text-2xl lg:text-4xl font-bold uppercase break-words'>Recent Posts</h1>
        <PostList scrollContainerRef={scrollContainerRef}/>
      </div>
    </div>
  )
}

export default Homepage