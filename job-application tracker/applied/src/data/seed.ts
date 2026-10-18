import type { Application } from "../types";

export const seedApplications: Application[] = [
    {
        id:"a1",
        company: "testing",
        role: "Junior Developer",
        link: "https://vodacom.com/internship-programme.php",
        dateSent: "2026-09-18",
        stage: "applied",
        notes: "Follow up call on the 20th",
        createdAt: "2026-09-18T09:00:00Z",
  },

   {
        id:"a2",
        company: "testing 2",
        role: "Junior Developer",
        link: "https://www.standardbank.com/sbg/standard-bank-group/careers/apply/jobs/view-all-jobs",
        dateSent: "2026-10-12",
        stage: "applied",
        createdAt: "2026-10-18T19:40:40Z",
  },

   {
        id:"a3",
        company: "testing 3",
        role: "Frontend Developer",
        link: "https://www.takealot.com/careers",
        dateSent: "2026-10-02",
        stage: "applied",
        createdAt: "2026-10-02T13:20:00Z",
  },

  {
    id: "a4",
    company: "Nedbank",
    role: "React Developer",
    link: "https://nedbank.co.za/careers/react-dev",
    dateSent: "2026-09-05",
    stage: "applied",
    notes: "Referred by Sipho. No reply yet.",
    createdAt: "2026-09-05T14:00:00Z",
  },
  {
    id: "a5",
    company: "Standard Bank",
    role: "Software Engineer I",
    link: "https://standardbank.com/careers/swe-1",
    dateSent: "2026-09-28",
    stage: "applied",
    notes: "Offer received. Deciding by the 30th.",
    createdAt: "2026-09-28T11:45:00Z",
  },
  {
    id: "a6",
    company: "Yoco",
    role: "Full Stack Developer",
    dateSent: "2026-10-08",
    stage: "applied",
    createdAt: "2026-10-08T16:20:00Z",
  },
  {
    id: "a7",
    company: "Luno",
    role: "Frontend Engineer",
    link: "https://luno.com/careers/frontend",
    dateSent: "2026-08-20",
    stage: "applied",
    notes: "Rejected. Would apply again in six months.",
    createdAt: "2026-08-20T09:00:00Z",
  },
];

