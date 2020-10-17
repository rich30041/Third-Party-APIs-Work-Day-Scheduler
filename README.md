# Third-Party-APIs-Work-Day-Scheduler

# Description
GIVEN I am using a daily planner to create a schedule  
WHEN I open the planner  
THEN the current day is displayed at the top of the calendar  
WHEN I scroll down  
THEN I am presented with timeblocks for standard business hours  
WHEN I view the timeblocks for that day  
THEN each timeblock is color coded to indicate whether it is in the past, present, or future  
WHEN I click into a timeblock  
THEN I can enter an event  
WHEN I click the save button for that timeblock  
THEN the text for that event is saved in local storage  
WHEN I refresh the page  
THEN the saved events persist  

# Psuedocode
#First pass  
current day is displayed at the top of page date  
present timeblocks for 9 1 hour windows  
color code each block past, present, future will need to know time to calculate  
click in timeblock and can enter text   
create save button on the right side of each hour to save entry to local storage  

#Second pass 
1 container with 9 rows   
each row has   hour | note		| save button   
use military time for rows 0900 - 1700   
each row is also color coded for time before now | now | later   
each row note field is writable  
each row last field button to save the content of note field to local storage  
refresh page and content still there  
can clear contents of note field and save to remove?  

#Third pass  
function: create date at top of screen  
function: create loop i=9 i < 18 i++  
create row   
create column 1 as hour 0900 - 1800   
create column 2 text area and change color to match past present future colors from css   
create column 3 save button  
combine the columns  
add to container   
get any previous entries from localstorage  
create function to save to localstorage when press save button  

#Fourth pass write code  

# Website
https://rich30041.github.io/Third-Party-APIs-Work-Day-Scheduler/.
