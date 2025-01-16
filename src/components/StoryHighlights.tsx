export default function StoryHighlights({ stories }: { stories: string[] }) {
    return (
        <div className="flex flex-row gap-3">
            {stories.length > 0 && stories.map((story, index) => (
                <img className="w-10 h-10 bg-white rounded-full ring-cyan-400 ring-2 ring-offset-black ring-offset-2" src={story} alt={"Uploaded Story-" + index} />
            ))}
        </div>
    )
}