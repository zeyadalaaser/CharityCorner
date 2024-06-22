import { FloatingLabel, Form } from "react-bootstrap";
import UploadImage from "./uploadImage";
import { useState } from "react";


function Books(props: any) {
    return (
        <div className="grid grid-cols-8 gap-2">
            <FloatingLabel label="Type">
                <Form.Select defaultValue={props.type} onChange={(e) => props.setType(e.target.value)}>
                    <option value="stationery">Stationery</option>
                    <option value="books">Books</option>
                </Form.Select>
            </FloatingLabel>
            <UploadImage />
            <FloatingLabel label="Name">
                <Form.Control placeholder="Name" defaultValue={props.requirements?props.requirements["itemName"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Author">
                <Form.Control placeholder="Author" defaultValue={props.requirements?props.requirements["author"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Language">
                <Form.Control placeholder="Language" defaultValue={props.requirements?props.requirements["language"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Edition">
                <Form.Control placeholder="Edition" defaultValue={props.requirements?props.requirements["edition"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Summary">
                <Form.Control placeholder="Edition" defaultValue={props.requirements?props.requirements["summary"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Quantity" >
                <Form.Control placeholder="Quantity" type="number" defaultValue={props.requirements?props.requirements["quantity"]:''} />
            </FloatingLabel>
        </div>
    );
}

function Stationery(props: any){
    return (
        <div className="grid grid-cols-3 gap-2">
            <FloatingLabel label="Type">
                <Form.Select defaultValue= {props.type} onChange={(e) => props.setType(e.target.value)}>
                    <option value="stationery">Stationery</option>
                    <option value="books">Books</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Item">
                <Form.Control placeholder="Item" defaultValue = {props.requirements?props.requirements["itemName"]:''} />
            </FloatingLabel>
            <FloatingLabel label="Quantity">
                <Form.Control placeholder="Quantity" type="number" defaultValue={props.requirements?props.requirements["quantity"]:''}  />
            </FloatingLabel>
        </div>
    );
}

export default function SchoolsItem({ requirements }: { requirements?: any }) {
    const [type, setType] = useState("Stationery");
    const [currentRequirements, setRequirements] = useState(requirements);
    return (
        type === "books" ? <Books type={type} setType={setType} requirements={currentRequirements} /> : <Stationery type={type} setType={setType} requirements={currentRequirements} />
    );
}
