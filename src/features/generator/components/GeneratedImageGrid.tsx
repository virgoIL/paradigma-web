export interface GeneratedImageGridProps {
    images: string[];
}

export function GeneratedImageGrid({images}: GeneratedImageGridProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {images.map((image, index) => (
                <div key={index} className="w-full h-full">
                    <img
                        className="w-full object-cover rounded" src={image}/>
                </div>
            ))}
        </div>
    );
}
