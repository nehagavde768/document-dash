import {
  Baby, IdCard, Vote, Landmark, Backpack, NotebookPen, FileSpreadsheet, Award, House, Factory, Store,
  Contact, BookUser, ClipboardPen, BadgeIndianRupee, FileText, Calculator, BriefcaseBusiness, ScrollText,
  BookOpen, LandPlot, Map, FileBadge, Users, Trees, Library, CalendarDays, School, UserCheck, Stamp,
  Network, Wallet, Camera, Cake, Signature, FilePenLine, ReceiptIndianRupee, MailOpen
} from "lucide-react";

// Supporting documents from the Chhattisgarh Rajpatra of 28 July 2025 (Domicile, Income and caste
// certificates) and the marriage registration table; docs/certificate-documents.md lists them all.
// Which certificate accepts which document lives in certificates.js; the tag names the document type.

export const DOCUMENTS = [
  // Proof of residence up to 15 years (१५ वर्ष तक का निवास का प्रमाण) — Domicile certificate
  {
    id: "doc_birth_certificate",
    title_en: "Birth Certificate",
    title_hi: "जन्म प्रमाण पत्र",
    icon: Baby,
    tag_en: "Residence proof",
    tag_hi: "निवास प्रमाण"
  },
  {
    id: "doc_ration_card",
    title_en: "Ration Card",
    title_hi: "राशन कार्ड",
    icon: IdCard,
    tag_en: "Residence proof",
    tag_hi: "निवास प्रमाण"
  },
  {
    id: "doc_voter_id",
    title_en: "Voter ID Card",
    title_hi: "मतदाता परिचय पत्र",
    icon: Vote,
    tag_en: "Residence proof",
    tag_hi: "निवास प्रमाण"
  },
  {
    id: "doc_patwari_representative_certificate",
    title_en: "Certificate from Patwari / Elected Public Representative",
    title_hi: "पटवारी / निर्वाचित जन प्रतिनिधि द्वारा जारी प्रमाण पत्र",
    icon: Landmark,
    tag_en: "Residence proof",
    tag_hi: "निवास प्रमाण"
  },

  // School certificate showing 3 years of continuous study — Domicile certificate
  {
    id: "doc_class5_certificate",
    title_en: "Class 5 Certificate",
    title_hi: "पांचवीं का प्रमाण पत्र",
    icon: Backpack,
    tag_en: "Education proof",
    tag_hi: "शैक्षणिक प्रमाण"
  },
  {
    id: "doc_class8_certificate",
    title_en: "Class 8 Certificate",
    title_hi: "आठवीं का प्रमाण पत्र",
    icon: NotebookPen,
    tag_en: "Education proof",
    tag_hi: "शैक्षणिक प्रमाण"
  },
  {
    id: "doc_class10_certificate",
    title_en: "Class 10 Certificate",
    title_hi: "दसवीं का प्रमाण पत्र",
    icon: FileSpreadsheet,
    tag_en: "Education proof",
    tag_hi: "शैक्षणिक प्रमाण"
  },
  {
    id: "doc_class12_certificate",
    title_en: "Class 12 Certificate",
    title_hi: "बारहवीं का प्रमाण पत्र",
    icon: Award,
    tag_en: "Education proof",
    tag_hi: "शैक्षणिक प्रमाण"
  },

  // Property / industry / business for the last 5 years (self or parents) — Domicile certificate
  {
    id: "doc_immovable_property_proof",
    title_en: "Immovable Property Proof",
    title_hi: "अचल सम्पत्ति का प्रमाण",
    icon: House,
    tag_en: "Property proof",
    tag_hi: "सम्पत्ति प्रमाण"
  },
  {
    id: "doc_industry_proof",
    title_en: "Industry Proof",
    title_hi: "उद्योग का प्रमाण",
    icon: Factory,
    tag_en: "Property proof",
    tag_hi: "सम्पत्ति प्रमाण"
  },
  {
    id: "doc_business_proof",
    title_en: "Business Proof",
    title_hi: "व्यवसाय का प्रमाण",
    icon: Store,
    tag_en: "Property proof",
    tag_hi: "सम्पत्ति प्रमाण"
  },

  // Service as an officer / employee of the Chhattisgarh Government — Domicile certificate
  {
    id: "doc_service_certificate",
    title_en: "Service Certificate of Officer / Employee",
    title_hi: "अधिकारी / कर्मचारी का प्रमाण पत्र",
    icon: Contact,
    tag_en: "Govt. service proof",
    tag_hi: "शासकीय सेवा प्रमाण"
  },
  {
    id: "doc_service_book",
    title_en: "Service Book",
    title_hi: "सेवा-पुस्तिका",
    icon: BookUser,
    tag_en: "Govt. service proof",
    tag_hi: "शासकीय सेवा प्रमाण"
  },

  // Shared by the Income and both caste certificates
  {
    id: "doc_application_form",
    title_en: "Application Form",
    title_hi: "आवेदक का आवेदन पत्र",
    icon: ClipboardPen,
    tag_en: "Income · Caste",
    tag_hi: "आय · जाति"
  },
  {
    // Needed for Income, both caste certificates and Marriage
    id: "doc_affidavit",
    title_en: "Affidavit (Notarized)",
    title_hi: "शपथ पत्र (नोटराइज्ड)",
    icon: ScrollText,
    tag_en: "Income · Caste · Marriage",
    tag_hi: "आय · जाति · विवाह"
  },

  // Income certificate
  {
    id: "doc_patwari_income_report",
    title_en: "Patwari's Income Report",
    title_hi: "पटवारी द्वारा जारी आय संबंधी प्रतिवेदन",
    icon: BadgeIndianRupee,
    tag_en: "Income report",
    tag_hi: "आय प्रतिवेदन"
  },
  // Salary proof, for government servants only (not mandatory)
  {
    id: "doc_form16",
    title_en: "Form 16",
    title_hi: "फार्म-16",
    icon: FileText,
    tag_en: "Salary proof",
    tag_hi: "वेतन प्रमाण"
  },
  {
    id: "doc_itr",
    title_en: "Income Tax Return (ITR)",
    title_hi: "आईटीआर",
    icon: Calculator,
    tag_en: "Salary proof",
    tag_hi: "वेतन प्रमाण"
  },
  {
    id: "doc_salary_certificate",
    title_en: "Salary Certificate",
    title_hi: "वेतन प्रमाण पत्र",
    icon: BriefcaseBusiness,
    tag_en: "Salary proof",
    tag_hi: "वेतन प्रमाण"
  },

  // Ancestors' revenue records showing caste — OBC and SC / ST caste certificates
  {
    id: "doc_misal",
    title_en: "Misal",
    title_hi: "मिसल",
    icon: BookOpen,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_jamabandi",
    title_en: "Jamabandi (Survey) or Girdawari",
    title_hi: "जमाबंदी (सर्वे) या गिरदावरी",
    icon: LandPlot,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_state_settlement_record",
    title_en: "State Settlement Record",
    title_hi: "राज्य बंदोबस्त",
    icon: Map,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_adhikar_abhilekh",
    title_en: "Record of Rights (1954)",
    title_hi: "अधिकार अभिलेख (1954)",
    icon: FileBadge,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_census_1931",
    title_en: "Census (1931)",
    title_hi: "जनगणना (1931)",
    icon: Users,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_forest_jamabandi",
    title_en: "Forest Department Jamabandi",
    title_hi: "वन विभाग की जमाबंदी",
    icon: Trees,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_citizen_register_1949",
    title_en: "National Register of Citizens (1949)",
    title_hi: "नागरिकों का राष्ट्रीय रजिस्टर (1949)",
    icon: Library,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_birth_death_record",
    title_en: "Birth and Death Record",
    title_hi: "जन्म तथा मृत्यु अभिलेख",
    icon: CalendarDays,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_school_admission_record",
    title_en: "School Admission Record (Dakhil / Kharij)",
    title_hi: "विद्यालय प्रवेश अभिलेख (दाखिला / खारिज)",
    icon: School,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },
  {
    id: "doc_relative_caste_certificate",
    title_en: "Caste Certificate Issued Earlier to Father / Ancestor / Blood Relative",
    title_hi: "पिता, पूर्वज अथवा रक्त संबंधी को पूर्व में जारी जाति प्रमाण पत्र",
    icon: UserCheck,
    tag_en: "Ancestors' record",
    tag_hi: "पूर्वजों का अभिलेख"
  },

  // OBC and SC / ST caste certificates
  {
    id: "doc_patwari_report",
    title_en: "Patwari Report",
    title_hi: "पटवारी प्रतिवेदन",
    icon: Stamp,
    tag_en: "Caste proof",
    tag_hi: "जाति प्रमाण"
  },
  {
    id: "doc_family_tree",
    title_en: "Family Tree",
    title_hi: "वंश वृक्ष",
    icon: Network,
    tag_en: "Caste proof",
    tag_hi: "जाति प्रमाण"
  },
  {
    // The Income Certificate itself, needed for the OBC caste certificate
    id: "doc_income_certificate",
    title_en: "Income Certificate",
    title_hi: "आय प्रमाण पत्र",
    icon: Wallet,
    tag_en: "OBC proof",
    tag_hi: "अ.पि.व. प्रमाण"
  },

  // Marriage certificate — every row is mandatory
  {
    id: "doc_marriage_joint_photo",
    title_en: "Joint Photo of Groom & Bride (2A Size)",
    title_hi: "वर एवं वधू का संयुक्त फोटो (2A साइज)",
    icon: Camera,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_groom_birth_certificate",
    title_en: "Groom's Birth Certificate",
    title_hi: "वर का जन्म प्रमाण पत्र",
    icon: Cake,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_bride_birth_certificate",
    title_en: "Bride's Birth Certificate",
    title_hi: "वधू का जन्म प्रमाण पत्र",
    icon: Cake,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_signed_document_page1",
    title_en: "Document Signed by Groom & Bride (Page 1)",
    title_hi: "वर एवं वधू द्वारा हस्ताक्षरित दस्तावेज (प्रथम पेज)",
    icon: Signature,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_signed_document_page2",
    title_en: "Document Signed by Groom & Bride (Page 2)",
    title_hi: "वर एवं वधू द्वारा हस्ताक्षरित दस्तावेज (द्वितीय पेज)",
    icon: FilePenLine,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_challan_copy",
    title_en: "Copy of Challan",
    title_hi: "चालान की प्रति",
    icon: ReceiptIndianRupee,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  },
  {
    id: "doc_marriage_invitation_card",
    title_en: "Marriage Invitation Card",
    title_hi: "विवाह आमंत्रण पत्र",
    icon: MailOpen,
    tag_en: "Marriage record",
    tag_hi: "विवाह अभिलेख"
  }
];
