import HeroHome from "./HeroHome";
import BrowseRangeHome from "./BrowseRangeHome";
import OurProductHome from "./OurProductHome";
import InspirationHome from "./InspirationHome";
import { useRef } from "react";

const Home = () => {
    const productRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <HeroHome />
            <BrowseRangeHome />
            <OurProductHome />
            <InspirationHome />
        </>
    );
};

export default Home;
