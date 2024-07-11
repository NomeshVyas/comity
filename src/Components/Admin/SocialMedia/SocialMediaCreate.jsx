import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import {
  grayBorderColor,
  greenColor,
  lightNavyBg,
  navyLogoColor,
  redColor,
} from "../../../Common/constants";
import SocialMediaContext from "../../../context/admin/socialMediaContext";

const SocialMediaCreate = () => {
  const { socialMediaCreate, handleCreate, setSocialMediaCreate } =
    useContext(SocialMediaContext);

  return (
    <FormControl
      onSubmit={handleCreate}
      sx={{
        width: "90%",
        marginInline: "auto",
        borderRadius: 2,
        background: lightNavyBg,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        "& > label": {
          fontSize: 18,
          color: navyLogoColor,
          p: 1,
          background: "white",
          border: `1px solid ${grayBorderColor}`,
          borderRadius: 1,
        },
      }}
    >
      <Typography component="label">
        Add link for new SocialMedia section &rarr;
      </Typography>

      <Typography component="label">Select your type: &rarr;</Typography>
      <RadioGroup
        row
        sx={{
          border: `1px solid ${grayBorderColor}`,
          paddingInline: 2,
          borderRadius: 1,
          background: "white",
        }}
        value={socialMediaCreate?.type}
        onChange={(e) =>
          setSocialMediaCreate({ ...socialMediaCreate, type: e.target.value })
        }
      >
        <FormControlLabel
          value={"facebook"}
          control={
            <Radio
              sx={{
                color: "blue",
                "&.Mui-checked": {
                  color: "blue",
                },
              }}
            />
          }
          label="Facebook"
        />
        <FormControlLabel
          value={"instagram"}
          control={
            <Radio
              sx={{
                color: redColor,
                "&.Mui-checked": {
                  color: redColor,
                },
              }}
            />
          }
          label="Instagram"
        />
        <FormControlLabel
          value={"twitter"}
          control={
            <Radio
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label="Twitter"
        />
      </RadioGroup>

      <TextField
        label="link"
        multiline
        rows={5}
        fullWidth
        sx={{
          background: "white",
        }}
        value={socialMediaCreate?.link}
        onChange={(e) =>
          setSocialMediaCreate({ ...socialMediaCreate, link: e.target.value })
        }
      />

      <Button variant="contained" color="primary" onClick={handleCreate}>
        Create
      </Button>
    </FormControl>
  );
};

export default SocialMediaCreate;
