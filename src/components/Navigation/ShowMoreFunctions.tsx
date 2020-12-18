import React from "react";
import {animated, useSpring} from "react-spring";

interface Props {
    active: boolean,
    onClick?: any
    activeText: string,
    noActiveText: string
}

export function ShowMoreFunctions(props: Props) {
    const [{ color, backgroundColor }, set] = useSpring(() => ({
        color: '#58a6ff',
        backgroundColor: "#0f151f",
        config: { duration: 100 }
    }));

    return <animated.div
        style={{backgroundColor}}
        className="navigation-card-function-show-more"
        onClick={props.onClick}
        onMouseEnter={() => set({ color: "#73b6fd", backgroundColor: "#17202f",})}
        onMouseLeave={() => set({ color: "#58a6ff", backgroundColor: "#0f151f",})}
        onMouseDown={() => set({ color: "#73b6fd", backgroundColor: "#17202f",})}
    >
        <animated.div style={{ color }} className="navigation-card-function-show-more-label">
            {
                props.active ? props.activeText : props.noActiveText
            }
        </animated.div>
    </animated.div>
}
