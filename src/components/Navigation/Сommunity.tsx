import React from "react";
import {useSpring, animated} from "react-spring";
import {Link} from "react-router-dom";

interface Props {
    avatar: any,
    label: string,
    to: string
}

export default function Community(props: Props) {
    const { avatar, label, to } = props;
    const [{ backgroundColor }, set] = useSpring(() => ({
        backgroundColor: '#090D13',
        config: { duration: 100 }
    }));

    let labelContainer = label;

    if(labelContainer.split("").length > 15) {
        labelContainer = labelContainer.slice(0, 15) + "..."
    }

    // transform: y.interpolate(v => `translateY(${v}%`)
    return (
        <Link to={to} className="navigation-card-community-link">
            <animated.div
                style={{ backgroundColor }}
                className="navigation-card-community"
                onMouseEnter={() => set({ backgroundColor: "#1D2633" })}
                onMouseLeave={() => set({ backgroundColor: "#090D13" })}
                onMouseDown={() => set({ backgroundColor: "#2E3B50" })}
            >
                <img src={avatar} alt="animals" className="navigation-card-community-img"/>
                <div className="navigation-card-community-label">
                    {
                        labelContainer
                    }
                </div>
            </animated.div>
        </Link>
    )
}
