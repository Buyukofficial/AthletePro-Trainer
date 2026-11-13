/* ===== AthletePro v2 — App Logic ===== */

/* ---------- DATA ---------- */
const SPORTS = {
  football: {
    title: "Football Training", color: "linear-gradient(135deg,#16a34a,#4ade80)", emoji: "⚽",
    desc: "Match-ready drills for speed, stamina, agility and ball mastery. Train like a 90-minute machine.",
    plans: [
      { name:"Speed & Sprint Power", tag:"Speed", level:"Intermediate", time:"35 min", cal:"380 kcal",
        items:[["Warm-up jog + dynamic stretches","5 min"],["A-skips & B-skips","2 x 20 m"],["Flying 30 m sprints","6 reps"],["Hill sprints","8 x 15 m"],["Cooldown + mobility","5 min"]] },
      { name:"Ball Mastery & Dribbling", tag:"Skills", level:"All levels", time:"40 min", cal:"300 kcal",
        items:[["Toe taps / box touches","3 x 1 min"],["Inside-outside rolls","3 x 1 min"],["Cone weave dribble (close control)","6 laps"],["1v1 shield & turn drills","8 min"],["Weak-foot finishing","10 shots"]] },
      { name:"Agility & Change of Direction", tag:"Agility", level:"Advanced", time:"30 min", cal:"340 kcal",
        items:[["Ladder footwork ladder","5 patterns"],["T-drill","5 reps"],["Zig-zag cone cuts","6 reps"],["Reaction ball drops","2 x 10"],["Plank + lateral hops","3 sets"]] },
      { name:"Endurance (90-min Match Engine)", tag:"Stamina", level:"Intermediate", time:"50 min", cal:"520 kcal",
        items:[["Easy jog warm-up","10 min"],["Tempo run (75% max HR)","20 min"],["Fartlek surges","8 x 30 sec"],["Ball work intervals","10 min"],["Cooldown jog + stretch","10 min"]] },
      { name:"Shooting & Finishing", tag:"Technique", level:"All levels", time:"35 min", cal:"280 kcal",
        items:[["Half-turn strikes","10 reps"],["First-time finishing from crosses","10 balls"],["1v1 vs keeper","8 reps"],["Long shots from edge of box","12 shots"],["Penalty pressure routine","10 kicks"]] },
      { name:"Match-Day Activation", tag:"Pre-match", level:"All levels", time:"20 min", cal:"160 kcal",
        items:[["Light jog + dynamic mobility","6 min"],["Accelerations 50→80%","4 x 40 m"],["Rondo / quick passing","6 min"],["Set-piece rehearsal","4 min"],["Mental visualisation","2 min"]] },
      { name:"Defensive Masterclass", tag:"Defense", level:"Intermediate", time:"40 min", cal:"390 kcal",
        items:[["Jockeying & side-shuffle drills","3 x 20 m"],["1v1 defending (delay & show outside)","8 reps"],["Tackling timing on mannequins","6 reps"],["Cover & compact shape walks","5 min"],["Aerial clearance headers","10 reps"]] },
      { name:"Heading & Aerial Duels", tag:"Aerial", level:"Intermediate", time:"30 min", cal:"260 kcal",
        items:[["Neck & core activation","3 min"],["Standing header targets","15 balls"],["Jump & hang time headers","10 balls"],["Diving header practice","6 balls"],["Run-back-post loop jumps","8 reps"]] },
      { name:"Goalkeeper Special", tag:"GK", level:"All levels", time:"40 min", cal:"360 kcal",
        items:[["Finger & wrist warm-up","4 min"],["Diving low balls","2 x 6"],["High claim & cross collection","2 x 8"],["Distribution: throw & punt","10 reps"],["Reflex saves reaction volley","2 x 10"]] },
      { name:"Preseason Power Circuit", tag:"Conditioning", level:"Advanced", time:"45 min", cal:"560 kcal",
        items:[["Battle ropes","3 x 30 sec"],["Box jumps","4 x 8"],["Sled push / tire flip","4 x 20 m"],["Medicine ball rotational throws","3 x 10"],["Sprint-recover intervals","6 x 60 m"]] },
      { name:"Core for Footballers", tag:"Core", level:"All levels", time:"22 min", cal:"200 kcal",
        items:[["Pallof press","3 x 12 each"],["Nordic curl negatives","3 x 6"],["Side plank with hip dip","3 x 15"],["Single-leg RDL","3 x 10 each"],["Dead bug","3 x 10"]] },
      { name:"Warm-up & Injury Prevention", tag:"Prep", level:"All levels", time:"15 min", cal:"110 kcal",
        items:[["Pulse raiser jog","3 min"],["Dynamic leg swings","2 x 10 each"],["Hip circles & open-the-gate","2 x 10"],["Calf raises & ankle hops","2 x 15"],["Movement prep sprints","3 x 40 m"]] },

      /* ===== ELITE PRO LEVEL (Lamine Yamal tier) ===== */
      { name:"Elite First Touch & Close Control", tag:"ELITE", elite:true, level:"Pro", time:"40 min", cal:"330 kcal",
        desc:"Pro-level ball mastery like Lamine Yamal — receive under pressure, kill the ball dead and manipulate it in tight spaces at match tempo.",
        equip:"Ball, wall or rebounder, 4 cones", muscles:"Feet & ankles · hips · core",
        items:[["Wall passes, receive across body","3 x 10 each foot"],["Aerial ball kill-down (30 balls)","6 min"],["Tight square dribble","4 x 30 sec"],["Receive on the half-turn","2 x 8"],["Pressure rondos","6 min"]],
        coach:["Scan your shoulder BEFORE the ball arrives","Receive across your body — never let it get stuck under your feet","First touch must set up your second action","Knees soft, hips low, on your toes"],
        mistakes:["Staring only at the ball","Heavy touch straight into pressure","Standing flat-footed while receiving"],
        rest:"45 sec between blocks · 2 min between rounds · 3 rounds" },
      { name:"Explosive Acceleration 0–10 m", tag:"ELITE", elite:true, level:"Pro", time:"35 min", cal:"400 kcal",
        desc:"The first 10 metres decide every duel. Build the sprint mechanics and reactive power of an elite winger.",
        equip:"Cones, resistance band (optional), flat ground", muscles:"Quads · glutes · hamstrings · calves",
        items:[["Build-up accelerations","6 x 30 m"],["Falling-start sprints","5 x 10 m"],["0–10 m block starts","8 reps"],["Resisted band sprints","4 x 10 m"],["Sprint-to-decelerate","6 x 20 m"]],
        coach:["Drive the knee and punch the ground BEHIND you","Lean forward for the first 3 steps","Arms at 90°, cheek-to-cheek swing","Full recovery 60–90 sec between max sprints"],
        mistakes:["Standing up too early out of the start","Tensing the shoulders","No full rest between max reps"],
        rest:"60–90 sec between sprints · 2 min between sets" },
      { name:"1v1 Take-on Mastery (Winger Toolbox)", tag:"ELITE", elite:true, level:"Pro", time:"40 min", cal:"340 kcal",
        desc:"The signature moves that break defensive lines: body feints, scissors, la croqueta and the inside-out touch.",
        equip:"Ball, 2 cones, mannequin or chair", muscles:"Hip flexors · adductors · quads · core",
        items:[["Body feint + explode","3 x 6 each side"],["Scissors into acceleration","3 x 8"],["La croqueta (Iniesta)","3 x 10"],["Inside-out touch","3 x 8"],["Live 1v1 vs passive defender","8 reps"]],
        coach:["Drop the shoulder — sell the fake with your whole body","Explode into the space you create, never backwards","Change PACE, not just direction","Keep the ball within 1 metre throughout"],
        mistakes:["Doing moves at one constant speed","Head down during the move","Always attacking with the same single move"],
        rest:"30 sec between reps · 90 sec between sets" },
      { name:"Weak Foot Development (Pro Standard)", tag:"ELITE", elite:true, level:"Intermediate", time:"30 min", cal:"250 kcal",
        desc:"Elite players are two-footed. This session forces your weak foot to work at match intensity.",
        equip:"Ball, wall, 4 cones, goal", muscles:"Adductors · quads · ankles",
        items:[["Weak-foot passing vs wall","4 x 10"],["Weak-foot figure-8 dribble","4 x 15"],["Weak-foot finishing","12 shots"],["Weak-foot long passes/crosses","10 balls"],["Weak-foot juggling touch","3 min"]],
        coach:["Same technique as your strong foot — plant foot points at target","Train at game speed, never walking pace","Finish with weak-foot shooting under fatigue"],
        mistakes:["Only using weak foot in easy drills","Leaning back when shooting","Quitting the moment it feels awkward"],
        rest:"30 sec between sets · shoot after 30 sec heart-rate recovery" },
      { name:"Pro Repeat Sprint Ability (Match Engine)", tag:"ELITE", elite:true, level:"Advanced", time:"45 min", cal:"560 kcal",
        desc:"The conditioning of top professionals: repeated maximal sprints with short recovery, simulating a full 90-minute match.",
        equip:"Cones, stopwatch, flat pitch", muscles:"Full body · cardiovascular system",
        items:[["Max sprints 40 m (30 sec rest)","6 reps"],["Tempo blocks 4 min at 90%","4 blocks (2 min jog between)"],["Change-of-direction sprints","6 x 20 m"],["Active recovery jog","8 min"],["Cooldown + mobility","7 min"]],
        coach:["Protect sprint QUALITY — reduce volume, never intensity","Breathe through the nose on recovery jogs","Replace 500 ml of fluid per kg of bodyweight lost"],
        mistakes:["Starting too fast in block 1","Skipping the cooldown","Training this session on heavy legs"],
        rest:"30 sec after sprints · 2 min jog between tempo blocks" },
      { name:"Elite Agility & Cutting at Speed", tag:"ELITE", elite:true, level:"Pro", time:"35 min", cal:"380 kcal",
        desc:"Change direction without losing speed — the mechanics elite attackers use to lose their marker.",
        equip:"6 cones, agility ladder (optional)", muscles:"Glutes · quads · ankles · core",
        items:[["5-10-5 pro agility test","5 reps"],["Cutting drill: plant & go","4 x 8"],["Curved sprint runs","5 x 30 m"],["Reactive colour-cut reactions","6 min"],["Landing & re-acceleration","4 x 15 m"]],
        coach:["Lower your centre of gravity BEFORE the cut","Plant foot outside your base — push the ground away","Eyes up immediately after every cut"],
        mistakes:["Cutting tall and upright","Rounding turns instead of sharp cuts","Looking down at your feet"],
        rest:"45 sec between reps · 2 min between drills" },
      { name:"Pro Footballer Strength (Gym)", tag:"ELITE", elite:true, level:"Advanced", time:"60 min", cal:"520 kcal",
        desc:"The strength session of professional footballers: posterior chain, single-leg power and injury-proofing.",
        equip:"Barbell, bench, Nordic strap", muscles:"Posterior chain · quads · groin · calves",
        items:[["Trap bar / conventional deadlift","5 x 3"],["Bulgarian split squat","4 x 8 each"],["Nordic curl (3 sec down)","3 x 5"],["Barbell hip thrust","4 x 8"],["Calf raise","4 x 15"],["Copenhagen plank (groin)","3 x 20 sec"]],
        coach:["Explosive concentric on every strength rep","Nordics under full control — 3 seconds down","Never lift heavy the day before a match"],
        mistakes:["Skipping the groin work","Ego-lifting on deadlift","No tempo control on the eccentric"],
        rest:"2–3 min heavy compounds · 60–90 sec accessories" },
      { name:"Finishing Under Pressure — Elite", tag:"ELITE", elite:true, level:"Pro", time:"35 min", cal:"300 kcal",
        desc:"Score like a professional: finish within 2 seconds of the pass while a defender closes you down.",
        equip:"Ball, goal, 2 mannequins, server", muscles:"Core · hips · legs",
        items:[["2-touch finish off mannequin","10 reps"],["First-time shots from cutbacks","10 balls"],["1v1 vs goalkeeper","8 reps"],["Back-post volley / header","10 balls"],["Pressure penalties (tired)","10 kicks"]],
        coach:["Pick your corner BEFORE you strike","Head over the ball — keep it low when unsure","Attack the space the keeper is not covering"],
        mistakes:["Shutting your eyes at impact","Leaning back on the strike","Watching your shot instead of moving"],
        rest:"20 sec between shots · 90 sec between blocks" },
      { name:"Scanning & Game IQ (Pro Vision)", tag:"ELITE", elite:true, level:"All levels", time:"25 min", cal:"150 kcal",
        desc:"Lamine checks his shoulder 3–4 times before receiving. Build the scanning habit that creates time on the ball.",
        equip:"Ball, wall or 4–6 players, cones", muscles:"Neck · cognitive speed",
        items:[["Scan every 2 sec in passing circuit","6 min"],["Receive → turn → play sequence","4 x 8"],["Shadow play with head checks","5 min"],["Pattern study (whiteboard/video)","3 patterns"],["Rondo with scan counting","6 min"]],
        coach:["Scan BEFORE the ball is played to you","Count your scans — aim 4–6 per possession","Know your next 2 options before receiving"],
        mistakes:["Ball-watching","Receiving flat-footed","Scanning only once per possession"],
        rest:"30 sec between circuits · 1 min between rounds" },
      { name:"Pre-Match Pro Activation (Official Warm-up)", tag:"ELITE", elite:true, level:"All levels", time:"25 min", cal:"190 kcal",
        desc:"The exact warm-up structure used by professional teams before kickoff.",
        equip:"Balls, cones, bibs", muscles:"Full body",
        items:[["RPE 3 jog + mobility","6 min"],["Dynamic stretching","5 min"],["Accelerations 50 → 80 → 90%","5 reps"],["Rondos / sharp passing","6 min"],["Finishing x5 + set pieces","5 min"],["Visualisation & team huddle","2 min"]],
        coach:["Finish the warm-up with a sweat, not fatigue","Last run should touch 95% intensity","Be mentally on the pitch from minute one"],
        mistakes:["Static stretching before kickoff","Warming up too early then cooling down","Skipping the mental rehearsal"],
        rest:"30 sec between accelerations · continuous flow" },

      /* ===== TOUGHER THAN PRO — the sessions that separate elites ===== */
      { name:"Beast Mode Conditioning — Yo-Yo Test Level", tag:"GRUEL", elite:true, level:"Pro", time:"50 min", cal:"640 kcal",
        desc:"The brutal multi-stage conditioning test used to screen professional players. Survive to level 14+ and your engine is pro.",
        equip:"2 cones 20 m apart, stopwatch, flat pitch", muscles:"Full body · cardiovascular system",
        items:[["Yo-Yo Intermittent Test (20 m shuttles)","until level 14+"],["Active recovery walk","2 min — repeat"],["Max effort 30 m sprints","6 x (60 sec rest)"],["Agility ladder burnout","4 patterns x 3"],["Cooldown jog + full stretch","8 min"]],
        how:[
          ["Stand behind the start line as the beep begins","Run to the far line and turn BEFORE the next beep","Turn with a sharp plant-and-push, never a round loop","Keep your hips low on every turn","If you miss two beeps in a row, the test ends — record your level"],
          ["Walk slowly with hands on hips to open the lungs","Breathe in through the nose, out through the mouth","Do not sit or lie down between stages","Start the next stage when the beep sequence begins"],
          ["Build to 95% by the third rep — first rep is a primer","Drive knees hard, arms at 90°, chin relaxed","Full 60 sec standing recovery between reps","Stop the set if sprint times drop more than 5%"],
          ["Fast in-out feet — never touch the ladder rungs","Stay on the balls of your feet, knees bent","Pump arms in rhythm with the legs","Each pattern done with 100% focus, no jogging through"],
          ["Jog 2 laps at conversational pace","Then walk while the heart rate drops below 120","Static stretch quads, hamstrings, groin, calves — 30 sec each","Rehydrate 500 ml with electrolytes"]
        ],
        coach:["The Yo-Yo is 90% mental — count shuttles, not pain","Turns must be sharp: the test punishes round turns","Never skip the 2-min recovery walk","Track your level weekly — level 14 = semi-pro standard"],
        mistakes:["Sprinting stage 1 and dying by stage 8","Walking with hands on head (closes the lungs)","Doing this session on a heavy-leg day","No rehydration afterwards"],
        rest:"Test format dictates recovery · 60 sec between sprints" },
      { name:"Sprint Ladder Hell (Speed Endurance)", tag:"GRUEL", elite:true, level:"Pro", time:"45 min", cal:"600 kcal",
        desc:"300-200-150-60 m descending ladder. This is the session that builds the late-game sprint speed of professionals.",
        equip:"Cones at 60/150/200/300 m, stopwatch", muscles:"Quads · glutes · hamstrings · lungs",
        items:[["300 m time trial (85%)","1 rep"],["200 m fast","4 reps (2 min rest)"],["150 m repeat","4 reps (90 sec rest)"],["60 m fly sprints","5 reps"],["Walk-back recovery + breathing","10 min"]],
        how:[
          ["Set off at 85% — controlled and rhythmic, not flat out","Hold form: tall posture, relaxed shoulders, fast arms","Diarise the split times mentally at 100/200 m","Finish through the line, never jog early"],
          ["Full 2 minutes standing recovery — no sitting","Drive the knees on the first 20 m of each rep","Keep the torso tall as fatigue hits at 150 m","If form collapses, end the set"],
          ["90 sec rest — shake the legs out each time","Pump arms harder than the legs want to","Run tall, don't hunch into the last 50 m","Last two reps are where the adaptation happens"],
          ["Start from a rolling build-up 20 m before the mark","Hit top speed over the timed 60 m zone","Full fly-in — never stop inside the 60 m","Relax the face and hands at maximum velocity"],
          ["Walk 4 laps while breathing returns to normal","Then 5 minutes of dynamic and static stretching","Flush legs: gentle straight-leg swings","Refuel with protein + carbs within 30 min"]
        ],
        coach:["Speed endurance is trained with FULL recoveries — quality over grind","Form breaks = set over","Time every rep and beat your numbers weekly","This session belongs mid-week, never before match day"],
        mistakes:["Going 100% on rep 1 of the 300 m","Resting seated between reps","Running into tired form","Doing it the day before a match"],
        rest:"2 min after 200 m · 90 sec after 150 m · 60 sec after 60 m" },
      { name:"Plyometric Power Gauntlet", tag:"GRUEL", elite:true, level:"Pro", time:"40 min", cal:"480 kcal",
        desc:"Box jumps, single-leg bounding and depth jumps — build the explosive elastic power that lets elites explode past defenders.",
        equip:"Plyo box (60 cm), 5 low hurdles, flat ground", muscles:"Fast-twitch quads · glutes · calves · ankles",
        items:[["Depth jumps (60 cm box)","4 x 6"],["Single-leg bounding","4 x 20 m"],["Broad jump → sprint relay","5 reps"],["Hurdle hops (5 hurdles)","4 x 5"],["Ankle pogo hops","3 x 20"],["Max vertical jump test","5 reps"]],
        how:[
          ["Step off the box — do NOT jump off","Touch the ground and REBOUND up instantly (< 0.2 sec)","Land softly with bent knees, feet shoulder-width","Step down and reset — this is maximum-quality work"],
          ["Drive off one leg, land on the SAME leg","Travel as far as possible per bound, chest tall","Opposite arm drives with each bound","Alternate legs each rep, full recovery"],
          ["Explode forward from a two-footed stance","Sprint the first 10 m immediately after landing","Reset fully between the 5 reps","Maximum intent on every jump"],
          ["Take off and land with two feet between hurdles","Minimal ground contact — bounce, don't jump heavy","Keep eyes forward, not down at the hurdles","Stop the set if contact time slows"],
          ["Stay on the balls of the feet — heels never touch","Knees locked-ish: this is ankle stiffness work","Fast rhythm like jumping rope","20 fast reps, rest 45 sec"],
          ["Stand beside a wall, mark your standing reach","Swing arms and explode to a max touch","Record it — test again every 2 weeks","Only jump when fully fresh"]
        ],
        coach:["Every jump is MAXIMUM intent — never train plyos fatigued","Land quiet: noisy landing = too much impact","2 minutes rest between sets — power needs freshness","Pair this session with upper-body or recovery days"],
        mistakes:["Doing plyos after leg day","Slow, heavy ground contacts","Landing with stiff straight legs","Skipping the ankle work"],
        rest:"2 min between sets · 3 min before the vertical test" },
      { name:"Sled & Hill Power Sprints", tag:"GRUEL", elite:true, level:"Pro", time:"40 min", cal:"540 kcal",
        desc:"Heavy sled pushes and hill sprints — the resistance work that raises your force output and first-step explosiveness.",
        equip:"Sled or weighted bag, hill (10–15%), resistance band", muscles:"Quads · glutes · calves · posterior chain",
        items:[["Heavy sled push","6 x 20 m"],["Light sled sprint (fast)","6 x 30 m"],["Hill sprints (15% grade)","8 x 20 m"],["Resisted band partner sprints","5 x 30 m"],["Eccentric decel stops","6 x 40 m"]],
        how:[
          ["Load: can still move but form must hold","Lean forward at 45°, arms locked straight","Drive legs like piston steps — full extension","Short, powerful strides; never stutter"],
          ["Light load — you must SPRINT against it","Stay low for the first 10 m","Same arm drive as free sprinting","60 sec rest so speed stays maximal"],
          ["Explode from a standing start up the hill","Drive the knees high and attack the slope","Do not coast — attack every step","Walk down as recovery"],
          ["Band around waist, partner anchors behind","Partner provides just enough resistance to slow you","Sprint the full 30 m, partner jogs back","Switch roles each rep"],
          ["Sprint 40 m then STOP within 3 steps","Low athletic position on the decel, no stumbling","Absorb force with hips back and knees bent","Re-walk to start before the next rep"]
        ],
        coach:["Sleds train force — keep the load heavy and the distance short","Hills remove the impact risk of flat sprints","Never let technique break under load","This is a strength session: full rest, low volume"],
        mistakes:["Loading the sled so heavy you stutter","Upright sled posture","No recovery between heavy pushes","Doing hill sprints fatigued"],
        rest:"90 sec heavy sled · 60 sec light/hill" },
      { name:"90-Minute Match Simulation Circuit", tag:"GRUEL", elite:true, level:"Pro", time:"60 min", cal:"700 kcal",
        desc:"Five 15-minute blocks that simulate the exact intensity swings of a real match — fatigue, decisions, finishing, duels.",
        equip:"Balls, cones, bibs, goal, partner(s)", muscles:"Full match fitness — energy systems",
        items:[["Block 1 — tempo passing & movement","15 min · RPE 6"],["Block 2 — sprints & 1v1 duels","15 min · RPE 9"],["Block 3 — finishing under fatigue","15 min · RPE 8"],["Block 4 — small-sided game / shadow play","15 min · RPE 8"],["Block 5 — set pieces & pressure penalties","10 min · RPE 7"]],
        how:[
          ["Move the ball at match tempo but breathe control","Constant off-ball movement — check away, come to ball","Keep passes sharp, one or two touch only","Stay relaxed: this is the 'cruise' phase of the match"],
          ["Every run at FULL pace — this is your '70th minute' sprint","Win or lose every 1v1 duel physically","Immediate transition from duel to next action","Mental reset between reps — pros suffer, then refocus"],
          ["Shoot while heart rate is at 85%+","Pick your corner before receiving","First-time finishes only from cutbacks","Miss → immediate sprint recovery run as punishment"],
          ["Play 4v4/5v5 with real intensity or shadow-tactically","Communicate constantly — name, direction, switch","Press as a unit, drop as a unit","Sprint for 5 sec every 30 sec even off the ball"],
          ["Corners, free kicks, short corners — full routines","Then 10 penalties: score or sprint 40 m","Simulate crowd pressure: countdown 10 sec","Finish with your best penalty — end on confidence"]
        ],
        coach:["Train the match, not just exercises — every block has a purpose","Hydrate 200 ml every block","If you wouldn't do it in the 85th minute, don't do it fresh","This replaces 2 sessions a week in pre-season"],
        mistakes:["Treating blocks as rest","Skipping the punishment runs","No hydration between blocks","Doing it within 48 h of a real match"],
        rest:"3 min water between blocks · continuous within blocks" },
      { name:"Pro Prehab & Injury-Proofing", tag:"GRUEL", elite:true, level:"Pro", time:"35 min", cal:"260 kcal",
        desc:"The hamstring, groin and knee insurance policy every professional performs weekly. Non-negotiable if you want a long career.",
        equip:"Bench, band, light plate, wall", muscles:"Hamstrings · groin · quads (tibialis) · ankles",
        items:[["Nordic curl (3 sec eccentric)","3 x 5"],["Copenhagen plank","3 x 20 sec each"],["Single-leg RDL (slow)","3 x 8 each"],["Tibialis raise","3 x 20"],["Spanish squat isometric","3 x 45 sec"],["Ankle CARs + calf eccentric","2 x 12 each"]],
        how:[
          ["Anchor ankles under a pad or partner's hands","Keep hips and shoulders in one straight line","Lower as slowly as possible — 3 full seconds","Catch with the hands, push back up; don't free-fall"],
          ["Top leg on a bench, bottom leg hangs","Lift the bottom leg up to meet the top one","Hold the plank — hips never drop","20 sec each side, then switch"],
          ["Hold a light plate against your chest","Hinge at the hip, back flat, free leg counterbalances","Lower until the torso is near parallel","Drive the hip forward to stand — no back rounding"],
          ["Stand with heels on the floor, toes on a step","Lift the toes toward the shins against gravity","Lower slowly — 2 seconds up, 2 seconds down","Feels like the shin burn — that's the point"],
          ["Back against wall, slide to a 30° knee bend","Hold the position without sliding down","Pressure through the whole foot, knees over toes","You should feel the quads near the knee working"],
          ["Draw slow circles with the toes — full ankle range","Then slow heel raises: 3 sec up, 3 sec down","No pain arcs — only the range you control","Both ankles equally, even the 'good' one"]
        ],
        coach:["Prehab is cheap — an injury costs you months","Nordics are the #1 hamstring injury reducer","Do this twice a week, never before speed work","Progress by time under tension, not by adding reps fast"],
        mistakes:["Rushing the Nordic eccentric","Sagging hips in the Copenhagen","Skipping the boring ankle work","Doing prehab only after getting hurt"],
        rest:"45–60 sec between sets · superset pairs to save time" },
      { name:"Elite Core — Anti-Rotation & Power", tag:"GRUEL", elite:true, level:"Pro", time:"30 min", cal:"300 kcal",
        desc:"Football power comes from the core: resist rotation, then explode through it. This is the core work of professional academies.",
        equip:"Cable/band, medicine ball, heavy dumbbell, mat", muscles:"Deep core · obliques · lats · hips",
        items:[["Pallof press walkout","3 x 10 each"],["Medicine ball rotational throw","4 x 8 each"],["Med ball slam (max intent)","4 x 8"],["Hollow body rocks","3 x 20"],["Farmer carry (heavy)","3 x 40 m"],["Ab wheel rollouts","3 x 10"]],
        how:[
          ["Stand side-on to the band, press at chest height","Press straight out and HOLD — resist the twist","Step laterally one step while keeping the press","Return with control; the core never rotates"],
          ["Stand perpendicular to the wall, ball at hip","Rotate through the hips and THROW into the wall","Follow the ball with your eyes and hands","Catch and reset — power, not accuracy reps"],
          ["Ball overhead, reach tall, then SLAM down hard","Drive with the whole body — hips and lats","Catch the bounce and reload instantly","Maximum intent: this is a power exercise"],
          ["Lie on your back, arms overhead, legs long","Lift shoulders and legs slightly off the floor","Rock from shoulders to hips using the core only","Lower back stays pressed down the whole time"],
          ["Heaviest dumbbell you can hold with perfect posture","Walk tall — no leaning to one side","Short, controlled steps, shoulders packed","40 m without the weight dropping or hips swaying"],
          ["Kneel with hands on the wheel, hips stacked","Roll out as far as you can CONTROL, then return","Hips never sag — the core does the work","Progress distance slowly; stop before the back arches"]
        ],
        coach:["Anti-rotation before rotation — stability creates power","Slams and throws need full rest to stay powerful","Carry weight that challenges your posture, not your grip","This session = 2x per week for footballers"],
        mistakes:["Letting hips sag on rollouts","Using arms instead of hips on throws","Rounding the back on carries","Too light to matter"],
        rest:"60 sec anti-rotation · 90 sec power work" },

      { name:"Pro Trial Test Battery", tag:"GRUEL", elite:true, level:"Pro", time:"60 min", cal:"700 kcal",
        desc:"The exact fitness battery used at professional club trials — pass every test and you're in the conversation.",
        equip:"Cones, stopwatch, measuring tape, jump mat", muscles:"Full performance markers",
        items:[["30 m sprint (best of 3)","record time"],["Yo-Yo Intermittent Test","record level"],["Countermovement jump (best of 3)","record cm"],["Illinois agility test (best of 2)","record time"],["12-min Cooper run","record distance"],["Bodyweight strength test: max push-ups","in 60 sec"]],
        how:[
          ["Full warm-up first — never test cold","Three maximal attempts, 3 min apart","Record the BEST time, not the average","Same footwear and surface every retest"],
          ["Standard20 m shuttles with the beep","Turn sharply on every line","Run until two consecutive misses","Log the level reached — test every 4 weeks"],
          ["Stand feet shoulder-width, arms relaxed","Dip fast and explode straight up","Land soft, record the highest touch","3 attempts, full rest between"],
          ["Start from a standstill, no false steps","Stay low through the first 10 m","Round each cone tightly","Run it twice — keep the better score"],
          ["Set a lap marker at a known distance","Run at a hard but sustainable pace","Cover maximum distance in 12 min","Walk 2 min immediately after"],
          ["Standard push-up position, chest to floor","Go as fast as form allows","Count only clean full-range reps","Stop if form breaks completely"]
        ],
        coach:["Test when fresh — never the day after hard training","Record every number in a notebook and retest monthly","Warm up exactly the same each test day","Mental: treat every rep like someone is watching"],
        mistakes:["Half-hearted first sprint 'as a warm-up'","Testing on tired legs","Not recording results","Stopping the Cooper run too early"],
        rest:"3 min between maximal tests · full warm-up before" },

      { name:"Aerial Dominance & Heading Power", tag:"ELITE", elite:true, level:"Pro", time:"35 min", cal:"310 kcal",
        desc:"Win every duel in the air — timing, timing power and neck strength for the modern player.",
        equip:"Ball, crosser/service, mannequin", muscles:"Neck · core · glutes · calves",
        items:[["Approach timing runs (no ball)","6 reps"],["Standing header targets","15 balls"],["Run-jump-power headers","12 balls"],["Diving header practice","6 balls"],["Neck harness / manual resistance","3 x 15"],["Repeat: match-pace aerial duels","8 reps"]],
        how:[
          ["Time your run so the ball arrives at peak jump","Attack the ball at its highest point — meet it early","Plant two feet and drive UP, not sideways","Land on both feet, ready for the next action"],
          ["Eyes on the ball until contact","Strike with the FOREHEAD centre, mouth closed","Generate power from the core whip, not the neck alone","Guide with the neck, aim with the eyes"],
          ["Sprint in, time the jump, attack downward","Use arms for lift, then whip the torso","Direct it down into the ground or toward a target","Recover immediately — second balls win games"],
          ["Low approach, launch horizontally","Extend fully — chin tucked, eyes on the ball","Guide rather than power it","Roll on landing, no stiff arms"],
          ["Hands behind head or light harness resistance","Nod against resistance — slow and controlled","Work all angles: yes, no, rotation","15 slow reps — this is prehab, not max effort"],
          ["Back a defender who is jumping at full pace","Compete physically but fairly","Attack the ball first, body second","Win or lose — recover for the next duel"]
        ],
        coach:["Attack the ball — never wait for it to hit you","Timing beats height: start your run early","Neck work protects you from concussion risk","Land soft; tired legs cause sloppy landings"],
        mistakes:["Closing eyes at contact","Jumping from a standing start every time","Using only the neck, not the core","Heading with the top of the head"],
        rest:"30 sec between reps · 90 sec between blocks" },

      { name:"Defensive Recovery & 1v1 Runs", tag:"ELITE", elite:true, level:"Pro", time:"40 min", cal:"430 kcal",
        desc:"The hardest job in football: recover 30 m against a sprinting attacker, then win the duel without fouling.",
        equip:"Cones, mannequin, partner, ball", muscles:"Glutes · quads · hamstrings · lungs",
        items:[["Recovery run 30 m to shadow","8 reps"],["Jockey-to-tackle progression","6 reps"],["Angle-of-recovery curved runs","6 x 40 m"],["2v1 defensive overload decisions","10 min"],["Sprint-recover duels (max intensity)","6 reps"]],
        how:[
          ["Start goal-side, then TURN and sprint at full pace","Take the shortest recovery angle — curve, don't arc wide","Decelerate into a low jockey stance as you arrive","Show the attacker wide, toward the touchline"],
          ["Sprint to recover, chop steps as you close","Stay low, side-on, on the balls of your feet","Wait for the heavy touch — THEN engage","Go in firm and win the ball; no lunging"],
          ["Read the pass first — the angle starts early","Run the curve that cuts the attacker's path","Pump arms hard through the bend","Arrive before the attacker, not level"],
          ["Delay one attacker while covering the pass","Communicate: 'I've got ball!', 'Hold!'","Don't commit both defenders to one runner","Force the play into the covered zone"],
          ["Max effort, full recovery — this is a duel drill","Sprint, win the ball, jog back fully","Quality over quantity — 6 perfect duels","Train the tired state: last 2 reps matter most"]
        ],
        coach:["Recovery runs are about ANGLE, not just speed","Deceleration skill wins duels — chop your steps","Never dive in: delay until the ball is loose","Communicate constantly in 2v1s"],
        mistakes:["Sprinting past the attacker","Standing upright at the moment of the tackle","Both defenders pressing one ball","No recovery between max duels"],
        rest:"90 sec between recovery runs · 2 min between duels" },

      { name:"Weak Foot Under Fatigue", tag:"ELITE", elite:true, level:"Advanced", time:"32 min", cal:"340 kcal",
        desc:"Your weak foot dies when you're tired — this session trains it at match intensity so it holds up in the 85th minute.",
        equip:"Ball, wall, cones, goal", muscles:"Adductors · quads · ankles · lungs",
        items:[["Tempo runs with weak-foot touches","4 x 40 m"],["Weak-foot passing under pressure","6 min"],["Weak-foot dribble sprints","6 x 25 m"],["Weak-foot finishing after sprinting","10 shots"],["Weak-foot shooting from distance","8 shots"]],
        how:[
          ["Jog with the ball, touching ONLY with the weak foot","Push the ball ahead every 3 steps, keep rhythm","Head up between touches","Keep the quality — no switching feet when it gets hard"],
          ["Partner or wall returns — one touch only","Open up with the weak foot's inside","Play away from the 'pressure' side","Speed of play increases each minute"],
          ["Explode 25 m dribbling only with the weak foot","Change pace at the halfway cone","Finish with a pass or shot on goal","Full recovery between sprints"],
          ["Sprint 20 m, receive, finish weak-foot first time","Heart rate at 85%+ when you strike","Pick a corner before the ball arrives","Miss → extra sprint; make it count"],
          ["Set the ball outside the box","Strike through the centre, ankle locked","Aim for corners, not power","8 quality strikes, reset each one"]
        ],
        coach:["Fatigue exposes technique — that's the point","Never switch to the strong foot, even when struggling","Quality over quantity: 10 perfect shots beat 30 sloppy","Retest your weak-foot shooting accuracy monthly"],
        mistakes:["Switching feet when it feels hard","Leaning back on tired strikes","No rest between max sprints","Practising weak foot only fresh"],
        rest:"45 sec between sprints · 90 sec before shooting blocks" }
    ]
  },
  cricket: {
    title: "Cricket Training", color: "linear-gradient(135deg,#7c3aed,#c084fc)", emoji: "🏏",
    desc: "Batting, bowling, fielding and explosive power — everything for your next innings or spell.",
    plans: [
      { name:"Batting Technique & Footwork", tag:"Batting", level:"All levels", time:"45 min", cal:"320 kcal",
        items:[["Throwdowns / shadow batting","10 min"],["Front-foot drives (straight & cover)","4 x 8 balls"],["Back-foot punches & cuts","4 x 8 balls"],["Pull & hook rotation","2 x 10"],["Spin defense with soft hands","8 min"]] },
      { name:"Bowling Action & Run-Up", tag:"Bowling", level:"Intermediate", time:"40 min", cal:"360 kcal",
        items:[["Run-up measure + marker sprints","4 reps"],["Full run-up delivery stride","12 balls"],["Seam/wrist position drills","6 min"],["Yorker & bouncer targets","12 balls"],["Shoulder & lat mobility","5 min"]] },
      { name:"Fielding & Ground Fielding", tag:"Fielding", level:"All levels", time:"35 min", cal:"400 kcal",
        items:[["Two-handed ground pick-up","3 x 8"],["Flat throw practice (direct hits)","10 throws"],["Catching high & slip catches","2 x 10"],["One-handed pick-up & release","3 x 8"],["Diving stop drills","6 reps"]] },
      { name:"Wicketkeeper Skills", tag:"WK", level:"Intermediate", time:"30 min", cal:"260 kcal",
        items:[["Squat stance hold","3 x 40 sec"],["Edge catches with sidescreen","2 x 12"],["Low take-offs & takes to stumps","10 reps"],["Standing up to spin reaction","8 min"],["Flick & stump reaction drills","6 min"]] },
      { name:"Power Hitting (T20 Style)", tag:"Power", level:"Advanced", time:"35 min", cal:"420 kcal",
        items:[["Medicine ball rotational throws","3 x 10"],["Core rotation with bat","3 x 15"],["Slam & ramp shots in nets","12 balls"],["Slog-sweep & switch hits","10 balls"],["Resistance band bat swings","3 x 12"]] },
      { name:"Match Fitness & Agility", tag:"Fitness", level:"All levels", time:"30 min", cal:"350 kcal",
        items:[["Quick singles & two runs shuttle","6 x 20 m"],["Zig-zag fielding runs","5 reps"],["Reaction drop catches","2 x 10"],["Plank + press-up superset","3 rounds"],["Cooldown stretch","5 min"]] },
      { name:"Fast Bowling Strength & Seam", tag:"Bowling", level:"Advanced", time:"45 min", cal:"440 kcal",
        items:[["Run-up sprint repeats","6 x 30 m"],["Crease jump & block drills","3 x 8"],["Seam presentation wrist flicks","2 x 20"],["Contrast: box squat + jump","4 x 6"],["Shoulder external rotation band","3 x 15"]] },
      { name:"Spin Bowling Mastery", tag:"Spin", level:"Intermediate", time:"35 min", cal:"260 kcal",
        items:[["Grip & wrist spinner flicks","5 min"],["Flight & loop targets","12 balls"],["Doosra / variation rehearsal","8 balls"],["Accuracy: single-stump hitting","10 balls"],["Run-up rhythm walk-through","6 min"]] },
      { name:"Running Between Wickets", tag:"Running", level:"All levels", time:"25 min", cal:"300 kcal",
        items:[["Quick-turn ground sprints","6 x 15 m"],["Batting-run ground touches","8 reps"],["Two-run figure-eights","5 reps"],["Dive-back-to-crease slides","6 reps"],["Call & communication drill","5 min"]] },
      { name:"Catching Clinic (Slip & Ring)", tag:"Catching", level:"All levels", time:"28 min", cal:"230 kcal",
        items:[["Soft-hands slip catches","2 x 15"],["Reaction catches close-in","2 x 10"],["High skiers under the sun","10 balls"],["One-handed juggling reflex","4 min"],["Ring-field throw & gather","8 reps"]] },
      { name:"Shoulder & Arm Care for Bowlers", tag:"Care", level:"All levels", time:"18 min", cal:"120 kcal",
        items:[["Band pull-aparts","3 x 15"],["Scapular wall slides","3 x 10"],["Sleeper stretch","2 x 30 sec"],["Light rotator cuff circuit","2 x 12"],["Ice-down protocol (post)","5 min"]] },
      { name:"Pre-Match Net Session", tag:"Pre-match", level:"All levels", time:"40 min", cal:"280 kcal",
        items:[["Throwdown rhythm finding","8 min"],["Straight-bat shadow swings","4 min"],["Bowling run-up grooving","10 balls"],["Match-situation scenarios","10 min"],["Free hit / death over practice","8 min"]] },
      { name:"Death Bowling — Yorkers & Slower Balls", tag:"Bowling", level:"Advanced", time:"35 min", cal:"330 kcal",
        desc:"Own the final 5 overs — pinpoint yorkers, wide yorkers and deceptive slower balls.",
        equip:"Ball, stumps, cones, full run-up", muscles:"Shoulders · core · legs",
        items:[["Run-up rhythm sprints","4 x 30 m"],["Yorker at the base of off stump","12 balls"],["Wide yorker to the tramline","10 balls"],["Slower-ball grip & release practice","10 balls"],["Full-speed death-over spell","6 balls x 2"],["Shoulder cool-down band work","5 min"]],
        how:[
          ["Measure the run-up and hit the same marks every ball","Build to full speed without rushing the last stride","Same rhythm for yorkers and slower balls","Sprint through the crease, not to it"],
          ["Full arm extension, release at the highest point","Drive the ball DOWN at the popping crease","Aim at the base of off stump, not the block hole","Follow through straight, even at max effort"],
          ["Widen the line — target the wide yorker zone","Open the seam slightly at release","Practice hitting the tramline 8/10 times","If you miss, miss wide — never short"],
          ["Grip: seam between fingers, ball deep in palm","Release slower with the SAME arm speed","The deception is in the wrist, not the arm","Film your grip to compare with your fast ball"],
          ["Run the full spell at match intensity","Bowl to a plan: 6 yorkers, 4 slower, 2 bouncers","Recover fully between overs","Mental: visualise the situation you're defending"]
        ],
        coach:["Death bowling is execution under fatigue — train it tired","Wide yorker is the safest ball in the game","Slower ball only works if the arm speed looks the same","Bowl your plan, not to their shot"],
        mistakes:["Half-paced run-ups","Full tosses from trying too hard","Changing grip visibly","No match-situation pressure in practice"],
        rest:"Full between overs · 60 sec between yorker reps" },

      { name:"Cricketer's Yo-Yo & Endurance", tag:"Fitness", level:"Advanced", time:"45 min", cal:"520 kcal",
        desc:"Fielding for 90 overs and batting long innings needs a cricket-specific engine — build it here.",
        equip:"Cones 20 m apart, stopwatch, bat", muscles:"Legs · cardiovascular system",
        items:[["Yo-Yo intermittent test (20 m)","record level"],["Quick singles shuttle (bat required)","8 x 40 m"],["Outfield fielding run-throughs","6 x 60 m"],["Long batting/throwdown innings","15 min continuous"],["Cool-down jog + stretch","8 min"]],
        how:[
          ["Run to the far line and turn before the beep","Sharp turns — round loops kill the test","Breathe rhythmically through the nose on recovery","Record the level and beat it every 4 weeks"],
          ["Start at the crease, 'run' both ways touching down","Touch the ground with the bat at each turn","Explode out of each turn","Full recovery — this is max-effort work"],
          ["Sprint as if chasing a ball to the boundary","Attack the ball, gather, throw back","Recover by walking to the next start","Fielding-specific: never stop moving your feet"],
          ["Bat at a steady, high-percentage tempo","Rotate the strike, call loud and clear","Stay at the crease even when tired","This trains concentration as much as fitness"],
          ["Walk first, then easy jog, then dynamic stretch","Flush the legs: quad, hamstring, groin, calf","Hydrate with electrolytes","Sleep 8 hours — adaptation happens at night"]
        ],
        coach:["Cricket fitness is about repeat efforts, not marathon running","Fielding wins matches — train your fielding runs","Test every month and track the level","Batting long builds mental toughness too"],
        mistakes:["Only doing net sessions","Ignoring fielding fitness","Testing on a sore body","Skipping cool-down"],
        rest:"2 min between shuttles · full recovery in yo-yo format" },

      { name:"Power Hitting: Rotational Core", tag:"Power", level:"Advanced", time:"30 min", cal:"340 kcal",
        desc:"The whip that sends the ball to the stands — rotational power trained with med balls and bands.",
        equip:"Medicine ball, resistance band, bat", muscles:"Obliques · hips · lats · core",
        items:[["Med ball rotational throws","4 x 8 each"],["Band-resisted bat swings","3 x 12"],["Hip-hinge cable woodchop","3 x 12 each"],["Shadow swings: full power technique","2 x 10"],["Slog-sweep and lofted shot rehearsal","10 balls"],["Dead hang + thoracic extension","3 x 30 sec"]],
        how:[
          ["Stand side-on to the wall, ball at the hip","Drive through the BACK hip, then the front","Release the ball flat into the wall","Follow your hands with your eyes"],
          ["Band anchored at chest height, mimic the shot","Resist the follow-through, then control back","Same bat path as your real swing","Slow reps first, then match speed"],
          ["Cable or band from high to low across the body","Rotate from the hips — arms are just ropes","Keep the front foot planted and strong","Feel the oblique fire at the bottom"],
          ["Full technique, 100% intent but no ball","Complete the shot and hold your balance","Repeat your best shot shape every rep","Both front-foot and lofted shots"],
          ["Face a thrower or bowling machine","Clear the front leg to get under the ball","Keep the bat face through impact","Aim for specific zones, not just distance"],
          ["Hang to decompress the spine after rotation","Then extend over a roller for the thoracic spine","Breathe deeply — release the tension","30 sec each, no bouncing"]
        ],
        coach:["Power comes from the ground: back hip fires first","Rotational work needs FULL rest to stay explosive","Film your swing — compare with the pros","This pairs with your batting sessions, never before"],
        mistakes:["Arm-spinning without the hips","Too light a ball to matter","Rushing reps","Doing it fatigued before nets"],
        rest:"90 sec between throws · full rest on swings" }
    ]
  },
  khokho: {
    title: "Kho Kho Training", color: "linear-gradient(135deg,#ea580c,#fb923c)", emoji: "🏃",
    desc: "Explosive chasing, dodging, sitting-kicking and tag speed — the heart of Kho Kho.",
    plans: [
      { name:"Chase Speed & Tag explosive", tag:"Chasing", level:"Intermediate", time:"35 min", cal:"420 kcal",
        items:[["Ankle mobility + high knees","5 min"],["Straight sprints","6 x 20 m"],["Tag-reach lunges","3 x 10 each"],["Pursuit curve running","5 loops"],["Deceleration & stop drills","4 reps"]] },
      { name:"Dodging & Footwork", tag:"Dodging", level:"All levels", time:"30 min", cal:"330 kcal",
        items:[["Side-step cone dodges","3 x 8"],["Fake-and-go direction changes","6 min"],["Grass-court turning runs","4 x 15 m"],["Balance & single-leg holds","3 x 20 sec"],["Reaction mirror drill","6 min"]] },
      { name:"Sitting & Pole Skills", tag:"Defence", level:"Intermediate", time:"30 min", cal:"300 kcal",
        items:[["Pole push-off turns","3 x 6"],["Sit-reach & turn drills","3 x 10"],["Sitting position mobility","8 min"],["Lunge-push from pole","3 x 8"],["Quick rise to sprint","6 reps"]] },
      { name:"Endurance for Long Chases", tag:"Stamina", level:"Advanced", time:"45 min", cal:"500 kcal",
        items:[["Easy jog warm-up","8 min"],["Continuous run","15 min"],["Interval: 1 min fast / 1 min slow","8 rounds"],["Kho-specific shuttle laps","6 x 40 m"],["Cooldown + stretch","6 min"]] },
      { name:"Team Passing & Kho Timing", tag:"Team", level:"All levels", time:"35 min", cal:"290 kcal",
        items:[["Hand-tag accuracy targets","3 x 10"],["Pass-and-move sequences","8 min"],["Chain reaction drills (team)","6 min"],["Anticipation reaction sprints","4 x 10 m"],["Recovery breathing","3 min"]] },
      { name:"Pre-Match Activation", tag:"Pre-match", level:"All levels", time:"18 min", cal:"140 kcal",
        items:[["Dynamic warm-up","5 min"],["Short accelerations","4 x 30 m"],["Dodge rehearsal","4 min"],["Pole turns at match pace","4 reps"],["Focus & team chant","2 min"]] },
      { name:"Chaser Reaction & Reflex", tag:"Reflex", level:"Intermediate", time:"28 min", cal:"310 kcal",
        items:[["Whistle reaction starts","8 reps"],["Mirror chase partner drill","6 min"],["Peripheral vision ball drops","2 x 10"],["Rapid tag-turn sprints","5 x 20 m"],["Cognitive color-clap cues","5 min"]] },
      { name:"Speed Endurance Ladder", tag:"Endurance", level:"Advanced", time:"40 min", cal:"480 kcal",
        items:[["Ladder: 10-20-30-40 m repeats","4 sets"],["30 sec rest between reps","—"],["Court-length shuttles","8 reps"],["Tempo recovery jog","6 min"],["Cooldown + stretch","5 min"]] },
      { name:"Flexibility & Ground Movement", tag:"Flexibility", level:"All levels", time:"25 min", cal:"130 kcal",
        items:[["Groin butterfly stretch","2 x 30 sec"],["Seated straddle reach","2 x 30 sec"],["Hip 90/90 switches","2 x 8"],["Hamstring scoop walk","2 x 10 m"],["Ankle & wrist circles","2 x 15"]] },
      { name:"Defensive Zone Control", tag:"Tactics", level:"Intermediate", time:"32 min", cal:"300 kcal",
        items:[["Pole-cover shadow runs","6 min"],["Channel blocking footwork","3 x 8"],["Fake tag & retreat drills","6 reps"],["Defensive chain walking","5 min"],["Counter-escape sprints","5 reps"]] },
      { name:"Attacking Chase Patterns", tag:"Attack", level:"Advanced", time:"35 min", cal:"360 kcal",
        items:[["Entry-angle approach runs","6 reps"],["Tag feint combinations","8 reps"],["Diving tag reach","3 x 6"],["Post-tag escape turns","6 reps"],["Full-speed pattern rehearsal","5 min"]] },
      { name:"Agility Ladder & Cone Circuit", tag:"Agility", level:"All levels", time:"30 min", cal:"350 kcal",
        items:[["Ladder in-out feet","4 patterns"],["Lateral shuffle cones","4 x 15 m"],["Icky shuffle + sprint","4 reps"],["Reactive cone color touch","6 min"],["Jump-landing mechanics","3 x 8"]] },
      { name:"Chaser Burnout Endurance", tag:"Endurance", level:"Advanced", time:"40 min", cal:"490 kcal",
        desc:"Back-to-back chase simulation — keep tagging sharp when your legs are screaming.",
        equip:"Court/ground, poles, stopwatch", muscles:"Legs · lungs · groin",
        items:[["30 sec max chase / 30 sec walk","8 rounds"],["Pole-to-pole pursuit sprints","6 x 25 m"],["Tag-and-recover repeat","5 x (tag + jog back)"],["Curved chase runs at max pace","5 loops"],["Full-court chase simulation","4 min continuous"],["Cooldown walk + groin stretch","6 min"]],
        how:[
          ["Chase at 100% for 30 seconds — full tagging motion","Walk only, hands off hips, breathing controlled","Repeat 8 times — rounds 6–8 are the test","Stay on the balls of your feet during work"],
          ["Sprint from pole to pole, touch each one","Accelerate out of every touch","Full walk-back recovery","Keep the turns sharp — no rounding"],
          ["Explode into the tag, then recover by jogging","Reset your stance before the next rep","Quality tag reach every single time","Rest fully — this is power-endurance"],
          ["Run the curved paths of the court at max pace","Lean into the curve, low centre of gravity","Drive the outside leg hard","No deceleration through the bend"],
          ["Continuous 4 min: chase, tag, recover, repeat","Pace yourself — negative split the last minute","Keep technique when tired","Fight the mental urge to slow down"]
        ],
        coach:["Tag sharpness must survive fatigue — that's the drill","Short recoveries mimic real match chases","Groin work after every burnout session","Track rounds completed: beat it weekly"],
        mistakes:["Slacking the walk breaks","Lazy tag reach when tired","No stretching afterwards","Doing it on a hard concrete surface"],
        rest:"30 sec walk between rounds · 2 min between drills" },

      { name:"Reaction Dodge Under Pressure", tag:"Reflex", level:"Advanced", time:"30 min", cal:"330 kcal",
        desc:"Dodge with a real defender on you — pressure, feints and escape at reaction speed.",
        equip:"Partner, cones, court", muscles:"Legs · hips · nervous system",
        items:[["Mirror dodge drill (partner)","6 min"],["Pressure escape from standing tag","8 reps"],["Blind-turn reaction dodges","6 reps"],["Two-defender pinch escape","6 min"],["Max-speed dodge with chase","6 reps"],["Reaction breathing reset","3 min"]],
        how:[
          ["Face your partner, mirror every side-step","Stay low — react, don't anticipate","Explode the moment they commit","60 sec each, switch roles"],
          ["Start frozen in a pinned position","On the whistle: feint one way, escape the other","Push off the ground hard, chest low","Recover to stance immediately"],
          ["Stand facing away; turn on the clap and dodge","React to the sound — no early peeking","Low exit, fast feet","6 reps each side"],
          ["Two defenders cut the angles slowly","Scan both — pick the gap before it opens","Commit fully once you choose","Progress: defenders speed up weekly"],
          ["Full-speed dodge while a partner chases","Dip the shoulder, then explode away","Reach the safe line before the tag","Maximum intent — simulate a real escape"]
        ],
        coach:["Sell the feint with your whole body, not just feet","Reaction beats anticipation — wait for the trigger","Low wins: the lower athlete escapes","Recover your stance after every escape"],
        mistakes:["Dodging at the same speed each time","Standing tall under pressure","Anticipating the whistle","Skipping the breathing reset"],
        rest:"45 sec between escapes · 90 sec between blocks" },

      { name:"Sitting Skills & Pole Mastery", tag:"Defence", level:"Advanced", time:"32 min", cal:"320 kcal",
        desc:"The specialist skills that make defenders miss: fast sits, pole turns and rising into sprints.",
        equip:"Poles (or stand-in), mat, cones", muscles:"Groin · quads · ankles · hips",
        items:[["Sit-and-slide along the court","6 x 15 m"],["Pole push-off 180° turns","4 x 6 each side"],["Sit to sprint transitions","6 reps"],["Grass sit-dodge escapes","8 reps"],["Groin strength: side lunges","3 x 12 each"],["Hip + groin mobility flow","6 min"]],
        how:[
          ["Sit with knees bent, torso upright, hands ready","Push the ground to slide forward","Keep the hips low — no popping up","Explode to standing at the end of each slide"],
          ["Grip the pole with both hands, body coiled","Push hard and swing the body 180°","Land facing the new direction, balanced","Repeat other side — even power both ways"],
          ["From a full sit, explode up into a sprint","First step must be violent — no rocking","Cover5 m at max speed","Full recovery between reps"],
          ["Sit low and dodge a reaching defender","Lean away, push off the floor, escape","Keep the centre of gravity under you","8 quality escapes, reset each time"],
          ["Deep side lunge, back leg straight","Keep the chest up, sink into the groin","Feel the stretch, don't bounce","Control down, power back up"]
        ],
        coach:["Sitting speed decides whether you get 'kho'd'","Pole turns: push with the palms, not the arms alone","Groin health is #1 — never skip the mobility","Even power on both sides of the pole"],
        mistakes:["Rising too early from sits","One-sided pole turning","No groin warm-up before sits","Lazy transitions"],
        rest:"45 sec between pole reps · mobility at the end" }
    ]
  },
  basketball: {
    title: "Basketball Training", color: "linear-gradient(135deg,#dc2626,#f97316)", emoji: "🏀",
    desc: "Handles, shooting, vertical leap and court endurance — dominate both ends of the floor.",
    plans: [
      { name:"Ball Handling & Handles", tag:"Dribbling", level:"All levels", time:"30 min", cal:"270 kcal",
        items:[["Stationary pound dribbles","3 x 1 min"],["Crossover / between-legs / behind-back","3 rounds"],["Two-ball dribble drills","6 min"],["Full-court speed dribble","4 laps"],["Pressure dribble with defender","6 min"]] },
      { name:"Shooting Mechanics", tag:"Shooting", level:"All levels", time:"40 min", cal:"250 kcal",
        items:[["Form shooting close to basket","20 makes"],["Free-throw routine","20 shots"],["Catch-and-shoot 3-pointers","15 shots"],["Pull-up mid-range off dribble","15 shots"],["Off-screen curl shots","10 shots"]] },
      { name:"Vertical & Dunk Power", tag:"Power", level:"Advanced", time:"35 min", cal:"430 kcal",
        items:[["Box jumps","4 x 6"],["Depth jumps","3 x 5"],["Broad jumps","4 x 5"],["Squat jumps","3 x 10"],["Ankle pogo hops","3 x 20"]] },
      { name:"Court Endurance & Transition", tag:"Stamina", level:"Intermediate", time:"45 min", cal:"520 kcal",
        items:[["Full-court layup lines","10 min"],["Suicide sprints (baseline lines)","5 reps"],["Transition 3v2 fast break","8 min"],["Defensive slide shuffles","4 x 15 m"],["Cooldown jog","5 min"]] },
      { name:"Defense & Rebounding", tag:"Defense", level:"All levels", time:"35 min", cal:"390 kcal",
        items:[["Defensive stance hold","3 x 45 sec"],["Close-out & contest jumps","3 x 8"],["Box-out & seal drills","3 x 6"],["Charge-taking drills","6 reps"],["Rebound & outlet pass","8 reps"]] },
      { name:"Game IQ & Free Throws", tag:"Mental", level:"All levels", time:"25 min", cal:"140 kcal",
        items:[["Pick-and-roll reads (video/walkthrough)","6 min"],["Free-throw pressure ladder","10–1–10 routine"],["End-of-clock inbound plays","4 reps"],["Decision-making reaction drill","6 min"],["Breathing & focus routine","3 min"]] },
      { name:"Playmaking & Passing", tag:"Passing", level:"All levels", time:"30 min", cal:"240 kcal",
        items:[["Chest & bounce pass pairs","2 x 15"],["No-look pass drills","6 min"],["Outlet chest-pass targets","10 reps"],["Pocket pass to roll man","8 reps"],["Full-court one-hand push pass","6 reps"]] },
      { name:"Post Moves & Footwork", tag:"Post", level:"Intermediate", time:"35 min", cal:"310 kcal",
        items:[["Dream shake series","3 x 6"],["Drop step & finish","3 x 8"],["Up-and-under fakes","3 x 6"],["Jump hook both hands","12 reps"],["Face-up jab series","6 min"]] },
      { name:"Conditioning for 4 Quarters", tag:"Endurance", level:"Advanced", time:"45 min", cal:"540 kcal",
        items:[["Baseline-to-baseline sprints","6 reps"],["17s sideline drill","5 reps"],["Defensive slide + close-out combo","4 x 40 m"],["Court sprints with ball","6 laps"],["Active recovery walk","3 min"]] },
      { name:"Layup & Finishing Package", tag:"Finishing", level:"All levels", time:"32 min", cal:"280 kcal",
        items:[["Mikan drill","2 x 10"],["Inside-hand & outside-hand finishes","10 each"],["Euro-step finishes","8 reps"],["Contact finish through pads","6 reps"],["Reverse layups both sides","8 reps"]] },
      { name:"Ankle & Knee Injury Prevention", tag:"Care", level:"All levels", time:"20 min", cal:"120 kcal",
        items:[["Single-leg balance eyes-closed","3 x 30 sec"],["Nordic curl negatives","3 x 5"],["Lateral band walks","3 x 12"],["ACL landing mechanics","3 x 8"],["Calf & Achilles stretch","2 x 40 sec"]] },
      { name:"Warm-up Before Pickup Game", tag:"Pre-match", level:"All levels", time:"15 min", cal:"120 kcal",
        items:[["Light jog + arm circles","4 min"],["Defensive slides","2 x 15 m"],["Layup lines easy","4 min"],["Stretch hips & hamstrings","4 min"],["Shooting touch (10 makes)","3 min"]] },
      { name:"Contact Ball-Handling (Traffic Dribble)", tag:"Dribbling", level:"Advanced", time:"32 min", cal:"310 kcal",
        desc:"Dribble through contact like a pro — absorb the bump, keep the handle, finish through it.",
        equip:"Ball, cones, pad or partner", muscles:"Forearms · core · legs",
        items:[["One-hand pound with off-arm shield","3 x 30 sec"],["Bump-drive finishes (contact)","8 reps"],["Zig-zag dribble through cones","4 x 20 m"],["Retreat dribble + re-attack","6 reps"],["Full-speed transition handles","4 laps"],["Free-throw after contact","10 shots"]],
        how:[
          ["Pound the ball hard — it should snap back to the hand","Off-arm up as a shield, elbow in (no pushing)","Eyes forward the entire time","Switch hands each 30 sec"],
          ["Drive at a defender/pad, absorb the shoulder bump","Stay low — contact should hit your shoulder, not your hip","Pick up the dribble only inside the restricted area","Finish strong with both hands"],
          ["Dribble tight through the zig-zag","Change hands at every cone","Stay low, hips below your defender's","Explode out of the last cone to the rim"],
          ["Retreat with a protected dribble under pressure","Plant and re-attack the moment space opens","Change pace — slow retreat, violent attack","Never retreat with your head down"],
          ["Push the ball ahead in transition","Full speed while keeping it under control","Eyes up scanning the floor","Finish with a layup or pull-up"],
          ["Immediately after the last dribble drill, shoot","Heart rate high — simulate late-game FTs","Routine: 2 dribbles, deep breath, bend","Make 7/10 to end the session"]
        ],
        coach:["Dribble HARDER than game pace in practice","Eyes up — see the floor, not the ball","Absorb contact with your core, not your arm","Free throws while tired build clutch habits"],
        mistakes:["Protecting with a push-off foul","Standing tall while dribbling","Practising only at game speed","Skipping the tired free throws"],
        rest:"45 sec between drills · 90 sec before FT block" },

      { name:"Off-Ball Movement & Screens", tag:"Tactics", level:"Intermediate", time:"30 min", cal:"260 kcal",
        desc:"Score without the ball — cuts, curls, flares and reading the screen like a pro scorer.",
        equip:"Ball, 2 cones, 1–2 partners, hoop", muscles:"Legs · conditioning · timing",
        items:[["V-cut & L-cut to get open","8 reps each"],["Curl cut off a screen","6 reps"],["Flare screen & pop-out","6 reps"],["Backdoor cut on overplay","6 reps"],["Screen-the-scraper relay","5 min"],["Catch-and-shoot off movement","10 shots"]],
        how:[
          ["Start low, walk your defender down, then CUT hard","Plant the inside foot and explode out of the cut","Show your hands as a target","Come to the ball, don't wait for it"],
          ["Approach the screener shoulder-to-shoulder","Read the defender: if they trail, curl tightly","If they go under, flare out for the shot","Finish the cut at game speed"],
          ["Use the screen away from the ball","Read the defender's top hip — that's your opening","Pop out to the 3-point line, ready to shoot","Feet set before the catch"],
          ["Feel the defender overplaying the passing lane","Plant hard and cut backdoor behind them","Call for the ball with a target hand","Finish at the rim with contact"],
          ["Sprint off the screen, catch, square up","Feet down before the ball arrives","Rise straight up — no drifting","Make it clean: 10 makes before you leave"]
        ],
        coach:["Most baskets come from off-ball movement","Cut with SPEED — jogging cuts don't get open","Read the defender, don't pre-decide","Always show target hands"],
        mistakes:["Standing and watching after passing","Setting lazy screens","Curling without reading the defense","Not squaring up on the catch"],
        rest:"30 sec between cuts · 60 sec between shooting sets" },

      { name:"Clutch Free-Throw Routine", tag:"Shooting", level:"All levels", time:"20 min", cal:"130 kcal",
        desc:"Build a free-throw routine you can trust when the game is on the line.",
        equip:"Ball, hoop, partner (optional)", muscles:"Legs · focus",
        items:[["Form shooting close range","10 makes"],["Routine rehearsal (same every time)","10 reps"],["Pressure ladder: 10–1–10","complete"],["Tired free throws (after sprints)","10 shots"],["10 in a row challenge","attempt x3"]],
        how:[
          ["Feet shoulder-width, shooting hand under the ball","Bend knees in rhythm — one smooth motion","Hold the follow-through like a statue","Rim, net, nothing else in your eyes"],
          ["Pick 3 actions: dribble-dribble, deep breath, spin","Do the EXACT same sequence every shot","Same breath timing every attempt","Ritual beats thought under pressure"],
          ["Make 10, then 1, then 10 — miss restarts the set","Stay calm: the routine never changes","Score pressure from the count, not the game","Complete before you leave the gym"],
          ["Sprint 4 lines, grab the ball, shoot immediately","Heart at 85%+, legs burning","Focus on the routine — it carries you","Make 6/10 to pass"],
          ["Ten makes in a row — one miss and restart","Breathe between shots, never rush","Trust your routine","Three attempts to close the session"]
        ],
        coach:["Free throws are 80% routine, 20% technique","Same routine every single time — no exceptions","Practice them tired and under pressure","Confidence comes from completed ladders"],
        mistakes:["Changing the routine between shots","Rushing after a miss","Shooting only when fresh","Eyes on the crowd"],
        rest:"15–20 sec between shots · 90 sec between sets" }
    ]
  },
  gym: {
    title: "Gym / Full Body Trainer", color: "linear-gradient(135deg,#0891b2,#22d3ee)", emoji: "🏋️",
    desc: "A complete gym trainer — push, pull, legs, arms and full-body strength programs.",
    plans: [
      { name:"Full Body Strength (Beginner)", tag:"Strength", level:"Beginner", time:"50 min", cal:"380 kcal",
        items:[["Goblet squats","3 x 10"],["Push-ups (or bench press)","3 x 10"],["Bent-over rows","3 x 10"],["Dumbbell shoulder press","3 x 12"],["Plank hold","3 x 40 sec"],["Dead bug core","3 x 10"]] },
      { name:"Push Day (Chest / Shoulders / Triceps)", tag:"Push", level:"Intermediate", time:"55 min", cal:"420 kcal",
        items:[["Barbell bench press","4 x 8"],["Incline dumbbell press","3 x 10"],["Overhead press","4 x 8"],["Lateral raises","3 x 15"],["Triceps rope pushdown","3 x 12"],["Dips","3 x 10"]] },
      { name:"Pull Day (Back / Biceps)", tag:"Pull", level:"Intermediate", time:"55 min", cal:"430 kcal",
        items:[["Pull-ups / lat pulldown","4 x 8"],["Barbell rows","4 x 8"],["Seated cable row","3 x 12"],["Face pulls","3 x 15"],["Barbell curls","3 x 10"],["Hammer curls","3 x 12"]] },
      { name:"Leg Day (Quads / Hams / Glutes)", tag:"Legs", level:"Advanced", time:"60 min", cal:"520 kcal",
        items:[["Back squats","5 x 5"],["Romanian deadlifts","4 x 8"],["Walking lunges","3 x 12 each"],["Leg press","3 x 12"],["Leg curls","3 x 12"],["Calf raises","4 x 15"]] },
      { name:"Upper Body Hypertrophy", tag:"Muscle", level:"Intermediate", time:"55 min", cal:"400 kcal",
        items:[["Incline bench press","4 x 10"],["Cable rows","4 x 12"],["Arnold press","3 x 10"],["Incline DB curls","3 x 12"],["Skull crushers","3 x 12"],["Rear-delt flyes","3 x 15"]] },
      { name:"HIIT Fat Burn Circuit", tag:"Fat Loss", level:"All levels", time:"30 min", cal:"560 kcal",
        items:[["Jumping jacks","40 sec"],["Kettlebell swings","40 sec"],["Mountain climbers","40 sec"],["Burpees","40 sec"],["Rest","20 sec — x 5 rounds"],["Cooldown","5 min"]] },
      { name:"Beginner Mobility & Recovery", tag:"Recovery", level:"Beginner", time:"25 min", cal:"120 kcal",
        items:[["Cat-cow flow","2 x 10"],["World's greatest stretch","2 x 6 each"],["Hip 90/90 switches","2 x 8"],["Thoracic rotations","2 x 10"],["Foam roll quads & lats","6 min"],["Box breathing","3 min"]] },
      { name:"Arms & Shoulders Blast", tag:"Arms", level:"Intermediate", time:"40 min", cal:"300 kcal",
        items:[["Close-grip bench press","3 x 10"],["EZ-bar curls","3 x 10"],["Lateral raise drop sets","3 x 12"],["Overhead triceps extension","3 x 12"],["Cable lateral raise","3 x 15"],["Shrug variations","3 x 12"]] },
      { name:"Dumbbell Only Full Body", tag:"Home Gym", level:"All levels", time:"45 min", cal:"400 kcal",
        items:[["DB goblet squat","4 x 10"],["DB floor press","4 x 10"],["DB one-arm row","4 x 10 each"],["DB thrusters","3 x 12"],["DB Romanian deadlift","4 x 10"],["DB carry (farmer walk)","3 x 30 m"]] },
      { name:"Push / Pull / Legs — Day A", tag:"PPL", level:"Intermediate", time:"60 min", cal:"480 kcal",
        items:[["Bench press","4 x 6"],["Weighted pull-ups","4 x 6"],["Barbell back squat","4 x 6"],["Overhead press","3 x 8"],["Lat pulldown","3 x 10"],["Leg curl","3 x 12"]] },
      { name:"Explosive Power & Plyometrics", tag:"Power", level:"Advanced", time:"40 min", cal:"460 kcal",
        items:[["Power clean / trap bar jump","5 x 3"],["Box jump (max height)","4 x 5"],["Medicine ball chest pass","3 x 8"],["Sprint starts 20 m","6 reps"],["Clap push-ups","3 x 8"]] },
      { name:"Weakness Fix: Shoulders & Posture", tag:"Posture", level:"All levels", time:"30 min", cal:"200 kcal",
        items:[["Face pulls","4 x 15"],["Prone Y-T-W raises","2 x 10"],["Band dislocates","3 x 12"],["Chin tucks","3 x 10"],["Scapular push-ups","3 x 12"],["Dead hang","3 x 30 sec"]] },
      { name:"Upper/Lower Split — Day B", tag:"Split", level:"Advanced", time:"60 min", cal:"470 kcal",
        items:[["Incline DB press","4 x 10"],["Chest-supported row","4 x 10"],["Front squat","4 x 8"],["Lateral raise","3 x 15"],["Preacher curl","3 x 10"],["Standing calf raise","4 x 15"]] },
      { name:"5-Day Bro Split (Chest)", tag:"Split", level:"Advanced", time:"55 min", cal:"420 kcal",
        items:[["Flat barbell press","4 x 8"],["Incline cable fly","3 x 12"],["Pec deck","3 x 12"],["Push-up burnout","2 to failure"],["Overhead triceps ext","3 x 12"],["Cable crunch","3 x 15"]] },
      { name:"Kettlebell Complex", tag:"Conditioning", level:"Intermediate", time:"35 min", cal:"500 kcal",
        items:[["KB swing","10"],["KB goblet squat","10"],["KB clean","10"],["KB strict press","10"],["= 1 round, rest 90 sec","4 rounds"],["Dead hang cooldown","2 x 30 sec"]] },
      { name:"Deadlift & Posterior Chain", tag:"Strength", level:"Advanced", time:"55 min", cal:"500 kcal",
        items:[["Conventional deadlift","5 x 3"],["Hip thrust","4 x 10"],["Good mornings","3 x 10"],["Single-leg RDL","3 x 10 each"],["Barbell row","4 x 8"],["Back extension","3 x 12"]] },
      { name:"Heavy 5×5 Strength Block", tag:"Strength", level:"Intermediate", time:"60 min", cal:"470 kcal",
        desc:"The classic strength builder — heavy compound 5×5 with linear progression every week.",
        equip:"Barbell, rack, bench", muscles:"Full body",
        items:[["Back squat","5 x 5"],["Bench press","5 x 5"],["Barbell row","5 x 5"],["Overhead press","5 x 5"],["Barbell curl","3 x 8"],["Plank","3 x 60 sec"]],
        how:[
          ["Warm up with 2 light sets before the work sets","Brace hard — big breath into the belly, hold","Drive up explosively, reset between each rep","Add 2.5 kg only when all 5×5 are clean"],
          ["Shoulder blades pinned, feet driving into the floor","Lower to the lower chest under control","Press up and slightly back, chest proud","Spotter or safety bars for heavy sets"],
          ["Flat back, hinge to just above parallel","Pull to the lower ribs, squeeze the blades","Lower fully each rep — no bouncing","Same weight progression as the squat"],
          ["Ribs down, glutes squeezed before pressing","Press in a straight line, head through at lockout","If the back arches, the weight is too heavy","Strict reps only — no leg drive"],
          ["Elbows pinned, no swinging the torso","Squeeze hard at the top for 1 second","Lower for 2 seconds","Progress by reps first, then weight"],
          ["Elbows under shoulders, straight line body","Squeeze glutes and brace like a punch is coming","Breathe steadily through the hold","Add 10 sec each week"]
        ],
        coach:["Progressive overload: add 2.5 kg when all sets are clean","Warm-up sets are mandatory — 40/60/80% of work weight","Rest 2–3 min between heavy sets","Deload (drop 10%) every 4th week"],
        mistakes:["Adding weight before hitting clean reps","Skipping warm-up sets","Lifting with a rounded back","No rest between heavy sets"],
        rest:"2–3 min between compound sets" },
      { name:"Glute & Hamstring Builder", tag:"Muscle", level:"Intermediate", time:"50 min", cal:"420 kcal",
        desc:"Build the posterior chain that powers your sprint and protects your hamstrings.",
        equip:"Barbell, cable, bench, band", muscles:"Glutes · hamstrings · lower back",
        items:[["Romanian deadlift","4 x 8"],["Barbell hip thrust","4 x 10"],["Nordic curl (assisted)","3 x 5"],["Seated leg curl","4 x 12"],["Cable pull-through","3 x 15"],["Single-leg glute bridge","3 x 12 each"]],
        how:[
          ["Soft knees, push the hips BACK like closing a door","Feel the hamstring stretch — stop before the back rounds","Drive the hips forward to stand, glutes squeezed","Bar stays close to the legs the whole way"],
          ["Upper back on bench, chin slightly tucked","Ribs down — don't arch the lower back","Drive through the heels to full lockout","Pause 1 second at the top of every rep"],
          ["Anchor the ankles, body in a straight line","Lower as slowly as possible (3 seconds)","Catch with the hands, push back up","Assist with a band until strict reps are possible"],
          ["Seat pad at mid-thigh, chest against the pad","Curl the heels toward the glutes","Control the return — 2 seconds","Squeeze hard at the contracted position"],
          ["Cable between the legs, hinge at the hips","Snap the hips forward, stand tall","Do NOT squat it — hinge, then extend","Finish with glutes squeezed, not lower back"],
          ["One foot planted, other leg extended","Bridge up until hips are level","Hold 1 second at the top","Lower slowly — hips never rotate"]
        ],
        coach:["Posterior chain = sprint speed + injury insurance","Train glutes 2× per week for athletic gains","Feel the hamstring stretch on every RDL","Nordics are gold — do them slowly"],
        mistakes:["Rounding the back on RDLs","Hyperextending the lower back on thrusts","Rushing the Nordic eccentric","Training hamstrings only on leg day"],
        rest:"90 sec between sets · 2 min on heavy RDLs" },
      { name:"Upper Body Size (Push/Pull Supersets)", tag:"Muscle", level:"Intermediate", time:"55 min", cal:"430 kcal",
        desc:"Grow upper-body muscle fast with brutal push/pull supersets — no wasted time.",
        equip:"Dumbbells, cables, pull-up bar", muscles:"Chest · back · shoulders · arms",
        items:[["Superset: incline DB press + cable row","4 rounds"],["Superset: pull-ups + push-ups","3 rounds"],["Superset: lateral raise + face pull","3 rounds"],["Superset: curls + skull crushers","3 rounds"],["Burnout: push-ups to failure","1 set"],["Stretch: chest & lats","5 min"]],
        how:[
          ["Press first, then immediately row — no rest","Both movements at 8–12 rep range","Keep the press controlled, the row squeezed","90 sec rest, then repeat 4 rounds"],
          ["Hang strict, pull the chest to the bar","Immediately drop and rep push-ups to near failure","If pull-ups fail, switch to band-assisted","3 rounds — quality until form breaks"],
          ["Raise to shoulder height, then immediately pull apart","Lateral delts then rear delts — complete shoulder work","Light weight, perfect form","No rest between the pair"],
          ["Curl to the top, then immediately skull-crush","Elbows fixed during both movements","8–12 reps each","3 rounds, last round to failure"],
          ["End with push-ups until you cannot lock out","Chest and triceps completely flushed","Perfect form or stop","One set — leave nothing in the tank"]
        ],
        coach:["Supersets save time AND increase density","Rest only between rounds, not between the pair","Push/pull balance keeps shoulders healthy","Add a rep or weight every week"],
        mistakes:["Going too heavy on supersets","Resting between pair exercises","Skipping the stretch","No progression tracking"],
        rest:"90 sec between rounds · no rest within superset" },
      { name:"Engine: Row & Bike Intervals", tag:"Conditioning", level:"All levels", time:"30 min", cal:"520 kcal",
        desc:"Low-impact conditioning that torches calories while saving your joints.",
        equip:"Rowing machine and/or stationary bike", muscles:"Full body · cardiovascular",
        items:[["Row: 500 m hard / 1 min easy","5 rounds"],["Bike: 30 sec max / 30 sec spin","8 rounds"],["Row: 2000 m steady state","1 piece"],["Bike: cooldown spin","5 min"],["Core finisher: hanging knee raise","3 x 12"],["Stretch & breathe","5 min"]],
        how:[
          ["Drive with the LEGS first, then lean, then pull arms","Damper on 5–6, not maximum","Hard 500 m: you should want the rest","Easy minute: paddle slowly, breathe"],
          ["Cadence 90+ rpm on the easy spin, 110+ on max","Stay seated on the hard efforts — no bouncing","Smooth circles through the pedals","Keep the rest strictly 30 sec"],
          ["Steady pace you could hold for 30 min","Perfect technique the whole way","Break it into 4 × 500 m mentally","Finish the last 200 m slightly faster"],
          ["Spin easy, heart rate dropping","Loosen the shoulders and jaw","Transition straight into core","Breathe through the nose"],
          ["Hang from the bar, shoulders active","Knees to chest without swinging","Lower slowly — 2 seconds","12 strict reps, 3 sets"]
        ],
        coach:["Intervals: max effort means MAX effort","Technique on the rower beats resistance setting","Low impact = you can do this more often","Track your 2000 m time monthly"],
        mistakes:["Damper on max (bad technique)","Half-hearted 'hard' intervals","Slacking the rest timer","Skipping the core finisher"],
        rest:"1 min after 500 m · 30 sec on bike rounds" }
    ]
  },
  abs: {
    title: "Abs & Core Training", color: "linear-gradient(135deg,#db2777,#f472b6)", emoji: "💪",
    desc: "Sculpt a strong six-pack and bulletproof core with these targeted ab routines.",
    plans: [
      { name:"Six-Pack Starter Circuit", tag:"Core", level:"Beginner", time:"18 min", cal:"160 kcal",
        items:[["Crunches","3 x 20"],["Bicycle crunches","3 x 20"],["Leg raises","3 x 12"],["Plank hold","3 x 30 sec"],["Rest","45 sec between sets"]] },
      { name:"Upper Abs Focus", tag:"Abs", level:"All levels", time:"20 min", cal:"170 kcal",
        items:[["Standard crunches","4 x 25"],["Reverse crunches","3 x 15"],["Toe touches","3 x 20"],["Cable crunches","3 x 15"],["Ab roller (or slide outs)","3 x 8"]] },
      { name:"Lower Abs & Obliques", tag:"Obliques", level:"Intermediate", time:"22 min", cal:"190 kcal",
        items:[["Hanging leg raises","4 x 12"],["Flutter kicks","3 x 30"],["Russian twists","3 x 20"],["Side plank (each side)","3 x 30 sec"],["Windshield wipers","3 x 10"]] },
      { name:"Six-Pack Shred (Advanced)", tag:"Shred", level:"Advanced", time:"25 min", cal:"280 kcal",
        items:[["Dragon flag negatives","3 x 6"],["Hanging knee-to-elbow","4 x 12"],["V-ups","3 x 20"],["Plank shoulder taps","3 x 20"],["Side plank hip dips","3 x 15"],["Hollow body hold","3 x 30 sec"]] },
      { name:"Core for Athletes (Rotational)", tag:"Sport Core", level:"Intermediate", time:"22 min", cal:"220 kcal",
        items:[["Medicine ball slams","3 x 12"],["Rotational throws","3 x 10 each"],["Pallof press","3 x 12 each"],["Bear crawl","3 x 15 m"],["Farmer carry (heavy)","3 x 30 m"]] },
      { name:"Abs Cool-down & Stretch", tag:"Recovery", level:"All levels", time:"10 min", cal:"60 kcal",
        items:[["Cobra stretch","2 x 30 sec"],["Child's pose","2 x 40 sec"],["Seated twist","2 x 30 sec each"],["Hip flexor stretch","2 x 30 sec"],["Deep breathing","2 min"]] },
      { name:"5-Minute Daily Burner", tag:"Quick", level:"All levels", time:"5 min", cal:"70 kcal",
        items:[["Mountain climbers","30 sec"],["Bicycle crunches","30 sec"],["Plank","30 sec"],["Rest","15 sec — repeat x 3"],["Finish: hollow hold","20 sec"]] },
      { name:"Deep Core Stability", tag:"Stability", level:"Beginner", time:"20 min", cal:"140 kcal",
        items:[["Dead bug","3 x 10"],["Bird dog","3 x 10 each"],["Side plank","3 x 25 sec"],["Glute bridge march","3 x 12"],["McGill curl-up","3 x 10"],["Cat-cow","2 x 10"]] },
      { name:"Oblique V-Cut Workout", tag:"Obliques", level:"Intermediate", time:"22 min", cal:"210 kcal",
        items:[["Standing cable woodchop","3 x 12 each"],["Bicycle crunch slow","3 x 20"],["Side jackknife","3 x 12 each"],["Heel touches","3 x 20"],["Side plank rotation","3 x 10 each"]] },
      { name:"Hanging Core Mastery", tag:"Advanced", level:"Advanced", time:"25 min", cal:"250 kcal",
        items:[["Hanging leg raise (straight)","4 x 10"],["Hanging windshield wipers","3 x 8"],["Toes-to-bar","3 x 10"],["L-sit hold","3 x max"],["Slow negative leg raise","3 x 6"]] },
      { name:"Plank Challenge Ladder", tag:"Challenge", level:"All levels", time:"15 min", cal:"130 kcal",
        items:[["Front plank","30 sec"],["Side plank L","30 sec"],["Side plank R","30 sec"],["Reverse plank","30 sec"],["Rest 30 sec — ladder +15 sec","4 rounds"],["Cool-down stretch","3 min"]] },
      { name:"Ab Roller / Wheel Pro", tag:"Abs", level:"Advanced", time:"20 min", cal:"230 kcal",
        items:[["Ab wheel from knees","4 x 10"],["Ab wheel roll-back hold","3 x 20 sec"],["Stir-the-wheel circles","3 x 8"],["Body saw (plank on sliders)","3 x 12"],["Farmer carry anti-extension","3 x 25 m"]] },
      { name:"Footballer Power Core", tag:"Sport Core", level:"Advanced", time:"25 min", cal:"280 kcal",
        desc:"The core that transfers sprint power into shooting power — built for the pitch, not the mirror.",
        equip:"Medicine ball, band, mat", muscles:"Obliques · deep core · hips",
        items:[["Med ball rotational scoop throw","4 x 8 each"],["Pallof press with step-out","3 x 10 each"],["Hollow body hold","3 x 40 sec"],["Single-leg V-up","3 x 12 each"],["Copenhagen plank","3 x 20 sec each"],["Standing woodchop (band)","3 x 12 each"]],
        how:[
          ["Squat slightly, ball at the outside hip","Drive through the ground and THROW across","Follow the ball with your eyes and hips","Reset fully between max-power throws"],
          ["Press the band out, HOLD, then step laterally","Resist the rotation — hips stay square","One step each way = one rep","Keep the shoulders down, core braced"],
          ["Lie back, arms overhead, legs long","Lift shoulders and legs into a banana shape","Lower back pressed into the floor","Breathe steadily through the hold"],
          ["Lie flat, one leg extended, one bent","Lift the opposite hand and foot to meet","Slow — no momentum","Switch sides evenly"],
          ["Top leg on a bench, bottom leg hangs","Lift the bottom leg to meet the top","Hips stay level, don't sag","20 sec each side, quality over time"],
          ["Side-on to the band at head height","Chop DOWN across the body using the hips","Keep arms nearly straight — the core does it","Feel the oblique at the bottom of every rep"]
        ],
        coach:["Football power is rotational — train it that way","Anti-rotation first: Pallof and Copenhagen protect the groin","Train core 3× per week, never to failure before speed","Progress by time and control, not just reps"],
        mistakes:["Using momentum on throws","Sagging hips in planks","Rushing the Copenhagen","Training core before sprints"],
        rest:"60 sec between sets · 90 sec on throws" },
      { name:"Standing Abs & Anti-Sag Posture", tag:"Posture", level:"All levels", time:"18 min", cal:"150 kcal",
        desc:"Abs you can use standing up — anti-extension, posture and a midsection that works in real life.",
        equip:"Cable/band, mat", muscles:"Abs · lower back · postural muscles",
        items:[["Cable woodchop (standing)","3 x 12 each"],["Suitcase carry","3 x 30 m each side"],["Bird dog","3 x 10 each"],["Wall angels","3 x 10"],["Dead bug","3 x 10 each"],["Chin tuck + posture hold","3 x 30 sec"]],
        how:[
          ["Stand side-on, band at head height","Rotate through the hips to chop down","Keep the arms long, core tight","Slow return — never let the band snap back"],
          ["Hold one heavy dumbbell at your side ONLY","Walk tall — no leaning toward or away","Shoulders level, ribs down","Switch sides; the core fights the lean"],
          ["All fours, extend opposite arm and leg","Hips stay perfectly level — no tilting","Pause 2 seconds at the top","Slow and controlled; breathe normally"],
          ["Back flat on the wall, arms at 90°","Slide arms up the wall keeping contact","Feel the shoulder blades move","Stop if the lower back arches off the wall"],
          ["On your back, arms up, hips at 90°","Lower opposite arm and leg slowly","Lower back stays pressed into the floor","Return and switch — control over speed"],
          ["Sit tall, chin gently pulled back (double chin)","Hold the length — crown of the head to ceiling","Shoulders down and back","30 sec of perfect alignment"]
        ],
        coach:["Standing core = real-world strength","Anti-lateral and anti-extension beats crunches","Posture work fixes desk-office positioning","Do this flow 3–4× per week"],
        mistakes:["Leaning in the suitcase carry","Rushing the bird dog","Forcing the neck on chin tucks","Arching on wall angels"],
        rest:"45 sec between sets · flow style" },
      { name:"Plank Marathon Endurance", tag:"Challenge", level:"Advanced", time:"20 min", cal:"200 kcal",
        desc:"A brutal test of core endurance — build to a 5-minute plank and never drop again.",
        equip:"Mat, stopwatch", muscles:"Full core · shoulders · glutes",
        items:[["Max plank test (record time)","1 attempt"],["Plank with shoulder taps","3 x 20"],["Side plank hold each side","3 x 60 sec"],["Plank hip dips","3 x 15"],["Plank pull-through","3 x 10 each"],["Reverse plank hold","3 x 45 sec"]],
        how:[
          ["Elbows under shoulders, body one straight line","Squeeze glutes, brace hard, tuck the chin slightly","Breathe steadily — do NOT hold your breath","Record the time; retest weekly until 5:00"],
          ["Feet wide for stability","Touch the opposite shoulder WITHOUT hip rotation","Core locked — the torso doesn't twist","Alternate slowly; hips stay square"],
          ["Elbow under shoulder, feet stacked","Drive hips to the ceiling, body straight","Top hip stacks over the bottom one","60 sec each side — quality lines"],
          ["From plank, dip one hip toward the floor","Rotate through the core, not the shoulders","Alternate sides smoothly","Control both directions"],
          ["Reach under the body and pull a light object across","Hips stay square — no twisting to reach","Alternate hands each rep","Light weight: this is stability work"],
          ["Sit, hands behind you, legs straight","Lift hips until body forms a straight line","Squeeze glutes, keep the chest open","45 sec — lower back never sags"]
        ],
        coach:["Plank endurance is built with TIME UNDER TENSION","Breathe the whole hold — oxygen protects the core","Add 15 sec per week toward5 minutes","Endurance planks are a finisher, never a warm-up"],
        mistakes:["Hips piking up or sagging","Holding the breath","Only training the front plank","Skipping the side work"],
        rest:"45–60 sec between holds" }
    ]
  },
  recovery: {
    title: "Warm-up & Recovery", color: "linear-gradient(135deg,#0d9488,#5eead4)", emoji: "🧘",
    desc: "Prepare your body before training and repair it after — stay flexible, mobile and injury-free.",
    plans: [
      { name:"Dynamic Warm-up (Any Sport)", tag:"Warm-up", level:"All levels", time:"12 min", cal:"90 kcal",
        items:[["Light jog / skipping","3 min"],["Leg swings front-to-back","2 x 10 each"],["Leg swings side-to-side","2 x 10 each"],["Walking lunges with twist","2 x 8"],["High knees + butt kicks","2 x 20 m"],["Build-up accelerations","3 x 40 m"]] },
      { name:"Full Body Static Stretch", tag:"Stretch", level:"All levels", time:"15 min", cal:"70 kcal",
        items:[["Standing quad stretch","2 x 30 sec each"],["Hamstring toe touch","2 x 30 sec"],["Hip flexor lunge stretch","2 x 30 sec each"],["Chest doorway stretch","2 x 30 sec"],["Shoulder cross-body stretch","2 x 30 sec each"],["Cat-cow spinal flow","2 x 10"]] },
      { name:"Foam Rolling Recovery", tag:"Recovery", level:"All levels", time:"15 min", cal:"80 kcal",
        items:[["Roll quads & IT band","2 min each side"],["Roll hamstrings & calves","2 min each"],["Roll glutes (figure-4)","1 min each"],["Upper back roll","2 min"],["Lats roll","1 min each"],["Deep breathing cooldown","2 min"]] },
      { name:"Post-Match Recovery Flow", tag:"Recovery", level:"All levels", time:"20 min", cal:"90 kcal",
        items:[["Easy walk / light spin","5 min"],["Pigeon pose","2 x 45 sec each"],["Seated hamstring + twist","2 x 40 sec"],["Child's pose with reach","2 x 45 sec"],["Legs-up-the-wall","3 min"],["Box breathing","2 min"]] },
      { name:"Mobility for Hips", tag:"Mobility", level:"All levels", time:"14 min", cal:"80 kcal",
        items:[["90/90 hip switches","2 x 10"],["Deep squat hold","3 x 30 sec"],["Couch stretch","2 x 45 sec each"],["Hip circles (all fours)","2 x 10 each"],["Frog stretch","2 x 40 sec"],["Single-leg bridge","2 x 12 each"]] },
      { name:"Shoulder Mobility & Health", tag:"Mobility", level:"All levels", time:"12 min", cal:"70 kcal",
        items:[["Arm circles (small→big)","2 x 12"],["Band pull-aparts","3 x 15"],["Wall slides","3 x 10"],["Sleeper stretch","2 x 30 sec each"],["Thread-the-needle","2 x 8 each"],["Scapular push-ups","2 x 12"]] },
      { name:"Yoga Flow for Athletes", tag:"Yoga", level:"All levels", time:"25 min", cal:"130 kcal",
        items:[["Sun salutation A","3 rounds"],["Warrior I → II → III","2 each side"],["Downward dog to cobra","2 x 8"],["Pigeon pose","2 x 60 sec each"],["Standing forward fold","2 x 45 sec"],["Savasana + breath","3 min"]] },
      { name:"Sleep & Recovery Protocol", tag:"Habits", level:"All levels", time:"10 min", cal:"0 kcal",
        items:[["No screens 30 min before bed","habit"],["Room cool & dark","habit"],["Protein casein / milk before bed","habit"],["8 hours sleep target","habit"],["Morning sunlight 10 min","habit"],["Next-day light mobility check","5 min"]] }
    ]
  },
  home: {
    title: "Home Training (No Gym Needed)", color: "linear-gradient(135deg,#e11d48,#fb7185)", emoji: "🏠",
    desc: "Train at home — bodyweight gym sessions, mat abs and sport-specific drills that need only a small space (or nothing at all).",
    plans: [
      { name:"No-Equipment Full Body (Home Gym)", tag:"Bodyweight", level:"Beginner", time:"30 min", cal:"320 kcal",
        desc:"The complete gym workout using only your body and 2×2 m of floor space.",
        equip:"None — mat/floor space (2×2 m)", muscles:"Full body",
        items:[["Push-ups (knees if needed)","4 x 12"],["Bodyweight squats","4 x 15"],["Glute bridges","4 x 15"],["Superman hold","3 x 30 sec"],["Plank","3 x 45 sec"],["Jumping jacks","3 x 40 sec"]],
        coach:["Brace your core like someone is about to poke you","Control the lowering phase for 2 seconds","Breathe out on the effort, in on the return"],
        mistakes:["Sagging hips in plank","Half-range squats","Rushing reps instead of controlling them"],
        rest:"30 sec between exercises · 90 sec between rounds · 3 rounds" },
      { name:"Dumbbell Home Gym (If You Have Weights)", tag:"Weights", level:"Intermediate", time:"45 min", cal:"420 kcal",
        desc:"A real strength session with just one pair of dumbbells at home.",
        equip:"Pair of dumbbells, a chair/bench", muscles:"Full body",
        items:[["Goblet squat","4 x 10"],["Single-arm DB row","4 x 10 each"],["Dumbbell floor press","4 x 10"],["DB Romanian deadlift","4 x 10"],["Overhead press","3 x 10"],["Farmer walk","3 x 30 m"]],
        coach:["Pick a weight where the last 2 reps are hard","Full range of motion every rep","Rest 90 sec — enough to keep quality high"],
        mistakes:["Using momentum to swing the weight","Skipping legs because it's 'upper day'","Too short rest, sloppy form"],
        rest:"90 sec between sets · superset row + press to save time" },
      { name:"Mat Abs at Home", tag:"Abs", level:"All levels", time:"20 min", cal:"180 kcal",
        desc:"Six-pack work on a mat — no equipment, no excuses.",
        equip:"Mat (optional)", muscles:"Abs · obliques · deep core",
        items:[["Crunches","3 x 20"],["Bicycle crunches","3 x 20"],["Leg raises","3 x 12"],["Russian twists","3 x 20"],["Plank","3 x 45 sec"],["Side plank each side","3 x 30 sec"]],
        coach:["Roll your spine up one vertebra at a time","Press your lower back into the mat on leg raises","Quality contractions — don't just count reps"],
        mistakes:["Pulling on your neck","Arching the lower back","Holding breath during holds"],
        rest:"30 sec between exercises · repeat circuit 2–3 times" },
      { name:"Football Ball Mastery (Small Space)", tag:"Football", level:"All levels", time:"30 min", cal:"260 kcal",
        desc:"Pro first-touch and close control trained in a hallway, garage or backyard — just like Yamal's garden sessions.",
        equip:"Ball, wall, 2 cones (2×3 m space)", muscles:"Feet · ankles · hips",
        items:[["Toe taps on the ball","3 x 1 min"],["Rolls inside-outside","3 x 1 min"],["Wall passing, back-foot receive","3 x 10"],["Tight-space figure-8 dribble","6 min"],["V-cuts & pull-backs","3 x 8"],["Juggling challenge","3 min"]],
        coach:["Keep the ball within one step's reach at all times","Use the sole of the foot like street/futsal players","Head up for 1 second every few touches"],
        mistakes:["Only using instep","Practising at walking speed","No weak-foot work"],
        rest:"30 sec between drills · full water break between rounds" },
      { name:"Speed & Agility at Home (No Equipment)", tag:"Speed", level:"Intermediate", time:"25 min", cal:"300 kcal",
        desc:"Build acceleration and foot speed in a corridor, driveway or garden.",
        equip:"Tape/chalk for ladder, cones or shoes as markers", muscles:"Calves · quads · glutes",
        items:[["Ankle pogo hops","3 x 20"],["Line hops (single leg)","3 x 15 each"],["0–10 m accelerations","6 reps"],["Taped ladder in-out","4 patterns"],["Reaction: drop & sprint","5 reps"],["Walking quad/ham stretch","4 min"]],
        coach:["Stay on the balls of your feet","Pump arms hard — arms set leg speed","Stop the session if you feel sharp pain"],
        mistakes:["Heel striking on accelerations","Too narrow ladder steps","Skipping the warm-up"],
        rest:"45 sec between sprints · 90 sec between sets" },
      { name:"Cricket Solo Practice at Home", tag:"Cricket", level:"All levels", time:"30 min", cal:"280 kcal",
        desc:"Batting, catching and fitness — all alone at home with a bat and a wall.",
        equip:"Bat, ball, wall, stumps (optional)", muscles:"Core · shoulders · legs",
        items:[["Shadow batting: front-foot drives","4 x 10"],["Wall throwdowns (soft ball)","6 min"],["Wall catching (rebound)","2 x 12"],["One-hand pick-ups","3 x 8"],["Quick singles shuttle","6 x 15 m"],["Batting stance & trigger practice","5 min"]],
        coach:["Watch the ball onto the bat every time","Keep your head still through the shot","Call 'yes/no' out loud when running"],
        mistakes:["Playing across the line constantly","No foot movement","Skipping the running reps"],
        rest:"30 sec between sets · 2 min water break mid-session" },
      { name:"Basketball Skills at Home", tag:"Basketball", level:"All levels", time:"30 min", cal:"270 kcal",
        desc:"Handles, footwork and shooting form — with or without a hoop.",
        equip:"Ball, wall (hoop optional)", muscles:"Forearms · legs · core",
        items:[["Stationary pound dribbles","3 x 1 min"],["Crossover / between-legs series","3 rounds"],["Form shooting against wall/hoop","20 reps"],["Jump rope (or imaginary skips)","3 x 1 min"],["Mikan footwork drill","2 x 10"],["Defensive stance hold","3 x 40 sec"]],
        coach:["Dribble with fingertips, not the palm","Snap the wrist on every shot","Stay low in your defensive stance"],
        mistakes:["Looking at the ball while dribbling","Upright stance","Shooting with a flat arc"],
        rest:"30 sec between drills · 60 sec between rounds" },
      { name:"Kho Kho Speed & Dodging at Home", tag:"Kho Kho", level:"All levels", time:"25 min", cal:"310 kcal",
        desc:"Chase speed, dodging and pole turns practised at home with minimal space.",
        equip:"4 cones, a pole/tree/door frame", muscles:"Legs · groin · ankles",
        items:[["High knees & butt kicks","3 x 20 m"],["Side-step cone dodges","3 x 8"],["Straight sprints","6 x 15 m"],["Pole push-off turns","3 x 6"],["Fake-and-go direction changes","6 min"],["Groin & hamstring stretch","5 min"]],
        coach:["Stay low when you dodge — chest over knees","Push off the pole hard with your palm","Tag-reach with a fully extended arm"],
        mistakes:["Dodging while standing tall","Flat feet while waiting","No stretching after sessions"],
        rest:"30 sec between sprints · 90 sec between drills" },
      { name:"HIIT Cardio Blast (Home)", tag:"HIIT", level:"Intermediate", time:"20 min", cal:"400 kcal",
        desc:"Maximum calorie burn in 20 minutes — no equipment, just effort.",
        equip:"None", muscles:"Full body · heart & lungs",
        items:[["Burpees","40 sec"],["Mountain climbers","40 sec"],["High knees","40 sec"],["Squat jumps","40 sec"],["Plank jacks","40 sec"],["Rest","20 sec — 5 rounds"],["Cooldown walk + stretch","4 min"]],
        coach:["Pick ONE speed and hold it for the full 40 sec","Land softly on every jump","Keep moving during rest — walk, don't sit"],
        mistakes:["Sprinting round 1 and dying by round 4","Holding breath","Skipping the cooldown"],
        rest:"20 sec between exercises · 2 min between rounds" },
      { name:"Resistance Band Home Strength", tag:"Bands", level:"All levels", time:"40 min", cal:"330 kcal",
        desc:"Real resistance training at home with one cheap band.",
        equip:"Resistance band with handles", muscles:"Back · chest · legs · arms",
        items:[["Band pull-aparts","4 x 15"],["Band squats","4 x 15"],["Seated band rows","4 x 12"],["Band chest press (anchored)","4 x 12"],["Banded good mornings","3 x 12"],["Banded biceps / triceps","3 x 15 each"]],
        coach:["Squeeze your shoulder blades on every pull","Control the band back — don't let it snap","Keep tension constant, never slack"],
        mistakes:["Band slipping from anchor","Using a band that's too light","Rounding the back on rows"],
        rest:"45 sec between sets · pair push + pull to save time" },
      { name:"Wall Sit & Isometric Strength", tag:"Isometric", level:"All levels", time:"15 min", cal:"140 kcal",
        desc:"Build brutal endurance strength silently — perfect for home (no jumping, no noise).",
        equip:"Wall, mat", muscles:"Quads · glutes · core",
        items:[["Wall sit","3 x max hold"],["Plank","3 x 45 sec"],["Single-leg stand (eyes closed)","3 x 30 sec each"],["Hollow body hold","3 x 30 sec"],["Push-up top hold","3 x 30 sec"],["Deep squat hold","3 x 40 sec"]],
        coach:["Breathe steadily — never hold your breath","Knees at 90° in the wall sit, back flat to wall","Add 10 seconds each week"],
        mistakes:["Resting hands on knees","Letting hips sag in plank","Stopping when it burns instead of when form breaks"],
        rest:"45 sec between holds · 2 min between rounds" },
      { name:"Home Mobility & Recovery Flow", tag:"Recovery", level:"All levels", time:"15 min", cal:"70 kcal",
        desc:"Loosen up and recover at home after any session — perfect before bed.",
        equip:"Mat (optional)", muscles:"Full body · spine · hips",
        items:[["Cat-cow","2 x 10"],["World's greatest stretch","2 x 6 each"],["90/90 hip switches","2 x 8"],["Pigeon pose","2 x 45 sec each"],["Child's pose + reach","2 x 45 sec"],["Box breathing","2 min"]],
        coach:["Move slowly — mobility is about control","Exhale deeper into every stretch","Do this daily, not only on sore days"],
        mistakes:["Bouncing into stretches","Holding breath","Skipping it because 'no time'"],
        rest:"Flow continuously · 30 sec per position" },
      { name:"Backpack & Pillow Home Weights", tag:"Weights", level:"Beginner", time:"40 min", cal:"360 kcal",
        desc:"No dumbbells? Fill a backpack with books — a real strength session with household items.",
        equip:"Backpack + books/water bottles, pillows", muscles:"Full body",
        items:[["Backpack front squat","4 x 12"],["Backpack bent-over row","4 x 12"],["Backpack floor press","4 x 12"],["Pillow single-leg RDL","3 x 10 each"],["Backpack good morning","3 x 12"],["Backpack farmer walk","3 x 30 m"]],
        how:[
          ["Strap the pack tight so it doesn't bounce","Hold the straps, sit down to parallel","Drive up through the heels","Add books until12 reps are hard by the last set"],
          ["Hinge to 45°, flat back","Pull the pack to your lower ribs","Squeeze the shoulder blades","Lower under control — no heaving"],
          ["Lie on the floor, pack on your chest","Grip the straps, press straight up","Lower until elbows touch the floor","Feet planted, core braced"],
          ["Hold a pillow against your chest","Hinge on one leg, free leg counterbalances","Back flat — no rotating the hips","Switch legs evenly"],
          ["Pack on your back, slight knee bend","Hinge forward with a flat back","Drive the hips forward to stand","Feel the hamstrings, not the lower back"],
          ["Hold the pack straps at your sides","Walk tall, short controlled steps","No leaning, no swinging","30 m without stopping"]
        ],
        coach:["Load it until the last 2 reps of 12 are hard","Straps tight — a bouncing pack wrecks form","Same progression logic as real weights: add books weekly","Full range of motion always"],
        mistakes:["Loose straps and a wobbly pack","Half-range squats","Rounding the back on rows","Too light to challenge"],
        rest:"60–90 sec between sets" },
      { name:"Staircase Power Circuit", tag:"Plyo", level:"Intermediate", time:"25 min", cal:"380 kcal",
        desc:"Your staircase is a free leg-day machine — power, conditioning and agility in one.",
        equip:"Staircase (10+ steps), handrail optional", muscles:"Quads · glutes · calves · lungs",
        items:[["Two-step power climbs","6 x up"],["Single-step speed runs","5 x up"],["Stair bounding (max effort)","4 x up"],["Side-step climbs","3 x each way"],["Stair squat pulse at the top","3 x 20"],["Walk down + breathing recovery","5 min"]],
        how:[
          ["Drive through the heel, skip every other step","Full hip extension at the top of each stride","Use arms like a sprinter","Walk down fully as recovery"],
          ["Fast feet: one step at a time, quick contacts","Stay on the balls of the feet","Pump arms in rhythm","Top speed without missing a step"],
          ["Explode UP the stairs — one step per bound","Maximum intent on every jump","Land soft on each step","Walk down, reset, repeat"],
          ["Turn sideways, lead with the uphill leg","Stay low, hips facing across the stairs","Even work both directions","Groin-friendly but stay controlled"],
          ["At the top, squat to parallel and pulse","Knees over heels, chest up","20 pulses, then stand and squeeze glutes","No rest between pulse sets"],
          ["Descend slowly, holding the rail if needed","Let the heart rate drop gradually","Breathe in through the nose","Finish loose, not dizzy"]
        ],
        coach:["Power climbs build single-leg strength","Never bounce off a straight knee — land soft","Handrail is for balance, not pulling you up","Regress to one-step walking if you're new"],
        mistakes:["Jumping down the stairs (joint risk)","Missing steps at speed when tired","Skipping the walk-down recovery","No warm-up before bounding"],
        rest:"Full walk-down recovery between efforts" },
      { name:"Morning 10-Minute Wake-Up", tag:"Quick", level:"All levels", time:"10 min", cal:"90 kcal",
        desc:"Start the day awake — a quick mobility and activation flow before breakfast.",
        equip:"None — floor space", muscles:"Full body · spine",
        items:[["Cat-cow + child's pose flow","2 min"],["World's greatest stretch","2 min"],["Bodyweight squats","2 x 12"],["Glute bridges","2 x 15"],["Push-ups (or wall push-ups)","2 x 10"],["Sun breath + posture check","1 min"]],
        how:[
          ["On all fours: inhale arch, exhale round","Flow into child's pose between rounds","Move with the breath, not against it","Loosen the spine before anything else"],
          ["Lunge, elbow to instep, rotate to ceiling","Feel the hip and thoracic spine open","Alternate sides, smooth and slow","2 quality rounds each side"],
          ["Feet shoulder-width, sink to a comfortable depth","Chest up, knees over toes","Stand tall and squeeze the glutes","12 controlled reps — no rushing"],
          ["Back flat on the floor, feet planted","Drive through the heels, hips to the ceiling","Pause 1 second at the top","Lower slowly, one rep at a time"],
          ["Hands under shoulders, body in one line","Lower chest to the floor, drive back up","Core braced — hips never sag","10 clean reps beat 20 sloppy ones"],
          ["Stand tall, 5 deep breaths in through the nose","Roll the shoulders back and down","Check: ears over shoulders over hips","Walk into your day tall"]
        ],
        coach:["Move before you look at your phone","This counts as your daily mobility if pressed for time","Consistency every morning beats a long weekly session","Add 1 squat rep each day — tiny progression"],
        mistakes:["Skipping it on busy days","Rushing through the flow","Checking your phone mid-flow","Cold, fast push-ups with no warm-up"],
        rest:"Continuous flow · rest only between push-up sets" }
    ]
  },
  speed: {
    title: "Speed & Agility (Athletic Development)", color: "linear-gradient(135deg,#0284c7,#38bdf8)", emoji: "🎯",
    desc: "Pure athletic speed work for ANY sport — acceleration, top speed, change of direction and reactive agility.",
    plans: [
      { name:"Linear Speed Foundations", tag:"Speed", level:"Beginner", time:"35 min", cal:"360 kcal",
        items:[["A-skips & B-skips","2 x 20 m"],["Build-up accelerations (50-80%)","4 x 30 m"],["Flying 20 m sprints","5 reps"],["Wall-drive mechanics","3 x 10 sec"],["Easy cooldown jog","5 min"]] },
      { name:"Acceleration Mechanics (Block Starts)", tag:"Speed", level:"Advanced", time:"35 min", cal:"390 kcal",
        items:[["Falling-start sprints","6 x 10 m"],["2-point stance starts","6 x 10 m"],["Wall-drive starts","4 x 10 sec"],["First-3-steps projection drills","6 reps"],["Max accelerations 20 m","5 reps"],["Recovery walk-backs","full"]] },
      { name:"Top-End Speed Mechanics", tag:"Speed", level:"Advanced", time:"40 min", cal:"420 kcal",
        items:[["Wicket runs (tall posture)","4 x 40 m"],["Flying 30 m at max velocity","6 reps"],["Ankle stiffness hops","3 x 20 m"],["Relaxed-arm sprint drills","4 x 30 m"],["Deceleration practice","4 x 40 m"],["Full stretch cooldown","6 min"]] },
      { name:"Change of Direction Mastery", tag:"Agility", level:"Intermediate", time:"35 min", cal:"380 kcal",
        items:[["5-10-5 pro agility","5 reps"],["T-drill","4 reps"],["L-drill (3-cone)","4 reps"],["90° sharp cuts","4 x 6"],["Zig-zag decel & re-accel","4 x 20 m"],["Lateral bound stability","3 x 8 each"]] },
      { name:"Reactive Agility & Decision Speed", tag:"Reflex", level:"Advanced", time:"32 min", cal:"360 kcal",
        items:[["Partner mirror drill","4 x 30 sec"],["Light/reaction-ball drops","2 x 10"],["Color-call sprints","6 min"],["Blind-turn reaction runs","6 reps"],["Random cone color touch","5 min"],["Cooldown + breathing","4 min"]] },
      { name:"Ladder Footwork Encyclopedia", tag:"Agility", level:"All levels", time:"28 min", cal:"300 kcal",
        items:[["Two-in two-out","3 x length"],["Icky shuffle","3 x length"],["Lateral in-out","3 x length"],["Ali shuffle","3 x length"],["Hop-scotch pattern","3 x length"],["Sprint out of every pattern","3 x 20 m"]] },
      { name:"Resisted & Assisted Sprint Training", tag:"Power", level:"Advanced", time:"40 min", cal:"450 kcal",
        items:[["Heavy sled push","6 x 20 m"],["Band-resisted acceleration","5 x 20 m"],["Light sled sprint (fast)","6 x 30 m"],["Downhill-assisted overspeed","4 x 30 m"],["Free sprint contrast","4 x 30 m"],["Full recovery walks","between all"]] },
      { name:"Speed for Team Sports (Game-Like)", tag:"Conditioning", level:"Intermediate", time:"38 min", cal:"430 kcal",
        items:[["Curved sprint runs","5 x 30 m"],["Backpedal-to-sprint switches","6 reps"],["Angle-of-approach runs","6 x 25 m"],["Repeat sprint ability: 6 x 30 m","(20 sec rest)"],["Recovery jog","8 min"],["Mobility cool-down","6 min"]] }
    ]
  },
  combat: {
    title: "Cardio Combat (Boxing Fitness)", color: "linear-gradient(135deg,#b91c1c,#f87171)", emoji: "🥊",
    desc: "Boxing-inspired conditioning — explosive punches, footwork and rounds that build a fighter's engine.",
    plans: [
      { name:"Boxing Fitness Fundamentals", tag:"Boxing", level:"Beginner", time:"30 min", cal:"340 kcal",
        items:[["Jump rope footwork","3 x 1 min"],["Stance, guard & footwork basics","6 min"],["Jab-cross combinations","4 x 1 min"],["Slip & roll practice","4 x 30 sec"],["Shadow-boxing round","3 min"],["Cooldown + shoulder mobility","5 min"]] },
      { name:"Heavy Bag / Air Boxing Rounds", tag:"Boxing", level:"Intermediate", time:"35 min", cal:"450 kcal",
        items:[["Round 1: jab-cross pace","3 min"],["Rest","1 min"],["Round 2: hooks & uppercuts","3 min"],["Rest","1 min"],["Round 3: power combinations","3 min"],["Rest","1 min"],["Round 4: burnout flurry","2 min"],["Cooldown","5 min"]] },
      { name:"Kickboxing HIIT", tag:"HIIT", level:"Advanced", time:"30 min", cal:"500 kcal",
        items:[["Jab-cross-knee combo","40 sec"],["Rest","20 sec"],["Roundhouse kicks (each leg)","40 sec"],["Rest","20 sec"],["Squat-kick combos","40 sec"],["Rest","20 sec"],["Sprawl-to-kick","40 sec"],["Repeat x4 rounds + cooldown","12 min"]] },
      { name:"Fight Night Circuit (5 Rounds)", tag:"Conditioning", level:"Advanced", time:"40 min", cal:"560 kcal",
        items:[["Round: 2 min shadow boxing","max intensity"],["Rest","1 min"],["Round: burpee + sprawl","2 min"],["Rest","1 min"],["Round: speed bag arms + high knees","2 min"],["Rest","1 min"],["x5 total rounds","15 min"],["Cooldown + stretch","8 min"]] },
      { name:"Core & Grip for Fighters", tag:"Core", level:"Intermediate", time:"30 min", cal:"290 kcal",
        items:[["Neck bridge / neck harness","3 x 12"],["Farmer carry heavy","3 x 40 m"],["Med ball rotational slam","4 x 8 each"],["Hollow body rocks","3 x 20"],["Plank shoulder taps","3 x 20"],["Wrist curls + finger extensions","3 x 15"]] },
      { name:"Jab-Cross Combination Conditioning", tag:"Boxing", level:"All levels", time:"25 min", cal:"330 kcal",
        items:[["1-1-2 combo (jab jab cross)","4 x 1 min"],["1-2-3 combo (jab cross hook)","4 x 1 min"],["1-2-slip-2 counter","4 x 1 min"],["Freestyle combination round","3 min"],["Footwork circle drill","3 min"],["Cooldown","4 min"]] },
      { name:"Speed Bag & Reflex Training", tag:"Reflex", level:"All levels", time:"22 min", cal:"240 kcal",
        items:[["Rhythm speed bag (air or real)","3 x 1 min"],["Reaction partner mitt calls","6 min"],["Slip-rope / imaginary rope","3 x 1 min"],["Reflex ball or wall tap drill","4 min"],["Shoulder burnout raise series","3 x 15"],["Shoulder care band work","5 min"]] },
      { name:"Fighter's Cool-down & Shoulder Care", tag:"Recovery", level:"All levels", time:"15 min", cal:"80 kcal",
        items:[["Shoulder CARs + band dislocates","2 x 12"],["Chest doorway stretch","2 x 30 sec"],["Wrist & forearm stretch","2 x 30 sec"],["Child's pose with reach","2 x 45 sec"],["Thoracic rotation","2 x 10"],["Box breathing","2 min"]] }
    ]
  }
};

const DIET = {
  goal: { label: "Lean Muscle Gain", desc: "A clean bulking plan — high protein, complex carbs, healthy fats. Adjust portions up or down depending on your goal (fat loss: reduce carbs ~20%; mass gain: increase portions ~15%)." },
  goals: ["Lean Muscle Gain", "Fat Loss", "Maintain / Performance"],
  meals: [
    { icon:"🌅", name:"Breakfast", time:"7:00 – 8:00 AM", kcal:"450–550 kcal", items:[
      ["4 whole eggs + 2 egg whites (scrambled)","320 kcal"],
      ["1 cup oats with banana & honey","220 kcal"],
      ["1 glass milk / green tea","120 kcal"]] },
    { icon:"🌤️", name:"Mid-Morning Snack", time:"10:30 – 11:00 AM", kcal:"200–250 kcal", items:[
      ["Handful of almonds + walnuts (30 g)","180 kcal"],
      ["1 seasonal fruit (apple / papaya)","90 kcal"]] },
    { icon:"🍱", name:"Lunch", time:"1:00 – 2:00 PM", kcal:"600–700 kcal", items:[
      ["Grilled chicken breast / paneer (150 g)","280 kcal"],
      ["Brown rice / chapati x 2 (150 g)","220 kcal"],
      ["Mixed vegetable salad + curd","150 kcal"]] },
    { icon:"🥤", name:"Pre-Workout", time:"4:30 – 5:00 PM", kcal:"150–200 kcal", items:[
      ["1 banana / 2 dates","110 kcal"],
      ["Black coffee or green tea","5 kcal"]] },
    { icon:"🏋️", name:"Post-Workout", time:"Within 30 min", kcal:"250–300 kcal", items:[
      ["Whey protein shake (1 scoop) with water","120 kcal"],
      ["1 cup rice cakes / bread with peanut butter","170 kcal"]] },
    { icon:"🌙", name:"Dinner", time:"7:30 – 8:30 PM", kcal:"500–600 kcal", items:[
      ["Fish / chicken / tofu (150 g)","260 kcal"],
      ["Sweet potato / quinoa / 2 chapatis","220 kcal"],
      ["Sautéed greens + 1 tsp olive oil","110 kcal"]] },
    { icon:"🌜", name:"Before Bed (Optional)", time:"9:30 – 10:00 PM", kcal:"120–150 kcal", items:[
      ["Paneer / cottage cheese (100 g) or casein","120 kcal"],
      ["1 cup warm milk with turmeric","90 kcal"]] }
  ],
  supplements: [
    ["Whey Protein","1 scoop post-workout to hit daily protein (1.6–2.2 g/kg bodyweight)."],
    ["Creatine Monohydrate","5 g daily — strength, power and recovery."],
    ["Multivitamin","Fill micronutrient gaps on training days."],
    ["Omega-3 Fish Oil","2 g daily — joint & heart health."],
    ["Electrolytes","For heavy sweating / long matches in heat."]
  ],
  avoid: ["Sugary drinks & packaged juice","Deep-fried snacks (samosa, fries)","Processed meat & fast food","Late-night sugar & sweets","Excess white bread & maida"],
  water: "Drink at least 3–4 litres of water a day; add 500–750 ml for every hour of intense training."
};

const HABITS = [
  { icon:"💧", name:"Water intake (3.5 L)", goal:8, unit:"glasses" },
  { icon:"😴", name:"Sleep (8 hours)", goal:1, unit:"night" },
  { icon:"🥗", name:"Protein target (140 g)", goal:1, unit:"day" },
  { icon:"🏃", name:"Training session", goal:1, unit:"session" },
  { icon:"🧘", name:"Stretch / mobility (10 min)", goal:1, unit:"day" }
];

/* ---------- PLAN INFO (rich material for every activity) ---------- */
const TAG_INFO = {
  Speed:{equip:"Cones, stopwatch, flat ground",muscles:"Quads · glutes · hamstrings · calves",coach:["Explode out of every rep — quality over quantity","Full recovery 60–90 sec between max efforts","Stay relaxed: fast arms = fast legs"],mistakes:["Skipping the warm-up","Training at 90% instead of maximum","No cooldown jog"]},
  Stamina:{equip:"Cones, water, flat pitch",muscles:"Heart & lungs · legs",coach:["Hold a pace where you can speak in short sentences only","Keep shoulders relaxed and cadence high","Sip water every 10 minutes"],mistakes:["Starting too fast","Training on an empty stomach without fuel","Ignoring dehydration signs"]},
  Agility:{equip:"6 cones, agility ladder",muscles:"Glutes · quads · ankles · core",coach:["Lower your hips before every cut","Push the ground away, don't just step","Eyes up — react to what you see"],mistakes:["Cutting upright","Wearing the wrong footwear","Fatigue-form cutting (stop the set)"]},
  Skills:{equip:"Ball, cones, wall",muscles:"Feet · hips · core",coach:["Every touch has a purpose","Use both feet equally","Slow is smooth, smooth is fast"],mistakes:["Practising only the strong foot","Head down on the ball","No progression in difficulty"]},
  Technique:{equip:"Ball, goal/target, cones",muscles:"Legs · core · ankles",coach:["Lock the ankle, strike through the centre","Plant foot beside the ball, head over it","Repetition builds muscle memory"],mistakes:["Leaning back on strikes","Opening the body too early","No weak-side practice"]},
  Defense:{equip:"Cones, mannequin, partner",muscles:"Quads · glutes · adductors",coach:["Jockey — delay, don't dive in","Show the attacker their weaker side","Recover to position after every duel"],mistakes:["Diving into tackles","Standing flat-footed","Ball-watching instead of body shape"]},
  Core:{equip:"Mat",muscles:"Abs · obliques · deep core",coach:["Brace before you move","Quality contractions over rep counts","Breathe out on the effort"],mistakes:["Pulling the neck","Arching the lower back","Holding your breath"]},
  Strength:{equip:"Barbell, bench, rack",muscles:"Full body",coach:["Progressive overload — add a little each week","Full range of motion every rep","Warm up with light sets first"],mistakes:["Ego lifting","Skipping warm-up sets","Locking joints violently"]},
  Push:{equip:"Barbell, dumbbells, bench",muscles:"Chest · shoulders · triceps",coach:["Shoulder blades pinned back","Lower under control (2–3 sec)","Drive feet into the floor"],mistakes:["Flaring elbows to 90°","Bouncing the bar off the chest","Half reps"]},
  Pull:{equip:"Bar, cables, dumbbells",muscles:"Back · biceps · rear delts",coach:["Lead with the elbows","Squeeze shoulder blades at the top","Control the negative"],mistakes:["Swinging the weight","Shrugging the shoulders","Skipping rows for more curls"]},
  Legs:{equip:"Barbell, leg machines",muscles:"Quads · glutes · hamstrings · calves",coach:["Knees track over toes","Hit depth before driving up","Brace your core like a plank"],mistakes:["Rounding the lower back","Heels lifting off the floor","Skipping warm-up sets"]},
  Power:{equip:"Plyo box, med ball, bands",muscles:"Fast-twitch muscle fibres",coach:["Maximum intent on every rep — quality over fatigue","Rest fully so power doesn't drop","Land soft, knees bent"],mistakes:["Training power while tired","No ground contact practice","Going heavy instead of fast"]},
  "Fat Loss":{equip:"Open space, timer",muscles:"Full body · cardiovascular",coach:["Keep heart rate in the 70–85% zone","Keep rest strictly to the timer","Finish strong — last round is the most important"],mistakes:["Going all-out in round 1","Skipping the cooldown","Compensating with extra food"]},
  Recovery:{equip:"Mat, foam roller",muscles:"Full body · fascia",coach:["Move slowly into every stretch","Exhale deeper each rep","Daily consistency beats occasional long sessions"],mistakes:["Bouncing into stretches","Holding your breath","Skipping recovery entirely"]},
  Mobility:{equip:"Mat, band",muscles:"Hips · spine · shoulders",coach:["Controlled range — no forcing","Breathe into tight areas","Do it daily, even 5 minutes"],mistakes:["Pain = stop, don't push through","Rushing positions","Only stretching the flexible parts"]},
  Batting:{equip:"Bat, balls, net/wall",muscles:"Core · hips · shoulders",coach:["Watch the ball all the way onto the bat","Keep your head still through the shot","Move your feet — get to the pitch of the ball"],mistakes:["Playing away from your body","No footwork","Flat-footed against spin"]},
  Bowling:{equip:"Ball, run-up markers, stumps",muscles:"Shoulders · core · legs",coach:["Same run-up rhythm every ball","Full arm extension at release","Follow through straight"],mistakes:["Shortened run-up when tired","Side-arm bowling","No seam position focus"]},
  Fielding:{equip:"Ball, cones, stumps",muscles:"Legs · shoulders · core",coach:["Attack the ball, don't wait for it","Gather low with soft hands","Throw with a stiff core, not just the arm"],mistakes:["Fielding flat-footed","Taking eyes off the ball","One-handed lazy gathers"]},
  Fitness:{equip:"Cones, open ground",muscles:"Full body · heart & lungs",coach:["Sharp changes of direction with control","Recover fully between high-intensity reps","Finish every rep at full intensity"],mistakes:["Jogging through drills","No cool-down","Training through sharp pain"]},
  Chasing:{equip:"Court/ground, poles",muscles:"Legs · groin · ankles",coach:["Stay low and balanced","Explode on the tag, not before","Recover position immediately"],mistakes:["Reaching with the back bent","Standing tall while chasing","No deceleration control"]},
  Dodging:{equip:"Cones, partner",muscles:"Legs · hips · ankles",coach:["Change pace more than direction","Sell the fake with your whole body","Keep your centre of gravity low"],mistakes:["Predictable same-side dodges","Dodging at one speed","Eyes on the ground"]},
  Dribbling:{equip:"Ball, cones",muscles:"Feet · hips · core",coach:["Close control — ball within one step","Use all surfaces of the foot","Head up between touches"],mistakes:["Pushing the ball too far ahead","Only strong-foot dribbles","Chin on chest"]},
  Shooting:{equip:"Ball, goal",muscles:"Legs · core",coach:["Pick your corner before striking","Head over the ball for power","Follow through toward target"],mistakes:["Leaning back","Eyes closing at impact","Same spot every time — vary it"]},
  Passing:{equip:"Ball, partner/targets",muscles:"Legs · hips",coach:["Pass to the safe side / away from pressure","Weight the pass — firm but playable","Move after you pass"],mistakes:["Telegraphing passes","Lazy short passes","Standing still after the pass"]},
  Endurance:{equip:"Cones, stopwatch",muscles:"Heart & lungs · legs",coach:["Negative splits — second half faster than first","Stay relaxed at hard paces","Fuel and hydrate before"],mistakes:["Too-fast start","No mid-run fuelling","Skipping cooldown"]},
  Abs:{equip:"Mat",muscles:"Abs · obliques",coach:["Slow, controlled reps","Press lower back down","Full range of motion"],mistakes:["Neck pulling","Momentum swinging","Shallow reps"]},
  Stability:{equip:"Mat",muscles:"Deep core · glutes",coach:["Keep hips level at all times","Move limbs slowly while trunk stays still","Breathe continuously"],mistakes:["Holding breath","Sagging hips","Rushing the movement"]},
  Warmup:{equip:"Open space, cones",muscles:"Full body",coach:["Raise temperature first, then stretch dynamically","Every movement increases in range","Finish with sport-specific actions"],mistakes:["Static stretching cold","Too long a warm-up","Skipping pulse raiser"]},
  Stretch:{equip:"Mat",muscles:"Full body",coach:["Never bounce — hold steady","Exhale into each stretch","Both sides equally"],mistakes:["Holding breath","Pain instead of tension","Stretching only when injured"]},
  Reflex:{equip:"Partner, ball, cones",muscles:"Nervous system · legs",coach:["React, don't anticipate","Stay on the balls of your feet","Keep eyes on the trigger"],mistakes:["Predicting the cue","Flat-footed stance","Losing focus between reps"]},
  Flexibility:{equip:"Mat",muscles:"Groin · hamstrings · hips",coach:["Warm up before deep stretching","Progress range week by week","Relax into every hold"],mistakes:["Cold stretching","Forcing splits","Skipping groin work"]},
  Bodyweight:{equip:"None — floor space 2×2 m",muscles:"Full body",coach:["Brace core before every rep","Control both directions of the movement","Breathe out on effort"],mistakes:["Sagging hips","Half reps","Rushing through rounds"]},
  HIIT:{equip:"None — timer",muscles:"Full body · cardiovascular",coach:["Strict work/rest timers","One pace you can hold all rounds","Keep moving during rest"],mistakes:["All-out round one","Sitting during rest","No cooldown"]}
};
const DEFAULT_INFO = {
  equip:"Cones, stopwatch, open space", muscles:"Full body",
  coach:["Warm up 5–10 minutes first","Quality form beats speed","Stop any exercise causing sharp pain"],
  mistakes:["Skipping the warm-up","Rushing technique","Training without water"]
};
function planInfo(sportKey, idx){
  const s = SPORTS[sportKey], p = s.plans[idx];
  const t = TAG_INFO[p.tag] || DEFAULT_INFO;
  return {
    equip: p.equip || t.equip,
    muscles: p.muscles || t.muscles,
    coach: p.coach || t.coach,
    mistakes: p.mistakes || t.mistakes,
    desc: p.desc || s.desc,
    rest: p.rest || "45 sec between exercises · 90 sec between rounds · 3 rounds"
  };
}
const DIFF_LEVEL = { Beginner:1, "All levels":2, Intermediate:3, Advanced:4, Pro:5 };
function diffDots(level){
  const n = DIFF_LEVEL[level] || 2;
  return `<span class="dots">${[1,2,3,4,5].map(k=>`<i class="${k<=n?"on":""}"></i>`).join("")}</span>`;
}

/* ---------- FAVORITES ---------- */
let favs = []; /* loaded from store in init() — store is declared later */
const favId = (k,i) => k+"-"+i;
function isFav(k,i){ return favs.includes(favId(k,i)); }
function toggleFav(k,i){
  const id = favId(k,i);
  favs = isFav(k,i) ? favs.filter(x=>x!==id) : [...favs, id];
  store.set("fav", favs);
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(b=>{
    b.classList.toggle("on", isFav(k,i));
    b.textContent = isFav(k,i) ? "★" : "☆";
  });
  toast(isFav(k,i) ? "Added to favorites ⭐" : "Removed from favorites");
}
/* 🎲 Surprise Me — random activity */
function surpriseMe(){
  const keys = Object.keys(SPORTS).filter(k=>k!=="home" || true);
  const k = keys[Math.floor(Math.random()*keys.length)];
  const s = SPORTS[k];
  const i = Math.floor(Math.random()*s.plans.length);
  toast("🎲 Your random pick: " + s.emoji + " " + s.plans[i].name);
  setTimeout(()=>openPlanDetail(k, i), 700);
}

/* ---------- HOW TO DO IT — technique library ---------- */
const DEFAULT_HOW = [
  "Set up in a stable, balanced position before you start",
  "Move through the full range of motion with control",
  "Keep the working muscles braced — no swinging or sagging",
  "Breathe out on the hard part, in on the easy part"
];
const TECH = {
  /* --- football --- */
  "yo-yo": ["Run to the far line and turn BEFORE the beep","Turn with a sharp plant-and-push — never a round loop","Keep hips low on every turn","If you miss two beeps the test ends — record your level"],
  "sprint": ["Lean forward for the first 3 steps, then rise tall","Drive the knees and punch the ground BEHIND you","Arms at 90°, cheek-to-cheek swing, relaxed shoulders","Finish at full speed through the line, never coast early"],
  "acceleration": ["Start from a low, loaded position — nose over toes","First 3 steps: short and violent, ground behind you","Rise gradually over 10 m, don't pop straight up","Full recovery between maximal efforts"],
  "hill": ["Drive the knees higher than normal against the slope","Lean into the hill slightly, torso tall","Attack every step — no coasting mid-hill","Walk down slowly as your recovery"],
  "sled": ["Lean forward at 45° with arms locked straight","Drive legs like pistons — full extension each step","Short powerful strides, never stutter-stepping","Keep the head neutral, eyes 3–5 m ahead"],
  "dribble": ["Push the ball with laces, inside and outside of the foot","Keep the ball within one step at all times","Head up for a second every few touches","Change pace as well as direction — slow-to-fast wins"],
  "toe tap": ["Lightly touch the top of the ball with alternating soles","Stay on the balls of your feet the whole time","Keep your chest over the ball, not leaning back","Rhythm first, then build speed"],
  "roll": ["Use the SOLE of the foot to drag the ball across","Roll it under your body, then push away with the other foot","Stay low with bent knees","Keep the movement continuous — no stopping between rolls"],
  "wall pass": ["Pass firmly against the wall with the inside of the foot","Receive across your body with the BACK foot first","First touch must set up the second action","Head up between passes to scan the field"],
  "juggl": ["Use laces, ankle locked, slight backspin","Strike the ball just below centre","Touch it to knee-to-waist height only","Stay relaxed — juggling is rhythm, not power"],
  "figure-8": ["Dribble tight around both cones in a figure-8 path","Use small touches — inside and outside of the foot","Drop the shoulder at each cone change","Keep the head up as the pattern becomes automatic"],
  "v-cut": ["Pull the ball back with the sole, push out with the inside","Open your body angle to escape pressure","Explode into the space you just created","Do both feet equally"],
  "half-turn": ["Receive with the back foot, hips already opening","Glance over the shoulder BEFORE the ball arrives","First touch takes you into space, not into your feet","Second touch is the pass or dribble"],
  "jockey": ["Stay low, side-on, weight on the balls of the feet","Delay the attacker — don't dive in","Show them toward the weaker side","Explode only when the ball is loose or over-hit"],
  "tackle": ["Time the tackle when the ball is furthest from their feet","Go in low and firm through the ball","Win it then immediately look up to play","Never lunge from behind — foul and card"],
  "heading": ["Eyes on the ball all the way onto your forehead","Use the forehead's centre, neck muscles firm","Generate power from the CORE, not the neck","Attack the ball — don't wait for it"],
  "finish": ["Pick your corner BEFORE the strike","Head over the ball, lock the ankle","Follow through toward your target","Under pressure: first-time composure over power"],
  "penalty": ["Place the ball, take 3–4 steps back, one to the side","Pick your spot and commit — no changing mid-run","Strike through the centre of the ball","Finish the follow-through: confidence, then reset"],
  "rondo": ["One or two touch max — speed of thought first","Move the ball away from the presser immediately","Create angles: never stand behind a defender","Defenders press as a pair, cut the passing lane"],
  "cutting": ["Lower your centre of gravity BEFORE the cut","Plant the foot outside your base — push the ground away","Eyes up immediately after the cut","Re-accelerate out — don't admire the turn"],
  "5-10-5": ["Start straddling the middle line, hand touching floor","Sprint 5 m right, touch the line","Sprint 10 m left, touch, then 5 m back through centre","Stay low — every direction change stays low"],
  /* --- gym --- */
  "push-up": ["Hands under shoulders, body in one straight line","Lower until the chest is 2 cm from the floor","Elbows at ~45° from the torso, not flared","Drive the floor away; hips never sag"],
  "squat": ["Feet shoulder-width, toes slightly out","Break at hips and knees together, chest proud","Go to at least parallel — thigh parallel to floor","Drive through the whole foot, knees tracking over toes"],
  "split squat": ["Rear foot on a bench, front foot planted forward","Drop the back knee toward the floor","Keep the front shin near vertical, torso tall","Push through the FRONT heel to stand"],
  "lunge": ["Step out far enough that both knees hit ~90°","Back knee hovers just above the floor","Torso upright, core braced","Push off the front heel to return"],
  "deadlift": ["Bar over mid-foot, hinge at the hips, grip just outside legs","Flatten the back, chest up, lats engaged","Push the floor away — hips and shoulders rise together","Lock out tall; lower with control, never round"],
  "rdl": ["Soft knees, hinge the hips BACK like closing a door","Bar/weight stays close to the legs","Feel the hamstring stretch — stop before the back rounds","Squeeze glutes to return to standing"],
  "hip thrust": ["Upper back on a bench, chin tucked","Ribs down, posterior tilt of the pelvis","Drive through the heels to full hip extension","Pause 1 second at the top — don't hyperextend the lower back"],
  "bench press": ["Shoulder blades pinned down and back, feet planted","Lower to the lower chest with elbows ~45°","Bar touches gently — no bouncing","Drive up and slightly back toward the rack"],
  "overhead press": ["Brace the core as if about to be punched","Press in a straight line, head pushes through at lockout","Glutes squeezed, ribs down","Don't lean back — that's a standing incline press"],
  "row": ["Hinge to ~45°, flat back, chest up","Pull the elbow PAST the torso, squeeze the shoulder blade","Lower under control — no heaving with the lower back","Finish with the lats, not just the biceps"],
  "pull-up": ["Dead hang, shoulders active, core braced","Pull the chest to the bar, elbows down to pockets","Control the descent — 2 seconds down","No kipping: strict reps only for strength"],
  "curl": ["Elbows pinned at your sides, shoulders still","Curl up, squeeze the bicep at the top","Lower slowly — 2 seconds — no swinging","Wrist neutral; the muscle does the work, not momentum"],
  "lateral raise": ["Slight forward lean, soft elbows","Raise to shoulder height only","Lead with the pinkies — pour the water out","Control the descent; never use leg drive"],
  "calf raise": ["Full range — heel drops below the step","Pause 1 second at full stretch and at the top","Drive through the big toe and second toe","Slow reps: 2 up, 2 down"],
  "farmer": ["Pick up with a flat back, hinge not round","Walk tall — shoulders packed, ribs down","Short controlled steps, no leaning to one side","Grip the weight hard the whole carry"],
  "kettlebell swing": ["Hinge at the hips — this is not a squat","Snap the hips forward to float the bell","Arms are ropes: the hips do all the work","Lockout tall with glutes squeezed, don't lean back"],
  "burpee": ["Drop hands to the floor, jump feet back to plank","Chest touches the floor","Snap the feet back under the hips","Jump with arms overhead, land soft"],
  "mountain climber": ["Plank position, shoulders over hands","Drive knees to chest ONE at a time at speed","Hips stay level — no piking up","Rhythm and speed, but keep the core tight"],
  "jumping jack": ["Start tall, feet together, arms down","Jump feet wide while arms swing overhead","Land soft with bent knees","Keep a steady rhythm — this is a pulse raiser"],
  "high knee": ["Run tall, drive knees to hip height","Land on the balls of the feet","Pump arms in sync — hands cheek to hip","Quick ground contact, not big heavy steps"],
  "plank": ["Elbows under shoulders, body in one straight line","Squeeze glutes and brace the core hard","Hips never sag or pike","Breathe steadily — hold quality, not time"],
  "side plank": ["Elbow under shoulder, feet stacked or staggered","Hips lift high — body forms a straight line","Top hip stacks over the bottom one","Hold without letting the hips drop"],
  "crunch": ["Fingertips lightly behind the ears — no neck pulling","Roll the shoulders off the floor one vertebra at a time","Exhale hard at the top, pause 1 sec","Lower slowly — don't drop back down"],
  "bicycle": ["Lift shoulders off the floor and hold","Bring opposite elbow to opposite knee","Extend the other leg fully, low to the floor","Slow and controlled — speed kills the reps' value"],
  "leg raise": ["Press the lower back INTO the mat","Raise legs to vertical with straight knees","Lower slowly — stop before the back arches","Breathe out on the way up"],
  "russian twist": ["Lean back to 45°, feet lifted or planted","Rotate from the CHEST, not just the arms","Touch the floor beside you each side","Slow rotation — control beats speed"],
  "flutter": ["Lower back glued to the floor","Small quick kicks, legs 15–30 cm off the ground","Shoulders slightly lifted, core braced","Don't let the lower back arch up"],
  "v-up": ["Lie flat, arms overhead, legs long","Lift arms and legs to meet over your hips","Balance on your tailbone for a beat","Lower with control — no crashing down"],
  "hollow": ["Press lower back down, arms overhead by ears","Lift shoulders and legs off the floor","Create a banana shape with the body","Breathe normally — don't hold your breath"],
  "plank shoulder": ["Feet wider than hips for stability","Touch the opposite shoulder WITHOUT rotating hips","Core locked — the torso doesn't twist","Alternate slowly; hips stay square to the floor"],
  "pallof": ["Stand side-on to the band, press at chest height","Press out and HOLD — resist the rotation","Keep hips and shoulders square the whole time","Step laterally only if you can hold the anti-rotation"],
  "dead bug": ["Lie on your back, arms up, hips at 90°","Lower opposite arm and leg slowly","Lower back stays pressed into the floor","Return and switch — control over speed"],
  "bird dog": ["All fours, spine neutral, core braced","Extend opposite arm and leg to horizontal","Hips stay level — no tilting","Pause 2 seconds, then switch sides"],
  "wall sit": ["Back flat against the wall, slide down to 90°","Knees over ankles, not past the toes","Weight through the heels","Breathe steadily; don't rest hands on knees"],
  "dip": ["Support on bars, shoulders down away from ears","Lower until elbows reach ~90°","Torso slightly forward for chest, upright for triceps","Drive up without shrugging; don't go so deep the shoulders roll"],
  "burpee": ["Drop hands to floor, jump feet back","Chest to the floor","Snap feet back under hips","Jump tall, land soft"],
  /* --- recovery / mobility --- */
  "cat-cow": ["On all fours, spine neutral to start","Inhale: drop the belly, lift the chest and tailbone","Exhale: round the spine, chin to chest","Move slowly — one vertebra at a time"],
  "pigeon": ["Front shin angled across, back leg extended long","Square the hips before you deepen","Walk the hands forward until you feel the stretch","Breathe out into the hip; hold 45 sec each side"],
  "foam roll": ["Roll slowly — 1 inch per second over each area","Pause on tender spots for 20–30 sec","Never roll directly ON joints or the lower back","Keep breathing; tension releases on the exhale"],
  "world's greatest": ["Lunge forward, both hands inside the front foot","Drop the back elbow toward the floor","Rotate the top arm to the ceiling","Return and switch sides — smooth, not forced"],
  "hip 90/90": ["Sit with both knees at 90°, one in front, one to the side","Keep both sit bones heavy","Lift the back knee by rotating at the hip","Switch sides without using your hands if possible"],
  "child's pose": ["Knees wide, big toes together, sit hips to heels","Walk the hands far forward, forehead to the floor","Breathe into the back ribs","Hold 45 sec, sinking deeper on each exhale"],
  /* --- basketball --- */
  "layup": ["Drive at an angle, gather on the outside foot","Jump off the INSIDE foot, knee driving up","Extend the outside hand to the rim","Finish soft off the glass; practice both sides"],
  "mikan": ["Stand under the basket, ball in both hands","Shoot on one side, catch your own rebound","Immediately shoot on the other side","Footwork rhythm: inside foot up, continuous"],
  "dribble": ["Push the ball with fingertips, not the palm","Keep it below waist height in traffic","Eyes up — see the floor, not the ball","Change pace: slow, then explode past"],
  "defensive stance": ["Feet wider than shoulders, hips sunk low","Chest up, hands active — one high, one low","Weight on the balls of the feet","Slide, don't cross your feet; stay level"],
  "box jump": ["Stand a step away from the box, feet hip-width","Swing the arms and explode through the hips","Land SOFTLY in a quarter squat on the box","Stand tall on top; step down — never jump down"],
  "depth jump": ["Step off the box — do NOT jump off","Touch the ground and REBOUND instantly (< 0.2 sec)","Land soft with bent knees","This is maximum-quality work — full reset each rep"],
  "broad jump": ["Load the hips back, arms behind you","Explode forward, extending hips and ankles","Land on both feet in an athletic squat","Stick the landing — no stumbling forward"],
  "pogo": ["Stay on the balls of the feet — heels never touch","Knees nearly stiff: this is ANKLE stiffness work","Fast rhythm like jumping rope","20 fast reps, then rest"],
  "bound": ["Drive off one leg, land on the SAME leg","Travel as far as possible per bound","Opposite arm drives with each bound","Chest tall — don't fold forward"],
  /* --- cricket --- */
  "drive": ["Watch the ball all the way onto the bat","Head still, front foot to the pitch of the ball","Present the FULL face of the bat","Follow through high — check your shape after"],
  "throwdown": ["Watch the ball from the hand of the thrower","Play late if short, early if full","Keep the bat coming down straight","Leave anything outside off you don't need"],
  "catch": ["Watch the ball into soft hands — give with it","Elbows bent, hands in a W or cup shape","Eye contact until it's in the palm","Bring it into the body to secure"],
  "fielding": ["Attack the ball — don't wait for it","Gather low with two hands, soft fingers","Transfer to the throwing arm quickly","Throw with a stiff core, not just the arm"],
  "bowling": ["Same run-up rhythm every single ball","Front arm pulls down hard, high release point","Follow through straight past the opposite hip","Keep the seam upright at release"],
  "shadow": ["Visualise a real bowler delivering the ball","Complete the full shot technique every rep","Hold your balance at the end of the shot","Both front-foot and back-foot shots, equal reps"]
};
const TECH_KEYS = Object.keys(TECH).sort((a,b)=>b.length-a.length);
function getHow(plan, i){
  if(plan.how && plan.how[i]) return plan.how[i];
  const name = (plan.items[i][0]||"").toLowerCase();
  for(const k of TECH_KEYS){ if(name.includes(k)) return TECH[k]; }
  return DEFAULT_HOW;
}

/* ---------- STATE ---------- */
const store = {
  get(key, fallback){ try{ return JSON.parse(localStorage.getItem("ap_"+key)) ?? fallback }catch(e){ return fallback } },
  set(key, val){ localStorage.setItem("ap_"+key, JSON.stringify(val)) }
};
let completed = store.get("completed", {});
let waterLog  = store.get("waterLog", {});
let habitsLog = store.get("habitsLog", {});
let streak    = store.get("streak", 0);
let lastActive= store.get("lastActive", "");

const todayKey = () => new Date().toISOString().slice(0,10);

/* ---------- HELPERS ---------- */
const $ = s => document.querySelector(s);
const el = (tag, cls, html) => { const n=document.createElement(tag); if(cls) n.className=cls; if(html!=null) n.innerHTML=html; return n; };
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),2600);
}
/* audio cues for the workout timer */
let audioCtx = null;
function beep(freq, dur){
  try{
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = freq; o.type = "sine";
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.22, audioCtx.currentTime+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime+(dur||0.15));
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime+(dur||0.15)+0.05);
  }catch(e){}
}
function touchStreak(){
  const t = todayKey();
  if(lastActive === t) return;
  const y = new Date(Date.now()-864e5).toISOString().slice(0,10);
  streak = (lastActive === y) ? streak+1 : 1;
  lastActive = t;
  store.set("streak", streak); store.set("lastActive", lastActive);
  $("#streakCount").textContent = streak;
}

/* ---------- RENDER: DASHBOARD ---------- */
function renderDashboard(){
  const t = todayKey();
  const doneToday = (completed[t]||[]).length;
  const water = waterLog[t] || 0;
  const totalWorkouts = Object.values(completed).reduce((a,b)=>a+b.length,0);
  const allPlans = Object.values(SPORTS).reduce((a,s)=>a+s.plans.length,0);

  const page = el("div");
  page.innerHTML = `
    <div class="hero">
      <div class="float">🏆</div>
      <div class="head-badge" style="background:var(--grad-main)">Today · ${new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div>
      <h2>Welcome back, Athlete! Ready to <span class="grad">train hard</span>? 💪</h2>
      <p><b>${allPlans} training plans</b> — Pro-level Football (Lamine Yamal tier 🔥), Cricket, Kho Kho, Basketball, Gym, Abs, Recovery &amp; <b>Home Training</b> — every activity with step-by-step coaching.</p>
      <div class="btn-row" style="width:auto">
        <button class="btn btn-primary" onclick="go('football')">⚽ Pro Football →</button>
        <button class="btn btn-green" onclick="go('home')" style="width:auto">🏠 Train at Home</button>
        <button class="btn btn-ghost" onclick="surpriseMe()" style="width:auto">🎲 Surprise Me</button>
      </div>
    </div>

    <div class="grid g-4">
      <div class="stat"><div class="icon">✅</div><div class="num">${doneToday}</div><div class="lbl">Workouts today</div></div>
      <div class="stat orange"><div class="icon">🔥</div><div class="num">${streak}</div><div class="lbl">Day streak</div></div>
      <div class="stat cyan"><div class="icon">💧</div><div class="num">${water}<small style="font-size:14px;color:var(--muted)">/8</small></div><div class="lbl">Glasses of water</div></div>
      <div class="stat pink"><div class="icon">🎯</div><div class="num">${totalWorkouts}</div><div class="lbl">Lifetime workouts</div></div>
      <div class="stat green"><div class="icon">📚</div><div class="num">${allPlans}</div><div class="lbl">Training plans</div></div>
    </div>

    <div class="sec-title">Quick Start — Choose Your Training</div>
    <div class="grid g-3">
      ${Object.entries(SPORTS).map(([k,s])=>`
        <div class="wo-card">
          <div class="wo-top" style="background:${s.color}"><h3>${s.emoji} ${s.title}</h3><span class="tag">${s.plans.length} plans</span></div>
          <div class="wo-body"><p>${s.desc}</p></div>
          <div class="wo-foot"><button class="btn btn-primary" onclick="go('${k}')">Open →</button></div>
        </div>`).join("")}
      <div class="wo-card">
        <div class="wo-top" style="background:linear-gradient(135deg,#65a30d,#a3e635)"><h3>🥗 Diet Plan</h3><span class="tag">Fuel</span></div>
        <div class="wo-body"><p>${DIET.goal.desc}</p></div>
        <div class="wo-foot"><button class="btn btn-green" onclick="go('diet')">View Diet →</button></div>
      </div>
    </div>

    <div class="sec-title">⭐ Your Favorites</div>
    <div class="card" id="favSection">
      ${favs.length ? `<div class="grid g-3" style="gap:12px">${favs.slice(0,6).map(id=>{
        const k = id.slice(0,id.lastIndexOf("-")), n = +id.slice(id.lastIndexOf("-")+1);
        const sp = SPORTS[k], pl = sp && sp.plans[n];
        if(!pl) return "";
        return `<button class="fav-link" onclick="openPlanDetail('${k}',${n})"><b>${sp.emoji} ${pl.name}</b><small>${sp.title} · ${pl.time}</small></button>`;
      }).join("")}</div>${favs.length>6?`<p style="margin-top:12px;font-size:12.5px;color:var(--muted)">+ ${favs.length-6} more — star any activity to save it here.</p>`:""}`
      : `<p>Star any activity <b>☆</b> on a training card and it will appear here for quick access.</p>`}
    </div>

    <div class="sec-title">Your Today Checklist</div>
    <div class="card">
      ${HABITS.map((h,i)=>`
        <label class="check-item" data-habit="${i}">
          <input type="checkbox" ${habitsLog[t]?.[h.name]?"checked":""}>
          <span>${h.icon} ${h.name}</span>
          <small style="color:var(--muted);font-size:12px">+1 ${h.unit}</small>
        </label>`).join("")}
      <div class="bar-wrap">
        <div class="bar-label"><span>Daily habits progress</span><span id="habitPct">0%</span></div>
        <div class="bar"><div class="bar-fill" id="habitBar" style="width:0%"></div></div>
      </div>
    </div>
  `;
  $("#content").appendChild(page);

  page.querySelectorAll("[data-habit]").forEach(label=>{
    label.querySelector("input").addEventListener("change", e=>{
      const name = HABITS[+label.dataset.habit].name;
      habitsLog[t] = habitsLog[t]||{};
      habitsLog[t][name] = e.target.checked;
      store.set("habitsLog", habitsLog);
      label.classList.toggle("done", e.target.checked);
      touchStreak(); updateHabitBar();
      if(e.target.checked) toast("Habit completed! ✅");
    });
    if(habitsLog[t]?.[HABITS[+label.dataset.habit].name]) label.classList.add("done");
  });
  updateHabitBar();
}
function updateHabitBar(){
  const t=todayKey();
  const done = HABITS.filter(h=>habitsLog[t]?.[h.name]).length;
  const pct = Math.round(done/HABITS.length*100);
  const bar=$("#habitBar"); if(bar){ bar.style.width=pct+"%"; $("#habitPct").textContent=pct+"%"; }
}

/* ---------- RENDER: SPORT PAGES ---------- */
function planCard(key, p, i, s){
  const elite = !!p.elite || p.level === "Pro";
  const info = planInfo(key, i);
  const muscles = info.muscles.split("·").slice(0,2).map(m=>m.trim()).filter(Boolean).join(" · ");
  const faved = isFav(key,i);
  return `
    <div class="wo-card ${elite?"elite":""}" onclick="openPlanDetail('${key}',${i})" title="Open activity details">
      <button class="fav-star ${faved?"on":""}" data-fav="${favId(key,i)}" onclick="event.stopPropagation();toggleFav('${key}',${i})" title="Favorite">${faved?"★":"☆"}</button>
      <div class="wo-top" style="background:${s.color}">
        <div><h3>${elite?"👑 ":""}${p.name}</h3></div>
        <span class="tag">${elite?"ELITE":p.tag}</span>
      </div>
      <div class="wo-body">
        <div class="meta">
          <span>📊 ${p.level}</span><span>⏱ ${p.time}</span><span>🔥 ${p.cal}</span>
          <span>🧩 ${p.items.length} blocks</span>
        </div>
        <div class="diff-line"><label>Difficulty</label>${diffDots(p.level)}</div>
        <p class="plan-desc">${p.desc || s.desc}</p>
        <div class="chip-row">
          <span class="mini-chip">🏋️ ${info.equip.length>34?info.equip.slice(0,34)+"…":info.equip}</span>
          <span class="mini-chip">🎯 ${muscles}</span>
        </div>
      </div>
      <div class="wo-foot btn-row">
        <button class="btn btn-primary" onclick="event.stopPropagation();openPlanDetail('${key}',${i})">View Activity →</button>
        <button class="btn btn-ghost" style="flex:0 0 48px" onclick="event.stopPropagation();markDone('${key}',${i})" title="Mark as done">✅</button>
      </div>
    </div>`;
}
function renderSport(key){
  const s = SPORTS[key];
  const filters = ["All","Beginner","Intermediate","Advanced","Pro","FAV"];
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:${s.color}">${s.emoji} Training Program</div>
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
    </div>
    <div class="filter-row">
      <span class="filter-label">Filter:</span>
      ${filters.map((f,i)=>`<button class="chip f-chip ${i===0?"active":""}" data-f="${f}">${f==="All"?"All levels":(f==="FAV"?"⭐ Favorites":f)}</button>`).join("")}
      <span class="filter-count" id="fCount">${s.plans.length} activities</span>
    </div>
    <div class="grid g-2" id="planGrid">
      ${s.plans.map((p,i)=>planCard(key,p,i,s)).join("")}
    </div>`;
  $("#content").appendChild(page);

  page.querySelectorAll(".f-chip").forEach(c=>c.addEventListener("click",()=>{
    page.querySelectorAll(".f-chip").forEach(x=>x.classList.remove("active"));
    c.classList.add("active");
    const f = c.dataset.f;
    const list = s.plans.map((p,i)=>({p,i}))
      .filter(({p,i}) => f==="All" || (f==="FAV" && isFav(key,i)) || p.level===f || p.level==="All levels");
    page.querySelector("#planGrid").innerHTML = list.map(({p,i})=>planCard(key,p,i,s)).join("");
    page.querySelector("#fCount").textContent = list.length + " activities";
  }));
}

/* ---------- RENDER: DIET ---------- */
function renderDiet(){
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:linear-gradient(135deg,#65a30d,#a3e635)">🥗 Nutrition</div>
      <h2>Diet Plan</h2>
      <p>${DIET.goal.desc}</p>
    </div>

    <div class="diet-tabs">
      ${DIET.goals.map((g,i)=>`<button class="chip ${i===0?"active":""}" data-goal="${i}">${g}</button>`).join("")}
    </div>

    <div class="grid g-3">
      ${DIET.meals.map(m=>`
        <div class="meal-card">
          <div class="meal-head">
            <div class="meal-icon">${m.icon}</div>
            <div><h4>${m.name}</h4><div class="time">${m.time} · <b style="color:var(--accent-2)">${m.kcal}</b></div></div>
          </div>
          ${m.items.map(([f,k])=>`<div class="food-row"><span>${f}</span><span class="kcal">${k}</span></div>`).join("")}
        </div>`).join("")}
    </div>

    <div class="sec-title">Supplements (Optional)</div>
    <div class="grid g-2">
      <div class="card"><h3>💊 Recommended Stack</h3>
        ${DIET.supplements.map(([n,d])=>`<div class="food-row"><span><b>${n}</b><br><small>${d}</small></span></div>`).join("")}
      </div>
      <div class="card"><h3>🚫 Avoid These</h3>
        ${DIET.avoid.map(a=>`<div class="food-row"><span>❌ ${a}</span></div>`).join("")}
        <div class="food-row" style="margin-top:6px"><span>💧 ${DIET.water}</span></div>
      </div>
    </div>`;
  $("#content").appendChild(page);

  page.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{
    page.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
    c.classList.add("active");
    const g = DIET.goals[+c.dataset.goal];
    let note = "";
    if(g==="Fat Loss") note = "Fat Loss mode: cut portions ~20%, drop sugary carbs, keep protein high, add 20 min cardio daily.";
    else if(g==="Maintain / Performance") note = "Performance mode: eat at maintenance, time carbs around training, keep protein at 1.8 g/kg.";
    else note = DIET.goal.desc;
    page.querySelector(".page-head p").textContent = note;
    toast("Switched to: " + g);
  }));
}

/* ---------- RENDER: WATER & HABITS ---------- */
function renderWater(){
  const t=todayKey(); const w = waterLog[t]||0;
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:linear-gradient(135deg,#0ea5e9,#38bdf8)">💧 Hydration</div>
      <h2>Water &amp; Daily Habits</h2>
      <p>Stay hydrated and build the habits that make training gains stick.</p>
    </div>
    <div class="grid g-2">
      <div class="card" style="text-align:center">
        <div style="font-size:74px">💧</div>
        <div class="num" style="font-size:54px;font-weight:800" id="waterNum">${w}</div>
        <p>of 8 glasses today</p>
        <div class="bar-wrap"><div class="bar"><div class="bar-fill" id="waterBar" style="width:${w/8*100}%"></div></div></div>
        <div class="btn-row" style="margin-top:16px">
          <button class="btn btn-primary" id="addWater">+ Add Glass</button>
          <button class="btn btn-ghost" id="resetWater">Reset</button>
        </div>
        <p style="margin-top:14px;font-size:12.5px">${DIET.water}</p>
      </div>
      <div class="card">
        <h3>✅ Daily Habit Tracker</h3>
        <p style="margin-bottom:14px">Tick habits as you complete them — your streak grows with consistency.</p>
        ${HABITS.map((h,i)=>`
          <label class="check-item" data-habit="${i}">
            <input type="checkbox" ${habitsLog[t]?.[h.name]?"checked":""}>
            <span>${h.icon} ${h.name}</span>
          </label>`).join("")}
      </div>
    </div>`;
  $("#content").appendChild(page);

  page.querySelector("#addWater").addEventListener("click",()=>{
    waterLog[t]=Math.min(20,(waterLog[t]||0)+1); store.set("waterLog",waterLog);
    page.querySelector("#waterNum").textContent=waterLog[t];
    page.querySelector("#waterBar").style.width=Math.min(100,waterLog[t]/8*100)+"%";
    touchStreak(); toast("Glass logged! Stay hydrated 💧");
  });
  page.querySelector("#resetWater").addEventListener("click",()=>{
    waterLog[t]=0; store.set("waterLog",waterLog);
    page.querySelector("#waterNum").textContent=0; page.querySelector("#waterBar").style.width="0%";
  });
  page.querySelectorAll("[data-habit]").forEach(label=>{
    label.querySelector("input").addEventListener("change",e=>{
      const name=HABITS[+label.dataset.habit].name;
      habitsLog[t]=habitsLog[t]||{}; habitsLog[t][name]=e.target.checked;
      store.set("habitsLog",habitsLog); label.classList.toggle("done",e.target.checked); touchStreak();
    });
    if(habitsLog[t]?.[HABITS[+label.dataset.habit].name]) label.classList.add("done");
  });
}

/* ---------- RENDER: WEEKLY PLANNER ---------- */
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const FOCUS_OPTS = [
  ["rest","😴 Rest / Recovery"],["football","⚽ Football"],["cricket","🏏 Cricket"],
  ["khokho","🏃 Kho Kho"],["basketball","🏀 Basketball"],["gym","🏋️ Gym / Full Body"],
  ["abs","💪 Abs & Core"],["home","🏠 Home Training"],["recovery","🧘 Warm-up & Mobility"]
];
function renderPlanner(){
  let plan = store.get("planner", {});
  const todayName = DAYS[(new Date().getDay()+6)%7];
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:var(--grad-main)">📅 Training Schedule</div>
      <h2>Weekly Planner</h2>
      <p>Assign a focus to every day. Your plan is saved on this device — open the section in one click.</p>
    </div>
    <div class="btn-row" style="max-width:520px;margin-bottom:20px">
      <button class="btn btn-primary" id="autoFill">🤖 Auto-fill Smart Split</button>
      <button class="btn btn-ghost" id="clearPlan">Clear week</button>
    </div>
    <div class="planner-grid" id="plannerGrid"></div>
    <div class="sec-title">How the smart split works</div>
    <div class="grid g-3">
      <div class="card"><h3>⚡ Hard / Easy Alternation</h3><p>Never two hard days back to back — football and gym alternate with recovery so you adapt instead of breaking down.</p></div>
      <div class="card"><h3>🎯 Sport + Body Every Day</h3><p>Each week covers all four sports, two gym sessions, abs and mobility — no weak links in your game.</p></div>
      <div class="card"><h3>🛌 One Full Rest Day</h3><p>At least one complete rest day protects your joints, sleep and motivation — pros take it, you should too.</p></div>
    </div>`;
  $("#content").appendChild(page);

  const grid = page.querySelector("#plannerGrid");
  const paint = ()=>{
    grid.innerHTML = DAYS.map(d=>{
      const val = plan[d] || "rest";
      const isToday = d === todayName;
      return `
      <div class="day-card ${isToday?"today":""}">
        <div class="day-head"><span>${d.slice(0,3).toUpperCase()}</span>${isToday?'<em>Today</em>':""}</div>
        <select class="day-select" data-day="${d}">
          ${FOCUS_OPTS.map(([k,l])=>`<option value="${k}" ${val===k?"selected":""}>${l}</option>`).join("")}
        </select>
        <button class="btn btn-ghost open-focus" data-focus="${val}" ${val==="rest"?"disabled":""}>Open →</button>
      </div>`;
    }).join("");
    grid.querySelectorAll(".day-select").forEach(s=>s.addEventListener("change",()=>{
      plan[s.dataset.day] = s.value; store.set("planner", plan); paint();
      toast(s.dataset.day + " set to " + s.options[s.selectedIndex].text);
    }));
    grid.querySelectorAll(".open-focus").forEach(b=>b.addEventListener("click",()=>{
      if(b.dataset.focus && b.dataset.focus!=="rest") go(b.dataset.focus);
    }));
  };
  paint();

  page.querySelector("#autoFill").addEventListener("click",()=>{
    const split = { Monday:"football", Tuesday:"gym", Wednesday:"cricket", Thursday:"abs", Friday:"basketball", Saturday:"khokho", Sunday:"recovery" };
    plan = split; store.set("planner", plan); paint();
    toast("Smart split applied to your week 🤖");
  });
  page.querySelector("#clearPlan").addEventListener("click",()=>{
    plan = {}; store.set("planner", plan); paint(); toast("Week cleared");
  });
}

/* ---------- RENDER: PROGRESS & STATS ---------- */
const ACHIEVEMENTS = [
  { icon:"🌱", name:"First Rep", test:s=>s.total>=1, hint:"Log 1 workout" },
  { icon:"🔥", name:"Committed", test:s=>s.total>=10, hint:"Log 10 workouts" },
  { icon:"🏆", name:"Machine", test:s=>s.total>=30, hint:"Log 30 workouts" },
  { icon:"⚡", name:"On Fire", test:s=>s.streak>=3, hint:"3-day streak" },
  { icon:"🌋", name:"Inferno", test:s=>s.streak>=7, hint:"7-day streak" },
  { icon:"🌍", name:"Explorer", test:s=>s.sports>=3, hint:"Train 3 different sports" },
  { icon:"🥇", name:"All-Rounder", test:s=>s.sports>=7, hint:"Train 7 different sections" },
  { icon:"💧", name:"Hydrated", test:s=>s.water>=8, hint:"8 glasses in one day" },
  { icon:"👑", name:"Elite Student", test:s=>s.elite>=5, hint:"Log 5 ELITE sessions" },
  { icon:"🏠", name:"Home Champion", test:s=>s.home>=5, hint:"Log 5 home workouts" }
];
function renderProgress(){
  const t = todayKey();
  const total = Object.values(completed).reduce((a,b)=>a+b.length,0);
  const water = waterLog[t]||0;
  const allIds = Object.values(completed).flat();
  const sportCount = {};
  allIds.forEach(id=>{
    const k = id.slice(0, id.lastIndexOf("-"));
    sportCount[k] = (sportCount[k]||0)+1;
  });
  const sports = Object.keys(sportCount).length;
  const eliteDone = (sportCount["football"]||0) >= 0 ? allIds.filter(id=>{
    const k=id.slice(0,id.lastIndexOf("-")); const n=+id.slice(id.lastIndexOf("-")+1);
    return SPORTS[k] && SPORTS[k].plans[n] && (SPORTS[k].plans[n].elite);
  }).length : 0;
  const homeDone = sportCount["home"]||0;

  // last 7 days
  const days = [];
  for(let i=6;i>=0;i--){
    const d = new Date(Date.now()-i*864e5).toISOString().slice(0,10);
    days.push({ d, label:new Date(Date.now()-i*864e5).toLocaleDateString(undefined,{weekday:"short"}), n:(completed[d]||[]).length });
  }
  const maxN = Math.max(1, ...days.map(x=>x.n));
  const topSports = Object.entries(sportCount).sort((a,b)=>b[1]-a[1]);
  const maxS = Math.max(1, ...topSports.map(x=>x[1]));

  const state = { total, streak, water, sports, elite:eliteDone, home:homeDone };
  const unlocked = ACHIEVEMENTS.filter(a=>a.test(state)).length;

  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:linear-gradient(135deg,#f59e0b,#fbbf24)">📊 Your Progress</div>
      <h2>Progress &amp; Stats</h2>
      <p>Everything you've earned on this device — workouts, streaks, sport breakdown and achievements.</p>
    </div>

    <div class="grid g-4">
      <div class="stat"><div class="icon">🏋️</div><div class="num">${total}</div><div class="lbl">Lifetime workouts</div></div>
      <div class="stat orange"><div class="icon">🔥</div><div class="num">${streak}</div><div class="lbl">Day streak</div></div>
      <div class="stat cyan"><div class="icon">💧</div><div class="num">${water}<small style="font-size:14px;color:var(--muted)">/8</small></div><div class="lbl">Water today</div></div>
      <div class="stat green"><div class="icon">🏅</div><div class="num">${unlocked}<small style="font-size:14px;color:var(--muted)">/${ACHIEVEMENTS.length}</small></div><div class="lbl">Achievements</div></div>
    </div>

    <div class="sec-title">Last 7 Days</div>
    <div class="card">
      <div class="week-chart">
        ${days.map(x=>`
          <div class="wk-col" title="${x.d}: ${x.n} workout(s)">
            <div class="wk-bar" style="height:${Math.max(6, x.n/maxN*100)}%"><span>${x.n||""}</span></div>
            <div class="wk-lbl">${x.label}</div>
          </div>`).join("")}
      </div>
      <p class="chart-note">${days.reduce((a,b)=>a+b.n,0)} workouts completed in the last 7 days.</p>
    </div>

    <div class="sec-title">Sport Breakdown</div>
    <div class="card">
      ${topSports.length ? topSports.map(([k,n])=>{
        const s = SPORTS[k] || {title:k, emoji:"🎯", color:"var(--accent)"};
        return `
        <div class="sport-bar">
          <div class="sb-head"><span>${s.emoji} ${s.title}</span><b>${n}</b></div>
          <div class="bar"><div class="bar-fill" style="width:${n/maxS*100}%"></div></div>
        </div>`;
      }).join("") : `<div class="empty" style="padding:26px"><div class="big">📈</div><p>Log your first workout to see this chart.</p></div>`}
    </div>

    <div class="sec-title">Achievements</div>
    <div class="grid g-4">
      ${ACHIEVEMENTS.map(a=>{
        const got = a.test(state);
        return `
        <div class="ach ${got?"got":""}">
          <div class="ach-icon">${a.icon}</div>
          <div class="ach-name">${a.name}</div>
          <div class="ach-hint">${got?"Unlocked ✓":a.hint}</div>
        </div>`;
      }).join("")}
    </div>

    <div class="sec-title">Your Data</div>
    <div class="card">
      <p style="margin-bottom:14px">Everything is stored on this device. Export a backup file to move or keep your progress.</p>
      <div class="btn-row" style="max-width:460px">
        <button class="btn btn-primary" id="exportBtn">⬇ Export backup (.json)</button>
        <button class="btn btn-ghost" id="importBtn">⬆ Import backup</button>
        <input type="file" id="importFile" accept=".json" style="display:none"/>
      </div>
    </div>`;
  $("#content").appendChild(page);

  page.querySelector("#exportBtn").addEventListener("click",()=>{
    const data = {};
    ["completed","waterLog","habitsLog","streak","lastActive","planner","fav","weights","theme"].forEach(k=>data[k]=store.get(k,null));
    const blob = new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "AthletePro-backup-" + todayKey() + ".json";
    a.click(); URL.revokeObjectURL(a.href);
    toast("Backup downloaded ⬇");
  });
  page.querySelector("#importBtn").addEventListener("click",()=>page.querySelector("#importFile").click());
  page.querySelector("#importFile").addEventListener("change", e=>{
    const f = e.target.files[0]; if(!f) return;
    const rd = new FileReader();
    rd.onload = ()=>{
      try{
        const data = JSON.parse(rd.result);
        Object.entries(data).forEach(([k,v])=>{ if(v!==null && v!==undefined) store.set(k,v); });
        toast("Backup imported ✅ — reloading…");
        setTimeout(()=>location.reload(), 1200);
      }catch(err){ toast("Invalid backup file ❌"); }
    };
    rd.readAsText(f);
  });
}

/* ---------- ACTIVITY DETAIL (rich view) ---------- */
let timer = null;
function openPlanDetail(sportKey, idx){
  const s = SPORTS[sportKey], p = s.plans[idx], info = planInfo(sportKey, idx);
  const elite = !!p.elite || p.level === "Pro";
  const muscles = info.muscles.split("·").map(m=>m.trim()).filter(Boolean);
  $("#modal").classList.add("wide");
  $("#modalBody").innerHTML = `
    <div class="detail-hero" style="background:${s.color}">
      <div class="d-badges">
        ${elite ? `<span class="elite-badge">👑 ELITE PRO</span>` : `<span class="detail-tag">${p.tag}</span>`}
        <span class="detail-tag ghost">${s.emoji} ${s.title}</span>
      </div>
      <h3>${p.name}</h3>
      <p>${info.desc}</p>
      <div class="d-meta">
        <span>📊 ${p.level}</span>
        <span>⏱ ${p.time}</span>
        <span>🔥 ${p.cal}</span>
        <span>🧩 ${p.items.length} blocks</span>
      </div>
      <div class="d-diff"><label>Difficulty</label>${diffDots(p.level)}</div>
    </div>

    <div class="detail-grid">
      <div class="d-main">
        <div class="d-sec">🎯 Muscles / Focus</div>
        <div class="chip-row">${muscles.map(m=>`<span class="mini-chip">${m}</span>`).join("")}</div>

        <div class="d-sec">🏋️ Equipment Needed</div>
        <div class="mini-chip wide">${info.equip}</div>

        <div class="d-sec">📋 Exercise Breakdown — tap any block for “How to do it”</div>
        <div class="step-list">
          ${p.items.map((it,i)=>{
            const how = getHow(p, i);
            return `
            <div class="step exp">
              <div class="n">${i+1}</div>
              <div class="s-body">
                <b>${it[0]}</b> <small class="rx">${it[1]}</small>
                <button class="how-btn">📘 How to do it ▾</button>
                <div class="how-panel">
                  <div class="how-head">Technique · ${it[0]}</div>
                  <ol class="how-steps">${how.map(h=>`<li>${h}</li>`).join("")}</ol>
                </div>
              </div>
            </div>`;
          }).join("")}
        </div>
      </div>

      <div class="d-side">
        <div class="d-sec green">✅ Coaching Points</div>
        <ul class="tip-list">${info.coach.map(c=>`<li>${c}</li>`).join("")}</ul>

        <div class="d-sec red">⚠️ Common Mistakes</div>
        <ul class="tip-list bad">${info.mistakes.map(c=>`<li>${c}</li>`).join("")}</ul>

        <div class="d-sec">⏱ Rest &amp; Structure</div>
        <p class="rest-note">${info.rest}</p>

        <div class="d-sec">🏅 Level</div>
        <div class="level-line">${diffDots(p.level)} <b>${p.level}</b> · ${p.time} · ${p.cal}</div>
      </div>
    </div>

    <div class="btn-row" style="margin-top:20px">
      <button class="btn btn-green" id="dStart">▶ Start Guided Session</button>
      <button class="btn btn-ghost" id="dDone">✅ Mark as Done</button>
    </div>`;
  openModal();
  $("#modalBody").querySelectorAll(".step.exp").forEach(st=>{
    st.querySelector(".how-btn").addEventListener("click", e=>{
      e.stopPropagation();
      const open = st.classList.toggle("open");
      st.querySelector(".how-btn").textContent = open ? "📘 Hide technique ▴" : "📘 How to do it ▾";
    });
  });
  $("#dStart").onclick = ()=>startTimerView(sportKey, idx);
  $("#dDone").onclick = ()=>{ markDone(sportKey, idx); closeModal(); };
}
/* keep old name working (dashboard/search call it) */
function startWorkout(sportKey, idx){ openPlanDetail(sportKey, idx); }

/* ---------- GUIDED TIMER VIEW ---------- */
function startTimerView(sportKey, idx){
  const p = SPORTS[sportKey].plans[idx];
  const body = $("#modalBody");
  body.innerHTML = `
    <div class="head-badge" style="background:${SPORTS[sportKey].color}">${p.tag} · ${p.level}</div>
    <h3>${p.name}</h3>
    <div class="sub">⏱ ${p.time} · 🔥 ${p.cal}</div>
    <div class="timer-ring" id="ring" style="--p:0%">
      <div class="timer-inner">
        <div class="t" id="timeText">00:00</div>
        <div class="l" id="phaseLabel">Ready</div>
      </div>
    </div>
    <div class="btn-row">
      <button class="btn btn-green" id="startBtn">▶ Start</button>
      <button class="btn btn-ghost" id="resetBtn">↺ Reset</button>
      <button class="btn btn-ghost" id="backBtn">← Details</button>
    </div>
    <div class="sec-title" style="margin-top:22px">Exercises</div>
    <div class="step-list">
      ${p.items.map((it,i)=>`<div class="step" id="step${i}"><div class="n">${i+1}</div><div><b>${it[0]}</b><br><small style="color:var(--muted)">${it[1]}</small></div></div>`).join("")}
    </div>
    <button class="btn btn-primary" style="margin-top:18px" id="finishBtn">✅ Finish &amp; Log Workout</button>
  `;

  let sec=0, running=false, step=0;
  const totalSteps=p.items.length;
  const fmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
  const paint=()=>{
    $("#timeText").textContent=fmt(sec);
    $("#ring").style.setProperty("--p", Math.min(100, sec/(totalSteps*60)*100)+"%");
    document.querySelectorAll(".step").forEach((s,i)=>s.classList.toggle("active", i===step));
    $("#phaseLabel").textContent = running ? "Training" : (sec? "Paused" : "Ready");
  };
  paint();
  $("#startBtn").onclick=()=>{
    running=!running;
    $("#startBtn").textContent = running? "⏸ Pause" : "▶ Start";
    if(running){
      touchStreak();
      beep(660,0.12);
      timer=setInterval(()=>{
        sec++;
        if(sec%60===0){
          step=Math.min(step+1,totalSteps-1);
          beep(880,0.2);
          setTimeout(()=>beep(1100,0.18),220);
        } else if(sec%30===0){ beep(520,0.08); }
        paint();
      },1000);
    } else clearInterval(timer);
  };
  $("#resetBtn").onclick=()=>{ clearInterval(timer); sec=0; step=0; running=false; $("#startBtn").textContent="▶ Start"; paint(); };
  $("#backBtn").onclick=()=>{ clearInterval(timer); openPlanDetail(sportKey, idx); };
  $("#finishBtn").onclick=()=>{ clearInterval(timer); markDone(sportKey, idx); closeModal(); };
}
function markDone(sportKey, idx){
  const t=todayKey();
  completed[t]=completed[t]||[];
  const id=sportKey+"-"+idx;
  if(completed[t].includes(id)){ toast("Already logged today ✅"); return; }
  completed[t].push(id);
  store.set("completed",completed);
  touchStreak();
  toast("Workout logged! Great job 🎉");
}

/* ---------- MODAL ---------- */
function openModal(){ $("#modalBackdrop").classList.add("open"); document.body.style.overflow="hidden"; }
function closeModal(){ clearInterval(timer); $("#modalBackdrop").classList.remove("open"); $("#modal").classList.remove("wide"); document.body.style.overflow=""; }

/* ---------- RENDER: EXERCISE GUIDE ---------- */
function renderGuide(){
  const entries = Object.entries(TECH).map(([k,v])=>({
    title: k.replace(/\b\w/g, c=>c.toUpperCase()),
    steps: v
  }));
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:linear-gradient(135deg,#0891b2,#22d3ee)">📘 Technique Encyclopedia</div>
      <h2>Exercise Guide</h2>
      <p>${entries.length} exercises with step-by-step form instructions — the same technique shown in every activity's "How to do it" panel.</p>
    </div>
    <div class="search-wrap" style="max-width:100%;margin-bottom:20px">
      <input type="text" id="guideSearch" placeholder="Search an exercise… e.g. squat, sprint, catch, plank" style="padding-left:42px"/>
    </div>
    <div class="grid g-3" id="guideGrid">
      ${entries.map((e,i)=>`
        <div class="guide-card" data-t="${e.title.toLowerCase()} ${e.steps.join(" ").toLowerCase()}">
          <div class="g-num">${i+1}</div>
          <h4>${e.title}</h4>
          <ol class="how-steps">${e.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
        </div>`).join("")}
    </div>`;
  $("#content").appendChild(page);
  page.querySelector("#guideSearch").addEventListener("input", e=>{
    const q = e.target.value.trim().toLowerCase();
    let shown = 0;
    page.querySelectorAll(".guide-card").forEach(c=>{
      const hit = !q || c.dataset.t.includes(q);
      c.style.display = hit ? "" : "none";
      if(hit) shown++;
    });
    let counter = page.querySelector("#guideCount");
    if(!counter){ counter = el("p","chart-note"); counter.id="guideCount"; page.querySelector("#guideGrid").before(counter); }
    counter.textContent = q ? shown + " result(s) for \"" + q + "\"" : "";
  });
}

/* ---------- RENDER: BODY TOOLS ---------- */
function renderTools(){
  const weights = store.get("weights", []);
  const page = el("div");
  page.innerHTML = `
    <div class="page-head">
      <div class="head-badge" style="background:linear-gradient(135deg,#a855f7,#ec4899)">🧮 Calculators</div>
      <h2>Body Tools</h2>
      <p>1RM strength calculator, BMI check, daily macro targets and a body-weight tracker — all local to your device.</p>
    </div>

    <div class="grid g-2">
      <div class="card">
        <h3>🏋️ 1-Rep Max Calculator</h3>
        <p>How much can you lift for one? Enter a weight you lifted for reps.</p>
        <div class="calc-row">
          <label>Weight lifted (kg)</label><input type="number" id="rmW" value="60" min="1"/>
          <label>Reps performed</label><input type="number" id="rmR" value="5" min="1" max="15"/>
          <button class="btn btn-primary" id="rmGo">Calculate 1RM</button>
        </div>
        <div class="calc-out" id="rmOut"></div>
      </div>

      <div class="card">
        <h3>⚖️ BMI Check</h3>
        <p>Body Mass Index — a quick weight-status reference.</p>
        <div class="calc-row">
          <label>Height (cm)</label><input type="number" id="bmH" value="175" min="80"/>
          <label>Weight (kg)</label><input type="number" id="bmW" value="70" min="20"/>
          <button class="btn btn-primary" id="bmGo">Check BMI</button>
        </div>
        <div class="calc-out" id="bmOut"></div>
      </div>

      <div class="card">
        <h3>🔥 Daily Calorie &amp; Macro Targets</h3>
        <p>Mifflin-St Jeor BMR → TDEE → goal-based targets.</p>
        <div class="calc-row two">
          <label>Age</label><input type="number" id="mcA" value="20"/>
          <label>Sex</label><select id="mcS"><option value="m">Male</option><option value="f">Female</select>
          <label>Height (cm)</label><input type="number" id="mcH" value="175"/>
          <label>Weight (kg)</label><input type="number" id="mcW" value="70"/>
          <label>Activity</label><select id="mcAct">
            <option value="1.2">Sedentary (desk)</option>
            <option value="1.375">Light (1–3 days/wk)</option>
            <option value="1.55" selected>Moderate (3–5 days/wk)</option>
            <option value="1.725">High (6–7 days/wk)</option>
            <option value="1.9">Athlete (2x/day)</option>
          </select>
          <label>Goal</label><select id="mcGoal">
            <option value="-400">Lose fat</option>
            <option value="0" selected>Maintain</option>
            <option value="+350">Build muscle</option>
          </select>
        </div>
        <button class="btn btn-primary" id="mcGo">Get My Targets</button>
        <div class="calc-out" id="mcOut"></div>
      </div>

      <div class="card">
        <h3>📈 Weight Tracker</h3>
        <p>Log your weight and watch the trend.</p>
        <div class="calc-row">
          <label>Today's weight (kg)</label><input type="number" id="wtIn" step="0.1" placeholder="e.g. 70.4"/>
          <button class="btn btn-green" id="wtAdd">Log weight</button>
        </div>
        <div id="wtChart"></div>
        <div class="calc-out" id="wtOut"></div>
      </div>
    </div>`;
  $("#content").appendChild(page);

  const $p = s=>page.querySelector(s);
  $p("#rmGo").addEventListener("click",()=>{
    const w=+$p("#rmW").value, r=+$p("#rmR").value;
    if(!w||!r) return;
    const epley = Math.round(w*(1+r/30));
    const percents=[95,90,85,80,75,70];
    $p("#rmOut").innerHTML = `<div class="big-num">${epley} kg <small>estimated 1RM</small></div>
      <div class="pct-table">${percents.map(p=>`<div><span>${p}%</span><b>${Math.round(epley*p/100)} kg</b></div>`).join("")}</div>`;
  });
  $p("#bmGo").addEventListener("click",()=>{
    const h=+$p("#bmH").value/100, w=+$p("#bmW").value;
    if(!h||!w) return;
    const bmi=w/(h*h);
    let cls="Normal range", col="var(--green)";
    if(bmi<18.5){cls="Underweight";col="var(--accent-2)";}
    else if(bmi>=25&&bmi<30){cls="Overweight";col="var(--orange)";}
    else if(bmi>=30){cls="Obese";col="var(--red)";}
    $p("#bmOut").innerHTML = `<div class="big-num">${bmi.toFixed(1)} <small style="color:${col}">${cls}</small></div>
      <p style="font-size:12.5px;color:var(--muted)">Healthy adult range: 18.5 – 24.9. Athletes with high muscle mass often score higher — use it as a guide, not a verdict.</p>`;
  });
  $p("#mcGo").addEventListener("click",()=>{
    const a=+$p("#mcA").value, sex=$p("#mcS").value, h=+$p("#mcH").value, w=+$p("#mcW").value;
    const act=+$p("#mcAct").value, goal=+$p("#mcGoal").value;
    if(!a||!h||!w) return;
    let bmr = 10*w + 6.25*h - 5*a + (sex==="m" ? 5 : -161);
    const tdee = bmr*act;
    const target = Math.round(tdee + goal);
    const protein = Math.round(w*2.0), fat = Math.round(w*0.9);
    const carbs = Math.max(50, Math.round((target - protein*4 - fat*9)/4));
    $p("#mcOut").innerHTML = `<div class="big-num">${target.toLocaleString()} <small>kcal/day target</small></div>
      <div class="macro-grid">
        <div><b>${protein} g</b><span>Protein</span></div>
        <div><b>${carbs} g</b><span>Carbs</span></div>
        <div><b>${fat} g</b><span>Fats</span></div>
      </div>
      <p style="font-size:12.5px;color:var(--muted)">BMR ${Math.round(bmr)} · TDEE ${Math.round(tdee)} · ${goal<0?"deficit for fat loss":goal>0?"surplus for muscle":"maintenance"} — pair this with the Diet Plan page.</p>`;
  });
  const drawWeights = ()=>{
    const wrap = $p("#wtChart");
    if(!weights.length){ wrap.innerHTML = `<div class="empty" style="padding:18px"><div class="big" style="font-size:34px">📈</div><p>No entries yet — log your first weight.</p></div>`; return; }
    const last = weights.slice(-10);
    const min = Math.min(...last.map(x=>x.v))-1, max = Math.max(...last.map(x=>x.v))+1;
    const pts = last.map((x,i)=>`${i/(last.length-1)*100},${100-((x.v-min)/(max-min))*100}`).join(" ");
    wrap.innerHTML = `<div class="wt-chart"><svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline points="${pts}" fill="none" stroke="url(#g1)" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4f7cff"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs>
    </svg></div>
    <div class="wt-legend"><span>${last[0].d.slice(5)} · ${last[0].v} kg</span><span>${last[last.length-1].d.slice(5)} · ${last[last.length-1].v} kg</span></div>`;
  };
  drawWeights();
  $p("#wtAdd").addEventListener("click",()=>{
    const v = parseFloat($p("#wtIn").value);
    if(!v){ toast("Enter a valid weight"); return; }
    weights.push({d:todayKey(), v});
    store.set("weights", weights.slice(-60));
    $p("#wtIn").value=""; drawWeights(); toast("Weight logged 📈");
  });
}

/* ---------- ROUTER ---------- */
function go(page){
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.page===page));
  $("#content").innerHTML="";
  if(page==="dashboard") renderDashboard();
  else if(page==="planner") renderPlanner();
  else if(page==="progress") renderProgress();
  else if(page==="guide") renderGuide();
  else if(page==="tools") renderTools();
  else if(SPORTS[page]) renderSport(page);
  else if(page==="diet") renderDiet();
  else if(page==="water") renderWater();
  if(window.innerWidth<=900) $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- SEARCH ---------- */
function runSearch(q){
  q=q.trim().toLowerCase();
  $("#content").innerHTML="";
  if(!q){ go(document.querySelector(".nav-btn.active").dataset.page); return; }
  const results=[];
  Object.entries(SPORTS).forEach(([k,s])=>s.plans.forEach((p,i)=>{
    const hay=(p.name+" "+p.tag+" "+p.items.map(x=>x[0]).join(" ")).toLowerCase();
    if(hay.includes(q)) results.push({k,s,p,i});
  }));
  DIET.meals.forEach(m=>{ if((m.name+" "+m.items.map(x=>x[0]).join(" ")).toLowerCase().includes(q))
    results.push({k:"diet",s:{title:"Diet Plan",color:"linear-gradient(135deg,#65a30d,#a3e635)",emoji:"🥗"},p:{name:m.name,tag:"Meal",level:m.time,time:m.kcal,items:m.items},i:-1}); });

  const page=el("div");
  if(!results.length){
    page.innerHTML=`<div class="empty"><div class="big">🔍</div><h3>No results for "${q}"</h3><p>Try: sprint, plank, protein, bowling, dunk, dodge, mobility…</p>
      </div>`;
  }else{
    page.innerHTML=`
      <div class="page-head"><h2>Search results</h2><p>${results.length} match(es) for "${q}"</p></div>
      <div class="grid g-2">
      ${results.map(r=>`
        <div class="wo-card" onclick="${r.i>=0?`openPlanDetail('${r.k}',${r.i})`:``}">
          <div class="wo-top" style="background:${r.s.color}"><h3>${r.s.emoji} ${r.p.name}</h3><span class="tag">${r.p.tag}</span></div>
          <div class="wo-body">
            <div class="meta"><span>📊 ${r.p.level}</span><span>⏱ ${r.p.time}</span><span>🔥 ${r.p.cal}</span></div>
            <ul>${r.p.items.slice(0,4).map(([n,d])=>`<li><span>${n}</span><small>${d}</small></li>`).join("")}</ul>
          </div>
          <div class="wo-foot">${r.i>=0
            ? `<button class="btn btn-primary" onclick="event.stopPropagation();openPlanDetail('${r.k}',${r.i})">View Activity →</button>`
            : `<button class="btn btn-green" onclick="event.stopPropagation();go('diet')">View Meal →</button>`}</div>
        </div>`).join("")}
      </div>`;
  }
  $("#content").appendChild(page);
}

/* ---------- INIT ---------- */
function init(){
  $("#dateChip").textContent = new Date().toLocaleDateString(undefined,{weekday:'short',day:'numeric',month:'short',year:'numeric'});
  $("#streakCount").textContent = streak;
  favs = store.get("fav", []);

  document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
  $("#menuToggle").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));

  const theme=store.get("theme","dark");
  if(theme==="light"){ document.body.classList.add("light"); $("#themeToggle").textContent="☀️"; }
  $("#themeToggle").addEventListener("click",()=>{
    document.body.classList.toggle("light");
    const light=document.body.classList.contains("light");
    $("#themeToggle").textContent = light?"☀️":"🌙";
    store.set("theme", light?"light":"dark");
  });

  $("#modalClose").addEventListener("click",closeModal);
  $("#modalBackdrop").addEventListener("click",e=>{ if(e.target.id==="modalBackdrop") closeModal(); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal(); });

  let sT;
  $("#searchInput").addEventListener("input",e=>{ clearTimeout(sT); sT=setTimeout(()=>runSearch(e.target.value),250); });

  go("dashboard");
}
init();
