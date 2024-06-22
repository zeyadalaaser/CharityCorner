import { FloatingLabel, Form } from "react-bootstrap";

export default function FoodItem() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" />
            </FloatingLabel>
            <FloatingLabel label="Item Name">
                <Form.Control placeholder="Item Name" />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
        </div>
    );
}