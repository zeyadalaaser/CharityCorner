import { FloatingLabel, Form } from "react-bootstrap";
import UploadImage from "./uploadImage";

export default function MedItem({ requirements }: { requirements?: any }) {
    return (
        <div className="grid grid-cols-4 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" defaultValue={requirements ? requirements["type"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Item Name">
                <Form.Control placeholder="Item Name" defaultValue={requirements ? requirements["itemName"] : ""}  />
            </FloatingLabel>
            <UploadImage />
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" defaultValue={requirements ? requirements["quantity"] : ""}  />
            </FloatingLabel>
        </div>
    );
}