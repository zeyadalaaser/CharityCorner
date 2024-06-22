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
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


function Item({ category, requirement }: { category: string; requirement?: any; }) {
    switch (category) {
        case "clothes":
            return <ClothesItem requirements={requirement} />;
        case "school supplies":
            return <SchoolsItem requirements={requirement} />;
        case "toys":
            return <ToysItem requirements={requirement} />;
        case "food":
            return <FoodItem requirements={requirement} />;
        case "blood donations":
            return <BloodItem requirements={requirement} />;
        case "medical supplies":
            return <MedItem requirements={requirement} />;
        case "teaching":
            return <TeachingItem requirements={requirement} />;
        case "medical case":
            return <CaseItem requirements={requirement} />;
        default:
            return null;
    }
}


export default function EditPost() {
    const post = JSON.parse(useSelector((state: RootState) => state.posts.editPost));
    const router = useRouter();

    const [category, setCategory] = useState<string>(post?.type?.toLowerCase() ?? "");
    const [items, setItems] = useState<JSX.Element[]>([]);

    const addItem = () => {
        setItems([...items, <hr />, <Item category={category.toLowerCase()} />]);
    };

    const resetItems = (category: string) => {
        setItems([<Item category={category.toLowerCase()} />]);
    };

    useEffect(() => {

        let list: any[] = [];
        for (let i = 0; i < post.requirements.length; i++) {
            const requirements = post.requirements[i];
            list.push(<Item category={(post.type.toLowerCase())} requirement={requirements} />);
            if (i !== post.requirements.length - 1)
                list.push(<hr />);
        }

        setItems(list);

    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    return (
        <div>
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
                <div className="mx-auto max-w-[1100px] min-h-[580px] space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-3xl">Create a New Post</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Fill out the form below to publish a new post.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="col-span-2">
                                <Form.Label htmlFor="title">Category</Form.Label>
                                <Form.Select name="category" value={category} onChange={(e) => { setCategory(e.target.value); resetItems(e.target.value); }}>
                                    <option disabled value="">Select Category</option>
                                    <option value="clothes">Clothes</option>
                                    <option value="school supplies">School Supplies</option>
                                    <option value="toys">Toys</option>
                                    <option value="food">Food</option>
                                    <option value="blood donations">Blood Donations</option>
                                    <option value="medical supplies">Medical Supplies</option>
                                    <option value="teaching">Teaching</option>
                                    <option value="medical case">Medical Case</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Form.Label htmlFor="content">Post Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                className="resize-none"
                                placeholder="Enter post description here..."
                                defaultValue={post ? post.description : ''}
                                name="description"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Add Items</h2>
                            <div className="space-y-4">
                                {items.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                <div className="flex justify-between">
                                    <Button disabled={category === ""} onClick={addItem}>Add Item</Button>
                                    <Button type="submit" onClick={(e) => router.push("/NewsFeed") }>Edit Post</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}