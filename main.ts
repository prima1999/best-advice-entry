import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidate sentences, each exactly one sentence about the best advice
// the author ever received. Evaluated against the judge criteria in order:
// (1) one sentence about the best advice ever received; (2) advice worth
// carrying, specific and earned beyond its moment; (3) a real voice
// remembering a real moment, not a slogan; (4) tight, every word earning
// its place, readable in one breath; (5) it lands, leaving the reader
// with something after the last word.
const candidates: string[] = [
  "My grandmother, flour on her hands at the kitchen table the night before my first interview, told me courage is not the absence of fear but doing the thing anyway while your hands still shake.",
  "My father, kneeling beside my broken bicycle in the driveway with grease on his fingers, said fix what you can reach with your own hands before you blame what you cannot touch.",
  "My teacher, keeping me after class while rain drummed the classroom windows, said nobody remembers your grades but everyone remembers how you treated them while you were losing.",
  "My mother, holding my hand in the hospital waiting room at three in the morning, whispered that rest is not quitting and that a tired body is not a failed one.",
  "My old coach, mud on his boots at the edge of a field we were losing, told me to show up on the days you least feel like it because that is the whole secret.",
  "My grandfather, baiting my hook at dawn on the cold wooden pier, said patience is just attention that refuses to leave before the fish arrives.",
  "My sister, taping shut the last moving box in a nearly empty apartment, said you never have to carry everything at once, only the next box in front of you.",
  "My first boss, switching off the office lights long after midnight, said never send the angry email tonight because tomorrow morning you will be glad you waited.",
];

// Winner: candidate 0. It names a real giver in a real sensory moment
// (flour on her hands, the kitchen table, the night before a first
// interview), the advice is concrete and portable, and the closing image
// of shaking hands makes the abstract idea of courage something a reader
// can feel and keep.
const SELECTED = 0;

const sentence = candidates[SELECTED];

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence + "\n", "utf8");
