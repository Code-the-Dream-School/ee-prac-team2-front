import React from "react";

interface EventSuccessMessageProps {
  isSuccess: boolean;
  message: string;
  onAddMoreEvents: () => void;
}

const EventSuccessMessage: React.FC<EventSuccessMessageProps> = ({
  isSuccess,
  message,
  onAddMoreEvents,
}) => {
  return (
    <div>
      {isSuccess ? (
        <>
          <p>{message}</p>
          <button onClick={onAddMoreEvents}>Add More Events</button>
          <h2>Current list of activities</h2>
        </>
      ) : (
        <>
          <p>Event failed: {message}</p>
          <button onClick={onAddMoreEvents}>Try Again</button>
        </>
      )}
    </div>
  );
};

export default EventSuccessMessage;
