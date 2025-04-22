import React, { useState } from "react";
import "./TreeView.css";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.replies && node.replies.length > 0;

  return (
    <div className="tree-node">
      <div className="node-label" onClick={() => setExpanded(!expanded)}>
        {hasChildren && (
          <span className="arrow">{expanded ? "➖" : "➕"}</span>
        )}
        <span className="username">{node.user}</span>: {node.text}
      </div>
      {hasChildren && expanded && (
        <div className="children">
          {node.replies.map((reply, index) => (
            <TreeNode key={index} node={reply} />
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
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
