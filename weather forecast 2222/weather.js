// Function to update the date and time display
function updateDateTime() {
    const now = new Date();

    // Get date and time components
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Format the display text
    const datetimeDisplay = `Current Date: ${date}<br>Current Time: ${time}`;

    // Update the content of the 'datetime' element with the formatted display text
    document.getElementById("datetime").innerHTML = datetimeDisplay;
}

// Call the function to update the date and time display immediately
updateDateTime();

// Update the date and time display every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

const targetTimeZone = 1000;
const targetDate = getDateTimeForTimezone("Africa/Nairobi");


const formattedDate = targetDate.toLocaleString("en-KE", { timezone: "Africa/Nairobi" });
console.log(formattedDate);

setInterval(updateTime, 1000);

