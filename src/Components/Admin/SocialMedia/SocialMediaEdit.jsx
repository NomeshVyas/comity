import React, { useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
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
import { CloseRounded, Stars } from "@mui/icons-material";
import SocialMediaContext from "../../../context/admin/socialMediaContext";

const SocialMediaEdit = () => {
  const {
    openEditModal,
    editSocialMedia,
    setEditSocialMedia,
    closeEditModal,
    handleUpdate,
    handleDeleteInModal,
  } = useContext(SocialMediaContext);

  return (
    <Modal open={openEditModal}>
      <FormControl
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "50%",
          },
          marginInline: "auto",
          borderRadius: 2,
          background: lightNavyBg,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
        <Typography
          variant="h5"
          sx={{
            pb: 2,
            color: navyLogoColor,
            display: "flex",
            alignItems: "center",
            gap: 1,
            position: "relative",
            pr: 4,
          }}
        >
          <Stars />
          Edit and customize as you want &rarr;
          <CloseRounded
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: 30,
              cursor: "pointer",
              color: redColor,
              borderRadius: 2,
              ":hover": {},
            }}
            onClick={closeEditModal}
          />
        </Typography>

        {/* Show this on website page radio button */}
        <Typography component="label">Select your type &rarr;</Typography>
        <RadioGroup
          row
          sx={{
            border: `1px solid ${grayBorderColor}`,
            paddingInline: 2,
            borderRadius: 1,
            background: "white",
          }}
          value={editSocialMedia?.type}
          onChange={(e) =>
            setEditSocialMedia({ ...editSocialMedia, type: e.target.value })
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

        {/* Edit Content Section */}
        <Typography component="label">Edit Content &rarr;</Typography>
        <TextField
          label="Content"
          multiline
          rows={5}
          fullWidth
          sx={{
            background: "white",
          }}
          value={editSocialMedia?.link}
          onChange={(e) =>
            setEditSocialMedia({ ...editSocialMedia, link: e.target.value })
          }
        />

        {/* Button Section */}
        <Box>
          {/* Create Button Section */}
          <Button
            variant="outlined"
            size="large"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              mr: 1,
              background: "white",
            }}
            onClick={() => handleUpdate(editSocialMedia)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="warning"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              ml: 1,
              background: "white",
            }}
            onClick={() => handleDeleteInModal(editSocialMedia._id)}
          >
            Delete
          </Button>
        </Box>
      </FormControl>
    </Modal>
  );
};

export default SocialMediaEdit;
