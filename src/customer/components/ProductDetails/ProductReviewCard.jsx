import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = React.useState(4.5);
  const createdAt = new Date(item.createdAt);
  const formattedDate = createdAt.toLocaleDateString(); // Преобразование только даты
  const formattedTime = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Преобразование только времени
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item.user.firstName}
              src=""
            >
              {item.user.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user.firstName}</p>
              <p className="font-semibold text-sm">Created At: {formattedDateTime}</p>
            </div>
            <div>


              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />

            </div>
            <p>
              {item.review}
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard