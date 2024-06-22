import { FloatingLabel, Form } from "react-bootstrap";


interface Requirement{
    patientName: string;
    bloodType: string;
    hospitalName: string,
    hospitalArea: string,
    governorate: string,
    hospitalAddress: string
}

interface BloodItemProps{
    requirements: Requirement;
}
export default function BloodItem({requirements} :BloodItemProps) {
    return (
        <div className="grid grid-cols-6 gap-2">
            <FloatingLabel label="Patient Name">
                <Form.Control placeholder="Patient Name" value={requirements ? requirements["patientName"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Blood Type">
                <Form.Control placeholder="Blood Type" value={requirements ? requirements["bloodType"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Hospital Name">
                <Form.Control placeholder="Hospital Name" value={requirements ? requirements["hospitalName"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Hospital Area">
                <Form.Control placeholder="Hospital Area" value={requirements ? requirements["hospitalArea"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Governorate">
                <Form.Control placeholder="Governorate" value={requirements ? requirements["governorate"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Hospital Address">
                <Form.Control placeholder="Hospital Address" value={requirements ? requirements["hospitalAddress"] : ""}/>
            </FloatingLabel>
        </div>
    );
}