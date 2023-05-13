import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {topPicks} from "../../data/data.js";
import {TopPickItem} from "./TopPickItemComponent/TopPickItem";

const TopPicks = () => {
    return (
        <>
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Top Picks</h1>
            <div className="hidden lg:flex max-w[1520px] m-auto py-2 px-2">
                <Splide options={{
                    rewind: true,
                    perPage: 4,
                    perMove: 1,
                    gap: "1rem",
                    pagination: false,
                    arrows: false,
                    autoplay: true,
                    pauseOnHover: true,
                    interval: 3000,
                    breakpoints: {
                        640: {
                            perPage: 1,
                            gap: "0.5rem",
                        }
                    }
                }}>
                {
                    topPicks.map((item, index) => {
                      return (
                        <SplideSlide key={index}>
                            <TopPickItem item={item} />
                        </SplideSlide>
                      )
                    })
                }
                </Splide>
            </div>
        </>
    )
}

export default TopPicks;
