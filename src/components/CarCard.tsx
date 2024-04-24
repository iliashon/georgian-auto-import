import Image, { StaticImageData } from "next/image";

export default function CarCard({
    carProps,
}: {
    carProps: {
        image: StaticImageData;
        title: string;
        price: number;
    };
}) {
    return (
        <div className="flex flex-col gap-5 bg-white p-4 rounded-lg">
            <Image
                src={carProps.image}
                alt={carProps.title}
                className="h-64 object-cover rounded-lg"
            />
            <div className="text-black flex justify-between">
                <h4 className="text-base font-medium">{carProps.title}</h4>
                <span className="text-base font-medium">
                    {carProps.price} GEL
                </span>
            </div>
        </div>
    );
}
