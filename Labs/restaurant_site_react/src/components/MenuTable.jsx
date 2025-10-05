import React from "react";
import { Table } from "reactstrap";

const MenuTable = ({ items }) => {
    const displayedItems = items.slice(0, 5);

    return (
        <Table bordered hover responsive className="text-center align-middle">
            <thead className="table-dark">
            <tr>
                <th>Image</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody className={"table-dark"}>
            {displayedItems.map((item, index) => (
                <tr key={index}>
                    <td>
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                        />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default MenuTable;
