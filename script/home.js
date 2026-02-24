let totalJob = [];
let totalSelectedInterview = [];
let totalRejectedInterview = [];

const total = document.getElementById("totalCount");
const totalInterview = document.getElementById("interview-count");
const totalRejected = document.getElementById("rejected-count");
const totalJobs = document.getElementById("totalJobs");

// console.log(totalSelectedInterview.length, totalRejectedInterview.length);

const addCards = document.getElementById("allCard");
const mainContainer = document.querySelector("main");

// Actionable Toggle Button
const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");

// total Count
function totalCalculate() {
  total.innerText = addCards.children.length;
  totalJobs.innerText = addCards.children.length;
}

// interview & rejected count
function interviewSelectedAndRejectedCount() {
  const cards = document.getElementsByClassName("card-design");
  let interViewCount = 0;
  let rejectedCount = 0;

  for (let card of cards) {
    const statusJob = card.querySelector(".jobStatus").innerText.toUpperCase();

    if (statusJob == "SELECTED") {
      interViewCount++;
    }

    if (statusJob == "REJECTED") {
      rejectedCount++;
    }
  }

  totalInterview.innerText = interViewCount;
  totalRejected.innerText = rejectedCount;
}

totalCalculate();
interviewSelectedAndRejectedCount();

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

  // clicked All Button
  if (id == "btn-all") {
    addCards.classList.remove("hidden");
  }

  // clicked Interview Button
  if (id == "btn-interview") {
    addCards.classList.add("hidden");
  }

  // clicked Rejected Button
  if (id == "btn-rejected") {
    allcards.classList.add("hidden");
  }

  interviewSelectedAndRejectedCount();
}

mainContainer.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;

  // card info
  const title = parentNode.querySelector(".title").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const jobStatus = parentNode.querySelector(".jobStatus").innerText;
  const jobInfo = parentNode.querySelector(".jobInfo").innerText;
  const jobDetails = parentNode.querySelector(".jobDetails").innerText;

  const parentCardDiv = event.target.closest(".card-design");

  // console.log(title, position, jobStatus, jobInfo, jobDetails);

  if (event.target.classList.contains("interview-btn")) {
    parentNode.querySelector(".jobStatus").innerText = "Selected";
    const jobTitle = parentNode.querySelector(".jobStatus");

    parentCardDiv.classList.remove(
      "border",
      "border-gray-100",
      "border-red-600",
    );
    parentCardDiv.classList.add("border-l-4", "border-green-600");

    jobTitle.classList.remove(
      "bg-[#eef4ff]",
      "text-[#002c5c]",
      "border-red-600",
      "text-red-600",
    );
    jobTitle.classList.add("border", "border-green-600", "text-green-600");

    totalCalculate();
    interviewSelectedAndRejectedCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    parentNode.querySelector(".jobStatus").innerText = "Rejected";
    const jobTitle = parentNode.querySelector(".jobStatus");

    parentCardDiv.classList.remove(
      "border",
      "border-gray-100",
      "border-green-600",
    );
    parentCardDiv.classList.add("border-l-4", "border-red-600");

    jobTitle.classList.remove(
      "bg-[#eef4ff]",
      "text-[#002c5c]",
      "border-green-600",
      "text-green-600",
    );

    jobTitle.classList.add("border", "border-red-600", "text-red-600");
    totalCalculate();
    interviewSelectedAndRejectedCount();
  } else if (event.target.closest(".deleteBtn")) {
    parentNode.remove();
    totalCalculate();
    interviewSelectedAndRejectedCount();
  }
});

// empty card show
function showEmptyCard(count){
  let emptyMsg = document.get
}
