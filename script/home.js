let totalJob = [];
let totalSelectedInterview = [];
let totalRejectedInterview = [];

const total = document.getElementById("totalCount");
const totalInterview = document.getElementById("interview-count");
const totalRejected = document.getElementById("rejected-count");

const addCards = document.getElementById("card");
const mainContainer = document.querySelector("main");

// Actionable Toggle Button
const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");

function totalCalculate() {
  total.innerText = addCards.children.length;
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

mainContainer.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;

  // card info
  const title = parentNode.querySelector(".title").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const jobStatus = parentNode.querySelector(".jobStatus").innerText;
  const jobInfo = parentNode.querySelector(".jobInfo").innerText;
  const jobDetails = parentNode.querySelector(".jobDetails").innerText;
  // const deleteCard = parentNode.querySelector(".deleteBtn");
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
  } else if (event.target.closest(".deleteBtn")) {
    parentNode.remove();
    totalCalculate();
  }
});
