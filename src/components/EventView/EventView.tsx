// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import EventVotingWindow from "@components/EventVotingWindow/EventVotingWindow";
// import VotableActivitiesList from "@components/VotableActivitiesList/VotableActivitiesList";
import axios from "axios";
import { useEffect, useState } from "react";

const EventView = ({ eventData, setEventData, isLoading }) => {
  const calculateTimeLeft = (deadline) => {
    // Added 10 extra seconds to the deadline, this is done so that the backend
    // properly updates the data just as a cautionary measure

    const difference = new Date(deadline) - new Date();
    const total = difference;
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(eventData.eventDateTime)
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft(eventData.eventDateTime);
      setTimeLeft(timeLeft);

      if (timeLeft.total <= 0) {
        clearInterval(timerInterval);
        fetchUpdatedEventData();
      }
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [eventData.eventDateTime]);

  const handleVote = async (activityId) => {
    if (timeLeft.total > 0) {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}activities/${activityId}/votes`,
          {},
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setEventData((prevEventState) => {
          const updatedActivities = prevEventState.activities.map((activity) =>
            activity._id === response.data.activity._id
              ? response.data.activity
              : activity
          );
          return {
            ...prevEventState,
            activities: updatedActivities,
          };
        });
      } catch (error) {
        console.error("Error voting:", error);
      }
    } else {
      console.log("Voting deadline has passed. Voting is disabled.");
    }
  };

  const fetchUpdatedEventData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}events/${eventData._id}`,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const updatedEventData = response.data;

      setEventData(updatedEventData);
    } catch (error) {
      console.error("Error fetching updated event data:", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{eventData.name}</h3>
          <p>Host: {eventData.host.name}</p>
          <p>
            Date and Time: {new Date(eventData.eventDateTime).toLocaleString()}
          </p>
          {timeLeft.total > 0 ? (
            <p>
              Time left until voting ends: {timeLeft.days} days,{" "}
              {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
              {timeLeft.seconds} seconds
            </p>
          ) : (
            <p>Voting has ended.</p>
          )}
          <p>Description: {eventData.description}</p>
          <p>
            Participants:{" "}
            {eventData.participants
              .map((participant) => participant.name)
              .join(", ")}
          </p>
          {eventData.chosenActivity && (
            <>
              <h4>Chosen Activity</h4>
              <p>{eventData.chosenActivity.activity}</p>
            </>
          )}
          <h4>Activities</h4>
          <ul>
            {eventData.activities.map((activity) => (
              <li key={activity._id}>
                {activity.activity} - Votes: {activity.votes.length}
                <button
                  disabled={timeLeft.total <= 0}
                  onClick={() => handleVote(activity._id)}
                >
                  Vote
                </button>
              </li>
            ))}
          </ul>

          {/* <EventVotingWindow />
          <VotableActivitiesList /> */}
        </>
      )}
    </div>
  );
};

export default EventView;
