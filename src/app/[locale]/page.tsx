import FirstScreen from "@/components/sections/FirstScreen";
import About from "@/components/sections/About";
import OurCars from "@/components/sections/OurCars";
import ImportAuto from "@/components/sections/ImportAuto";
import Advantages from "@/components/sections/Advantages";

export default function Home() {
    return (
        <main>
            <FirstScreen />
            <About />
            <OurCars />
            <Advantages />
        </main>
    );
}
