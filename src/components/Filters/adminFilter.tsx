'use client'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import egypt from "@/data/egypt.json";

export interface Filter {
    pairs: Record<string, string>;
}


interface Organization {
    key: string;
    name: string;
    reportID: string;
    description: string;
    status: string;
    contactDetails: string;
    address: string;
    organizationType: string;
    location: string;
    locationLink: string;
}

export default function adminFilter(handleFilter: (pairs: Filter) => void, visible: boolean, setVisible: any) {
    const [selectedGovernorate, setGovernorate] = useState<string>("");
    const [selectedArea, setArea] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [filter, setFilter] = useState<Filter>({ pairs: {} });


    const toggleVisibility = () => {
        setVisible(false);
    };

    useEffect(() => {
        filterPosts(filter);
    }, [filter]);

    const filterPosts = ({ pairs }: Filter) => {
        handleFilter({ pairs })
    };

    return (
        visible && (<>
            <div className="w-800 h-screen bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-950 dark:border-gray-800">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Filters</h2>
                        <button type="button" className="btn-close" onClick={toggleVisibility} ></button>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <h3 className="text-base font-medium mb-2">Type</h3>
                        <Form.Select value={type} onChange={(e) => { setType(e.target.value); setFilter({ ...filter, pairs: { ...filter.pairs, "organizationType": e.target.value } }); }}>
                            <option disabled value="">Select Organization Type</option>
                            {["Hospital", "Orphanage", "Mosque", "Church", "School"].map((organizationType, index) => (
                                <option key={index} value={organizationType}>
                                    {organizationType}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                    <div>
                        <h3 className="text-base font-medium mb-2">Governorate</h3>
                        <Form.Select value={selectedGovernorate} onChange={(e) => { setFilter({ ...filter, pairs: { ...filter.pairs, "governorate": e.target.value } }); setGovernorate(e.target.value); }}>
                            <option disabled value="">Select Organization Type</option>
                            {Object.keys(egypt).map((governorate) => (
                                <option key={governorate} value={governorate}>{governorate}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div>
                        <h3 className="text-base font-medium mb-2">Area</h3>
                        <Form.Select defaultValue="" onChange={(e) => { setFilter({ ...filter, pairs: { ...filter.pairs, "area": e.target.value } }) }}>
                            <option disabled value=""></option>
                            {selectedGovernorate && ((egypt as { [key: string]: string[] })[selectedGovernorate].map((t: string) => (
                                <option key={t} value={t}>{t}</option>
                            )))}
                        </Form.Select>
                    </div>
                </div>

                <div className="flex items-center justify-end border-t p-4 dark:border-gray-800">
                    <Button variant="outline-secondary" onClick={() => {
                        setFilter({ pairs: {} });
                        setGovernorate("");
                        setType("");
                    }}>Reset</Button>
                </div>
            </div>
        </>)
    );
}
