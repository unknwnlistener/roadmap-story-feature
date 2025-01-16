import { StoryProps } from "@/App";

export default function ImageSlide({ stories, storyNumber }: { stories: StoryProps[], storyNumber: number }) {
    return (
        <div className="w-full h-full">
            <img key={stories[storyNumber].expiry} className="object-cover w-full h-full" src={stories[storyNumber].dataString} alt={"Uploaded Image"} />
        </div>
    )
}