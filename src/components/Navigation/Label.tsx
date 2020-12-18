import React from "react";

interface Props {
    children: any
}

export function Label(props: Props) {
    return <div className="navigation-label-container">
        <label className="navigation-label">
            {
                props.children
            }
        </label>
    </div>
}
