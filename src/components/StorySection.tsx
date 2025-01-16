import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import StoryHighlights from "./StoryHighlights";

export interface StoryProps {
    dataString: string;
    expiry: number;
}

const TIME_TO_LIVE = 60000;
export default function StorySection() {
    const [stories, setStories] = useState<StoryProps[]>([]);

    useEffect(() => {
        setStories(getSavedStories());
    }, []);

    const addStory = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (event.target.files && event.target.files.length > 0) {
            const uploadedFile = event.target.files[0];
            convertToBase64(uploadedFile).then((base64) => {
                const newStories: StoryProps[] = [...stories, { dataString: base64 as string, expiry: Date.now() + TIME_TO_LIVE }];
                setStories(newStories);
                localStorage.setItem('stories', JSON.stringify(newStories));
            }).catch((error) => {
                console.error('Error:', error);
            });
        }
    }

    const convertToBase64 = (file: Blob) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result as string)
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    }

    const getSavedStories = () => {
        const localStories = localStorage.getItem('stories');
        if (!localStories)
            return [];

        const storyList = JSON.parse(localStories);

        // Remove stories that have expired
        const filteredList = [...storyList.filter((story: StoryProps) => story.expiry > Date.now())];

        // Update the local storage with the filtered list
        localStorage.setItem('stories', JSON.stringify(filteredList));

        return filteredList;
    }

    return (
        <section className="flex flex-row items-start gap-4">
            <label htmlFor="story" className="block cursor-pointer h-fit w-fit">
                <Button variant={'outline'} size="icon" className="rounded-full pointer-events-none">
                    <Plus />
                </Button>
            </label>
            <input type="file" accept="image/png,image/jpeg" name="story" id="story" onChange={addStory} className="hidden" />
            <StoryHighlights stories={stories} />
        </section>
    )
}