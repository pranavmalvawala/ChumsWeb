import { Icon, Box } from "@mui/material";
import React from "react";

interface Props { icon: string, title: string, content: string }

export const HomeFeature: React.FC<Props> = (props) => (
  <div className="homeFeature">
    <Box sx={{width: "60px", height: "60px", borderRadius: "50%", border: "3px solid #03a9f4", display: "flex", alignItems: "center", justifyContent: "center"}} m="5px auto">
      <Icon color="success" sx={{fontSize: "30px"}}>{props.icon}</Icon>
    </Box>
    <div className="feature">{props.title}</div>
    <div>{props.content}</div>
  </div>
)
