import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit : (activity: Activity)=> void;
}
export default function ActivityForm({ activity: selectedActivity , closeForm, createOrEdit }: Props) { 
  // if the selected activity is null, pass a blank activity object
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity)
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target; // gets the event's name and value; ie the field's name and its value in the form
    setActivity({ ...activity, [name]: value }); // spread the current activity object and then add the updated key:value
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {/*very important to add the name and value to each part of the form to be able to track changes  */}
        <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} /> 
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} />
        <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange} />
        <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button floated="right" onClick={closeForm} type="submit" content="Cancel" />
      </Form>
    </Segment>
  );
}
