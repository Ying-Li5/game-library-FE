import React, { useEffect, useState } from "react";
import style from './Main.css';
import { FaUserFriends } from "react-icons/fa";
import { RiSignalTowerLine, RiFileList2Fill, RiPercentLine } from "react-icons/ri";
import { HiOutlineClock, HiTag, HiPlus } from "react-icons/hi";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { GameCard } from "../GameCard/GameCard";

export default function Main() {
    const [gameState, setGameState] = useState([]) //First one is the state, second one is a function to set the state

    useEffect(() => {
        const url = `http://localhost:8080/game`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => setGameState(resolvedResult))
        })
    }, [])

    return(
        <div className="main-grid-container" style={ style }>
            <div className="grid-item-1">
                <ul className="recommended">
                    <li className="categories">RECOMMENDED</li>
                    
                    <li>
                        <FaUserFriends /> 
                        <a href="#" className="aside"> By Friends</a>
                    </li>

                    <li>
                        <RiSignalTowerLine /> 
                        <a href="#" className="aside"> By Curators</a>
                    </li>

                    <li>
                        <HiTag /> 
                        <a href="#" className="aside"> Tags</a>
                    </li>
                </ul>

                <ul>
                    <li className="categories">DISCOVERY QUEUES</li>

                    <li>
                        <RiFileList2Fill /> 
                        <a href="#" className="aside"> Recommendations</a>
                    </li>

                    <li>
                        <HiPlus /> 
                        <a href="#" className="aside"> New Releases</a>
                    </li>
                </ul>

                <ul>
                    <li className="categories">BROWSE CATEGORIES</li>

                    <li><AiOutlineStock /> 
                        <a href="#" className="aside"> Top Sellers</a>
                    </li>

                    <li><HiPlus /> 
                        <a href="#" className="aside"> New Releases</a>
                    </li>

                    <li>
                        <HiOutlineClock /> 
                        <a href="#" className="aside"> Upcoming</a>
                    </li>

                    <li>
                        <RiPercentLine /> 
                        <a href="#" className="aside"> Specials</a>
                    </li>

                    <li>
                        <IoLogoGameControllerB />
                        <a href="#" className="aside"> VR Titles</a>
                    </li>

                    <li>
                        <IoLogoGameControllerB />
                        <a href="#" className="aside"> Controller-Friendly</a> 
                    </li>
                </ul>

                <ul>
                    <li className="categories">BROWSE BY GENRE</li>
                    <li><a href="#" className="aside">Free to Play</a></li>
                    <li><a href="#" className="aside">Early Access</a></li>
                    <li><a href="#" className="aside">Action</a></li>
                    <li><a href="#" className="aside">Adventure</a></li>
                    <li><a href="#" className="aside">Casual</a></li>
                    <li><a href="#" className="aside">Indie</a></li>
                    <li><a href="#" className="aside">Massively Multiplayer</a></li>
                    <li><a href="#" className="aside">Racing</a></li>
                    <li><a href="#" className="aside">RPG</a></li>
                    <li><a href="#" className="aside">Simulation</a></li>
                    <li><a href="#" className="aside">Sports</a></li>
                    <li><a href="#" className="aside">Strategy</a></li>
                </ul>
            </div>

            <div className="grid-item-2">
                {gameState.map((game) => {
                    return (
                        <GameCard game={game} />
                    )
                })}
            </div>
        </div>
    )
}