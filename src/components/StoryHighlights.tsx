import { StoryProps } from "@/App";

export default function StoryHighlights({ stories, setShowImageSlide }: { stories: StoryProps[], setShowImageSlide: (showImageSlide: number) => void }) {
    const showImageSlide = (index: number) => {
        setShowImageSlide(index);
    }
    return (
        <div className="flex flex-row gap-3">
            {stories.length > 0 && stories.map((story, index) => (
                <img onClick={() => showImageSlide(index)} key={story.expiry + index} className="w-10 h-10 bg-white rounded-full cursor-pointer ring-cyan-400 ring-2 ring-offset-black ring-offset-2" src={story.dataString} alt={"Uploaded Story-" + index} />
            ))}
        </div>
    )
}