let totalJob = [];
let totalSelectedInterview = [];
let totalRejectedInterview = [];

const total = document.getElementById("totalCount");
const totalInterview = document.getElementById("interview-count");
const totalRejected = document.getElementById("rejected-count");
const totalJobs = document.getElementById("totalJobs");
const filterSection = document.getElementById("filtered-section");

// console.log(totalSelectedInterview.length, totalRejectedInterview.length);

const addCards = document.getElementById("allCard");
const mainContainer = document.querySelector("main");

// Actionable Toggle Button
const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");

// total Count
function totalCalculate() {
  const container = document.getElementById("allCard");
  const actualCards = container.querySelectorAll(".card-design").length;

  total.innerText = actualCards;

  if (!addCards.classList.contains("hidden")) {
    totalJobs.innerText = `${actualCards} jobs`;
  }

  updateEmptyStatus();
}

// interview & rejected count
function interviewSelectedAndRejectedCount() {
  totalInterview.innerText = totalSelectedInterview.length;
  totalRejected.innerText = totalRejectedInterview.length;

  const totalAvailable = addCards.querySelectorAll(".card-design").length;

  // Available count show in page-wise

  if (!addCards.classList.contains("hidden")) {
    totalJobs.innerText = `${totalAvailable} jobs`;
  } else if (btnInterview.classList.contains("bg-[#3b82f6]")) {
    totalJobs.innerText = `${totalSelectedInterview.length}/${totalAvailable} jobs`;
  } else if (btnRejected.classList.contains("bg-[#3b82f6]")) {
    totalJobs.innerText = `${totalRejectedInterview.length}/${totalAvailable} jobs`;
  }
}

totalCalculate();
interviewSelectedAndRejectedCount();

// toggle button function
function toggleStyle(id) {
  // remove bg color & text color
  btnAll.classList.remove("bg-[#3B82F6]", "text-white");
  btnInterview.classList.remove("bg-white", "text-white", "bg-[#3b82f6]");
  btnRejected.classList.remove("bg-white", "text-white", "bg-[#3b82f6]");

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
    filterSection.classList.add("hidden");
  }

  // clicked Interview Button
  if (id == "btn-interview") {
    addCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    selectedView();
  }

  // clicked Rejected Button
  if (id == "btn-rejected") {
    addCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    rejectedView();
  }

  interviewSelectedAndRejectedCount();
}

mainContainer.addEventListener("click", function (event) {
  const parentCardDiv = event.target.closest(".card-design");
  if (!parentCardDiv) return;

  // card info
  const title = parentCardDiv.querySelector(".title").innerText;
  const position = parentCardDiv.querySelector(".position").innerText;
  const jobInfo = parentCardDiv.querySelector(".jobInfo").innerText;
  const jobDetails = parentCardDiv.querySelector(".jobDetails").innerText;

  // console.log(title, position, jobStatus, jobInfo, jobDetails);

  if (event.target.classList.contains("interview-btn")) {
    const cardInfo = {
      title,
      position,
      jobStatus: "SELECTED",
      jobInfo,
      jobDetails,
    };

    if (!totalSelectedInterview.find((item) => item.title === title)) {
      totalSelectedInterview.push(cardInfo);
      totalRejectedInterview = totalRejectedInterview.filter(
        (item) => item.title !== title,
      );
    }

    parentCardDiv.querySelector(".jobStatus").innerText = "Selected";
    const jobTitleTag = parentCardDiv.querySelector(".jobStatus");
    parentCardDiv.classList.remove("border-gray-100", "border-red-600");
    parentCardDiv.classList.add("border-l-4", "border-green-600");
    jobTitleTag.className =
      "jobStatus border border-green-600 text-green-600 text-[14px] font-semibold py-2 px-3 rounded uppercase tracking-wider";

    refreshView();
  } else if (event.target.classList.contains("rejected-btn")) {
    const cardInfo = {
      title,
      position,
      jobStatus: "REJECTED",
      jobInfo,
      jobDetails,
    };

    if (!totalRejectedInterview.find((item) => item.title === title)) {
      totalRejectedInterview.push(cardInfo);
      totalSelectedInterview = totalSelectedInterview.filter(
        (item) => item.title !== title,
      );
    }

    parentCardDiv.querySelector(".jobStatus").innerText = "Rejected";
    const jobTitleTag = parentCardDiv.querySelector(".jobStatus");
    parentCardDiv.classList.remove("border-gray-100", "border-green-600");
    parentCardDiv.classList.add("border-l-4", "border-red-600");
    jobTitleTag.className =
      "jobStatus border border-red-600 text-red-600 text-[14px] font-semibold py-2 px-3 rounded uppercase tracking-wider";

    refreshView();
  } else if (event.target.closest(".deleteBtn")) {
    parentCardDiv.remove();
    totalSelectedInterview = totalSelectedInterview.filter(
      (item) => item.title !== title,
    );
    totalRejectedInterview = totalRejectedInterview.filter(
      (item) => item.title !== title,
    );

    refreshView();
  }
});

function refreshView() {
  totalCalculate();
  if (!filterSection.classList.contains("hidden")) {
    if (btnInterview.classList.contains("bg-[#3b82f6]")) selectedView();
    else if (btnRejected.classList.contains("bg-[#3b82f6]")) rejectedView();
  }
  interviewSelectedAndRejectedCount();
}

function getEmptyMessage(text) {
  return `
    <div id="empty-message" class="flex flex-col items-center justify-center py-20 w-full col-span-full text-center">
        <div class="mb-4 p-6 bg-blue-50 rounded-full inline-block">
            <i class="fa-solid fa-file-lines text-6xl" style="color: rgb(116, 192, 252);"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-700 mb-2">${text}</h2>
        <p class="text-gray-500 max-w-sm mx-auto">Check back soon for new job opportunities</p>
    </div>`;
}

function updateEmptyStatus() {
  const container = document.getElementById("allCard");
  const hasCards = container.querySelector(".card-design") !== null;
  if (!hasCards) {
    container.innerHTML = getEmptyMessage("No jobs available");
  } else {
    const msg = document.getElementById("empty-message");
    if (msg) msg.remove();
  }
}

// Selected interview view
function selectedView() {
  filterSection.innerHTML = "";
  if (totalSelectedInterview.length === 0) {
    filterSection.innerHTML = getEmptyMessage("No interview selected");
  } else {
    totalSelectedInterview.forEach((job) => selectedAndRejectedCard(job, "green"));
  }
}

// Rejected interview view
function rejectedView() {
  filterSection.innerHTML = "";
  if (totalRejectedInterview.length === 0) {
    filterSection.innerHTML = getEmptyMessage("No rejected jobs");
  } else {
    totalRejectedInterview.forEach((job) => selectedAndRejectedCard(job, "red"));
  }
}

function selectedAndRejectedCard(job, color) {
  let div = document.createElement("div");
  div.className = "mt-4";
  let borderColor, textColor;

  if (color === "green") {
    borderColor = "border-green-600";
    textColor = "text-green-600";
  } else {
    borderColor = "border-red-600";
    textColor = "text-red-600";
  }

  div.innerHTML = `
        <div class="card-design card w-full bg-base-100 shadow-sm border-l-4 ${borderColor} p-6 rounded-lg relative mb-4">
            <button class="deleteBtn absolute right-4 top-4 w-10 h-10 bg-gray-100 hover:bg-gray-300 rounded-2xl">
                <i class="fa-solid fa-trash-can text-lg transition-colors"></i>
            </button>
            <div class="mb-2">
                <h2 class="title text-2xl font-bold text-[#1e3a8a]">${job.title}</h2>
                <p class="position text-gray-400 font-normal mt-1 text-[14px]">${job.position}</p>
            </div>
            <div class="jobInfo flex gap-2 text-gray-400 text-sm mb-4">${job.jobInfo}</div>
            <div class="mb-4">
                <span class="jobStatus border ${borderColor} ${textColor} text-[14px] font-semibold py-2 px-3 rounded uppercase tracking-wider">
                    ${job.jobStatus}
                </span>
            </div>
            <p class="jobDetails text-gray-700 text-sm mb-6 max-w-3xl">${job.jobDetails}</p>
            <div class="flex gap-2">
                <button class="interview-btn btn btn-outline btn-success btn-sm px-5 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline btn-error btn-sm px-5 border-[#f87171] text-[#f87171] hover:bg-[#f87171]">REJECTED</button>
            </div>
        </div>`;
  filterSection.appendChild(div);
}
