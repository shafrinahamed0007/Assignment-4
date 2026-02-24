1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById ব্যবহার‍ করা হয় যখন আমরা নির্দিষ্ট কোনো সেকশন অথবা ইলিমেন্ট খুজে বের করার জন্য। তবে getElementById দিয়ে শুধ একটা ইলিমেন্টই খুজে বের করার জন্য ব্যবহার করা হয়।
getElementsByClassName ব্যবহার করা হয় যখন একই নামের ক্লাসের অনেক গুলো সেকশন অথবা ইলিমেন্ট খুজে বের করার জন্য। querySelector অনেকটা getElementById এর মতো কাজ করে, এটা অনেক জটিল কাজ করতে পারে, সব ধরনের element ধরার জন্য আলাদা আলাদা মেথড ব্যবহার না করে শুধু ১টি মেথড দিয়ে সব কাজ করা যায়।

querySelectorAll অনেকটা getElementsByClassName এর মতো কাজ করে, এটি দিয়ে CSS-এর যেকোনো জটিল শর্ত ব্যবহার করে একসাথে অনেকগুলো এলিমেন্ট খুঁজে বের করা যায়। আলাদা আলাদা মেথড ব্যবহার না করে শুধু এই ১টি মেথড দিয়েই সব ধরনের এলিমেন্টের তালিকা তৈরি করে সেগুলোর ওপর লুপ চালানো যায়।

2. How do you create and insert a new element into the DOM? 
Ans: আমরা DOM তৈরি এবং ইনসার্ট করার জন্য কয়েকটি দাপ অনুসরন করিঃ ১। document.createElement("tag") ব্যবহার করে ব্যবহার করে একটি নতুন এলিমেন্ট তৈরি করি। ২। innerText বা .innerHTML দিয়ে তাতে প্রয়োজনীয় লেখা বা কন্টেন্ট যোগ করি। ৩। আর আমাদের প্রয়োজন হলে .style / .classList দিয়ে নতুন এলিমেন্টটি ডিজাইন করতে পারি । ৪। সব কিছু হয়ে গেলে এলিমেন্টকে appendChild() দিয়ে container এর ভেতরে পুশ করতে পারি।

3. What is Event Bubbling? And how does it work? 

Ans: Event Bubbling হলো DOM এর একটি গুরুত্বপূর্ণ ইভেন্ট প্রক্রিয়া। যখন কোনো child element-এ ইভেন্ট ঘটে (যেমন click), তখন ইভেন্টটি প্রথমে সেই element-এ কাজ করে এবং তারপর ধাপে ধাপে তার parent element গুলোর দিকে উপরে উঠতে থাকে। সর্বশেষ এটি document বা body পর্যন্ত পৌঁছাতে পারে। উদাহরণস্বরূপ, যদি একটি button একটি div এর ভিতরে থাকে এবং সেই বাটনে click করা হয়, তাহলে প্রথমে button এর click event চলবে, তারপর div এর event চলবে। এই নিচ থেকে উপরের দিকে ইভেন্ট যাওয়ার প্রক্রিয়াকেই Event Bubbling বলা হয়। যদি আমরা চাই ইভেন্টটি parent element-এ না যাক, তাহলে event.stopPropagation() মেথড ব্যবহার করে bubbling বন্ধ করা যায়।

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation হলো এমন একটি পদ্ধতি যেখানে প্রতিটি child element-এ আলাদা করে event না দিয়ে, তাদের parent element-এ একবারেই event listener যোগ করা হয়। এরপর event.target ব্যবহার করে বোঝা যায় কোন child element-এ ইভেন্ট ঘটেছে। এটি useful কারণ এতে performance ভালো থাকে, memory কম লাগে এবং পরে নতুন element যোগ করলেও আলাদা করে event যোগ করতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods? 
Ans: preventDefault() কোনো element-এর default কাজ (যেমন link খোলা বা form submit) বন্ধ করে। stopPropagation() ইভেন্টকে parent element-এ উপরে উঠতে দেয় না, অর্থাৎ bubbling বন্ধ করে। আমরা যদি সহজ বাংলায় বলি preventDefault() = default action বন্ধ, আর stopPropagation() = event উপরে যাওয়া বন্ধ