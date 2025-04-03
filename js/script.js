//variables
const userinput = document.querySelector(".userinput");
const submitname = document.querySelector(".submitname");
const usernametext = document.querySelector(".usernametext");
const userawardtext = document.querySelector(".userawardtext");
const categorypage = document.querySelector(".categorypage");
const quizpage = document.querySelector(".quizpage");
const winpage = document.querySelector(".winpage");
const retrypage = document.querySelector(".retrypage");
const failedpage = document.querySelector(".failedpage");
const Ramayanabutton = document.querySelector(".Ramayanabutton");
const Mahabharatabutton = document.querySelector(".Mahabharatabutton");
const HinduGodsbutton = document.querySelector(".HinduGodsbutton");
const HinduFestivalbutton = document.querySelector(".HinduFestivalbutton");
const Templesbutton = document.querySelector(".Templesbutton");
const clearalldatabutton = document.querySelector(".clearalldatabutton");
const catergorynametext = document.querySelectorAll(".catergorynametext");
const gobackhome = document.querySelectorAll(".gobackhome");
const questionnumbertext = document.querySelector(".questionnumber");
const totalattemptstext = document.querySelector(".totalattempts");
const timetext = document.querySelector(".time");
const questiontext = document.querySelector(".questiontext");
const optiondatatext = document.querySelectorAll(".optiondatatext");
const submitbutton = document.querySelector(".submitbutton");
const nextquestion = document.querySelector(".nextquestion");
const questionmark = document.querySelector(".questionmark");
const finalattempttext = document.querySelector(".finalattempt");
const awardname = document.querySelector(".awardname");
let timer;
let timerleft = 15;
let ramayanaquizattemptLimit = 1;
let mahabharataquizattempLimit = 1;
let hindugodsquizattemptLimit = 1;
let hindufestivalquizattemptLimit = 1;
let templesquizattemptLimit = 1;
let score = 0;
let quizobjindex = 0;

//quiz array objects
const ramayanaquiz = [
  {
    question: "Who was the father of Lord Rama?",
    options: ["Dasaratha", "Janaka", "Bharata", "Krishna"],
    answer: "Dasaratha"
  },
  {
    question: "Who helped Rama in building the bridge to Lanka?",
    options: ["Hanuman", "Jatayu", "Vibhishana", "Nala & Nila"],
    answer: "Nala & Nila"
  },
  {
    question: "What was the name of the golden deer that lured Rama away?",
    options: ["Maricha", "Ravana", "Sugriva", "Jatayu"],
    answer: "Maricha"
  },
  {
    question: "Who was Sita's father?",
    options: ["Dasaratha", "Janaka", "Parashurama", "Vashishta"],
    answer: "Janaka"
  },
  {
    question: "How many years did Lord Rama spend in exile?",
    options: ["10", "12", "14", "16"],
    answer: "14"
  },
  {
    question: "What was Ravana's capital city?",
    options: ["Ayodhya", "Lanka", "Dwarka", "Mathura"],
    answer: "Lanka"
  },
  {
    question: "Who was Lakshmana's wife?",
    options: ["Sita", "Urmila", "Mandodari", "Tara"],
    answer: "Urmila"
  },
  {
    question: "What was the name of Lord Rama's bow?",
    options: ["Pinaka", "Vijaya", "Gandiva", "Kodanda"],
    answer: "Kodanda"
  },
  {
    question: "Who was the demon that tried to swallow Hanuman?",
    options: ["Surasa", "Simhika", "Tataka", "Shurpanakha"],
    answer: "Simhika"
  },
  {
    question: "Who was Ravana's brother who helped Rama?",
    options: ["Kumbhakarna", "Vibhishana", "Indrajit", "Sugriva"],
    answer: "Vibhishana"
  },
];

const mahabharataquiz = [
  {
    question: "Who was the eldest Pandava?",
    options: ["Bhima", "Yudhishthira", "Arjuna", "Nakula"],
    answer: "Yudhishthira"
  },
  {
    question: "What was Arjuna's bow called?",
    options: ["Gandiva", "Vijaya", "Pinaka", "Saranga"],
    answer: "Gandiva"
  },
  {
    question: "Who taught the Kauravas and Pandavas warfare?",
    options: ["Dronacharya", "Kripacharya", "Bhishma", "Vyasa"],
    answer: "Dronacharya"
  },
  {
    question: "Who tried to disrobe Draupadi in the Kaurava court?",
    options: ["Karna", "Shakuni", "Duryodhana", "Dushasana"],
    answer: "Dushasana"
  },
  {
    question: "How many days did the Kurukshetra war last?",
    options: ["16", "18", "20", "21"],
    answer: "18"
  },
  {
    question: "What was Krishna's role in the war?",
    options: ["Archer", "Commander", "Charioteer", "Warrior"],
    answer: "Charioteer"
  },
  {
    question: "Who was the son of Arjuna and Subhadra?",
    options: ["Bhima", "Abhimanyu", "Karna", "Nakula"],
    answer: "Abhimanyu"
  },
  {
    question: "What was the name of Duryodhana's best friend?",
    options: ["Ashwatthama", "Shakuni", "Jayadratha", "Karna"],
    answer: "Karna"
  },
  {
    question: "Who wrote the Mahabharata?",
    options: ["Valmiki", "Ved Vyasa", "Vishwamitra", "Parashurama"],
    answer: "Ved Vyasa"
  },
  {
    question: "What was Bhishma's original name?",
    options: ["Shantanu", "Devavrata", "Chitrangada", "Vichitravirya"],
    answer: "Devavrata"
  },
];

const hindugodsquiz = [
  {
    question: "Who is the Hindu god of destruction?",
    options: ["Vishnu", "Shiva", "Brahma", "Indra"],
    answer: "Shiva"
  },
  {
    question: "Which goddess is worshipped for wisdom?",
    options: ["Lakshmi", "Parvati", "Saraswati", "Kali"],
    answer: "Saraswati"
  },
  {
    question: "Who is considered the remover of obstacles?",
    options: ["Kartikeya", "Hanuman", "Ganesha", "Vishnu"],
    answer: "Ganesha"
  },
  {
    question: "Who holds the Sudarshana Chakra?",
    options: ["Shiva", "Vishnu", "Indra", "Surya"],
    answer: "Vishnu"
  },
  {
    question: "Who is the wife of Lord Shiva?",
    options: ["Saraswati", "Parvati", "Radha", "Lakshmi"],
    answer: "Parvati"
  },
  {
    question: "What is the mount of Goddess Lakshmi?",
    options: ["Elephant", "Owl", "Tiger", "Lion"],
    answer: "Owl"
  },
  {
    question: "Which god is known as the god of fire?",
    options: ["Varuna", "Agni", "Indra", "Vayu"],
    answer: "Agni"
  },
  {
    question: "Who is known as the king of gods?",
    options: ["Brahma", "Indra", "Vishnu", "Surya"],
    answer: "Indra"
  },
  {
    question: "Who narrated the Bhagavad Gita?",
    options: ["Krishna", "Vyasa", "Arjuna", "Bhishma"],
    answer: "Krishna"
  },
  {
    question: "Which demon did Durga defeat?",
    options: ["Mahishasura", "Ravana", "Hiranyakashipu", "Kumbhakarna"],
    answer: "Mahishasura"
  },
];

const hindufestivalquiz = [
  {
    question: "During which festival is Holika Dahan performed?",
    options: ["Diwali", "Holi", "Navratri", "Makar Sankranti"],
    answer: "Holi"
  },
  {
    question: "Which god is worshipped during Maha Shivaratri?",
    options: ["Vishnu", "Shiva", "Brahma", "Krishna"],
    answer: "Shiva"
  },
  {
    question: "Why do people light diyas on Diwali?",
    options: ["To celebrate Lord Krishna's birth", "To mark the end of Durga Puja", "To welcome Lord Rama back to Ayodhya", "To start the new harvest season"],
    answer: "To welcome Lord Rama back to Ayodhya"
  },
  {
    question: "What does Raksha Bandhan celebrate?",
    options: ["Bond between husband and wife", "Bond between brother and sister", "Victory of Lord Krishna", "Worship of the Sun God"],
    answer: "Bond between brother and sister"
  },
  {
    question: "Which festival marks the victory of good over evil and is celebrated by burning effigies of Ravana?",
    options: ["Diwali", "Holi", "Dussehra", "Navratri"],
    answer: "Dussehra"
  },
  {
    question: "Which festival celebrates Krishna's birth?",
    options: ["Navratri", "Janmashtami", "Dussehra", "Diwali"],
    answer: "Janmashtami"
  },
  {
    question: "What is the significance of Chhath Puja?",
    options: ["Worship of the Sun God", "Celebration of Goddess Durga", "Honoring ancestors", "Birth of Lord Rama"],
    answer: "Worship of the Sun God"
  },
  {
    question: "During which festival is the Ganges worshipped?",
    options: ["Diwali", "Makar Sankranti", "Ganga Dussehra", "Navratri"],
    answer: "Ganga Dussehra"
  },
  {
    question: "What is the main ritual of Karva Chauth?",
    options: ["Lighting diyas at night", "Breaking fast after seeing the moon", "Performing a yajna", "Offering sweets to Lord Ganesha"],
    answer: "Breaking fast after seeing the moon"
  },
  {
    question: "Why do people fast on Ekadashi?",
    options: ["To gain strength", "To please Lord Vishnu", "To celebrate Krishna's birthday", "To start the new harvest season"],
    answer: "To please Lord Vishnu"
  },
];

const templesquiz = [
  {
    question: "Where is the Jagannath Temple located?",
    options: ["Uttar Pradesh", "Tamil Nadu", "Odisha", "Maharashtra"],
    answer: "Odisha"
  },
  {
    question: "Where is Kedarnath located?",
    options: ["Himachal Pradesh", "Uttarakhand", "Rajasthan", "Madhya Pradesh"],
    answer: "Uttarakhand"
  },
  {
    question: "Which city is known as the 'City of Temples'?",
    options: ["Varanasi", "Haridwar", "Ayodhya", "Rishikesh"],
    answer: "Varanasi"
  },
  {
    question: "Where is the Rameshwaram temple situated?",
    options: ["Andhra Pradesh", "Tamil Nadu", "Karnataka", "Kerala"],
    answer: "Tamil Nadu"
  },
  {
    question: "Which temple houses one of the 12 Jyotirlingas?",
    options: ["Kamakhya Temple", "Somnath Temple", "Puri Jagannath Temple", "Vaishno Devi Temple"],
    answer: "Somnath Temple"
  },
  {
    question: "Where is the famous Tirupati Balaji temple?",
    options: ["Andhra Pradesh", "Karnataka", "Maharashtra", "Kerala"],
    answer: "Andhra Pradesh"
  },
  {
    question: "In which city is the Kashi Vishwanath temple located?",
    options: ["Haridwar", "Mathura", "Varanasi", "Prayagraj"],
    answer: "Varanasi"
  },
  {
    question: "What is the main event of Puri Rath Yatra?",
    options: ["Procession of Lord Jagannath's chariot", "Worship of Lord Hanuman", "Fire-walking ritual", "Ganges river worship"],
    answer: "Procession of Lord Jagannath's chariot"
  },
  {
    question: "Where is Vaishno Devi Temple?",
    options: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Sikkim"],
    answer: "Jammu & Kashmir"
  },
  {
    question: "What is the significance of Badrinath temple?",
    options: ["It is dedicated to Lord Vishnu", "It is one of the 12 Jyotirlingas", "It is the birthplace of Lord Hanuman", "It is the oldest Hindu temple in India"],
    answer: "It is dedicated to Lord Vishnu"
  },
];

const awards = {
  "Ramayana 🏹👑🔥" : "Bhakta  🙏",
  "Mahabharata ⚔️🌀🐚" : "Sage 🌿‍",
  "Hindu Gods & Goddesses 🙏✨🔱" : "Rishi 🧘",
  "Hindu Festivals & Rituals 🎉🪔📿" : "Maharishi 🔱",
  "Temples & Sacred Places 🛕🌿🪷" : "Enlightened ✨"
}

if (JSON.parse(localStorage.getItem("username")) === null){
  console.log("hello");
  usernamemodal();
} else {
  usernametext.textContent = JSON.parse(localStorage.getItem("username"));
  userawardtext.textContent = JSON.parse(localStorage.getItem("latestuseraward")) || "Aspiring Bhakta 🪔";
  
  Ramayanabutton.textContent = JSON.parse(localStorage.getItem("ramayanabuttontext")) || "🏹 Begin Your Ramayana Quest";
  if (Ramayanabutton.textContent === "Locked" || Ramayanabutton.textContent === "quest completed") {
    Ramayanabutton.disabled = "true";
  }

  Mahabharatabutton.textContent = JSON.parse(localStorage.getItem("mahabharatabuttontext")) || "⚔️ Start Your Mahabharata Journey";
  if (Mahabharatabutton.textContent === "Locked" || Mahabharatabutton.textContent === "quest completed") {
    Mahabharatabutton.disabled = "true";
  }

  HinduGodsbutton.textContent = JSON.parse(localStorage.getItem("hindugodsbuttontext")) || "🙏 Explore the Divine Realm";
  if (HinduGodsbutton.textContent === "Locked" || HinduGodsbutton.textContent === "quest completed") {
    HinduGodsbutton.disabled = "true";
  }

  HinduFestivalbutton.textContent = JSON.parse(localStorage.getItem("hindufestivalbuttontext")) || "🎉 Celebrate & Learn Rituals";
  if (HinduFestivalbutton.textContent === "Locked" || HinduFestivalbutton.textContent === "quest completed") {
    HinduFestivalbutton.disabled = "true";
  }

  Templesbutton.textContent = JSON.parse(localStorage.getItem("templesbuttontext")) || "🛕 Embark on a Sacred Yatra";
  if (Templesbutton.textContent === "Locked" || Templesbutton.textContent === "quest completed") {
    Templesbutton.disabled = "true";
  }

  instructionmodal();
}

function usernamemodal() {
  const modal = document.getElementById("usernamemodal");
  const closeModal = document.querySelector(".close1");
  modal.style.display = "flex";

  closeModal.addEventListener("click", function () {
    if (userinput.value !== ""){
      modal.style.display = "none";
    }
  });

  document.querySelector(".submitname").addEventListener("click", function () {
    if (userinput.value !== "") {
      modal.style.display = "none";
      usernametext.textContent = userinput.value;
      localStorage.setItem("username", JSON.stringify(userinput.value));
      instructionmodal();
    }
  });
}

function instructionmodal() {
  const modal = document.getElementById("guidelinesModal");
  const closeModal = document.querySelector(".close");
  modal.style.display = "flex";

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.getElementById("startQuiz").addEventListener("click", function () {
    modal.style.display = "none";
  });
}

questionmark.addEventListener("click", () => {
  document.getElementById("guidelinesModal").style.display = "flex";
  document.getElementById("startQuiz").style.display = "none";
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("guidelinesModal").style.display = "none";
  });
});

gobackhome.forEach(back => {
  back.addEventListener("click", () => {
    quizpage.style.display = "none";
    categorypage.style.display = "block";
    questionmark.style.display = "flex";
    winpage.style.display = "none";
    retrypage.style.display = "none";
    failedpage.style.display = "none";
  });
});

//category buttons
Ramayanabutton.addEventListener("click", () => {
  score = 0;
  quizobjindex = 0;
  categorypage.style.display = "none";
  quizpage.style.display = "block";
  questionmark.style.display = "none";
  quizlogic("Ramayana 🏹👑🔥", ramayanaquiz, ramayanaquizattemptLimit);
  if (ramayanaquizattemptLimit === 3) {
    finalattempttext.textContent = "Last attempt";
  } else {
    totalattemptstext.textContent = ramayanaquizattemptLimit;
  }
  ramayanaquizattemptLimit++;
  if (ramayanaquizattemptLimit > 3) {
    Ramayanabutton.disabled = "true";
    Ramayanabutton.innerHTML = `<img src="../assets/lock.png" alt="lock" height="30" width="30" style="margin-right: 5px"> Locked`;
    localStorage.setItem("ramayanabuttontext", JSON.stringify("Locked"));
  }
});

Mahabharatabutton.addEventListener("click", () => {
  score = 0;
  quizobjindex = 0;
  categorypage.style.display = "none";
  quizpage.style.display = "block";
  questionmark.style.display = "none";
  quizlogic("Mahabharata ⚔️🌀🐚", mahabharataquiz, mahabharataquizattempLimit);
  if (mahabharataquizattempLimit === 3) {
    finalattempttext.textContent = "Last attempt";
  } else {
    totalattemptstext.textContent = mahabharataquizattempLimit;
  }
  mahabharataquizattempLimit++;
  if (mahabharataquizattempLimit > 3) {
    Mahabharatabutton.disabled = "true";
    Mahabharatabutton.innerHTML = `<img src="../assets/lock.png" alt="lock" height="30" width="30" style="margin-right: 5px"> Locked`;
    localStorage.setItem("mahabharatabuttontext", JSON.stringify("Locked"));
  }
});

HinduGodsbutton.addEventListener("click", () => {
  score = 0;
  quizobjindex = 0;
  categorypage.style.display = "none";
  quizpage.style.display = "block";
  questionmark.style.display = "none";
  quizlogic("Hindu Gods & Goddesses 🙏✨🔱", hindugodsquiz, hindugodsquizattemptLimit);
  if (hindugodsquizattemptLimit === 3) {
    finalattempttext.textContent = "Last attempt";
  } else {
    totalattemptstext.textContent = hindugodsquizattemptLimit;
  }
  hindugodsquizattemptLimit++;
  if (hindugodsquizattemptLimit > 3) {
    HinduGodsbutton.disabled = "true";
    HinduGodsbutton.innerHTML = `<img src="../assets/lock.png" alt="lock" height="30" width="30" style="margin-right: 5px"> Locked`;
    localStorage.setItem("hindugodsbuttontext", JSON.stringify("Locked"));
  }
});

HinduFestivalbutton.addEventListener("click", () => {
  score = 0;
  quizobjindex = 0;
  categorypage.style.display = "none";
  quizpage.style.display = "block";
  questionmark.style.display = "none";
  quizlogic("Hindu Festivals & Rituals 🎉🪔📿", hindufestivalquiz, hindufestivalquizattemptLimit);
  if (hindufestivalquizattemptLimit === 3) {
    finalattempttext.textContent = "Last attempt";
  } else {
    totalattemptstext.textContent = hindufestivalquizattemptLimit;
  }
  hindufestivalquizattemptLimit++;
  if (hindufestivalquizattemptLimit > 3) {
    HinduFestivalbutton.disabled = "true";
    HinduFestivalbutton.innerHTML = `<img src="../assets/lock.png" alt="lock" height="30" width="30" style="margin-right: 5px"> Locked`;
    localStorage.setItem("hindufestivalbuttontext", JSON.stringify("Locked"));
  }
});

Templesbutton.addEventListener("click", () => {
  score = 0;
  quizobjindex = 0;
  categorypage.style.display = "none";
  quizpage.style.display = "block";
  questionmark.style.display = "none";
  quizlogic("Temples & Sacred Places 🛕🌿🪷", templesquiz, templesquizattemptLimit);
  if (templesquizattemptLimit === 3) {
    finalattempttext.textContent = "Last attempt";
  } else {
    totalattemptstext.textContent = templesquizattemptLimit;
  }
  templesquizattemptLimit++;
  if (templesquizattemptLimit > 3) {
    Templesbutton.disabled = "true";
    Templesbutton.innerHTML = `<img src="../assets/lock.png" alt="lock" height="30" width="30" style="margin-right: 5px"> Locked`;
    localStorage.setItem("templesbuttontext", JSON.stringify("Locked"));
  }
});



//quiz logic
function quizlogic(category, quizobj, attemptLimit) {
  nextquestion.style.display = "none";
  submitbutton.style.display = "none";
  let selectedOption = null;
  optiondatatext.forEach(op => {
    op.classList.remove("optionactive");
  });
  catergorynametext.forEach(te => {
    te.textContent = category;
  })
  questionnumbertext.textContent = quizobjindex+1;
  clearInterval(timer);
  timerleft = 20;
  timetext.textContent = timerleft;
  timer = setInterval(() => {
      timerleft--; // Decrement first
      timetext.textContent = timerleft; // Update the UI
      if (timerleft <= 0) {
          clearInterval(timer);
          nextQuestion(category, quizobj, attemptLimit); // Ensure category and quizobj are defined
      }
  }, 1000);

  questiontext.textContent = quizobj[quizobjindex].question;
  quizobj[quizobjindex].options.forEach((element, ind) => {
    optiondatatext[ind].textContent = element;
  });
  optiondatatext.forEach(opt => {
    opt.addEventListener("click", () => {
      optiondatatext.forEach(op => {
        op.classList.remove("optionactive");
      });
      opt.classList.add("optionactive");
      selectedOption = opt.textContent;
      submitbutton.style.display = "block";
    });
  });
  submitbutton.onclick = () => {
    if (selectedOption === quizobj[quizobjindex].answer) {
      score++;
      console.log(`question ${quizobjindex+1} | score: ${score}`);
    }
    if (quizobjindex < 9) {
      nextquestion.style.display = "flex";
    }
    if (quizobjindex === 9) {
      finalPage(category, attemptLimit);
    }
    clearInterval(timer);
  };
  nextquestion.onclick = () => { // Use onclick instead of addEventListener
    nextQuestion(category, quizobj, attemptLimit);
};
}

function nextQuestion(a, b, c) {
  quizobjindex++;
  if (quizobjindex < b.length) {
    quizlogic(a, b, c);
  } else {
    finalPage(a, c);
  }
}

function finalPage(cat, attemptLimit) {
  quizpage.style.display = "none";
  if (score === 10 && attemptLimit <= 4) {
    winpage.style.display = "block";
    continuousConfetti();
    awardname.textContent = awards[cat];
    userawardtext.textContent = awards[cat];
    localStorage.setItem("latestuseraward", JSON.stringify(awards[cat]));
    if (cat === "Ramayana 🏹👑🔥") {
      Ramayanabutton.textContent = "quest completed";
      localStorage.setItem("ramayanabuttontext", JSON.stringify("quest completed"));
      Ramayanabutton.disabled = "true";
    } else if (cat === "Mahabharata ⚔️🌀🐚") {
      Mahabharatabutton.textContent = "quest completed";
      localStorage.setItem("mahabharatabuttontext", JSON.stringify("quest completed"));
      Mahabharatabutton.disabled = "true";
    } else if (cat === "Hindu Gods & Goddesses 🙏✨🔱") {
      HinduGodsbutton.textContent = "quest completed";
      localStorage.setItem("hindugodsbuttontext", JSON.stringify("quest completed"));
      HinduGodsbutton.disabled = "true";
    } else if (cat === "Hindu Festivals & Rituals 🎉🪔📿") {
      HinduFestivalbutton.textContent = "quest completed";
      localStorage.setItem("hindufestivalbuttontext", JSON.stringify("quest completed"));
      HinduFestivalbutton.disabled = "true";
    } else if (cat === "Temples & Sacred Places 🛕🌿🪷") {
      Templesbutton.textContent = "quest completed";
      localStorage.setItem("templesbuttontext", JSON.stringify("quest completed"));
      Templesbutton.disabled = "true";
    }
  } else if (score < 10 && attemptLimit < 3) {
    retrypage.style.display = "block";
  } else if (score < 10 && attemptLimit === 3) {
    failedpage.style.display = "block";
  }
}

function continuousConfetti() {
  var duration = 2 * 1000; // 5 seconds
  var end = Date.now() + duration;

  (function frame() {
      confetti({
          particleCount: 5,
          spread: 60,
          colors: ["#B22222", "#4B2C20", "#F5F5DC", "#228B22"] // Your school colors
      });

      if (Date.now() < end) {
          requestAnimationFrame(frame);
      }
  })();
}


clearalldatabutton.onclick = () => {
  console.log("entered");
  localStorage.clear();
  timerleft = 15;
  ramayanaquizattemptLimit = 1;
  mahabharataquizattempLimit = 1;
  hindugodsquizattemptLimit = 1;
  hindufestivalquizattemptLimit = 1;
  templesquizattemptLimit = 1;
  score = 0;
  quizobjindex = 0;
  window.location.reload();
  usernamemodal();
}