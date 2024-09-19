import { Home } from "./Home";
import { Info } from "./info/Info";
import image5 from "../../../assets/image5.jpg"
import { Platforms } from "./Platforms";

export function Page() {
    return (
        <div
        className="h-full overflow-hidden"
        style={{
          backgroundImage: `url(${image5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
            <Home />
            <Info />
            <Platforms />
        </div>
    )
}