import { FloatingLabel, Form } from "react-bootstrap";

export default function ClothesItem() {
    return (
        <div className="grid grid-cols-6 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" />
            </FloatingLabel>
            <FloatingLabel label="Age">
                <Form.Control placeholder="Age" />
            </FloatingLabel>
            <FloatingLabel label="Gender">
                <Form.Select defaultValue="">
                    <option disabled value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Season">
                <Form.Control placeholder="Season" />
            </FloatingLabel>
            <FloatingLabel label="Material">
                <Form.Control placeholder="Material" />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
        </div>
    );
}