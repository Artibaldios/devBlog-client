import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = ({ comp }) => (
  comp == "featured" ?
    <SkeletonTheme baseColor="#e5b0fe" highlightColor="#f1f1f1ff">
      <div className="mt-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center md:items-start">
          {/* image */}
          <div className='md:w-full md:h-full w-72 h-72'>
            <Skeleton width={"100%"} height={"100%"} borderRadius={"1rem"}/>
          </div>
        </div>
        {/* Others */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className='flex gap-2'>
            <Skeleton height={125} width={185} borderRadius={"1rem"} />
            <div className='w-full'>
              <div className='w-full flex gap-2 mb-4'>
                <Skeleton width={30} />
                <Skeleton width={50} />
                <Skeleton width={70} />
              </div>
              <Skeleton width={"100%"} count={2} height={30} />
            </div>
          </div>
          {/* second */}
          <div className='flex gap-2'>
            <Skeleton height={120} width={180} borderRadius={"1rem"} />
            <div className='w-full'>
              <div className='w-full flex gap-2 mb-4'>
                <Skeleton width={30} />
                <Skeleton width={50} />
                <Skeleton width={70} />
              </div>
              <Skeleton width={"100%"} count={2} height={30} />
            </div>
          </div>
          {/* third */}
          <div className='flex gap-2'>
            <Skeleton height={120} width={180} borderRadius={"1rem"} />
            <div className='w-full'>
              <div className='w-full flex gap-2 mb-4'>
                <Skeleton width={30} />
                <Skeleton width={50} />
                <Skeleton width={70} />
              </div>
              <Skeleton width={"100%"} count={2} height={30} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
    :
    <SkeletonTheme baseColor="#e5b0fe" highlightColor="#f1f1f1ff">
      <div className=" w-full flex flex-col xl:flex-row gap-4 xl:gap-8 mb-12">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3 rounded-2xl">
          <Skeleton height={220} borderRadius={"1rem"} />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-3/5">
          <Skeleton height={40} />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>on</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>visits</span>
          </div>
          <p className="line-clamp-3"><Skeleton height={48} count={2} /></p>
          <div className="w-[200px]">
            <Skeleton width={110} height={36} borderRadius={"4rem"} />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col xl:flex-row gap-4 xl:gap-8 mb-12">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3 rounded-2xl">
          <Skeleton height={220} borderRadius={"1rem"} />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-3/5">
          <Skeleton height={40} />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>on</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>visits</span>
          </div>
          <p className="line-clamp-3"><Skeleton height={48} count={2} /></p>
          <div className="w-[200px]">
            <Skeleton width={110} height={36} borderRadius={"4rem"} />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col xl:flex-row gap-4 xl:gap-8 mb-12">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3 rounded-2xl">
          <Skeleton height={220} borderRadius={"1rem"} />
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-3/5">
          <Skeleton height={40} />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>on</span>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <Skeleton width={50} borderRadius={"0.5rem"}/>
            <span>visits</span>
          </div>
          <p className="line-clamp-3"><Skeleton height={48} count={2} /></p>
          <div className="w-[200px]">
            <Skeleton width={110} height={36} borderRadius={"4rem"} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
);
export default Loader;