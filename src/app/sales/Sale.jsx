"use client";
import { useRouter } from "next/navigation";


export default function Sale(props) {
    const router = useRouter();

    const handleCustomerDetails = () => {
        // Navigate to the sale detail page with query parameters
        console.log(props.customer);
        const queryParams = [];
        queryParams.push(`gender=${encodeURIComponent(props.customer.gender)}`);
        queryParams.push(`age=${encodeURIComponent(props.customer.age)}`);
        queryParams.push(`email=${encodeURIComponent(props.customer.email)}`);
        queryParams.push(`satisfaction=${encodeURIComponent(props.customer.satisfaction)}`);
        const queryString = queryParams.join("&")
        const saleUrl = `/sales/${props._id}?${queryString}`;

        router.push(saleUrl);
    };

    const handleItemsDetails = () => {
        console.log(props.items);
        const queryParams = [];
        props.items.forEach((item, index) => {
            // TODO think to change this
            const itemData = {
                name: item.name,
                price: item.price.$numberDecimal,
                quantity: item.quantity
            }
            queryParams.push(`item${index}=${JSON.stringify(itemData)}`);
        });

        const queryString = queryParams.join("&")
        const saleUrl = `/sales/items?${queryString}`;

        router.push(saleUrl);
    }

    return (
        <li>
            <div onClick={handleCustomerDetails} style={{ cursor: "pointer" }}>
                <p>Id: {props._id}</p>
                <p>Date: {props.saleDate}</p>
                <p>Location: {props.storeLocation}</p>
                <p>Purchase Method: {props.purchaseMethod}</p>
            </div>
            <div onClick={handleItemsDetails} style={{ cursor: "pointer" }}>
                <p>View items details</p>
                <br></br>
            </div>
        </li>
    );
}