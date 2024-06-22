import { FloatingLabel, Form } from "react-bootstrap";

export default function TeachingItem({ requirements }: { requirements?: any }) {
    return (
        <div className="grid grid-cols-5 gap-2">
            <FloatingLabel label="Subject">
                <Form.Control placeholder="Subject" defaultValue={requirements ? requirements["subject"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Area">
                <Form.Control placeholder="Area" defaultValue={requirements ? requirements["area"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" defaultValue={requirements ? requirements["governorate"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" defaultValue={requirements ? requirements["numberOfStudents"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Google Map Marker">
                <Form.Control placeholder="Google Map Marker" defaultValue={requirements ? requirements["googleMapMarker"] : ""} />
            </FloatingLabel>
        </div>
    );
}