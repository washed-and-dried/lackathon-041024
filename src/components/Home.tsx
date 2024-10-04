export default function Home() {
    return <>
        <iframe
            src="https://ourworldindata.org/grapher/annual-change-forest-area?tab=map"
            loading="lazy"
            style={{width: "100vw", height: "600px"}}
            allow="web-share; clipboard-write"
        ></iframe>
    </>
}