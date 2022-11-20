import React from 'react';
import Overlay from "../overlay/overlay";
import "./agenda-styles/agenda.css";
import "./agenda-styles/agenda-responsive.css";
import { Container } from "react-bootstrap";
import scroll1 from "../../images/japan/scroll1.png";
import scroll2 from "../../images/japan/scroll2.png";
import scroll3 from "../../images/japan/scroll3.png";
import benzaiten from "../../images/japan/benzaiten.png";

const AgendaText = ({imgIndex}) =>{
  
    const dates = [
        {   
            title: (<h3 className="info-title">
                        Вторник – 6 декабря <br/>(Церемония открытия. Первый день фестиваля)
                    </h3>),
         
            dates: [
                    {
                        dateTitle: '10:00 - 11:30:',
                        text: "Церемония открытия. Концерт", 
                    },
                    {
                        dateTitle: "11:50 - 12:40:",
                        text:  "Meetup - Indie Game Developer Story",
                    },
                    {
                        dateTitle: "13:00 - 14:00",
                        text:  "Обеденный перерыв",
                    },
                    {
                        dateTitle: "14:00 - 14:40",
                        text:  "Workshop 1",
                    },
                    {
                        dateTitle: "14:50 - 15:40",
                        text:  "Meetup 2",
                    },
                    {
                        dateTitle: "16:00 - 16:40",
                        text: "Meetup 3"
                    },
                    {
                        dateTitle: "16:50 - 17:30",
                        text: "Meetup 4"
                    },
                    {
                        dateTitle: "17:30 - 18:00",
                        text: "Секция Вопрос-Ответ"
                    },
                    {
                        dateTitle: "18:00-18:30",
                        text: "Закрытие 1го дня и Призы"
                    }
                ]
        },
        {
             
            title: (<h3 className="info-title">
                        Дни с 7 по 9 декабря
                    </h3>),
            dates: [
                {
                    dateTitle: "07.12: 09:00 - 09:30:",
                    text:  "Сбор всех участников фестиваля",
                },
                {
                    dateTitle: '07.12: 10:00',
                    text:  "Старт Game Jam SU 22",
                },
                {
                    dateTitle: "08.12: Full Day",
                    text:  "Работа команд и менторов.",
                },
                {
                    dateTitle: "09.12: 12:00",
                    text:   "Сдача и защита проектов",
                }
             
            ]
        },
        {
             
            title: (<h3 className="info-title">
                        Суббота 10 декабря <br/> (Закрытие фестиваля)
                    </h3>),
              dates: [
                {
                    dateTitle: "10:00 - 11:30",
                    text:  "Презентация работ участниками фестиваля.", 
                },
                {
                    dateTitle: "11:30 – 12:30",
                    text:   "Церемония награждения победителей «Mythical Game Jam SU 2022»",
                },
                {
                    dateTitle: "12:30 - 13:00",
                    text:   "Закрытие",
                },
                {
                    dateTitle: "13:00",
                    text:   "Итоговый Кофе-брейк",
                }
            
            ]
        },

    ]

    return(
        <div className="info-text agenda-text">
            {dates[imgIndex]?dates[imgIndex]["title"]:null}
            <div>
                {dates[imgIndex]?dates[imgIndex]["dates"].map((date, index)=>
                    <div className='info-line' key={index}>
                        <p className="info-subtitle" >{date.dateTitle}</p>
                        <p>{date.text}</p>
                    </div>
                       
                ):null}
                
            </div>
        </div>
    )
}
const Agenda = ({handleShowText, show, imgIndex}) =>{

    const scrolls = [
        {
            src: scroll1,
            class: "scroll-img",
            alt: "scroll1"
        },
        {
            src: scroll2,
            class: "scroll-img",
            alt: "scroll2"
        },
        {
            src: scroll3,
            class: "scroll-img",
            alt: "scroll3"
        }
    ]
    const images = scrolls.map((scroll, index)=>(
                <img src={scroll.src} 
                    className={scroll.class} 
                    alt={scroll.alt} 
                    style={{transform: imgIndex === index? `scale(${1.1})`:  null}} 
                    key={index} 
                    onClick={ ()=> handleShowText(index)}/>
            )) 
    
    return(
        <section className="agenda page">
            <Container className="wrapper">
                <div className="agenda-content">
                    <div className="general-text">
                        <h2 className="general-title">Расписание</h2>
                        <p className="general-subtitle">Расписание GameJam 2022</p>
                    </div>
                    <div className="scrolls">
                        {images}
                    </div>
                </div>
            </Container>
       
            <Overlay 
                handleShowText={handleShowText} 
                show={show} 
                content={<AgendaText imgIndex={imgIndex} />}
            />
            <img src={benzaiten} className="benzaiten gif-img" alt="benzaiten"/>
            
        </section>
    )
}
export default Agenda