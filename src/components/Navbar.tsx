import DropdownButton from "./DropdownButton";

export default function Navbar() {
    return (
        <ul className="flex w-screen justify-center gap-4 bg-slate-800 p-4 text-slate-100">
            <DropdownButton
                text="Github"
                link="https://github.com/moonlight-stream"
            />
            <DropdownButton
                text="Setup Guide"
                link="https://github.com/moonlight-stream/moonlight-docs/wiki/Setup-Guide"
            />
            <DropdownButton text="Community">
                <a href="https://moonlight-stream.org/discord">
                    <div>Discord</div>
                </a>
                <a href="https://ideas.moonlight-stream.org">
                    <div>Suggestions</div>
                </a>
            </DropdownButton>
            <DropdownButton text="Host Downloads">
                <a href="https://github.com/LizardByte/Sunshine/releases">
                    <div>Sunshine</div>
                </a>
                <a href="https://www.geforce.com/geforce-experience">
                    <div>GeForce Experience</div>
                </a>
                <a href="https://github.com/moonlight-stream/Internet-Streaming-Helper/releases">
                    <div>Internet Hosting Tool</div>
                </a>
            </DropdownButton>
            <DropdownButton text="Client Downloads">
                <a href="https://github.com/moonlight-stream/moonlight-qt/releases">
                    <div>
                        Windows, MacOS, Linux, Steam Link, and Raspberry Pi 4
                    </div>
                </a>

                <a href="https://apps.apple.com/us/app/moonlight-game-streaming/id1000551566">
                    <div>iOS and Apple TV</div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.limelight">
                    <div>Android</div>
                </a>
                <a href="https://www.amazon.com/gp/product/B00JK4MFN2">
                    <div>Amazon FireOS</div>
                </a>
                <a href="https://chrome.google.com/webstore/detail/moonlight-game-streaming/gemamigbbenahjlfnmlfdjhdnkpbkfjj">
                    <div>Google ChromeOS</div>
                </a>
                <a href="https://github.com/xyzz/vita-moonlight/releases">
                    <div>Playstation Vita Homebrew</div>
                </a>
                <a href="https://apps.microsoft.com/store/detail/moonlight-uwp/9MW1BS08ZBTH">
                    <div>Xbox One and Xbox Series S|X</div>
                </a>
                <a href="https://github.com/XITRIX/Moonlight-Switch/releases">
                    <div>Nintendo Switch Homebrew</div>
                </a>
                <a href="https://github.com/GaryOderNichts/moonlight-wiiu#quick-start">
                    <div>Wii U Homebrew</div>
                </a>
                <a href="https://github.com/mariotaku/moonlight-tv#download">
                    <div>LG webOS TV Homebrew</div>
                </a>
                <a href="https://github.com/moonlight-stream/moonlight-embedded/wiki/Packages">
                    <div>Single-board computers</div>
                </a>
            </DropdownButton>
            <li>
                <a href="https://github.com/moonlight-stream/moonlight-docs/wiki/Frequently-Asked-Questions">
                    FAQ
                </a>
            </li>
        </ul>
    );
}
