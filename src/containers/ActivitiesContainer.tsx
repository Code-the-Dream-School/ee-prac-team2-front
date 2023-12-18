import ActivitiesList, {
  Activity,
} from "@components/ActivitiesList/ActivitiesList";
import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

const URL = `${import.meta.env.VITE_BACKEND_URL}activities`;

const ActivitiesListContainer: React.FC = (): ReactElement => {
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

  return <ActivitiesList activities={activities} />;
};

export default ActivitiesListContainer;
