import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => (
  <div className="border rounded shadow p-4 mb-4 bg-white">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default PostCard;
