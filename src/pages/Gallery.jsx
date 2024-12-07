import React, { useState } from 'react';
import { PiCertificate } from "react-icons/pi";
import { GrAchievement } from "react-icons/gr";

const Modal = ({ src, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-white rounded-lg p-4">
                <img src={src} alt="Modal" width={800} className="max-w-full max-h-full" />
                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-3xl text-white">&times;</button>
            </div>
        </div>
    );
};

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imageSrc) => {
        setShowModal(true);
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
        <div className='p-5'>

            <div  data-aos="fade-in" data-aos-duration="1000" className='flex items-center text-blue-500 mb-7 text-2xl' >
                <PiCertificate className='mr-2' />
                <h1 className='  font-semibold '>Certificates</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500" className="flex justify-around gap-10 flex-wrap">
                {certificates.map((image, index) => (
                    <img
                        key={index}
                        src={"./certificates/" + image.src}
                        alt={`Image ${index}`}
                        className="main-image rounded-lg hover:shadow-2xl transition-all cursor-pointer m-2"
                        width={200}
                        onClick={() => openModal("./certificates/" + image.src)}
                    />
                ))}
            </div>
            <div className='flex items-center text-blue-500 mb-7 text-2xl' >
                <GrAchievement className='mr-2' />
                <h1 className='  font-semibold '>Achievements</h1>
            </div>
            <div  className="flex justify-around gap-10 flex-wrap">
                {achievements.map((image, index) => (
                    <img
                    key={index}
                    src={"./certificates/" + image.src}
                    alt={`Image ${index}`}
                    className="main-image hover:shadow-2xl transition-all rounded-lg cursor-pointer m-2"
                    width={200}
                    onClick={() => openModal("./certificates/" + image.src)}
                    />
                ))}
            </div>




            {showModal && <Modal src={modalImage} onClose={closeModal} />}
                </div>
        </>
    );
};

const certificates = [
    { src: 'spm.jpg' },
    { src: 'lcs.jpg' },
    { src: 'gai.png' },
    { src: 'tce.jpg' },
    { src: 'fdh.jpg' },
    { src: 'gui.jpg' },
    { src: 'hsb.jpg' },
    { src: 'hsi.jpg' },
    { src: 'mtf.jpg' },

    // Add more certificates as needed
];

const achievements = [
    { src: 'ashi.jpg' },
    { src: 'ashc.jpg' },
    { src: 'afdi.jpg' },
    { src: 'afdc.jpg' },
    { src: 'amfc.png' },
    { src: 'aric.jpg' },


    // Add more certificates as needed
];

export default Gallery;
