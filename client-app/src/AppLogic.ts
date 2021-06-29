import { useState, useEffect } from "react";
import axios from "axios";


const Activities:  any = () => {
  const [activities, setActivities] = useState([]);
  const updateActivities = () => {
    useEffect(() => {
      axios.get("http://localhost:5000/api/activities", {}).then((response) => {
        setActivities(response.data);
      });
    }, []);
  };

  return { activities, updateActivities };
};

export default Activities;