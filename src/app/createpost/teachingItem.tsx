import { FloatingLabel, Form } from "react-bootstrap";

export default function TeachingItem() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <FloatingLabel label="Subject">
                <Form.Control placeholder="Subject" />
            </FloatingLabel>
            <FloatingLabel label="Area">
                <Form.Control placeholder="Area" />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" />
            </FloatingLabel>
            <FloatingLabel label="Google Map Marker">
                <Form.Control placeholder="Google Map Marker" />
            </FloatingLabel>
        </div>
    );
}