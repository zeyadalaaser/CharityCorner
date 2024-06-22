'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import egypt from "@/data/egypt.json";

interface FiltersProps {
    posts: any,
    donorType: string,
    newsFeedFilterPosts: (category: string, { pairs }: Filter) => void;
    toggle: any;
}

interface Filter {
    pairs: Record<string, string>;
}

function getAllOrgs(posts: any) {
    const organizationNames = posts.map((item: any) => item["organization"]);
    const uniqueOrganizationNames = Array.from(new Set(organizationNames)) as string[];
    return uniqueOrganizationNames;
}

function orgFilter(handleFilter: (pairs: Filter) => void) {

    const [selectedGovernorate, setGovernorate] = useState<string>("");
    const [selectedArea, setArea] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [filter, setFilter] = useState<Filter>({ pairs: {} });


    useEffect(() => {
        filterPosts(filter);
    }, [filter]);

    const filterPosts = ({ pairs }: Filter) => {
        handleFilter({ pairs })
    };
}

export default function FilterDesign({ posts, donorType, newsFeedFilterPosts, toggle }: FiltersProps) {

    const [type, setType] = useState<string>("");

    const orgs = getAllOrgs(posts);


    const [selectedAreaT, setSelectedAreaT] = useState<string>("");
    const [selectedGovernorateT, setSelectedGovernorateT] = useState<string>("");

    const [category, setCategory] = useState<string>("");
    const [medication, setmedication] = useState(false);
    const [filter, setFilter] = useState<Filter>({ pairs: {} });
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        toggle();
    };

    useEffect(() => setFilter({ pairs: {} }), [category]);
    useEffect(() => filterPosts(category, filter), [filter.pairs])

    const filterPosts = (category: string, { pairs }: Filter) => {
        newsFeedFilterPosts(category, { pairs });
    };


    return (
        <div>
            {isVisible && (
                <div className="w-800 h-screen bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-950 dark:border-gray-800">
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Filters</h2>
                            <button type="button" className="btn-close"
                                onClick={toggleVisibility} ></button>
                        </div>
                        <Form.Control
                            className="mt-4 w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                            type="text"
                            value={category}
                            placeholder="Search a category..."
                            onChange={(e) => { setCategory(e.target.value) }}
                        />
                    </div>

                    {donorType == "teacher" && (
                        <div className="p-6 space-y-6">
                            <div>
                                <h3 className="text-base font-medium mb-2">Subject</h3>
                                <div className="space-y-2">
                                    <Form.Check type="radio" label="Maths" name="maths" value="shoes" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="English" name="english" value="tops" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="Arabic" name="arabic" value="hoodies" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="French" name="french" value="pants" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-medium mb-2">Governorate</h3>
                                <Form.Select value={selectedGovernorateT} onChange={(e) => { setSelectedGovernorateT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "governorate": e.target.value } }) }}>
                                    <option disabled value=""></option>
                                    {Object.keys(egypt).map((governorate) => (
                                        <option key={governorate} value={governorate}>{governorate}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div>
                                <h3 className="text-base font-medium mb-2">Area</h3>
                                <Form.Select defaultValue="" onChange={(e) => { setSelectedAreaT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "area": e.target.value } }) }}>
                                    <option disabled value=""></option>
                                    {selectedGovernorateT !== '' && ((egypt as { [key: string]: string[] })[selectedGovernorateT].map((t: string) => (
                                        <option key={t} value={t}>{t}</option>
                                    )))}
                                </Form.Select>
                            </div>
                        </div>
                    )}
                    {donorType == "doctor" && (
                        <div className="p-6 space-y-6">
                            <div>
                                <h3 className="text-base font-medium mb-2">Speciality</h3>
                                <div className="space-y-2">
                                    <Form.Check type="radio" label="Pediatrics" name="speciality" value="pediatrics" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="Psychiatry" name="speciality" value="psychiatry" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="Orthopedics" name="speciality" value="orthopedics" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="Cardiology" name="speciality" value="cardiology" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-medium mb-2">Organization Name</h3>
                                <div className="space-y-2">
                                    <Form.Check type="radio" label="57357" name="organization" value="57357" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    <Form.Check type="radio" label="Magdi Yacoub" name="organization" value="magdi yacoub" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-medium mb-2">Governorate</h3>
                                <Form.Select defaultValue="" onChange={(e) => { setSelectedGovernorateT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "governorate": e.target.value } }) }}>
                                    <option disabled value=""></option>
                                    {Object.keys(egypt).map((governorate) => (
                                        <option key={governorate} value={governorate}>{governorate}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div>
                                <h3 className="text-base font-medium mb-2">Area</h3>
                                <Form.Select defaultValue="" onChange={(e) => { setSelectedAreaT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "area": e.target.value } }) }}>
                                    <option disabled value=""></option>
                                    {selectedGovernorateT !== '' && ((egypt as { [key: string]: string[] })[selectedGovernorateT].map((t: string) => (
                                        <option key={t} value={t}>{t}</option>
                                    )))}
                                </Form.Select>
                            </div>
                        </div>
                    )}
                    {donorType == "regular" && (
                        <div className="p-6 space-y-6">
                            {category.toLowerCase() === "clothes" && (
                                <>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Age</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Newborns" name="age" value="newborns" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Kids" name="age" value="kids" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Teens" name="age" value="teens" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Adults" name="age" value="adults" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Gender</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Male" name="gender" value="male" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Female" name="gender" value="female" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Unisex" name="gender" value="unisex" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Season</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Summer" name="season" value="summer" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Winter" name="season" value="winter" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Spring" name="season" value="spring" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Fall" name="season" value="fall" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                </>
                            )}

                            {category.toLowerCase() === "toys" && (
                                <>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Age</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="0-2 years" name="age" value="0-2 years" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="3-5 years" name="age" value="3-5 years" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="6-10 years" name="age" value="6-10 years" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="11+ years" name="age" value="11+ years" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Gender</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Male" name="gender" value="male" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Female" name="gender" value="female" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Unisex" name="gender" value="unisex" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Category</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Board games" name="category" value="board games" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Stuffed toys" name="category" value="stuffed toys" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Dolls" name="category" value="dolls" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Sports" name="category" value="sports" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Cars" name="category" value="sports" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Outdoor" name="category" value="outdoor" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                </>
                            )}

                            {category.toLowerCase() === "food" && (
                                <div>
                                    <h3 className="text-base font-medium mb-2">Type</h3>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Category</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="Fruits and Vegetables" name="type" value="fruits and vegetables" />
                                            <Form.Check type="radio" label="Canned Foods" name="type" value="canned foods" />
                                            <Form.Check type="radio" label="Fresh Meals" name="type" value="fresh meals" />
                                            <Form.Check type="radio" label="Baked Goods" name="type" value="baked goods" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {category.toLowerCase() === "school supplies" && (
                                <div>
                                    <h3 className="text-base font-medium mb-2">Type</h3>
                                    <div className="space-y-2">
                                        <Form.Check type="radio" label="Books" name="type" value="books" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        <Form.Check type="radio" label="Stationary" name="type" value="stationary" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                    </div>
                                </div>
                            )}

                            {category.toLowerCase() === "medical supplies" && (
                                <div>
                                    <h3 className="text-base font-medium mb-2">Type</h3>
                                    <div className="space-y-2">
                                        <Form.Check type="radio" label="Medical Devices" name="type" value="medical device" onChange={(e) => {
                                            setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } }),
                                                setmedication(false)
                                        }} />

                                        <Form.Check type="radio" label="Medical Equipment" name="type" value="medical equipment" onChange={(e) => {
                                            setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } }),
                                                setmedication(false)
                                        }} />

                                        <Form.Check type="radio" label="Medication" name="type" value="medication" onChange={(e) => {
                                            setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } }),
                                                setmedication(true)
                                        }} />
                                        {medication && (
                                            <div className="medsfiltesr">
                                                <Form.Check type="radio" label="Pain killers" name="medicaluse" value="pain killers" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                                <Form.Check type="radio" label="Anti-biotics" name="medicaluse" value="anti-biotics" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {category.toLowerCase() === "blood donations" && (
                                <>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Hospital Name</h3>
                                        <div className="space-y-2">
                                            <Form.Check type="radio" label="57357" name="hospitalName" value="57357" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                            <Form.Check type="radio" label="Magdi Yacoub" name="hospitalName" value="magdi yacoub" onChange={(e) => setFilter({ ...filter, pairs: { ...filter.pairs, [e.target.name]: e.target.value } })} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Governoate</h3>
                                        <Form.Select value={selectedGovernorateT} onChange={(e) => { setSelectedGovernorateT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "governorate": e.target.value } }) }}>
                                            <option disabled value=""></option>
                                            {Object.keys(egypt).map((governorate) => (
                                                <option key={governorate} value={governorate}>{governorate}</option>
                                            ))}
                                        </Form.Select>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Hospital Area</h3>
                                        <Form.Select defaultValue="" onChange={(e) => { setSelectedAreaT(e.target.value), setFilter({ ...filter, pairs: { ...filter.pairs, "hospitalArea": e.target.value } }) }}>
                                            <option disabled value=""></option>
                                            {selectedGovernorateT !== '' && ((egypt as { [key: string]: string[] })[selectedGovernorateT].map((t: string) => (
                                                <option key={t} value={t}>{t}</option>
                                            )))}
                                        </Form.Select>
                                    </div>

                                </>
                            )}
                        </div>
                    )}

                    <div className="flex items-center justify-end border-t p-4 dark:border-gray-800">
                        <Button variant="outline-secondary" onClick={() => {
                            setCategory("");
                            setFilter({ pairs: {} });
                            setSelectedGovernorateT("");
                            setType("");
                        }}>Reset</Button>
                    </div>
                </div>
            )}
        </div>

    )
}
