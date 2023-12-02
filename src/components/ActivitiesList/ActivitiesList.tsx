import React, { ReactElement, useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

import { LocalActivity, CircleOutlined } from "@mui/icons-material";

import styles from "./ActivitiesList.module.css";

export interface Activity {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  category: string;
}

interface ActivitiesListProps {
  activities: Activity[];
}

export default function Activities(props: ActivitiesListProps): ReactElement {
  return (
    <>
      <Container maxWidth="sm">
        <List
          sx={{
            width: "100%",
          }}
        >
          {props.activities.map((activity) => (
            <ListItem
              key={activity.id}
              alignItems="center"
              divider={true}
              sx={{
                margin: 2,
              }}
            >
              <ListItemIcon>
                <LocalActivity fontSize="large" />
              </ListItemIcon>

              <ListItemText
                primary={activity.name}
                secondary={
                  <>
                    <p>{activity.category}</p>
                    <p>{activity.description}</p>
                  </>
                }
                sx={{
                  margin: 1,
                }}
              />
              <ListItemIcon
                sx={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 50,
                  paddingTop: 1,
                  paddingBottom: 1,
                  marginLeft: 1,
                  justifyContent: "center",
                }}
              >
                {activity.voteCount}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
