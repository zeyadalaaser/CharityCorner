import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import profPic from './profileIconMale.png';
import PostDetails from './PostDetails'; // Import the PostDetails component
import './Post.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleMarker } from '../LocationMarker/GoogleMarker';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/state/store';
import { set } from '@/state/postsSlice';

interface Post {
    id: number;
    type: string;
    organization: string;
    description: string;
    requirements: any[];
}

interface PostProps {
    posts: Post[]
}

export default function Post( {posts} : PostProps) {
    
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter();
    const userType = user.userType;
    const [currentPosts,setCurrentPosts] = useState<Post[]>(posts);
    const [modalShow, setModalShow] = React.useState(false);

    const [detailsVisibility, setDetailsVisibility] = useState<boolean[]>(Array(posts.length).fill(false));
    const [postShowing, setPostShowing] = useState<boolean[]>(Array(posts.length).fill(true));

    // Function to toggle visibility of post details
    const toggleDetailsVisibility = (index: number) => {
        setDetailsVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        });
    };

    const togglePostShowing = (index: number) => {
        setPostShowing(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        });
    };

    useEffect(() => {
        setCurrentPosts(posts);
    }, [posts]);


    const handleDonateNow = (index:number) => {
        if (user !== undefined)
            dispatch(set({key: "donationPost", value: JSON.stringify(currentPosts[index])}));
        
        router.push("/donationForms");
    };

    const handleViewDonations = () => {
        setModalShow(true);
    };

    const handleEdit = (index: number) => {
        if (user !== undefined)
            dispatch(set({key: "editPost", value: JSON.stringify(currentPosts[index])}));

        router.push("/editpost")
    };

    const handleGoToOrgProfile = () => {
        router.push("/organizationProfile")
    }

    return (
        <div className='hi'>
            {currentPosts.map((post, index) => (
                postShowing[index] && (
                    <div key={index} className='postContainer'>
                        <div className='orgDetails'>
                            <div className='orgDetailsContent'>
                                <img src={profPic.src} alt="org pfp" className='orgpfp' onClick={(e) => handleGoToOrgProfile()} />
                                <span className='orgName'>{post.organization}</span>
                            </div>

                            {userType !== "org" && (
                  <div>
                    <button><GoogleMarker/></button>
                    </div>
                )}
                    
                            {userType === "org" && (
                                <div className="flex gap-2">
                                    <Button variant="light" onClick={() => { handleEdit(index) }}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={() => { togglePostShowing(index) }}>Delete</Button>{' '}
                                </div>
                            )}
                        </div>
                        <div className='postDesription'>
                            <p>{post.description}</p>
                        </div>
                        {/* see more donor  */}
                        {!detailsVisibility[index] && userType !== "org" && (
                            <div className='see-more-container'>
                                <Button className='see-more-button' variant="primary" onClick={() => toggleDetailsVisibility(index)}>See More</Button>
                            </div>
                        )}

                {/* see more org */}
                {userType === "org" && (
                  <div className="flex justify-center gap-4 py-6">
                    <Button
                      variant="primary"
                      onClick={() => toggleDetailsVisibility(index)}
                    >
                      See More
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleViewDonations()}
                    >
                      View Donations
                    </Button>
                  </div>
                )}

                        {detailsVisibility[index] && (
                            <div className="flex justify-center">
                                <PostDetails requirements={post.requirements} onClose={() => toggleDetailsVisibility(index)} />
                            </div>
                        )}
                        {userType !== "org" && (
                            <div className='donate-button-container'>
                                <Button className='donateNowButton' variant="success" onClick={() => handleDonateNow(index)}>Contribute!</Button>
                            </div>
                        )}
                    </div>
                )
            ))}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setDetailsShowing(false)}
                requirements={}
            /> */}
      </div>
    );
};


function MyVerticallyCenteredModal(props: any) {
    const [contactDetails, setContactDetails] = useState(false);
    const phoneNumber = "+20101002627801";
    const viewContactDetails = () => {
        return (
            <>
                <br />
                <span style={{ fontWeight: 'bold', fontSize: '12px' }}>Phone Number:</span> {phoneNumber}
                <br />
                <span style={{ fontWeight: 'bold', fontSize: '12px' }}>Email:</span> zidanesalma080@gmail.com
                <br />
                <span style={{ fontWeight: 'bold', fontSize: '12px' }}>Address:</span> Cairo, Egypt
            </>
        );
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>Donations</Modal.Title>
            </Modal.Header>
            <hr />

        <Modal.Body>
            <div className="w-100% flex flex-col justify-between items-center gap-1">
                <div className="flex flex-row items-center gap-1">
                    <span style={{fontWeight:'bold', fontSize:'16px'}}>Salma Zidane</span> donated 3 Items!
                </div>
                <Button onClick={()=>setContactDetails(!contactDetails)}>Contact Details</Button>
                {contactDetails && viewContactDetails()}
            </div>
        </Modal.Body>
        <hr/>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {props.onHide(),setContactDetails(false)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

// function EditPostModal() {
//     const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
//     const [fullscreen, setFullscreen] = useState(true);
//     const [show, setShow] = useState(false);
  
//     function handleShow(breakpoint) {
//       setFullscreen(breakpoint);
//       setShow(true);
//     }
  
//     return (
//       <> 
//         {values.map((v, idx) => (
//           <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
//             Full screen
//             {typeof v === 'string' && `below ${v.split('-')[0]}`}
//           </Button>
//         ))}
//         <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {editpost post={pId}}
//           </Modal.Body>
//         </Modal>
//       </>
//     );
//   }