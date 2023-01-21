'use client';

import {ImageInput} from "@/common/utils/components/ImageInput";
import {useState} from "react";
import {GeneratedImageGrid} from "@/features/generator/components/GeneratedImageGrid";
import axios from "axios";

export function GenerationSection() {

    const [file, setFile] = useState<File>();
    const [imageUrl, setImageUrl] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [generated, setGenerated] = useState<string[]>();

    const handleChange = (payload: {
        file: File,
        url: string,
    }) => {
        setFile(payload.file);
        setImageUrl(payload.url);
    }

    const handleSubmitImage = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('image', file!);
        axios.post('/api/generate', formData)
            .then((data) => {
                // handle response
                // images: ["s3://bucket/1.png", "s3://bucket/2.png"]
                console.log(data);

                // update generated images
                const sameImageUrl: string = imageUrl!;
                setGenerated([sameImageUrl, sameImageUrl, sameImageUrl, sameImageUrl]);

                setLoading(false);
            });
    }

    return (
        <div className="px-4 py-4 ">
            <p className="mb-4 text-center text-gray-800">
                Upload an image and we will generate 4 similar images with our cutting edge AI.
            </p>
            {
                loading ?
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div> :
                    <div className="md:max-w-3xl md:mx-auto flex flex-col justify-center items-center">
                        {imageUrl ? <img src={imageUrl} alt="file" className="rounded"/> :
                            <ImageInput onChange={handleChange}/>}
                        {
                            generated ?
                                <div className="mt-2">
                                    <GeneratedImageGrid images={generated}/>
                                </div> :
                                (file ? <button
                                    className="bg-teal-500 hover:bg-teal-800 text-white font-semibold py-2 w-full rounded mt-2"
                                    onClick={handleSubmitImage}>
                                    Generate
                                </button> : null)
                        }
                    </div>

            }
        </div>
    );
}
