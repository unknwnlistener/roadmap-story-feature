import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import StoryHighlights from "./StoryHighlights";

export default function StorySection() {
    const [stories, setStories] = useState<string[]>([]);

    useEffect(() => {
        setStories(getSavedStories());
    }, []);

    const addStory = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (event.target.files && event.target.files.length > 0) {
            const uploadedFile = event.target.files[0];
            convertToBase64(uploadedFile).then((base64) => {
                const newStories = [...stories, base64 as string];
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
                resolve(reader.result)
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    }

    const getSavedStories = () => {
        const stories = localStorage.getItem('stories');
        if (stories) {
            return JSON.parse(stories);
        }
        return [];
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