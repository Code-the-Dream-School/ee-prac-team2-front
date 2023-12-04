import React from "react";

// Define the type for the props
interface AuthenticatedContentProps {
  username: string;
  email: string;
  
}

// Use the defined type for the props
const AuthenticatedContent: React.FC<AuthenticatedContentProps> = ({
  username,
  email,
}) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Email: {email}</p>
      <p>This is your personalized content for authenticated users.</p>
      {/* Add additional content or functionality for authenticated users */}
    </div>
  );
};

export default AuthenticatedContent;
