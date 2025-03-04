
// Types for dua data
export interface Dua {
  id: number;
  title: string;
  arabic: string;
  translation: string;
  transliteration: string;
  category: string;
  occasion?: string;
  reference?: string;
  favorite?: boolean;
}

// Categories for duas
export const DUA_CATEGORIES = [
  "Ramadan",
  "Fasting",
  "Prayer",
  "Morning & Evening",
  "General",
  "Forgiveness",
  "Protection",
];

// Sample duas for Ramadan
export const ramadanDuas: Dua[] = [
  {
    id: 1,
    title: "Dua for Breaking Fast (Iftar)",
    arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    translation: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    transliteration: "Dhahabadh-dhama'u wabtallatil 'urooqu, wa thabatal-ajru insha'Allah.",
    category: "Ramadan",
    occasion: "Iftar",
    reference: "Abu Dawud"
  },
  {
    id: 2,
    title: "Dua Before Breaking Fast",
    arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ، وَبِكَ آمَنْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    translation: "O Allah, for You I have fasted, in You I have believed, and with Your provision I break my fast.",
    transliteration: "Allahumma inni laka sumtu, wa bika aamantu, wa 'ala rizqika aftartu.",
    category: "Ramadan",
    occasion: "Iftar",
    reference: "Abu Dawud"
  },
  {
    id: 3,
    title: "Dua for Laylatul Qadr",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    translation: "O Allah, You are forgiving and love forgiveness, so forgive me.",
    transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.",
    category: "Ramadan",
    occasion: "Laylatul Qadr",
    reference: "Tirmidhi"
  },
  {
    id: 4,
    title: "Dua at Suhoor",
    arabic: "بِسْمِ اللَّهِ، وَعَلَى بَرَكَةِ اللَّهِ",
    translation: "In the name of Allah, and with the blessings of Allah.",
    transliteration: "Bismillah, wa 'ala barakatillah.",
    category: "Ramadan",
    occasion: "Suhoor"
  },
  {
    id: 5,
    title: "Dua for Beginning the Fast",
    arabic: "وَبِصَوْمِ غَدٍ نَوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    translation: "I intend to keep the fast for tomorrow in the month of Ramadan.",
    transliteration: "Wa bisawmi ghadin nawaytu min shahri Ramadan.",
    category: "Ramadan",
    occasion: "Beginning Fast"
  },
  {
    id: 6,
    title: "Dua for Forgiveness",
    arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translation: "Our Lord, forgive us our sins and excesses in our affairs, make our foothold firm, and give us victory over the disbelieving people.",
    transliteration: "Rabbana ighfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin.",
    category: "Forgiveness",
    reference: "Quran 3:147"
  },
  {
    id: 7,
    title: "Dua for Protection",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    translation: "O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from cowardice and stinginess, and from being heavily in debt and from being overpowered by other men.",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal.",
    category: "Protection",
    reference: "Bukhari"
  },
  {
    id: 8,
    title: "Dua for Entering the Mosque",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    translation: "O Allah, open for me the gates of Your mercy.",
    transliteration: "Allahumma iftah li abwaba rahmatik.",
    category: "Prayer",
    reference: "Muslim"
  },
  {
    id: 9,
    title: "Dua for Leaving the Mosque",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    translation: "O Allah, I ask You of Your bounty.",
    transliteration: "Allahumma inni as'aluka min fadlik.",
    category: "Prayer",
    reference: "Muslim"
  },
  {
    id: 10,
    title: "Morning Remembrance",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    translation: "We have reached the morning, and the whole kingdom belongs to Allah. Praise be to Allah. None has the right to be worshipped except Allah alone, who has no partner.",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah.",
    category: "Morning & Evening",
    reference: "Abu Dawud"
  }
];

// Get duas by category
export const getDuasByCategory = (category: string): Dua[] => {
  return ramadanDuas.filter(dua => dua.category === category);
};

// Get featured duas for Ramadan
export const getFeaturedDuas = (): Dua[] => {
  return ramadanDuas.filter(dua => dua.category === "Ramadan");
};

// Toggle favorite status for a dua
export const toggleFavorite = (duaId: number): Dua[] => {
  return ramadanDuas.map(dua => {
    if (dua.id === duaId) {
      return {
        ...dua,
        favorite: !dua.favorite
      };
    }
    return dua;
  });
};
