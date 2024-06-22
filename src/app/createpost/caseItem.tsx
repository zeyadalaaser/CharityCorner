import { FloatingLabel, Form } from "react-bootstrap";

export default function CaseItem() {
    return (
        <div className="grid grid-cols-6 grid-rows-2 gap-2">
            <FloatingLabel label="Medical Specialty">
                <Form.Control placeholder="Medical Specialty" />
            </FloatingLabel>
            <FloatingLabel label="Organization">
                <Form.Control placeholder="Organization" />
            </FloatingLabel>
            <FloatingLabel label="Area">
                <Form.Control placeholder="Area" />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" />
            </FloatingLabel>
            <FloatingLabel label="Patient Name">
                <Form.Control placeholder="Patient Name" />
            </FloatingLabel>
            <FloatingLabel label="Age">
                <Form.Control placeholder="Age" type="number" />
            </FloatingLabel>
            <FloatingLabel label="Gender">
                <Form.Control placeholder="Gender" />
            </FloatingLabel>
            <FloatingLabel label="Weight">
                <Form.Control placeholder="Weight" />
            </FloatingLabel>
            <FloatingLabel label="Location">
                <Form.Control placeholder="Location" />
            </FloatingLabel>
            <FloatingLabel label="Address">
                <Form.Control placeholder="Address" />
            </FloatingLabel>
            <FloatingLabel label="Case Description">
                <Form.Control placeholder="Case Description" />
            </FloatingLabel>
        </div>
    );
}