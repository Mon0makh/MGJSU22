import {SwiperSlide } from "swiper/react";
import Main from "../main/main";
import About from "../about/about";
import Agenda from "../agenda/agenda";
import Registration from "../registration/registration";
import Rules from "../rules/rules";
import Projects from "../projects/projects";

const SlidePages = () =>{
    return(
        <>
            <SwiperSlide>
                <Main />
            </SwiperSlide>
            <SwiperSlide>
                <About />
            </SwiperSlide>
            <SwiperSlide>
                <Agenda/>
            </SwiperSlide>
            <SwiperSlide>
                <Rules/>
            </SwiperSlide>
            <SwiperSlide>
                <Registration/>
            </SwiperSlide>
            <SwiperSlide>
                <Projects/>
            </SwiperSlide>
        </>
    )
}
export default SlidePages