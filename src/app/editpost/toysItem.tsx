import { FloatingLabel, Form } from "react-bootstrap";
import UploadImage from "./uploadImage";


interface Requirement{
    image: string;
    itemName: string;
    age: string,
    gender: string,
    category: string,
    quantity: string
}

interface ToysItemProps{
    requirements: Requirement;
}

export default function ToysItem({requirements} :ToysItemProps) {
    return (
        <div className="grid grid-cols-6 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" value={requirements ? requirements["itemName"] : ""}/>
            </FloatingLabel>
            <FloatingLabel label="Age">
                <Form.Control placeholder="Age" value={requirements ? requirements["age"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Gender">
                <Form.Select defaultValue={requirements ? requirements["gender"] : ""}>
                    <option disabled value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Category">
                <Form.Control placeholder="Category" value={requirements ? requirements["category"] : ""} />
            </FloatingLabel>
            <UploadImage />
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" value={requirements ? requirements["quantity"] : ""} />
            </FloatingLabel>
        </div>
    );
}