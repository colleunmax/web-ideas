import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Hover animation"
}

export default function HoverAnimationPage() {
    return <main id="hover-animation-main">
        <ul>
            <li className="danfo hoveranim-li">Link - 1</li>
            <li className="soulcraft hoveranim-li">Link - 2</li>
            <li className="kredon hoveranim-li">
                <span>3.</span>
                Link
            </li>
        </ul>
    </main>
}