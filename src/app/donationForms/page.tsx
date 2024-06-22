"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import Blood from "./Blood";
import Doctor from "./Doctor";
import Normal from "./Normal";
import Teacher from "./Teacher";

export default function Page() {
    const donationPost = JSON.parse(useSelector((state: RootState) => state.posts.donationPost));

    const postType = donationPost["type"];
    const reqs = donationPost["requirements"] as any[];
    return(
        <main>
            {postType.toLowerCase() === "blood donations" && (<Blood />)}
            {postType.toLowerCase() === "medical case" && (<Doctor />)}
            {postType.toLowerCase() === "teaching" && (<Teacher />)}
            {postType.toLowerCase() !== "blood donations" && postType.toLowerCase() !== "medical case" && postType.toLowerCase() !== "teaching" && (
              (<Normal requirements={reqs} />))}
        </main>
    );
}