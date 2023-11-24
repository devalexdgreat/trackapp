import AdminNav from "@/components/AdminNav";
import Navbar from "@/components/Navbar";
import TrackCard from "@/components/TrackCard";
import Link from "next/link";

export default function Track() {
    return (
        <div>
            <AdminNav />
            <TrackCard />
        </div>
    );
}