import React from 'react';
import {useContext} from "react";
import { OverlayContext } from '../../context';
import { LanguageOption } from "../../context";
import "./projects-styles/projects.css";
import "./projects-styles/projects-responsive.css";
import { Container } from "react-bootstrap";
import cat from "../../images/projects/cat.png";


const Projects = () =>{
    const {chosenLang} = useContext(LanguageOption)
    const {handleShowOverlay, imgIndex} = useContext(OverlayContext)

    
    return(
        <section className="projects page">
            <Container className="wrapper">
                <div className="projects-content">
                    <div className="general-text">
                        <h2 className="general-title">{chosenLang['projects'].title}</h2>
                        <p className="general-subtitle">{chosenLang['projects'].subtitle}</p>
                    </div>
                    <div className="project-tables">
                        <table>
                            <tr className='table-head'>
                                <th>{chosenLang['projects'].team}</th>
                                <th>{chosenLang['projects'].project}</th>
                            </tr>
                            <tr>
                                <td>KoumissGames</td>
                                <td><a href="https://drive.google.com/file/d/18fbuQbl_hs73S4B97Pu0SBQ-_UeTzE-Q/view?usp=share_link">Сын Неба</a></td>
                            </tr>
                            <tr>
                                <td>ASKIM</td>
                                <td><a href="https://drive.google.com/file/d/13eynHVt-4qrD06NpQwJS11yLIlhJhLa5/view?usp=share_link">Abiland</a></td>
                            </tr>
                            <tr>
                                <td>XYZ Team</td>
                                <td><a href="https://drive.google.com/file/d/1uXVyAbRoIIY8Ryyuz6UOtonNCcPQx6eT/view?usp=share_link">Golden Mean</a></td>
                            </tr>
                            <tr>
                                <td>Ragnarёk Games</td>
                                <td><a href="https://drive.google.com/file/d/1keQYK8WS50CQLNVcfG1G8Mbp7Wz98IiT/view?usp=share_link">Twilight Village</a></td>
                            </tr>
                            <tr>
                                <td>Отважные малокососы</td>
                                <td><a href="https://drive.google.com/file/d/1Jnq9gx-B5ixx-ivCo9g3n22aO1z9syB3/view?usp=share_link">Игра</a></td>
                            </tr>
                            <tr>
                                <td>Dungeon Masters</td>
                                <td><a href="https://drive.google.com/file/d/19n5xkDx_ugFqOnvuzH0PgR_eCU_REiYx/view?usp=share_link"> Jigits Of The Great Steppe</a></td>
                            </tr>
                            <tr>
                                <td>LSkill</td>
                                <td><a href="https://drive.google.com/file/d/1jifO8yuyhVLoba9MLH3yEF1BYTE_dKJ7/view?usp=share_link">Young Hero</a></td>
                            </tr>
                            <tr>
                                <td>Not So Serious</td>
                                <td><a href="https://drive.google.com/file/d/1csC6NwiN4mhkAgEDEjxUWtzJ6i8YowUt/view?usp=share_link">DeerStranding</a></td>
                            </tr>
                            <tr>
                                <td>ASPIRE</td>
                                <td><a href="https://drive.google.com/file/d/15hQg4BVPxV26TA0z1Eyef1K7yyCIHzAM/view?usp=share_link">APOLLO</a></td>
                            </tr>
                            <tr>
                                <td>16 BIT</td>
                                <td><a href="https://drive.google.com/file/d/1dZQRPFBee0GqPa8OB44s1Soa1nYndw3h/view?usp=share_link">Bayterek</a></td>
                            </tr>
                            <tr>
                                <td>Ace Dev</td>
                                <td><a href="https://drive.google.com/file/d/1kfiATxXuMiE1i6tF0lu37r8v0TOY4IxM/view?usp=share_link">Fright History Zhestyrnak</a></td>
                            </tr>
                            
                            
                        </table>
                        <table>
                            <tr className='table-head'>
                                <th>{chosenLang['projects'].team}</th>
                                <th>{chosenLang['projects'].project}</th>
                            </tr>
                            <tr>
                                <td>Ragnarok</td>
                                <td><a href="https://drive.google.com/file/d/1qkQ9mnwwBq9R_YvkXcxB6fBPdqOBxfiw/view?usp=share_link">Game</a></td>
                            </tr>
                            
                            <tr>
                                <td>GDS AITU</td>
                                <td><a href="https://drive.google.com/file/d/1ybXjgIGrIweAmcEfmh0-N9yx7_o2MGXo/view?usp=share_link">3D Isometric</a></td>
                            </tr>
                            <tr>
                                <td>GodModLike</td>
                                <td><a href="https://drive.google.com/file/d/1TFZl50Z9UZE1VDwQv1Am9KPXt3XCHRPC/view?usp=share_link">MythicalGame</a></td>
                            </tr>
                            <tr>
                                <td>HYDRA</td>
                                <td><a href="https://drive.google.com/file/d/1hx6T7PxPmyIUOmc39QDjUdZNga-peFam/view?usp=share_link">Game Jam</a></td>
                            </tr>
                            <tr>
                                <td>Sci.Engine</td>
                                <td><a href="https://drive.google.com/file/d/155MMTLJIq55hD9WjcOGt0C3d8NggUqt5/view?usp=share_link">ARYAK</a></td>
                            </tr>
                            <tr>
                                <td>Juniors</td>
                                <td><a href="https://drive.google.com/file/d/1uhRWxXmvgfVWKk65aiXySlpN48x6X1IR/view?usp=share_link">Rogulike</a></td>
                            </tr>
                            <tr>
                                <td>LaG Production</td>
                                <td><a href="https://drive.google.com/file/d/1HaBUY6uhqS50AZJG5F0yREZ8He54kO2g/view?usp=share_link">Born To Die</a></td>
                            </tr>
                            <tr>
                                <td>lazypeople</td>
                                <td><a href="https://drive.google.com/file/d/1S9mVWkXIATqO-wIdIjAV-mh3olf2bQ8m/view?usp=share_link">khaldun</a></td>
                            </tr>
                            <tr>
                                <td>LSkill</td>
                                <td><a href="https://drive.google.com/file/d/1jifO8yuyhVLoba9MLH3yEF1BYTE_dKJ7/view?usp=share_link">Young Hero</a></td>
                            </tr>
                            <tr>
                                <td>Pushing Limits</td>
                                <td><a href="https://drive.google.com/file/d/1yntNLBJiOtPng1PKddZvwy54-zDxq7D_/view?usp=share_link">Build Final</a></td>
                            </tr>
                            <tr>
                                <td>AEon Games</td>
                                <td><a href="https://drive.google.com/file/d/10McTHqqhBTKT-7ohQdAxWzu8yMxKM7P0/view?usp=share_link">Umai</a></td>
                            </tr>
                            
                        </table>
                        <table>
                            <tr className='table-head'>
                                <th>{chosenLang['projects'].team}</th>
                                <th>{chosenLang['projects'].project}</th>
                            </tr>
                            <tr>
                                <td>Game Passases</td>
                                <td><a href="https://drive.google.com/file/d/1s92qoU2V7QozFy6PckePKyD_mtNJjdl9/view?usp=share_link">KABAN BRAWL</a></td>
                            </tr>
                            <tr>
                                <td>BAND</td>
                                <td><a href="https://nursultan02.github.io/bang-gamejam-project/">ALBWS</a></td>
                            </tr>
                            <tr>
                                <td>Infinity</td>
                                <td><a href="https://drive.google.com/file/d/1i_J3EWTvlxHK67PqSiXGIV0VrtBgtJ_p/view?usp=share_link">GameJam</a></td>
                            </tr>
                            <tr>
                                <td>reOld Days</td>
                                <td><a href="https://drive.google.com/file/d/1y0shu_dWo_zIe6joNsASyFCUfIGgw26z/view?usp=share_link">New Heaven Slayer</a></td>
                            </tr>
                            <tr>
                                <td>Road to the future</td>
                                <td><a href="https://drive.google.com/file/d/1rHwPIdwIcTwQSpuG7mU5vpkkweeXaQoK/view?usp=share_link">NM</a></td>
                            </tr>
                            
                            <tr>
                                <td>ItStepProject</td>
                                <td><a href="https://drive.google.com/file/d/153EkkIFTD2LsFIbFqarxP3ULn8TSW_F2/view?usp=share_link">Night in the Museum</a></td>
                            </tr>
                            <tr>
                                <td>Umai</td>
                                <td><a href="https://drive.google.com/file/d/1SCRuR45Q7aMLTyKon6kWS_70HxTSsQ8a/view?usp=share_link">Iz</a></td>
                            </tr>
                            <tr>
                                <td>Undone Homework</td>
                                <td><a href="https://drive.google.com/file/d/1bkBt6QA97R41H6EKLamWWBPvqF9nuy17/view?usp=share_link">Build</a></td>
                            </tr>
                            <tr>
                                <td>Vita</td>
                                <td><a href="https://drive.google.com/file/d/1MWg0xilZ2K5ztJQxsgA4eom9Hn2-6mcz/view?usp=share_link">Madi in Hell</a></td>
                            </tr>
                            <tr>
                                <td>Zoomers</td>
                                <td><a href="https://drive.google.com/file/d/16iwqisW6YbUmggGD8SuEpnYGgHy4AlpC/view?usp=share_link">KUT</a></td>
                            </tr>
                            <tr>
                                <td>ZUSE 3</td>
                                <td><a href="https://drive.google.com/file/d/17BIKjnAUM3l64wmYhd-DLMVJgjOgpd-a/view?usp=share_link">Call Of The Past</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Container>
       
            <img src={cat} className="cat gif-img" alt="benzaiten"/>
            
        </section>
    )
}
export default Projects