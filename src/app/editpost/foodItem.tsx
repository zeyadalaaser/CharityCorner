import { FloatingLabel, Form } from "react-bootstrap";

export default function FoodItem({ requirements }: { requirements?: any }) {
    return (
        <div className="grid grid-cols-3 gap-2">
            <FloatingLabel label="Type">
                <Form.Control placeholder="Type" defaultValue={requirements?requirements["type"]:""}/>
            </FloatingLabel>
            <FloatingLabel label="Item Name">
                <Form.Control placeholder="Item Name" defaultValue={requirements?requirements["itemName"]:""} />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" defaultValue={requirements?requirements["quantity"]:""} />
            </FloatingLabel>
        </div>
    );
}