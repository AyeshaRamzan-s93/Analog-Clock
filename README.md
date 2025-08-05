#  Analog Clock

This is a simple **analog clock** built using **HTML**, **CSS**, and **JavaScript**. It displays the current local time in a classic analog format, with smoothly rotating hour, minute, and second hands.

---

##  Features

- Real-time updates every second
- Smooth hand movement using rotation
- Responsive and minimal design
- Uses JavaScript's `Date` object to fetch live time from the user's computer

---

##  Core Logic

The main logic behind rotating the clock hands:

- `Date()` is used to get the current time.
- JavaScript extracts:
  - `hours` → 0–23
  - `minutes` → 0–59
  - `seconds` → 0–59
- These are converted to degrees to rotate the hands:
  - **Hour hand**:  
    `hrotation = (hour % 12) * 30 + (minute / 2)`
  - **Minute hand**:  
    `mrotation = minute * 6`
  - **Second hand**:  
    `srotation = second * 6`
- The hands are rotated using CSS `transform: rotate(deg)` every second via `setInterval()`.


