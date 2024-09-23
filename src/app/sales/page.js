"use client";
import { useEffect, useState } from "react";
import Sale from "./sale";

export default function SalesPage(props) {
    // connect to the api
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=10&page=0")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSales(data);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <ul>
            {sales.map(sale => (
                <Sale
                    key={sale._id} // You should use a unique key for each <li>
                    _id={sale._id}
                    saleDate={sale.saleDate}
                    storeLocation={sale.storeLocation}
                    purchaseMethod={sale.purchaseMethod}
                    customer={sale.customer}
                    items={sale.items}
                />
            ))}
        </ul>
    );
}