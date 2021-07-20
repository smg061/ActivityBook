import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

  // check for undefined so typescript doesn't yell at you
  // we're checking for undefined in activitydashboard before rendering this form with {selectedActivity && } but typescript doesn't get that
  if (!activity) return <LoadingComponents />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic onClick={() => openForm(activity.id)} color="blue" content="Edit" />
          <Button basic onClick={cancelSelectedActivity} color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
