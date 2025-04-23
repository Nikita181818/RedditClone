
import React, { useState } from "react";
import "./TreeView.css";

const TreeNode = ({ node, isLast }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.replies && node.replies.length > 0;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleLineClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent
    console.log(`Line clicked for ${node.user}'s comment`);
    toggleExpanded(); // Trigger expand/collapse on line click
  };

  return (
    <div className={`tree-node ${isLast ? "last-child" : ""}`}>

      <div className="clickable-wrapper">
        <div className="node-label">
          {hasChildren && (
            <span className="arrow" onClick={toggleExpanded}>{expanded ? "▼" : "▶"}</span>
          )}
          <img
            src="https://i.redd.it/snoovatar/avatars/9a1e654c-04af-46f8-b13b-f11a3addf4e4.png"
            alt={node.user}
            className="profile-pic"
          />
          <span className="username">{node.user}</span>: <span className="comment-text">{node.text}</span>
        </div>
        {hasChildren && <div className="curved-line" onClick={handleLineClick}></div>}
      </div>

      {hasChildren && expanded && (
        <div className="children">
          {node.replies.map((reply, index) => (
            <TreeNode
              key={index}
              node={reply}
              isLast={index === node.replies.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      {data.map((node, index) => (
        <TreeNode
          key={index}
          node={node}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};

export default TreeView;
