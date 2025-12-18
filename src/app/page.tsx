import Gallery from "@/features/gallery/Gallery";
import benchmarksData from "@/data/benchmarks.json";

export default function Home() {
    return (
        <main className="min-h-screen bg-black">
            <Gallery data={benchmarksData} />
        </main>
    );
}
