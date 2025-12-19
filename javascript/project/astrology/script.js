const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  
  const compliments = [
    "You are naturally comforting",
    "People feel safe opening up to you",
    "Your creativity stands out effortlessly",
    "You are funny without even trying",
    "Your ideas are always unique",
    "You are funny without even trying",
    "Your ideas are always unique",
    "You make normal moments feel special",
    "Your presence calms the room",
    "You are lowkey the smartest one in the group",
    "Your honesty is refreshing",
    "You notice details others miss",
    "People admire your strength",
    "Your confidence is inspiring",
    "You bring good energy everywhere",
    "You understand people better than they think",
    "Your kindness always feels genuine",
    "You are stronger than you look",
    "Your intuition is very accurate",
    "You shine when you talk about what you love",
    "You make people feel heard",
    "You carry yourself in a classy way",
    "Your humor is elite",
    "You have a natural leader aura",
    "Your vibe attracts good people",
    "You think differently in a good way",
    "People look up to you more than you know",
    "You are talented even when you doubt yourself",
    "Your smile boosts the mood",
    "You are wise for your age",
    "You are the kind of person people remember",
    "You bring clarity in confusing situations"
  ];
  

  const misunderstoodThings = [
    "People think you are quiet but you are just observing",
    "Some assume you are cold but you protect your peace",
    "People think your honesty is attitude",
    "Your silence gets mistaken for disinterest",
    "People think you are mysterious but you like privacy",
    "Your kindness gets seen as weakness",
    "People think you overthink but you are just careful",
    "Your loyalty gets taken for granted sometimes",
    "Some think you are distant but you are just tired",
    "People misjudge your confidence as arrogance",
    "Your independence makes people think you do not need anyone",
    "People think you are dramatic but you are expressive",
    "Your humor gets misunderstood",
    "Some think you are intimidating but you are soft inside",
    "People think you are carefree but you care a lot",
    "Your emotions get misread because you do not show them much",
    "Some think you are stubborn but you are determined",
    "People think you are unpredictable but you are spontaneous",
    "Your calmness gets mistaken for indifference",
    "People misread your directness as rudeness",
    "Your self protection gets misunderstood as ego",
    "People think you are picky but you know your worth",
    "Your ambition scares some people",
    "People think you do not listen but you are analyzing",
    "Some mistake your standards for demands",
    "Your jokes sometimes confuse people",
    "People think you have no emotions but you are sensitive",
    "Your confidence makes insecure people uncomfortable",
    "People misread your boundaries as distance",
    "Some assume you are complicated but you are just deep"
  ];
  

  const suggestions = [
    "Trust your intuition",
    "Take small breaks to stay strong",
    "Keep your circle meaningful",
    "Do not rush things that grow slowly",
    "Stay consistent even when motivation drops",
    "Celebrate small wins",
    "Protect your peace",
    "Try something new this month",
    "Keep expressing your ideas",
    "Be kind to yourself",
    "Focus on quality friendships",
    "Set boundaries without guilt",
    "Let go of what drains you",
    "Speak gently to yourself",
    "Keep a journal to stay balanced",
    "Spend time with people who uplift you",
    "Say no when you need to",
    "Stay curious",
    "Show your talents confidently",
    "Trust your personal timing",
    "Work quietly and let results show",
    "Be patient with your growth",
    "Take a healthy challenge",
    "Stay humble but do not downplay yourself",
    "Take care of your mental space",
    "Laugh more",
    "Listen to what your body tells you",
    "Keep learning new things",
    "Stay true to who you are",
    "Let yourself rest without guilt"
  ];
  
  const futureCareers = [
    "Successful entrepreneur with your own company",
    "Top software engineer who builds amazing apps",
    "Creative inventor who designs something new for the world",
    "Well known doctor who helps many people",
    "Skilled scientist who discovers something important",
    "Talented designer who creates beautiful things",
    "Famous writer who inspires millions with your words",
    "Influential public speaker who motivates people",
    "Respected teacher who helps many students grow",
    "Professional artist with a unique style",
    "Successful filmmaker who tells powerful stories",
    "Smart engineer who builds future technologies",
    "Creative game developer who makes popular games",
    "Business leader who manages teams and ideas",
    "Influential community leader who helps others",
    "Health expert who supports people in living better lives",
    "Architect who designs modern and meaningful spaces",
    "Researcher who solves real world problems",
    "Environmental protector who works for the planet",
    "Financial expert who helps people manage money wisely",
    "Humanitarian who makes a positive impact",
    "Creative content creator with a strong audience",
    "Skilled musician who inspires through sound",
    "AI specialist who helps shape the future of tech",
    "Cyber security expert who protects digital systems",
    "Psychologist who understands and helps people",
    "Entrepreneur who builds multiple successful projects",
    "Space technology innovator who works on future missions",
    "Respected medical professional in a specialty field",
    "Global problem solver who brings new ideas to the world"
  ];
  
  let form = document.getElementById("astroForm");

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    
    const text = `Hi, ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}
    . ${compliments[day-1]}. ${misunderstoodThings[year%30]}.
    ${suggestions[(day*month)%30]}. In future you can be  ${futureCareers[(name.length * surname.length)%30]}`;

    document.getElementById("result").textContent = text;
    
    form.reset();
  })