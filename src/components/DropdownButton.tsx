import { useState } from "react";

export default function DropdownButton(props: any) {
    const [open, setOpen] = useState(false);

    return (
        <button
            className="flex flex-col text-left relative"
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            onMouseLeave={() => setOpen(false)}
        >
            {props.text && (
                <p className="transition-all hover:scale-105">{props.text}</p>
            )}
            {props.children.map((child: any, index: any) => (
                <div
                    key={index}
                    className={`${open ? "visible" : "hidden"} top-1 absolute transition-all hover:scale-105`}
                >
                    {child}
                </div>
            ))}
        </button>
    );
}
