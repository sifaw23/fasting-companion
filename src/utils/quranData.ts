
interface JuzInfo {
  number: number;
  name: string;
}

interface ReadingPlan {
  day: number;
  juz: JuzInfo;
  description: string;
}

export interface Verse {
  surah: string;
  verse: string;
  text: string;
  translation: string;
}

export const generateRamadanReadingPlan = (): ReadingPlan[] => {
  const juzData: JuzInfo[] = [
    { number: 1, name: "Alif Lam Mim" },
    { number: 2, name: "Sayaqul" },
    { number: 3, name: "Tilkar Rusul" },
    { number: 4, name: "Lan Tanaloo" },
    { number: 5, name: "Wal Muhsanat" },
    { number: 6, name: "La Yuhibbullah" },
    { number: 7, name: "Wa Idha Sami'u" },
    { number: 8, name: "Wa Lau Annana" },
    { number: 9, name: "Qalal Mala'u" },
    { number: 10, name: "Wa'lamu" },
    { number: 11, name: "Ya'tadhirun" },
    { number: 12, name: "Wa Ma Min Dabbah" },
    { number: 13, name: "Wa Ma Ubarri'u" },
    { number: 14, name: "Rubama" },
    { number: 15, name: "Subhanallazi" },
    { number: 16, name: "Qal Alam" },
    { number: 17, name: "Iqtaraba Linnas" },
    { number: 18, name: "Qad Aflaha" },
    { number: 19, name: "Wa Qalallazina" },
    { number: 20, name: "A'man Khalaqa" },
    { number: 21, name: "Utlu Ma Uhiya" },
    { number: 22, name: "Wa Manyaqnut" },
    { number: 23, name: "Wa Mali" },
    { number: 24, name: "Faman Azlamu" },
    { number: 25, name: "Ilayhi Yuraddu" },
    { number: 26, name: "Ha Mim" },
    { number: 27, name: "Qala Fama Khatbukum" },
    { number: 28, name: "Qad Sami Allah" },
    { number: 29, name: "Tabarakallazi" },
    { number: 30, name: "Amma Yatasa'alun" }
  ];
  
  const descriptions = [
    "Begin your Ramadan journey with Surah Al-Fatiha and the start of Surah Al-Baqarah.",
    "Continue with Surah Al-Baqarah, which discusses faith, guidance, and stories of the prophets.",
    "Complete Surah Al-Baqarah and begin Surah Aali-Imran.",
    "Continue with Surah Aali-Imran and learn about the family of Imran and the birth of Jesus.",
    "Complete Surah Aali-Imran and begin Surah An-Nisa, which focuses on women's rights.",
    "Continue with Surah An-Nisa and learn about justice and dealing with orphans.",
    "Complete Surah An-Nisa and begin Surah Al-Ma'idah, which discusses dietary laws.",
    "Complete Surah Al-Ma'idah and begin Surah Al-An'am, which addresses idolatry.",
    "Continue with Surah Al-An'am and begin Surah Al-A'raf, which tells stories of previous nations.",
    "Continue with Surah Al-A'raf and begin Surah Al-Anfal, which discusses the battle of Badr.",
    "Complete Surah Al-Anfal and begin Surah At-Tawbah, which addresses treaties and repentance.",
    "Complete Surah At-Tawbah and begin Surah Yunus, which discusses Allah's signs in creation.",
    "Complete Surah Yunus and Read Surah Hud and part of Surah Yusuf.",
    "Complete Surah Yusuf and read several shorter surahs including Ar-Ra'd and Ibrahim.",
    "Read Surah Al-Hijr and Surah An-Nahl, which discusses bees as a sign of Allah.",
    "Read Surah Al-Isra, which narrates the night journey, and begin Surah Al-Kahf.",
    "Complete Surah Al-Kahf and read Surah Maryam and Surah Ta-Ha.",
    "Read several shorter surahs including Al-Anbiya and part of Al-Hajj.",
    "Complete Surah Al-Hajj and read several shorter surahs including Al-Mu'minun.",
    "Read several surahs including An-Nur, which discusses modesty and proper conduct.",
    "Read several shorter surahs including Al-Furqan and Ash-Shu'ara.",
    "Read several shorter surahs including An-Naml and Al-Qasas.",
    "Read several shorter surahs including Al-Ankabut and Ar-Rum.",
    "Read several shorter surahs including Luqman and As-Sajdah.",
    "Read several surahs including Al-Ahzab and Saba.",
    "Read several shorter surahs including Fatir and Ya-Sin.",
    "Read several shorter surahs including As-Saffat, Sad, and Az-Zumar.",
    "Read several shorter surahs including Ghafir and Fussilat.",
    "Read several shorter surahs including Ash-Shura, Az-Zukhruf, and Ad-Dukhan.",
    "Complete your Ramadan reading with the final short surahs of the Quran, including Al-Mulk and ending with An-Nas."
  ];
  
  return Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    juz: juzData[i],
    description: descriptions[i]
  }));
};

export const featuredVerses: Verse[] = [
  {
    surah: "Al-Baqarah 2:183",
    verse: "183",
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
  },
  {
    surah: "Al-Baqarah 2:185",
    verse: "185",
    text: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ",
    translation: "The month of Ramadan is that in which was revealed the Quran, a guidance for the people and clear proofs of guidance and criterion."
  },
  {
    surah: "Al-Qadr 97:1-3",
    verse: "1-3",
    text: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
    translation: "Indeed, We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months."
  },
  {
    surah: "Al-Baqarah 2:186",
    verse: "186",
    text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    translation: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."
  }
];
