import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Handwriting"
}

export default function HandwritingPage() {
    return <>
        <main id="handwriting-main">
            <div className="handwriting-wraper">
                <h1>I am Colle</h1>
                <div aria-hidden="true" className="handwriting-container">
                    <svg id="svg-1" width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00002 4C7.00002 3.33333 16.7439 2.19271 17 2.5C19.5 5.5 23 28.2917 10.5 33.5C6.5 35.1667 3 34 3 34" />
                    </svg>
                    <svg id="svg-2" width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 2.5C4.5 2.5 2 6.5 2 10C2 14.5 6.5 16 8 16C9.5 16 14.5 15 14.5 10C14.5 5.5 11.5 2.5 9 2.5C15.5 4.5 14 13.5 19 15C20 14.8333 22.2 14.2 23 13C23.291 12.5635 23 5.5 23 5C23 4.5 23.8571 16.7143 25 15C27 12 29.5 8 30.5 7.5C31.1177 7.19113 33.5 15 34 15C34.5 15 38.5 7 39 7C39.5 7 41.5 15 43 15" />
                    </svg>
                    <svg id="svg-3" width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3C10.5 1 2.49997 10 2.5 19.5C2.50003 30 7.99997 36 18 33" />
                    </svg>
                    <svg id="svg-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 15C4.5 15 2.5 10.5 2.5 8.5C2.5 6.5 4.8 2.5 8 2.5C12 2.5 14.5 7.5 14.5 10C14.5 12.5 11.5 15 8 15Z" />
                    </svg>
                    <svg id="svg-5" width="5" height="29" viewBox="0 0 5 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 2L2.5 27" />
                    </svg>
                    <svg id="svg-6" width="5" height="29" viewBox="0 0 5 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 2L2.5 27" />
                    </svg>
                    <svg id="svg-7" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12.5C4 12 10.5 8.50002 10 3.00002C10.5 2.50001 1.5 -0.5 3.5 11.5C3.79748 13.2849 7 17.5 15 13.5"/>
                    </svg>
                </div>
            </div>
        </main>
    </>
}