import FirstScreen from "@/components/sections/FirstScreen";
import About from "@/components/sections/About";
import OurCars from "@/components/sections/OurCars";
import Advantages from "@/components/sections/Advantages";
import HowRent from "@/components/sections/HowRent";
import ImportAuto from "@/components/sections/ImportAuto";

export default function Home() {
    return (
        <main>
            <FirstScreen />
            <About />
            <OurCars />
            <Advantages />
            <HowRent />
            <ImportAuto />
        </main>
    );
}
