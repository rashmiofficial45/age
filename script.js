var enteredDate=document.querySelector("#age");
var btn=document.querySelector(".btn");
var res=document.querySelector(".result");

enteredDate.max = new Date().toISOString().split("T")[0];
// enteredDate.setAttribute('max', Date());

btn.addEventListener("click",function calculateAge(birthDate) {
    // Split the birthdate string into an array of year, month, and day
    var birthDate=new Date(enteredDate.value);

    // Get the individual components of the birthdate
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth() + 1;
    const  birthYear= birthDate.getFullYear();

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    const currentDay = currentDate.getDate();
  
    // Calculate the age
    let ageInYears = currentYear - birthYear;
    // console.log(`The person's age is: ${ageInYears}`);
  
    // Adjust the age based on the current month and day compared to the birthdate
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    // return age;
    // Calculate the difference in months
  let ageInMonths = currentMonth - birthMonth;
  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  // Calculate the difference in days
  let ageInDays = currentDay - birthDay;
  if (ageInDays < 0) {
    const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageInMonths--;
    ageInDays += daysInLastMonth;
  }
//   console.log(`The person's age is: ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`);
  res.innerHTML=`The person's age is: ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`;
  });

  