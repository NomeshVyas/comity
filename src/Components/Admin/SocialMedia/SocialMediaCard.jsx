import React, { useContext } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { greenColor, navyLogoColor, redColor } from "../../../Common/constants";
import SocialMediaContext from "../../../context/admin/socialMediaContext";

const FONT_SIZE = 18;

const SocialMediaCard = ({ socialMedia }) => {
  const { handleDelete, handleEditButton } = useContext(SocialMediaContext);

  return (
    <Card
      sx={{
        width: "90%",
        p: 2,
        "& > article": {
          fontSize: FONT_SIZE,
        },
        "& > button": {
          textTransform: "none",
          marginInline: 1,
          marginTop: 1,
        },
        "& > article > span, & > div > span": {
          fontSize: FONT_SIZE,
          pr: 1,
          fontWeight: 500,
          color: navyLogoColor,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBlock: 2,
          "&  > article": {
            pl: 1,
            fontSize: FONT_SIZE,
          },
        }}
      >
        <Typography component="span">Select your type :</Typography>

        {socialMedia.type == "facebook" ? (
          <Typography
            style={{
              color: "blue",
            }}
          >
            Facebook
          </Typography>
        ) : socialMedia.type == "instagram" ? (
          <Typography
            style={{
              color: "pink",
            }}
          >
            Instagram
          </Typography>
        ) : (
          <Typography
            style={{
              color: "black",
            }}
          >
            Twitter
          </Typography>
        )}
      </Box>

      <Typography>
        <Typography component="span">Link : </Typography>
        {socialMedia?.link}
      </Typography>

      <Button
        size="large"
        variant="outlined"
        onClick={() => handleEditButton(socialMedia)}
      >
        Edit
      </Button>

      <Button
        size="large"
        color="warning"
        variant="outlined"
        onClick={() => handleDelete(socialMedia._id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default SocialMediaCard;
