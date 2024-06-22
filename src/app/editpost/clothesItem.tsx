import { FloatingLabel, Form } from "react-bootstrap";

interface Requirement{
    itemName: string;
    age: string;
    gender: string,
    season: string,
    material: string,
    quantity: string
}

interface ClothesItemProps{
    requirements: Requirement;
}
export default function ClothesItem({requirements} :ClothesItemProps) {

    return (
        <div className="grid grid-cols-6 gap-2">
            <FloatingLabel label="Type">
                <Form.Control id="reqs-type" placeholder="Type" value={ requirements ?requirements["itemName"]:"" }/>
            </FloatingLabel>
            <FloatingLabel label="Age">
                <Form.Control id="reqs-age" placeholder="Age" value={requirements ? requirements["age"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Gender">
                <Form.Select id="reqs-gender" defaultValue={requirements ? requirements["gender"]  : ""}>
                    <option disabled value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Season">
                <Form.Control id="reqs-season" placeholder="Season" value={requirements ? requirements["season"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Material">
                <Form.Control id="reqs-material" placeholder="Material" value={requirements ? requirements["material"] : ""} />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control id="reqs-quantity" placeholder="Quantity" type="number" value={requirements ? requirements["quantity"] : ""} />
            </FloatingLabel>
        </div>
    );
}