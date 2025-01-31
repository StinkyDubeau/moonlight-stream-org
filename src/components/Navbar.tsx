import { useState } from "react";

export default function Navbar() {
    function DropdownButton(props: any) {
        const [open, setOpen] = useState(false);

        return (
            <button
                className="flex flex-col text-left"
                onClick={() => (open ? setOpen(false) : setOpen(true))}
            >
                {props.text && props.text}
                {props.children.map((child: any, index: any) => (
                    <div
                        key={index}
                        className={`${open ? "visible" : "hidden"}`}
                    >
                        {child}
                    </div>
                ))}
            </button>
        );
    }

    return (
        <ul className="flex w-screen gap-2 bg-slate-800 text-slate-100">
            <li>
                <a href="https://github.com/moonlight-stream">Github</a>
            </li>
            <li>
                <a href="https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide">
                    Setup Guide
                </a>
            </li>
            <DropdownButton text="Community">
                <li>
                    <a href="https://moonlight-stream.org/discord">
                        <div>Discord</div>
                    </a>
                </li>
                <li>
                    <a href="https://ideas.moonlight-stream.org">
                        <div>Suggestions</div>
                    </a>
                </li>
            </DropdownButton>
            <DropdownButton text="Host Downloads">
                <li>
                    <a href="https://github.com/LizardByte/Sunshine/releases">
                        <div>Sunshine</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.geforce.com/geforce-experience">
                        <div>GeForce Experience</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/moonlight-stream/Internet-Streaming-Helper/releases">
                        <div>Internet Hosting Tool</div>
                    </a>
                </li>
            </DropdownButton>
            <DropdownButton text="Client Downloads">
                <li>
                    <a href="https://github.com/moonlight-stream/moonlight-qt/releases">
                        <div>
                            Windows, MacOS, Linux, Steam Link, and Raspberry Pi
                            4
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://apps.apple.com/us/app/moonlight-game-streaming/id1000551566">
                        <div>iOS and Apple TV</div>
                    </a>
                </li>
                <li>
                    <a href="https://play.google.com/store/apps/details?id=com.limelight">
                        <div>Android</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.amazon.com/gp/product/B00JK4MFN2">
                        <div>Amazon FireOS</div>
                    </a>
                </li>
                <li>
                    <a href="https://chrome.google.com/webstore/detail/moonlight-game-streaming/gemamigbbenahjlfnmlfdjhdnkpbkfjj">
                        <div>Google ChromeOS</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/xyzz/vita-moonlight/releases">
                        <div>Playstation Vita Homebrew</div>
                    </a>
                </li>
                <li>
                    <a href="https://apps.microsoft.com/store/detail/moonlight-uwp/9MW1BS08ZBTH">
                        <div>Xbox One and Xbox Series S|X</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/XITRIX/Moonlight-Switch/releases">
                        <div>Nintendo Switch Homebrew</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GaryOderNichts/moonlight-wiiu#quick-start">
                        <div>Wii U Homebrew</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mariotaku/moonlight-tv#download">
                        <div>LG webOS TV Homebrew</div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/moonlight-stream/moonlight-embedded/wiki/Packages">
                        <div>Single-board computers</div>
                    </a>
                </li>
            </DropdownButton>
            <li>
                <a href="https://github.com/moonlight-stream/moonlight-docs/wiki/Frequently-Asked-Questions">
                    FAQ
                </a>
            </li>
        </ul>
    );
}
