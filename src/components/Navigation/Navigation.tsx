import React, {useState, useLayoutEffect} from "react";
import "./navigation.css";
import CardFunction from "./CardFunction";
import Home from "../../common/icons/home.svg";
import Hot from "../../common/icons/hot.svg";
import Random from "../../common/icons/random.svg";
import Like from "../../common/icons/like.svg";
import Bookmarks from "../../common/icons/bookmarks.svg";
import History from "../../common/icons/history.svg";
import Weeks from "../../common/icons/weeks.svg";
import Lighting from "../../common/icons/lighting.svg";
import Flag from "../../common/icons/flag.svg";
import animalsImg from "../../common/images/animals.png";
import animeImg from "../../common/images/anime.png";
import artImg from "../../common/images/art.png";
import autoImg from "../../common/images/auto.png";
import cartoonsImg from "../../common/images/cartoons.png";
import celebrityImg from "../../common/images/celebrity.png";
import danceImg from "../../common/images/dance.png";
import fashionImg from "../../common/images/fashion.png";
import gamesImg from "../../common/images/games.png";
import mashupImg from "../../common/images/mashup.png";
import moviesImg from "../../common/images/movies.png";
import musicImg from "../../common/images/music.png";
import natureImg from "../../common/images/nature.png";
import newsImg from "../../common/images/news.png";
import nsfwImg from "../../common/images/nsfw.png";
import scienceImg from "../../common/images/science.png";
import sportsImg from "../../common/images/sports.png";
import {useSpring, animated} from "react-spring";
import {ShowMoreFunctions} from "./ShowMoreFunctions";
import {Scrollbars} from 'react-custom-scrollbars';
import Divider from "./Divider";
import {Label} from "./Label";
import Community from "./Сommunity";

export default function Navigation() {
    const [limitFunctions, setLimitFunctions] = useState(true);
    const [hideNavigation, setHideNavigation] = useState(false);
    const iconSize = {
        width: 20,
        height: 20
    };
    const showAnimation = useSpring({
        from: {
            transform: "translateX(-100%)"
        },
        to: {
            transform: "translateX(0)"
        },
        delay: 400
    });
    const moreFunctionsAnimation = useSpring({
        from: {
            maxHeight: limitFunctions ? 1000 : 0,
            marginBottom: limitFunctions ? 5 : 0,
            opacity: limitFunctions ? 1 : 0,
            display: limitFunctions ? "block" : "none"
        },
        to: {
            maxHeight: limitFunctions ? 0 : 1000,
            marginBottom: limitFunctions ? 0 : 5,
            opacity: limitFunctions ? 0 : 1,
            display: limitFunctions ? "none" : "block"
        },
        config: {
            duration: 100
        }
    });

    const noLimitFunctions = [
        {
            icon: <History width={iconSize.width} height={iconSize.height}/>,
            label: "Истории",
            to: "/main/history"
        },
        {
            icon: <Weeks width={iconSize.width} height={iconSize.height}/>,
            label: "Коубы недели",
            to: "/main/week"
        },
        {
            icon: <Lighting width={iconSize.width} height={iconSize.height}/>,
            label: "Мой выбор",
            to: "/main/my"
        },
        {
            icon: <Flag width={iconSize.width} height={iconSize.height}/>,
            label: "Лучшее за год",
            to: "/main/year"
        },
    ];
    const mapForFunctions = [
        {
            icon: <Home width={iconSize.width} height={iconSize.height}/>,
            label: "Домой",
            to: "/",
        },
        {
            icon: <Hot width={iconSize.width} height={iconSize.height}/>,
            label: "Горячие",
            to: "/main/hot",
        },
        {
            icon: <Random width={iconSize.width} height={iconSize.height}/>,
            label: "Случайные",
            to: "/main/random",
        },
    ];
    const mapCommunity = [
        {
            avatar: animalsImg,
            label: "Животные и домашние животные",
            to: "/main/community/animals-pet",
        },
        {
            avatar: mashupImg,
            label: "Мэшап",
            to: "/main/community/mashup",
        },
        {
            avatar: animeImg,
            label: "Аниме",
            to: "/main/community/anime",
        },
        {
            avatar: moviesImg,
            label: "Фильмы с тв",
            to: "/main/community/movies-tv",
        },
        {
            avatar: gamesImg,
            label: "Игры",
            to: "/main/community/gaming",
        },
        {
            avatar: cartoonsImg,
            label: "Мультфильмы",
            to: "/main/community/cartoons",
        },
        {
            avatar: artImg,
            label: "Дизайн",
            to: "/main/community/art-design",
        },
        {
            avatar: musicImg,
            label: "Музыка",
            to: "/main/community/music",
        },
        {
            avatar: scienceImg,
            label: "Наука и технологии",
            to: "/main/community/science-technology",
        },
        {
            avatar: natureImg,
            label: "Природа и путешествия",
            to: "/main/community/nature-travel",
        },
        {
            avatar: fashionImg,
            label: "Мода",
            to: "/main/community/fashion-beauty",
        },
        {
            avatar: danceImg,
            label: "Танцы",
            to: "/main/community/dance",
        },
        {
            avatar: autoImg,
            label: "Автомобили",
            to: "/main/community/auto-technique",
        },
        {
            avatar: newsImg,
            label: "Новости",
            to: "/main/community/sports",
        },
        {
            avatar: sportsImg,
            label: "Спорт",
            to: "/main/community/sports",
        },
        {
            avatar: celebrityImg,
            label: "Celebrity",
            to: "/main/community/celebrity",
        },
        {
            avatar: nsfwImg,
            label: "NSFW",
            to: "/main/community/nsfw",
        },
    ];

    const mapFunctions = mapForFunctions.map(({icon, label, to}, idx) => <CardFunction to={to} key={idx} icon={icon} label={label}/>);
    const mapMoreFunctions = noLimitFunctions.map(({icon, label, to}, idx) => <CardFunction to={to} key={idx} icon={icon} label={label}/>);


    function useWindowSize() {
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
          function updateSize() {
            setSize(window.innerWidth);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
     }
    
      
    if(hideNavigation) {
        setHideNavigation(true)
    }

    return (
        <animated.div style={showAnimation} className={"navigation" + (useWindowSize() < 1220 ? " navigation-hide" : "")}>
            <Scrollbars
                autoHide
                renderThumbVertical={props => <div {...props} className="navigation-scroll"/>}
                autoHideTimeout={500}
                autoHideDuration={100}
            >
                {
                    mapFunctions
                }
                <animated.div className="navigation-more-functions" style={moreFunctionsAnimation}>
                    {
                        mapMoreFunctions
                    }
                </animated.div>
                <ShowMoreFunctions onClick={() => setLimitFunctions(!limitFunctions)} active={false} noActiveText="Показать еще" activeText="Скрыть" />
                <Divider />
                <CardFunction to={"user/likes"} icon={<Like width={iconSize.width} height={iconSize.height}/>} label="Мои лайки"/>
                <CardFunction to={"user/likes"} icon={<Bookmarks width={iconSize.width} height={iconSize.height}/>} label="Закладки"/>
                <Divider />
                <Label>Сообщества</Label>
                {
                    mapCommunity.map((comm, idx) => (
                        <Community key={idx} avatar={comm.avatar} label={comm.label} to={comm.to}/>
                    ))
                }
            </Scrollbars>
        </animated.div>
    )
}
