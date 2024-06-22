"use client";

import React, { useEffect, useState } from "react";
import Posts from "../../components/Posts/Post";
import regularposts from "../../data/Posts/Regular/all.json";
import teachingposts from "../../data/Posts/Teacher/teaching.json"
import medicalposts from "../../data/Posts/Doctor/medicalCases.json"
import { NavBar } from "@/components/NavBar/NavBar";
import filterIcon from "@/assets/menu/filterIcon.png";
import FilterDesign from "@/components/Filters/FilterDesign";
import { Table } from 'antd';
import adminFilter, { Filter } from '@/components/Filters/adminFilter'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './NewsFeed.css'
import { useRouter } from "next/navigation";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface Post {
  id: number;
  type: string;
  organization: string;
  description: string;
  requirements: any[];
}


export default function NewsFeed() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  if (user?.userType === "org")
    router.push("/organizationProfile");


  let data;
  if (user?.userType === "doctor")
    data = medicalposts;
  else if (user?.userType === "teacher")
    data = teachingposts;
  else
    data = regularposts;

  const [posts, setPosts] = useState<Post[]>(data); // Original list of posts
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(data); // Filtered list of posts
  const [filtersMenuShowing, setFiltersMenuShowing] = useState<boolean>(false);


  const [fullscreen, setFullscreen] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setModalShow(true);
  }


  const handleToggleFilters = () => {
    setFiltersMenuShowing(!filtersMenuShowing);
  };
  const handleToggleModal = () => {
    setModalShow(!modalShow)
  }

  const newsFeedFilterPosts = (category: string, { pairs }: Filter) => {
    const filtered = posts.filter((post) => {

      if (!(["school supplies", "toys", "medical supplies", "clothes", "blood donations", "food"]).includes(category.toLowerCase()))
        return true;


      if (category.toLowerCase() === "medical supplies") {
        if (pairs.key === "type")
          return post.requirements.some((requirement) => {
            return Object.entries(pairs).every(([key, value]) => {
              return requirement[key]?.toLowerCase() === value.toLowerCase();
            });
          });
        else if (pairs.key === "medicaluse")
          return post.requirements.some(
            (requirement) =>
              requirement.type?.toLowerCase() === "medication" &&
              requirement.use?.toLowerCase() === pairs.value.toLowerCase()
          );
      } else {
        return (
          post.type.toLowerCase() === category &&
          post.requirements.some((requirement) => {
            return Object.entries(pairs).every(([key, value]) => {
              return requirement[key]?.toLowerCase() === value.toLowerCase();
            });
          })
        );
      }
    });

    setFilteredPosts(filtered);
    if (filtered.length === 0) console.log("no results found");
    console.log(filtered);
  };

  return (
    <>
      <NavBar />
      <div className="flex mt-[15px] filterButtonContainer gap-6">
        {/* <img className="icon" src={filterIcon.src} alt="filter icon" onClick={handleToggleFilters} /> */}
        <Button variant="secondary" className="filterButton" onClick={handleToggleFilters}>
          Filters 
        </Button>
        <Button variant="secondary" className="filterButton" onClick={handleToggleModal}>View Organizations</Button>
      </div>
      {filtersMenuShowing && (
        <div className="filters-overlay">
          <FilterDesign posts={data} donorType="regular" newsFeedFilterPosts={newsFeedFilterPosts} toggle={handleToggleFilters} />
        </div>
      )}
      <Posts posts={filteredPosts} />

      <FullscreenModal
        show={modalShow}
        fullscreen={fullscreen}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

interface Organization extends Record<string, string> {
  key: string;
  name: string;
  reportID: string;
  description: string;
  status: string;
  contactDetails: string;
  address: string;
  governorate: string;
  area: string;
  organizationType: string;
  locationLink: string;
}

function FullscreenModal(props: any) {
  const [organizationData, setOrganizationData] = useState<Organization[]>([
    {
      key: '1',
      name: 'Resala',
      reportID: '98',
      description: 'Organization',
      status: 'Registered',
      contactDetails: 'example@example.com',
      address: '123 Main Street, Cairo, Egypt',
      governorate: 'Cairo',
      area: 'Maadi',
      organizationType: 'School',
      location: "Cairo, Maadi",
      locationLink: 'https://my.atlist.com/map/e41353ff-25de-4fdf-b225-b75ed8d02a01/?share=true'
    },
    {
      key: '2',
      name: '57357',
      reportID: '38',
      description: 'Organization',
      status: 'Registered',
      contactDetails: 'info@57357.com',
      address: '456 Elm Street, Alexandria, Egypt',
      governorate: 'Alexandria',
      area: 'Miami',
      organizationType: 'Hospital',
      location: "Alexandria, Miami",
      locationLink: 'https://my.atlist.com/map/c1e50cf4-3e88-4aab-801a-ef0a0984f9c5/?share=true'
    },
    {
      key: '3',
      name: 'Dar El-Orman',
      reportID: '23',
      description: 'Organization',
      status: 'Registered',
      contactDetails: 'contact@dar-elorman.org',
      address: '78 Abbas El Akaad, Cairo, Egypt',
      governorate: 'Cairo',
      area: 'Nasr City',
      organizationType: 'Orphanage',
      location: "Cairo, Nasr City",
      locationLink: 'https://my.atlist.com/map/7644fced-14bb-40fc-b438-8e337e726d2c/?share=true'
    },
  ]);

  const [filteredData, setFilteredData] = useState<Organization[]>(organizationData);
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const [filtersMenuShowing, setFiltersMenuShowing] = useState<boolean>(false);

  const handleToggleFilters = () => {
    setFiltersMenuShowing(true);
  };

  const handleModalClose = () => {
    setSelectedOrganization(null);
    setIsModalVisible(false);
  };

  const handleViewDetails = (record: Organization) => {
    setSelectedOrganization(record);
    setIsModalVisible(true);
  };
  const handleFilter = (pairs: Filter) => {

    const filtered = organizationData.filter((org) => {
      return Object.entries(pairs.pairs).every(([key, value]) => {
        return org[key].toLowerCase() === value?.toLowerCase();
      });
    });

    setFilteredData(filtered);
    if (filtered.length === 0)
      console.log("no results found");
    console.log(filtered);
  };

  const organizationColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Report ID',
      dataIndex: 'reportID',
      key: 'reportID',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Additional Details',
      key: 'action',
      render: (_: any, record: Organization) => (
        <span>
          <Button variant="primary" onClick={() => handleViewDetails(record)}>View Details</Button>
          <Modal className="z-[20010]"
            title="Additional Details"
            show={isModalVisible}
            onHide={handleModalClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Organization Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className="w-full">
                <tbody>
                  <tr className="flex items-center justify-between">
                    <td>Contact Details:</td>
                    <td>{record.contactDetails}</td>
                  </tr>
                  <tr className="flex items-center justify-between">
                    <td>Address:</td>
                    <td>{record.address}</td>
                  </tr>
                  <tr className="flex items-center justify-between">
                    <td>Organization Type:</td>
                    <td>{record.organizationType}</td>
                  </tr>
                  <tr className="flex items-center justify-between">
                    <td>Location:</td>
                    <td><a href={record.locationLink} target="_blank">{record.location}</a></td>
                  </tr>
                </tbody>
              </table>
            </Modal.Body>
          </Modal>
        </span>
      ),
    },
  ];

  return (
    <>
      <Modal className="z-[20000]" show={props.show} fullscreen={props.fullscreen} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Registered Organizations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="filters-overlay translate-y-6">
            <div className="filterDesignContainer">
              {adminFilter(handleFilter, filtersMenuShowing, setFiltersMenuShowing)}
            </div>
          </div>
          <br/>
          <div>
            <Button variant="secondary" className="mb-5 filterButton" onClick={handleToggleFilters}>
            Filters
            </Button>
          </div>
          <Table columns={organizationColumns} dataSource={filteredData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
