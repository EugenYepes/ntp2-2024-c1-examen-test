"use client";
import { useSearchParams } from "next/navigation";

export default function saleDetails() {
    const searchParams = useSearchParams();

    // Extract query parameters
    const gender = searchParams.get("gender");
    const age = searchParams.get("age");
    const email = searchParams.get("email");
    const satisfaction = searchParams.get("satisfaction");

    return (
        <div>
            <h1>Sale Detail</h1>
            <p>Customer Gender: {gender}</p>
            <p>Customer Age: {age}</p>
            <p>Customer Email: {email}</p>
            <p>Customer Satisfaction: {satisfaction}</p>
        </div>
    );
}