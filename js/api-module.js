"use strict"
import {games, setData, displayData} from "./index.js";

export default async function apiReq(cat) {

    let category = cat ? `?category=${cat}`: "";
    $("loadingScreen").show();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '36950d1598msh1a34c6164f89c00p1bfca1jsn2b454127c9b2',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const apiRes = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games` + category, options)
    const data = await apiRes.json();

    setData(data);
    displayData(games);

    $(function () {
        $("#loadingScreen").hide();
    });
}