"use client";

import { useRouter } from "next/navigation";


export default function Submit() {

    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/main");
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="text-white bg-lime-700 rounded-2xl p-2 min-w-xl">Sign In</button>
            </form>
        </div>
    );
}