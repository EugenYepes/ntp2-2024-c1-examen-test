"use client";
import { useSearchParams } from "next/navigation";

export default function SaleDetails() {
    const searchParams = useSearchParams();

    const itemsList = [];
    for(let i = 0; searchParams.has(`item${i}`); i++) {
        const jsonString = searchParams.get(`item${i}`);
        try {
            // Convert the JSON string back to an object
            itemsList.push(JSON.parse(jsonString));
        } catch (error) {
            console.error('Invalid JSON string:', jsonString);
        }
    }
    
    return (
        <div>
            <h2>Items:</h2>
            <ul>
                {itemsList.map((item, index) => (
                    <li key={index}>
                        <p>Name: {item.name}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <br></br>
                    </li>
                ))}
            </ul>
        </div>
    );
}
