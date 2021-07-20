import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponents from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);


  function handlerCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity)
        .then(() => {
          setActivities([...activities.filter((x) => x.id !== activity.id), activity]);
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity)
        .then(() => {
          setActivities([...activities, { ...activity, id: uuid() }]);
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((x) => x.id !== id)]);
      setSubmitting(false);
      setSelectedActivity(undefined);
    });
  }

  if (activityStore.loadingInitial) return <LoadingComponents content={"Loading App..."} />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7rem" }}>
        <ActivityDashboard
          activities={activityStore.activities}
          createOrEdit={handlerCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default observer(App);
