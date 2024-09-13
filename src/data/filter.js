import { PiStarHalfFill, PiStarFill, PiStar } from "react-icons/pi";

export const filterCategories = [
  {
    title: "Web Geliştirme",
    total: 100,
  },
  {
    title: "Web Tasarım",
    total: 92,
  },
  {
    title: "Mobil Uygulama",
    total: 80,
  },
  {
    title: "Yazılım Geliştirme",
    total: 75,
  },
  {
    title: "Grafik Tasarım",
    total: 60,
  },
  {
    title: "SEO",
    total: 50,
  },
  {
    title: "Dijital Pazarlama",
    total: 40,
  },
  {
    title: "Sosyal Medya",
    total: 30,
  },
  {
    title: "E-Ticaret",
    total: 20,
  },
  {
    title: "Yazılım Testi",
    total: 10,
  },
  {
    title: "Veri Analizi",
    total: 5,
  },
  {
    title: "Muhasebe",
    total: 2,
  },
  {
    title: "Reklam",
    total: 1,
  },
];

const starClasses = "fs-5 text-warning";
export const filterScores = [
  {
    title: "5",
    total: 100,
    icons: [
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
    ],
  },
  {
    title: "4",
    total: 92,
    icons: [
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStar className={starClasses} />,
    ],
  },
  {
    title: "3",
    total: 80,
    icons: [
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
    ],
  },
  {
    title: "2",
    total: 75,
    icons: [
      <PiStarFill className={starClasses} />,
      <PiStarFill className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
    ],
  },
  {
    title: "1",
    total: 60,
    icons: [
      <PiStarFill className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
      <PiStar className={starClasses} />,
    ],
  },
];
