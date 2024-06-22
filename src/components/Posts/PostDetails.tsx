import React, { useEffect } from 'react'
import close from '@/assets/closeIcon.png'
import './PostDetails.css'
import CloseButton from 'react-bootstrap/esm/CloseButton';

interface PostDetailsProps {
    requirements: any[]
    onClose: () => void; // Function to close the component
}

const PostDetails: React.FC<PostDetailsProps> = ({ requirements, onClose }) => {
    const capitalizeFirstLetter = (str: string) => {
        // Check if the string has more than one character and contains an uppercase letter
        const upperCaseIndex = str.search(/[A-Z]/);
        
        if (upperCaseIndex !== -1 && upperCaseIndex !== 0) {
          // Insert a space before the uppercase letter
          const firstPart = str.slice(0, upperCaseIndex);
          const secondPart = str.slice(upperCaseIndex);
          return `${firstPart.charAt(0).toUpperCase()}${firstPart.slice(1)} ${secondPart}`;

        } else {
          // Capitalize the first letter of the string
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
      }
    return (
        <div className='detailsContainer'>
            <CloseButton className='closeButton' onClick={onClose} />
            <div className="inline-flex items-center justify-between w-full text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <div className="w-full grid gap-2 text-sm text-gray-500 dark:text-gray-400">
                    {requirements.map((listItem, index: number) => (
                        <>
                            <span style={{ fontWeight: 'bold', color: 'darkgray' }}>Item {index + 1}:</span>
                            {Object.entries(listItem).map(([key, value]) => (
                                <div className="flex items-center justify-between">
                                    <span>{capitalizeFirstLetter(key)}:</span>
                                    <span>{value as string}</span>
                                </div>
                            ))}
                            {(index !== requirements.length - 1 ) && <hr />}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PostDetails;
