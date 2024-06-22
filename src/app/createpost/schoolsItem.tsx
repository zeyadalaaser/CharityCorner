import { FloatingLabel, Form } from "react-bootstrap";
import UploadImage from "./uploadImage";
import { useState } from "react";

function Books(props: any) {
    return (
        <div className="grid grid-cols-8 gap-2">
            <FloatingLabel label="Type">
                <Form.Select defaultValue={props.type} onChange={(e) => props.setType(e.target.value)}>
                    <option value="stationery">Stationery</option>
                    <option value="books">Books</option>
                </Form.Select>
            </FloatingLabel>
            <UploadImage />
            <FloatingLabel label="Name">
                <Form.Control placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel label="Author">
                <Form.Control placeholder="Author" />
            </FloatingLabel>
            <FloatingLabel label="Language">
                <Form.Control placeholder="Language" />
            </FloatingLabel>
            <FloatingLabel label="Edition">
                <Form.Control placeholder="Edition" />
            </FloatingLabel>
            <FloatingLabel label="Summary">
                <Form.Control placeholder="Edition" />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
        </div>
    );
}

function Stationery(props: any) {
    return (
        <div className="grid grid-cols-3 gap-2">
            <FloatingLabel label="Type">
                <Form.Select defaultValue={props.type} onChange={(e) => props.setType(e.target.value)}>
                    <option value="stationery">Stationery</option>
                    <option value="books">Books</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Item">
                <Form.Control placeholder="Item" />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
        </div>
    );
}

export default function SchoolsItem() {
    const [type, setType] = useState("stationery");
    return (
        type === "stationery" ? Books({type, setType}) : Stationery({type, setType}) 
    );
}