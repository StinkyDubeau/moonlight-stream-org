// Children of this dropdown component will be rendered as list items under the main button. If there are no children on the component, no dropdown will render and the dropdown button will link to the "link" property.

export default function DropdownButton(props: any) {
    return (
        <a
            href={props.link}
            className={`dropdown ${props.children ? "dropdown-hover" : ""}`}
        >
            <div
                tabIndex={0}
                role="button"
                className="btn m-1"
            >
                {props.text}
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 text-black shadow-sm"
            >
                {props.children &&
                    props.children.map((child: any, index: any) => (
                        <li key={index}>{child}</li>
                    ))}
            </ul>
        </a>
    );
}
