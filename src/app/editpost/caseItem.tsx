import { FloatingLabel, Form } from "react-bootstrap";

export default function CaseItem({ requirements }: { requirements?: any }) {
    return (
        <div className="grid grid-cols-6 grid-rows-2 gap-2">
            <FloatingLabel label="Medical Specialty">
                <Form.Control placeholder="Medical Specialty" defaultValue={requirements ? requirements["medicalSpeciality"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Organization">
                <Form.Control placeholder="Organization" defaultValue={requirements ? requirements["organization"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Area">
                <Form.Control placeholder="Area" defaultValue={requirements ? requirements["area"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" defaultValue={requirements ? requirements["governorate"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Patient Name">
                <Form.Control placeholder="Patient Name" defaultValue={requirements ? requirements["patientName"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Age">
                <Form.Control placeholder="Age" type="number" defaultValue={requirements ? requirements["age"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Gender">
                <Form.Control placeholder="Gender" defaultValue={requirements ? requirements["gender"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Weight">
                <Form.Control placeholder="Weight" defaultValue={requirements ? requirements["weight"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Location">
                <Form.Control placeholder="Location" defaultValue={requirements ? requirements["location"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Address">
                <Form.Control placeholder="Address" defaultValue={requirements ? requirements["address"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Case Description">
                <Form.Control placeholder="Case Description" defaultValue={requirements ? requirements["caseDescription"] : ""} />
            </FloatingLabel>
        </div>
    );
}