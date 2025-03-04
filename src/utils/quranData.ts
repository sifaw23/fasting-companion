
// Sample Quran juz and surah data for the Quran reading guide
export interface Surah {
  number: number;
  name: string;
  englishName: string;
  versesCount: number;
}

export interface Juz {
  number: number;
  name: string;
  startSurah: number;
  startVerse: number;
  endSurah: number;
  endVerse: number;
}

// Simplified list of surahs for demo
export const surahs: Surah[] = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", versesCount: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", versesCount: 286 },
  { number: 3, name: "آل عمران", englishName: "Aal-Imran", versesCount: 200 },
  { number: 4, name: "النساء", englishName: "An-Nisa", versesCount: 176 },
  { number: 5, name: "المائدة", englishName: "Al-Ma'idah", versesCount: 120 },
  { number: 6, name: "الأنعام", englishName: "Al-An'am", versesCount: 165 },
  { number: 7, name: "الأعراف", englishName: "Al-A'raf", versesCount: 206 },
  { number: 8, name: "الأنفال", englishName: "Al-Anfal", versesCount: 75 },
  { number: 9, name: "التوبة", englishName: "At-Tawbah", versesCount: 129 },
  { number: 10, name: "يونس", englishName: "Yunus", versesCount: 109 },
  // Add more surahs as needed for the initial demo
];

// Simplified list of juz for demo
export const juzs: Juz[] = [
  { number: 1, name: "Alif Lam Meem", startSurah: 1, startVerse: 1, endSurah: 2, endVerse: 141 },
  { number: 2, name: "Sayaqool", startSurah: 2, startVerse: 142, endSurah: 2, endVerse: 252 },
  { number: 3, name: "Tilka al-Rusul", startSurah: 2, startVerse: 253, endSurah: 3, endVerse: 92 },
  { number: 4, name: "Lan Tanaloo", startSurah: 3, startVerse: 93, endSurah: 4, endVerse: 23 },
  { number: 5, name: "Wal Mohsanat", startSurah: 4, startVerse: 24, endSurah: 4, endVerse: 147 },
  { number: 6, name: "La Yuhibbullah", startSurah: 4, startVerse: 148, endSurah: 5, endVerse: 81 },
  { number: 7, name: "Wa Iza Samiu", startSurah: 5, startVerse: 82, endSurah: 6, endVerse: 110 },
  { number: 8, name: "Wa Lau Annana", startSurah: 6, startVerse: 111, endSurah: 7, endVerse: 87 },
  { number: 9, name: "Qalal Malao", startSurah: 7, startVerse: 88, endSurah: 8, endVerse: 40 },
  { number: 10, name: "Wa A'lamu", startSurah: 8, startVerse: 41, endSurah: 9, endVerse: 92 },
  // Add more juzs as needed for the initial demo
];

// Generate a 30-day Ramadan reading plan
export const generateRamadanReadingPlan = (): Array<{
  day: number;
  juz: Juz;
  description: string;
}> => {
  // Simple 1 juz per day plan
  return juzs.map((juz, index) => ({
    day: index + 1,
    juz,
    description: `Read Juz ${juz.number}: from Surah ${juz.startSurah} verse ${juz.startVerse} to Surah ${juz.endSurah} verse ${juz.endVerse}`,
  })).slice(0, 30); // Ensure we only have 30 days
};

// Featured verses for Ramadan
export const featuredVerses = [
  {
    surah: 2,
    verse: 183,
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    translation: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
    tafsir: "This verse establishes the obligation of fasting in Ramadan, highlighting that it's a practice that existed in previous nations as well."
  },
  {
    surah: 2,
    verse: 185,
    text: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ",
    translation: "The month of Ramadan is that in which was revealed the Quran, a guidance for the people and clear proofs of guidance and criterion.",
    tafsir: "This verse specifies Ramadan as the month of the Quran's revelation, establishing its significance in Islamic tradition."
  },
  {
    surah: 97,
    verse: 1,
    text: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
    translation: "Indeed, We sent it down during the Night of Decree.",
    tafsir: "This refers to the revelation of the Quran during Laylat al-Qadr (Night of Decree), which occurs in Ramadan."
  },
  {
    surah: 2,
    verse: 187,
    text: "أُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ إِلَىٰ نِسَائِكُمْ ۚ هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
    translation: "It has been made permissible for you the night preceding fasting to go to your wives. They are clothing for you and you are clothing for them.",
    tafsir: "This verse outlines permissible actions during the nights of Ramadan, emphasizing the intimate relationship between spouses."
  }
];
