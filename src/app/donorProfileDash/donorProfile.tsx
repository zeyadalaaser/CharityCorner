import React, { useEffect, useState } from 'react';
import './profile.css';
import jsonData from '@/data/egypt.json';

// Now you can access the imported JSON data
console.log(jsonData);





interface Post {
  title: string;
  content: string;
  author: string;
}

const Profile: React.FC = () => {
  const [image, setImage] = useState<string>('https://via.placeholder.com/150');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [mapLocation, setMapLocation] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [donorType, setDonorType] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [savedFirstName, setSavedFirstName] = useState<string>('');
  const [savedLastName, setSavedLastName] = useState<string>('');
  const [savedEmail, setSavedEmail] = useState<string>('');
  
 
  
  // const [showRequests, setShowRequests] = useState(false);
  // const [selectedRequest, setSelectedRequest] = useState('');
  // const [requests, setRequests] = useState(['Request 1', 'Request 2', 'Request 3']);
  // Options for dropdowns
  const genderOptions: string[] = ['Male', 'Female'];
  
  const donorTypeOptions: string[] = ['Doctor', 'Teacher', 'Regular'];

  useEffect(() => {
    // Populate dropdowns with data from jsonData on component mount
    if (jsonData) {
      const governorates = Object.keys(jsonData);
      if (governorates.length > 0) {
        setSelectedGovernorate(governorates[0]); // Select the first governorate by default
        setSelectedArea((jsonData as { [key: string]: string[] })[governorates[0]][0]); // Select the first area of the first governorate by default
      }
    }
  }, []);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save the edited profile data to the state
    setSavedFirstName(firstName);
    setSavedLastName(lastName);
    setSavedEmail(email);

    console.log("Profile Saved");
    handleCloseForm(); // Close the edit profile form after submission
  };

  const handleDeleteProfile = () => {
    // Clear all state values
    setImage('https://via.placeholder.com/150');
    setFirstName('');
    setLastName('');
    setGender('');
    setSelectedArea('');
    setSelectedGovernorate('');
    setBirthdate('');
    setPhoneNumber('');
    setAddress('');
    setMapLocation({ lat: 0, lng: 0 });
    setEmail('');
    setDonorType('');
    setSearchTerm('');

    // Clear saved profile data
    setSavedFirstName('');
    setSavedLastName('');
    setSavedEmail('');

    console.log("Profile deleted.");
    handleCloseForm(); // Close the edit profile form after deletion
  };

  
  // Sample posts data
  const posts: Post[] = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: 'John Doe',
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      author: 'Jane Smith',
    },
  ];

  // Filter posts based on search term
  const filteredPosts: Post[] = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="profile">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-body">
        <div className="profile-image">
          <img src={image} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className="profile-info">
          {savedFirstName && savedLastName && savedEmail && (
            <div className="saved-info">

            </div>
          )}
          <button className="edit-button" onClick={handleEditProfile}>Edit Profile</button>
        </div>
      </div>
      {isEditing && (
        <div className="edit-profile-form">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSaveProfile}>
            {/* Your form fields */}
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              pattern="[A-Za-z]+"
              title="Please enter a valid first name"
            />
            {!firstName && <p className="required-message">This field is required</p>}

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              pattern="[A-Za-z]+"
              title="Please enter a valid last name"
            />
            {!lastName && <p className="required-message">This field is required</p>}

            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              {genderOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {!gender && <p className="required-message">This field is required</p>}

            <label htmlFor="governorate">Governorate in Egypt:</label>
            <select
  id="governorate"
  name="governorate"
  value={selectedGovernorate}
  onChange={(e) => setSelectedGovernorate(e.target.value)}
  required
>
  <option value="">Select Governorate</option>
  {Object.keys(jsonData).map((governorate) => (
    <option key={governorate} value={governorate}>{governorate}</option>
  ))}
</select>
            {!selectedGovernorate && <p className="required-message">This field is required</p>}

            <label htmlFor="area">Area in Egypt:</label>
            <select
  id="area"
  name="area"
  value={selectedArea}
  onChange={(e) => setSelectedArea(e.target.value)}
  required
>
  <option value="">Select Area</option>
  {(jsonData as { [key: string]: string[] })[selectedGovernorate]?.map((area) => (
    <option key={area} value={area}>{area}</option>
  ))}
</select>
            {!selectedArea && <p className="required-message">This field is required</p>}

            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            {!birthdate && <p className="required-message">This field is required</p>}

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
            {!phoneNumber && <p className="required-message">This field is required</p>}

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {!address && <p className="required-message">This field is required</p>}


            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!email && <p className="required-message">This field is required</p>}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              title="Password must be at least 8 characters long"
            />
            {!password && <p className="required-message">This field is required</p>}

            <label htmlFor="donorType">Donor Type:</label>
            <select
              id="donorType"
              name="donorType"
              value={donorType}
              onChange={(e) => setDonorType(e.target.value)}
              required
            >
              <option value="">Select Donor Type</option>
              {donorTypeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {!donorType && <p className="required-message">This field is required</p>}

            {/* Search bar for posts */}
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Posts section */}
            <div className="posts-section">
              <h2>Posts</h2>
              {filteredPosts.map((post, index) => (
                <div className="post" key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <p>Author: {post.author}</p>
                </div>
              ))}
            </div>

            <button className="save-button" type="submit">Save</button>
            <button className="delete-button" type="button" onClick={handleDeleteProfile}>Delete</button>
            <button className="cancel-button" type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        </div>
      )}
      {!isEditing && (
        <div className="about-section">
          <h2>About</h2>
          <div>
            <p><strong>First Name:</strong> {savedFirstName}</p>
            <p><strong>Last Name:</strong> {savedLastName}</p>
            <p><strong>Email:</strong> {savedEmail}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Birthdate:</strong> {birthdate}</p>
            <p><strong>Phone Number:</strong> {phoneNumber}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Governorate:</strong> {selectedGovernorate}</p>
            <p><strong>Area:</strong> {selectedArea}</p>
            <p><strong>Donor Type:</strong> {donorType}</p>

          </div>
        </div>
      )}


    </div>
  );
}

export default Profile;
