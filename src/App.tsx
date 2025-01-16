// import { FlickeringGrid } from "@/components/ui/flickering-grid"
import StorySection from "@/components/StorySection"

function App() {

  return (
    <div className="relative h-dvh w-full bg-slate-800 overflow-hidden">
      {/* <FlickeringGrid
          className="z-0 absolute inset-0 size-full pointer-events-none"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        /> */}
      <div className="relative m-4 lg:m-10 ">
        <StorySection></StorySection>
      </div>
    </div>
  )
}

export default App
