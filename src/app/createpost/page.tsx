"use client";

import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ClothesItem from "./clothesItem";
import SchoolsItem from "./schoolsItem";
import ToysItem from "./toysItem";
import FoodItem from "./foodItem";
import BloodItem from "./bloodItem";
import MedItem from "./medItem";
import TeachingItem from "./teachingItem";
import CaseItem from "./caseItem";

type ItemProps = {
    category: string;
};

function Item({ category }: ItemProps) {
    switch (category) {
        case "clothes":
            return (<ClothesItem />);
        case "school":
            return (<SchoolsItem />);
        case "toys":
            return (<ToysItem />);
        case "food":
            return (<FoodItem />);
        case "blood":
            return (<BloodItem />);
        case "medsupplies":
            return (<MedItem />);
        case "teaching":
            return (<TeachingItem />);
        case "medcases":
            return (<CaseItem />);
        default:
            return (<ClothesItem />);
    }
}

export default function Home() {
    const [category, setCategory] = useState<string>("");
    const [items, setItems] = useState<JSX.Element[]>([]);

    const addItem = () => {
        setItems([...items, <hr/>, <Item category={category} key={items.length} />]);
        console.log(items)
    };

    useEffect(() => {
        if (category === "")
            return;

        setItems([<Item category={category} key={0} />]);
    }, [category]);

    return (
        <div>
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1100px] min-h-[580px] space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-3xl">Create a New Post</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Fill out the form below to publish a new post.</p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid gap-4">
                            <div className="col-span-2">
                                <Form.Label htmlFor="title">Category</Form.Label>
                                <Form.Select defaultValue="" onChange={(e) => setCategory(e.target.value)}>
                                    <option disabled value="">Select Category</option>
                                    <option value="clothes">Clothes</option>
                                    <option value="school">School Supplies</option>
                                    <option value="toys">Toys</option>
                                    <option value="food">Food</option>
                                    <option value="blood">Blood Donations</option>
                                    <option value="medsupplies">Medical Supplies</option>
                                    <option value="teaching">Teaching</option>
                                    <option value="medcases">Medical Case</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Form.Label htmlFor="content">Post Description</Form.Label>
                            <Form.Control as="textarea" rows={5} className="resize-none" placeholder="Enter post description here..." />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Add Items</h2>
                            <div className="space-y-4">
                                {items.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                <div className="flex justify-between">
                                    <Button disabled={category === ""} onClick={addItem}>Add Item</Button>
                                    <Button type="submit">Publish Post</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}