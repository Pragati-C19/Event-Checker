import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';

const DatePicker=(props)=> {
  const [date, setDate] = useState();

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div background-color="white">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
         label={props.userName}
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    </div>
  );
}

export default DatePicker
