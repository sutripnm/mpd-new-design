import sedekahmasjid from "../assets/sedekah-masjid.png"
import sarpras from "../assets/sarpras.png"
import operasional from "../assets/operasional.png"
import cover from "../assets/mpd-1.jpg"

const wakafData = [
  {
    id: 1,
    title: "DONASI, ZAKAT, INFAQ, SEDEKAH MASJID",
    description: "Penyaluran dana zakat, infaq umum, dan sedekah untuk mendukung berbagai kegiatan keagamaan, program sosial keumatan, serta pemberdayaan jamaah secara luas.",
    cover: cover,
    image: sedekahmasjid,
    bank: "Bank Syariah Indonesia - BSI",
    accountNumber: "716 555 555 9",
    accountName: "Sultan Trenggono Semarang Yayasan",
    confirmationWa: "08 2323 56 8585"
  },
  {
    id: 2,
    title: "DONASI / INFAQ / SEDEKAH SARPRAS MASJID",
    description: "Penyaluran dana zakat, infaq umum, dan sedekah untuk mendukung berbagai kegiatan keagamaan, program sosial keumatan, serta pemberdayaan jamaah secara luas.",
    cover: cover,
    image: sarpras,
    bank: "Bank Syariah Indonesia - BSI",
    accountNumber: "604 000 2440",
    accountName: "Sultan Trenggono Semarang Yayasan",
    confirmationWa: "08 2323 56 8585"
  },
    {
    id: 3,
    title: "DONASI / INFAQ / SEDEKAH OPERASIONAL MASJID",
    description: "Dialokasikan untuk pemenuhan kebutuhan rutin harian masjid, meliputi tagihan listrik, air, operasional kebersihan, serta apresiasi untuk marbot dan pengurus DKM.",
    cover: cover,
    image: operasional,
    bank: "Bank Jateng Syariah",
    accountNumber: "6183 000 881",
    accountName: "Masjid Pangeran Diponegoro",
    confirmationWa: "08 2323 56 8585"
  }
];

export default wakafData;