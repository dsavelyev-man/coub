import React from "react";
import {useSpring, animated} from "react-spring";
import {Link} from "react-router-dom";

interface Props {
    icon: any,
    label: string,
    to: string
}

export default function CardFunction(props: Props) {
    const { icon, label } = props;
    const [{ backgroundColor }, set] = useSpring(() => ({
        backgroundColor: '#090D13',
        config: { duration: 100 }
    }));

    // transform: y.interpolate(v => `translateY(${v}%`)
    return (
        <Link to={props.to} className="navigation-card-function-link">
            <animated.div
                style={{ backgroundColor }}
                className="navigation-card-function"
                onMouseEnter={() => set({ backgroundColor: "#1D2633" })}
                onMouseLeave={() => set({ backgroundColor: "#090D13" })}
                onMouseDown={() => set({ backgroundColor: "#2E3B50" })}
            >
                <div className="navigation-card-function-icon">
                    {
                        icon
                    }
                </div>
                <div className="navigation-card-function-label">
                    {
                        label
                    }
                </div>
            </animated.div>
        </Link>
    )
}
