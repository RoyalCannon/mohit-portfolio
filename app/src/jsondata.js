/* ================= EDIT YOUR DETAILS ================= */
const ME = {
  name: "Mohit",
  title: "Business Process Automation & Web Application Developer",
  email: "aryam6084@gmail.com",
  phone: "9953706794",
  location: "Sangam Vihar, Saket, New Delhi, India",
  linkedin: "https://www.linkedin.com/in/mohit-arya-3660bb23a",
  github: "https://github.com/RoyalCannon",
};

const SKILLS = [
  [
    "Google Workspace & Automation",
    "Google Apps Script, Sheets, Forms, Drive, Docs, Slides, Gmail, PDF and document automation, email and WhatsApp notifications",
  ],
  [
    "Frontend",
    "JavaScript, HTML5, CSS3, Bootstrap, React.js, Vite, React Router, Context API, Hooks",
  ],
  [
    "Backend & Database",
    "Node.js, Express.js, REST APIs, MongoDB, Google Sheets as a lightweight database",
  ],
  [
    "Analytics",
    "Data analysis, MIS reporting, dashboards, KPI reporting, trend analysis",
  ],
];


/* Screenshots go in public/screenshots/ ; use these file names (or change them). */

const PROJECTS = [
  {
    name: "Security Guard Attendance & Shop Floor Survey App",
    cat: "Full-stack",
    tech: [
      "React.js",
      "Vite",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    problem:
      "Guard attendance and shop-floor surveys were recorded manually and were hard to verify and consolidate.",
    solution:
      "A full-stack web app that manages guards, shifts and attendance, and collects shop-floor survey data in one place.",
    features: [
      "Employee and shift management",
      "Attendance punching with location-based attendance",
      "Employee verification [confirm facial verification only if implemented]",
      "Shop floor survey and attendance records",
      "Protected routes, authentication and authorization",
      "Express REST APIs with CRUD on MongoDB",
    ],
    shots: [
      ["security-1.png", "Login and dashboard"],
      ["security-2.png", "Main Dashboard"],
      ["security-3.png", "Attendance screen"],
      ["security-4.png", "Absent Late report"],
      ["security-5.png", "Daily report"],
      ["security-6.png", "Guard Attendance History"],
    ],
  },
  {
    name: "Inventory & Procurement Automation Suite",
    cat: "Inventory & procurement",
    tech: [
      "Google Apps Script",
      "JavaScript",
      "Bootstrap",
      "Google Sheets",
      "Gmail",
    ],
    problem:
      "Stock, material requests and purchase approvals ran on spreadsheets and email, with little visibility of stock levels or pending approvals.",
    solution:
      "Web apps that track stock, handle requests and route approvals with automated notifications.",
    features: [
      "Inventory tracking, stock level monitoring and item master",
      "Item allocation and material consumption analysis",
      "Automated purchase requests",
      "Item request, price approval and purchase approval workflows",
      "Vendor tracking and procurement dashboard",
    ],
    shots: [
      ["inventory-1.png", "Stock Analysis dashboard"],
      ["inventory-3.png", "Approval screen"],
      ["inventory-4.png", "Purchase Record"],
      ["inventory-5.png", "Raw Material Budget Allocation"],

    ],
  },
  {
    name: "HR Recruitment, Attendance & Workforce Apps",
    cat: "HR",
    tech: [
      "Google Apps Script",
      "JavaScript",
      "Google Forms",
      "Bootstrap",
      "Google Sheets",
    ],
    problem:
      "Candidate details, employee records and attendance were spread across separate sheets.",
    solution:
      "Centralized HR applications with automated status updates and notifications.",
    features: [
      "Recruitment tracker with candidate tracking",
      "Employee records and management",
      "Attendance and shift management",
      "HR dashboards",
    ],
    shots: [
      ["hr-1.png", "Recruitment tracker"],
      ["hr-2.png", "Attendance view"],
      ["hr-4.png", "Job Applications"],
      ["hr-3.png", "Post Jobs"],
    ],
  },
  {
    name: "Inspection, Quality & Preventive Maintenance Systems",
    cat: "Quality & maintenance",
    tech: [
      "Google Apps Script",
      "JavaScript",
      "Google Drive",
      "Bootstrap",
      "Google Sheets",
    ],
    problem:
      "Incoming material checks, machine complaints and maintenance schedules were hard to track and follow up.",
    solution:
      "Web apps that run inspection workflows and track equipment, complaints, repairs and preventive maintenance.",
    features: [
      "Incoming material inspection and quality check workflow",
      "Inspection status monitoring and reports",
      "Equipment and asset tracking with maintenance history",
      "Machine complaint, breakdown and repair management",
      "Preventive maintenance scheduling",
    ],
    shots: [
      ["quality-1.png", "Inspection form"],
      ["quality-2.png", "Inspection Checklist Tracker"],
      ["maintenance-1.png", "Maintenance tracker"],
    ],
  },
  {
    name: "FMS Flow Monitoring & PMS Project Management",
    cat: "Workflow monitoring",
    tech: [
      "Google Apps Script",
      "JavaScript",
      "Gmail",
      "Bootstrap",
      "Google Sheets",
    ],
    problem:
      "Pending tasks, follow-ups and project actions were not visible across departments.",
    solution:
      "A flow monitoring system and a project management system that give managers one view of status and pending work.",
    features: [
      "FMS: task monitoring, pending and escalation tracking, department-wise tracking, automated follow-up",
      "PMS: project tracking, task and action item tracking, status monitoring",
      "Management dashboards and reporting",
    ],
    shots: [
      ["fms-1.png", "FMS dashboard"],
      ["pms-1.png", "PMS project view"],
    ],
  },
  {
    name: "Accounts & Finance Workflow Automation",
    cat: "Accounts workflow",
    tech: [
      "Google Apps Script",
      "JavaScript",
      "Google Docs",
      "Gmail",
      "PDF generation",
    ],
    problem:
      "Pending invoices, payments and vendor dues were followed up by hand.",
    solution:
      "Workflow apps that track pending items and automate follow-up and reports. These are process-automation tools, not accounting software.",
    features: [
      "Receivable and payable follow-up",
      "Pending invoice and payment tracking",
      "Remittance, vendor liabilities and debit notes",
      "Weekly budget monitoring",
      "Automated reports and PDF generation",
    ],
    shots: [
      ["accounts-1.png", "Pending invoices"],
      ["accounts-2.png", "Weekly budget view"],
    ],
  },
];

const FLOW = [
  ["Request submitted", "Form or web app writes to Google Sheets"],
  ["Approver notified", "Apps Script sends an email or WhatsApp alert"],
  ["Decision recorded", "Status and history update automatically"],
  ["Report ready", "Dashboard and MIS report refresh"],
];

export { SKILLS, ME, PROJECTS ,FLOW };