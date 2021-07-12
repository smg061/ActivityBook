import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  cancelSelectedActivity,
  deleteActivity,
  submitting
}: Props) {

  const [target, setTarget] = useState("");
  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id)
  }
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div> {activity.description}</div>
                <div>
                  {" "}
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
              <Button
                  name={activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)} // here you pass the activity id to setSelectActivity; which does sets the state like this: activities.find(x=> x.id)
                  floated="right"
                  // this ensures that only the clicked button appears as loading
                  loading={submitting && target === activity.id}
                  content="Delete"
                  color="red"
                />
                <Button
                  onClick={() => selectActivity(activity.id)} // here you pass the activity id to setSelectActivity; which does sets the state like this: activities.find(x=> x.id)
                  floated="right"
                  content="View"
                  color="blue"
                />

                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
