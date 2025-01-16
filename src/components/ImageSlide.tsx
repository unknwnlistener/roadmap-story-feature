import { StoryProps } from "@/App";

export default function ImageSlide({ image }: { image: StoryProps }) {
    return (
        <div className="w-full h-full">
            <img key={image.expiry} className="object-cover w-full h-full" src={image.dataString} alt={"Uploaded Image"} />
        </div>
    )
}