import { Activity } from "@components/ActivitiesList/ActivitiesList";
import styles from "@components/ActivitiesList/ActivitiesList.module.css";
import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

const URL = "http://localhost:8000/api/v1/activities";

const ActivitiesList: React.FC = (): ReactElement => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { activities },
        } = await axios.get(URL);
        setActivities(activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
        if (axios.isAxiosError(error)) {
          return {
            data: "API request failed! Did you remember to `npm run dev` the backend app?",
          };
        }
        return {
          data: "A fetching data error occurred.",
        };
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.activitiesContainer}>
      <h1>Activities</h1>
      <div className={styles.activitiesList}>
        {activities.map((activity) => (
          <div key={activity._id} className={styles.activityItem}>
            <p>Activity Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
            <p>Category: {activity.category}</p>
            <p>Vote Count: {activity.vote.voters?.length ?? 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;
