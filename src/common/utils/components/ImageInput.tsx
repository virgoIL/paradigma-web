'use client';

import {useState} from "react";

export interface ImageInputProps {
    onChange: (payload: {
        url: string;
        file: File;
    }) => void;
}

export function ImageInput(props: ImageInputProps) {

    const [url, setUrl] = useState<string | undefined>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0) || null;
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const dataURL: string = reader.result as string;
                setUrl(dataURL);
                props.onChange({
                    url: dataURL,
                    file: file
                });
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            {
                !url ?
                    <div className="w-full">
                        <div className="flex items-center justify-center w-full mb-2">
                            <label htmlFor="dropzone-file"
                                   className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
                                        drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleChange}/>
                            </label>
                        </div>

                        <input
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                            id="file_input"
                            type="file"/>
                    </div> : <img src={url} alt="file"/>
            }
        </>
    );
}
