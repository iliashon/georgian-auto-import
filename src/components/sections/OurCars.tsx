import LightLink from "@/components/buttons/LightLink";

import CarCard from "@/components/CarCard";
import photo from "@/assets/images/mustang.webp";

export default function OurCars() {
    return (
        <section className="bg-black w-full">
            <div className="container mx-auto px-5 py-10 text-white grid grid-cols-5 gap-5 items-center">
                <div className="flex flex-col  items-start gap-7">
                    <h3 className="text-6xl font-oswald font-semibold">
                        Choose car
                    </h3>
                    <p className="text-white/70 text-sm">
                        Choose your perfect car from our diverse range. We have
                        vehicles to suit every taste and budget, ensuring your
                        journey is unforgettable
                    </p>
                    <LightLink href={""} className="text-lg">
                        More cars
                    </LightLink>
                </div>
                {[1, 2, 3, 4].map((item, index) => {
                    return (
                        <CarCard
                            key={index}
                            carProps={{
                                image: photo,
                                title: "Ford Mustang",
                                price: 150,
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
}
