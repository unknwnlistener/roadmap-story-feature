import { StoryProps } from "./StorySection";

export default function StoryHighlights({ stories }: { stories: StoryProps[] }) {
    return (
        <div className="flex flex-row gap-3">
            {stories.length > 0 && stories.map((story, index) => (
                <img key={story.expiry + index} className="w-10 h-10 bg-white rounded-full ring-cyan-400 ring-2 ring-offset-black ring-offset-2" src={story.dataString} alt={"Uploaded Story-" + index} />
            ))}
        </div>
    )
}