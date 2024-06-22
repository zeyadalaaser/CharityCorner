import { FloatingLabel, Form } from "react-bootstrap";

export default function BloodItem() {
    return (
        <div className="grid grid-cols-6 gap-2">
            <FloatingLabel label="Patient Name">
                <Form.Control placeholder="Patient Name" />
            </FloatingLabel>
            <FloatingLabel label="Blood Type">
                <Form.Control placeholder="Blood Type" />
            </FloatingLabel>
            <FloatingLabel label="Hospital Name">
                <Form.Control placeholder="Hospital Name" />
            </FloatingLabel>
            <FloatingLabel label="Hospital Area">
                <Form.Control placeholder="Hospital Area" />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" />
            </FloatingLabel>
            <FloatingLabel label="Hospital Address">
                <Form.Control placeholder="Hospital Address" />
            </FloatingLabel>
        </div>
    );
}