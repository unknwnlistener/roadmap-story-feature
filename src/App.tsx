// import { FlickeringGrid } from "@/components/ui/flickering-grid"
import AddStoryButton from "@/components/AddStoryButton"
import { useState } from "react"
import ImageSlide from "./components/ImageSlide";
import StoryHighlights from "./components/StoryHighlights";


export interface StoryProps {
  dataString: string;
  expiry: number;
}

function App() {
  const [showImageSlide, setShowImageSlide] = useState<StoryProps | null>(null);
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
        <article className="mt-4 lg:max-w-96">

          {showImageSlide &&
            <ImageSlide image={showImageSlide} />
          }
        </article>
      </div>
    </div>
  )
}

export default App
