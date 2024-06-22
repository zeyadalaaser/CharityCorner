import { FloatingLabel, Form } from "react-bootstrap";
import UploadImage from "./uploadImage";

export default function MedItem() {
    return (
        <div className="grid grid-cols-4 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" />
            </FloatingLabel>
            <FloatingLabel label="Item Name">
                <Form.Control placeholder="Item Name" />
            </FloatingLabel>
            <UploadImage />
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
        </div>
    );
}