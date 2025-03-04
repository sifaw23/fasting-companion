
export const DUA_CATEGORIES = [
  "Ramadan", 
  "Daily", 
  "Morning", 
  "Evening", 
  "Prayer", 
  "Protection", 
  "Forgiveness",
  "Success"
];

export interface Dua {
  id: number;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference?: string;
  occasion?: string;
  category: string;
}

export const getFeaturedDuas = (): Dua[] => {
  return [
    {
      id: 1,
      title: "Dua for Breaking Fast",
      arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
      transliteration: "Dhahabadh-dhama'u wabtallatil 'urooqu, wa thabatal-ajru insha Allah",
      translation: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
      reference: "Abu Dawud",
      occasion: "Iftar (Breaking fast)",
      category: "Ramadan"
    },
    {
      id: 2,
      title: "Dua for Protection",
      arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i, wa huwas-sami'ul-'alim.",
      translation: "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, All-Knowing.",
      reference: "Abu Dawud, Tirmidhi",
      category: "Protection"
    },
    {
      id: 3,
      title: "Dua for Beginning the Fast",
      arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ",
      transliteration: "Allahumma inni laka sumtu, wa bika amantu, wa 'alayka tawakkaltu, wa 'ala rizqika aftartu.",
      translation: "O Allah, I fasted for You, I believe in You, I put my trust in You, and I break my fast with Your sustenance.",
      reference: "Abu Dawud",
      occasion: "Suhoor (Pre-dawn meal)",
      category: "Ramadan"
    },
    {
      id: 4,
      title: "Dua for Laylatul Qadr",
      arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.",
      translation: "O Allah, You are forgiving and love forgiveness, so forgive me.",
      reference: "Tirmidhi, Ibn Majah",
      occasion: "Laylatul Qadr (Night of Power)",
      category: "Ramadan"
    },
    {
      id: 5,
      title: "Morning Remembrance",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَٰهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
      transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah.",
      translation: "We have reached the morning and the kingdom belongs to Allah. Praise is to Allah. None has the right to be worshipped except Allah, alone, without partner.",
      reference: "Muslim",
      category: "Morning"
    }
  ];
};
