
import React, { useState } from "react";
import "./TreeView.css";

const TreeNode = ({ node, isLast }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.replies && node.replies.length > 0;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`tree-node ${isLast ? "last-child" : ""}`}>
      <div className="clickable-wrapper" onClick={toggleExpanded}>
        <div className="node-label">
          {hasChildren && <span className="arrow">{expanded ? "▼" : "▶"}</span>}
          <span className="username">{node.user}</span>: {node.text}
        </div>
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


