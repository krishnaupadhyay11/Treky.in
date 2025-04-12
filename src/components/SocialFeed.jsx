import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function SocialFeed() {
  const [latestVideo, setLatestVideo] = useState(null)

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC8SlG0ilpeRDZPRHpVsqSLg`)
        const data = await res.json()
        const latestVideoId = data.items[0].link.split("=")[1];
        setLatestVideo(latestVideoId);

      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    }
    fetchLatestVideo()
  }, [])

  if (!latestVideo) return <p>Loading latest video...</p>

  return (
    <div className="w-full p-4 pb-8 mt-12 bg-[#47a76f]  text-white">
        <h1 className="text-center font-semibold text-[36px]">Social Feed</h1>

        <div className="w-full max-w-7xl mt-4 flex flex-col md:flex-row justify-between items-center">

          <div className="w-1/2">
            <h1 className="text-[24px] text-center font-bold mb-2">Latest YouTube Video</h1>

            <iframe
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${latestVideo}`}
              allowFullScreen
              title="Latest Video"
            ></iframe>

            <Link to="https://www.youtube.com/@trekkingequipments9127" target="_blank" className="block mt-4 mx-auto text-center bg-black max-w-[fit-content] py-2 px-4">
              Visit <i className='uil uil-youtube'></i> Channel
            </Link>
          </div>

        </div>


    </div>
  )
}
