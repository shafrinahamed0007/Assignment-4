let totalJob = [];
let totalSelectedInterview = [];
let totalRejectedInterview = [];

const total = document.getElementById("totalCount");
const totalInterview = document.getElementById("interview-count");
const totalRejected = document.getElementById("rejected-count");

// Actionable Toggle Button
const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");

const totalJobs = document.getElementById("card");

function totalCalculate() {
  total.innerText = totalJobs.children.length;
}

totalCalculate();

// toggle button function
function toggleStyle(id) {
  // remove bg color & text color
  btnAll.classList.remove("bg-[#3B82F6]", "text-white");
  btnInterview.classList.remove("bg-white", "text-white");
  btnRejected.classList.remove("bg-white", "text-white");

  // add new bg-color and text color
  btnAll.classList.add("bg-white", "text-black");
  btnInterview.classList.add("bg-white", "text-black");
  btnRejected.classList.add("bg-white", "text-black");
 

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-black");
  selectedBtn.classList.add("bg-[#3b82f6]", "text-white");

  


}
