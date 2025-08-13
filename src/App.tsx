import { useEffect, useState } from "react";

export default function App() {
    const [text, setText] = useState("Checking API...");

    useEffect(() => {
        fetch("http://localhost:5205/health")
            .then(r => r.json())
            .then(d => setText(`API status: ${d.status} v${d.version}`))
            .catch(() => setText("Failed to reach API"));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Mini‑Shop</h1>
            <p className="mt-2">{text}</p>
        </div>
    );
}
