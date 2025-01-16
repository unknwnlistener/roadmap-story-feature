import { StoryProps } from "@/App";
import ImageSlide from "./ImageSlide";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { CircleX } from "lucide-react";

export default function ImageSlidesComponent({ stories, showImageSlide, setShowImageSlide }: { stories: StoryProps[], showImageSlide: number, setShowImageSlide: (showImageSlide: number) => void }) {
    useEffect(() => {
        const countdown = setTimeout(() => {
            if (showImageSlide >= stories.length - 1) {
                setShowImageSlide(-1);
                return;
            }
            setShowImageSlide(showImageSlide + 1);
        }, 3000);
        return () => clearTimeout(countdown);
    }, [showImageSlide]);

    return (
        <article className="z-10 w-1/2">
            <Button onClick={() => setShowImageSlide(-1)} size="icon" variant="ghost" className="absolute text-white rounded-full top-2 right-2"><CircleX size={48} /></Button>
            <ImageSlide stories={stories} storyNumber={showImageSlide} />
        </article>
    )
}