// import { FlickeringGrid } from "@/components/ui/flickering-grid"
import AddStoryButton from "@/components/AddStoryButton"
import { useState } from "react"
import StoryHighlights from "./components/StoryHighlights";
import ImageSlidesComponent from "./components/ImageSlidesComponent";


export interface StoryProps {
  dataString: string;
  expiry: number;
}

function App() {
  const [showImageSlide, setShowImageSlide] = useState<number>(-1);
  const [stories, setStories] = useState<StoryProps[]>([]);

  return (
    <div className="relative w-full overflow-hidden h-dvh bg-slate-800">
      {/* <FlickeringGrid
          className="absolute inset-0 z-0 pointer-events-none size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        /> */}
      <div className="relative m-4 lg:m-10 ">
        <section className="flex flex-row items-start gap-4">
          <AddStoryButton stories={stories} setStories={setStories} />
          <StoryHighlights setShowImageSlide={setShowImageSlide} stories={stories} />
        </section>
        {showImageSlide >= 0 &&
          <ImageSlidesComponent stories={stories} showImageSlide={showImageSlide} setShowImageSlide={setShowImageSlide} />
        }
      </div>
    </div>
  )
}

export default App
