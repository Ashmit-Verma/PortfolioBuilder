import "./Portfoliocard.css";
import React, { useState, useEffect } from "react";

const PortfolioCard = ({ portfolio, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(portfolio.title);
  const [editedDescription, setEditedDescription] = useState(
    portfolio.description
  );
  const [dateCreated, setDateCreated] = useState(null);
  const [dateLastModified, setDateLastModified] = useState(null);

  useEffect(() => {
    setDateCreated(new Date());
    setDateLastModified(new Date());
  }, []);

  const handleSaveEdit = () => {
    onEdit(portfolio.id, editedTitle, editedDescription);
    setDateLastModified(new Date());
    setIsEditing(false);
  };

  const formatDate = (date) => {
    return date ? date.toISOString().split("T")[0] : "";
  };

  return (
    <div className="portfolio-card">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="portfolio-actions">
        {isEditing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={onDelete}>
          <i class="fa fa-trash"></i>
        </button>
      </div>
      <div className="card">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            <div className="Date">
              <p>Date Created: {formatDate(dateCreated)}</p>
              <p>Last Modified: {formatDate(dateLastModified)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
