import {
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import CarouselVideo from "./CarouselVideo";
import { Wrapper } from "./Wrapper";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import CarouselAdapter from "./CarouselAdapter";

import { Player } from "video-react";
import Slider from "react-slick";

import { client } from "../../sanity/lib/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineSwipe } from "react-icons/md";

interface PhotoGalleryProps {
  videos: any[] | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string | undefined>>;
  currentCategory: string;
  categories: string[] | undefined;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({
  // videos,
  categories,
  currentCategory,
  setSelectedCategory,
}) => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [lastId, setLastId] = useState<Number>(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let response: any[] = [];
    const fetchVideos = async () => {
      try {
        const query_video = `*[_type == "video" && category->name == "${currentCategory}" && _id > "${lastId}"] | order(_id) [0...3] {_id, name, "category_name": category->name, "fileURL": video.asset->url}`;
        response = await client.fetch(query_video);

        setVideos((prevVideos) => {
          if (response.length === 0) return [...prevVideos];

          if (
            prevVideos.length !== 0 &&
            prevVideos[prevVideos.length - 1]._id ==
              response[response.length - 1]._id
          )
            return [...prevVideos];

          return [...prevVideos, ...response];
        }); // Append new videos to existing ones
        setHasMore(response.length > 0); // Check if there are more videos to fetch

        if (response.length > 0) {
          setLastId(response[response.length - 1]._id);
        } else {
          setLastId(-1); // Reached the end
          setFetchingMore(false);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
        setFetchingMore(false);
      }
    };

    if ((loading || fetchingMore) && lastId !== -1) {
      fetchVideos();
    }
  }, [loading, fetchingMore, lastId, currentCategory, videos]);

  const loadMore = () => {
    if (!loading && !fetchingMore && hasMore) {
      setFetchingMore(true);
    }
  };

  const handleSlideChange = () => {
    // Pause all videos before the slide changes
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
  };

  const NextArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="md:group-hover:block hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>
    );
  };

  const PrevArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={` md:group-hover:block hidden absolute z-50 top-[50%] -translate-x-0 translate-y-[-50%] left-20 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer`}
      >
        <FaChevronLeft />
      </div>
    );
  };

  return videos ? (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setSelectedCategory(undefined);
        }
      }}
    >
      <div
        onClick={() => setSelectedCategory(undefined)}
        className="block absolute top-5 left-5 p-3 text-2xl text-white bg-black/20 rounded-full cursor-pointer"
      >
        <IoMdClose></IoMdClose>
      </div>

      <Wrapper className="relative flex flex-col gap-5">
        <div className="w-full mx-auto relative">
          <Slider
            className="group"
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            adaptiveHeight={true}
            beforeChange={(oldIndex, newIndex) => {
              if (newIndex == videos.length - 1) {
                loadMore();
              }
              handleSlideChange();
            }}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="aspect-[16/9] shrink-0 basis-full"
              >
                <video controls width={"100%"} height={"auto"}>
                  <source src={video.fileURL} datatype="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
          <MdOutlineSwipe className="md:hidden mx-auto mt-5 text-white text-3xl" />
        </div>

        <div className="hidden absolute bottom-12 left-1/2 -translate-x-1/2 lg:flex flex-row gap-5">
          {categories?.map((category, i: number) => (
            <div
              key={i}
              className={`flex items-center rounded-xl py-3 px-5  ${
                currentCategory === category
                  ? "bg-white"
                  : "bg-white/50 "
              } border-2 border-white cursor-pointer`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              <p className="capitalize text-lg">{category}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  ) : null;
};
export default PhotoGallery;
