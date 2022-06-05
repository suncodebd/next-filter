import Image from 'next/image';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const projectCard = ({ project: { name, image, website } }) => (
    <div className="projectCard">
        <div className="cardWrapper">
            <div className="CardImage">
                <Image className="CardImg" height="150" width="300" src={image} alt={name} />
            </div>
            <h6 className="cardTitle">{name}</h6>
            <div className="view">
                <a href={website} target="_blank" rel="noreferrer">
                    View <AiOutlineEye />
                </a>
            </div>
        </div>
    </div>
);

export default projectCard;
