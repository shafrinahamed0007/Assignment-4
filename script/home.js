let totalJob = [];
let totalSelectedInterview = [];
let totalRejectedInterview = [];

const total = document.getElementById("totalCount");
const totalInterview = document.getElementById("interview-count");
const totalRejected = document.getElementById("rejected-count");

const totalJobs = document.getElementById("card");

function calculateTotal() {
  total.innerText = totalJobs.children.length;
}

calculateTotal();
