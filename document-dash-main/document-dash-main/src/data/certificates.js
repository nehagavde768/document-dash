import { House, IndianRupee, ShieldCheck, BadgeCheck, HeartHandshake } from "lucide-react";

// Certificate Prerequisite Data Model. Domicile, Income and the caste certificates follow the
// Chhattisgarh Rajpatra of 28 July 2025 (rows 6–9); Marriage follows the marriage registration table.
// Each requirement is one numbered item of the table (serial = क्रम सं);
// any one of its supporting documents (docIds) satisfies it.

const APPLICATION = {
  id: "application",
  name_en: "Application Form",
  name_hi: "आवेदक का आवेदन पत्र",
  mandatory: true,
  docIds: ["doc_application_form"]
};

const NOTARIZED_AFFIDAVIT = {
  id: "affidavit",
  name_en: "Affidavit (Notarized)",
  name_hi: "शपथ पत्र (नोटराइज्ड)",
  mandatory: true,
  docIds: ["doc_affidavit"]
};

// Revenue records of the father or ancestors that show their caste. Both caste certificates take
// the same records; only the cut-off date differs (see each certificate's requirement name).
const ANCESTOR_RECORD_DOC_IDS = [
  "doc_misal",
  "doc_jamabandi",
  "doc_state_settlement_record",
  "doc_adhikar_abhilekh",
  "doc_census_1931",
  "doc_forest_jamabandi",
  "doc_citizen_register_1949",
  "doc_birth_death_record",
  "doc_school_admission_record",
  "doc_relative_caste_certificate"
];

const PATWARI_REPORT = {
  id: "patwari_report",
  name_en: "Patwari Report",
  name_hi: "पटवारी प्रतिवेदन",
  mandatory: true,
  docIds: ["doc_patwari_report"]
};

const FAMILY_TREE = {
  id: "family_tree",
  name_en: "Family Tree",
  name_hi: "वंश वृक्ष",
  mandatory: true,
  docIds: ["doc_family_tree"]
};

export const CERTIFICATES = [
  {
    id: "domicile",
    name_en: "Domicile Certificate",
    name_hi: "निवास प्रमाण पत्र",
    subtitle_en: "15-Yr Residence + 3-Yr Study + 5-Yr Property + CG Govt. Service",
    subtitle_hi: "१५ वर्ष निवास + ३ वर्ष अध्ययन + ५ वर्ष सम्पत्ति + शासकीय सेवा",
    color: "var(--cert-domicile)",
    solid: "var(--cert-domicile-solid)",
    gradient: "linear-gradient(135deg, var(--blue-600), var(--cyan-400))",
    glowColor: "rgba(var(--cert-domicile-rgb), 0.45)",
    icon: House,
    authority_en: "Office of the Tehsildar",
    authority_hi: "कार्यालय तहसीलदार",
    requirements: [
      {
        serial: 1,
        id: "residence_15yr",
        name_en: "Proof of Residence up to 15 Years",
        name_hi: "15 वर्ष तक का निवास का प्रमाण",
        mandatory: true,
        docIds: ["doc_birth_certificate", "doc_ration_card", "doc_voter_id", "doc_patwari_representative_certificate"]
      },
      {
        serial: 2,
        id: "continuous_study",
        name_en: "School Certificate (3 Years of Continuous Study)",
        name_hi: "निरंतर तीन वर्ष अध्ययनरत होने का प्रमाण पत्र",
        mandatory: true,
        docIds: ["doc_class5_certificate", "doc_class8_certificate", "doc_class10_certificate", "doc_class12_certificate"]
      },
      {
        serial: 3,
        id: "property_business_5yr",
        name_en: "Proof of Immovable Property / Industry / Business for the Last 5 Years (Self or Parents)",
        name_hi: "व्यक्ति या उसके माता-पिता द्वारा विगत पांच वर्षों से अचल सम्पत्ति / उद्योग / व्यवसाय का प्रमाण",
        mandatory: true,
        docIds: ["doc_immovable_property_proof", "doc_industry_proof", "doc_business_proof"]
      },
      {
        serial: 4,
        id: "cg_govt_service",
        name_en: "Proof of Service as an Officer / Employee of the Chhattisgarh Government",
        name_hi: "छत्तीसगढ़ राज्य में सेवारत अधिकारी / कर्मचारी का प्रमाण",
        mandatory: true,
        docIds: ["doc_service_certificate", "doc_service_book"]
      }
    ],
    sampleCodePrefix: "CG-DOM",
    statutoryClause_en: "Applicant has submitted (1) proof of residence in Chhattisgarh up to 15 years, (2) a school certificate showing 3 years of continuous study, (3) proof of immovable property, industry or business held for the last 5 years, and (4) proof of service as an officer or employee of the Chhattisgarh Government.",
    statutoryClause_hi: "आवेदक ने (१) छत्तीसगढ़ में १५ वर्ष तक निवास का प्रमाण, (२) निरंतर तीन वर्ष अध्ययनरत होने का प्रमाण पत्र, (३) विगत पांच वर्षों से अचल सम्पत्ति / उद्योग / व्यवसाय का प्रमाण, एवं (४) छत्तीसगढ़ राज्य में सेवारत अधिकारी / कर्मचारी का प्रमाण प्रस्तुत किया है।"
  },
  {
    id: "income",
    name_en: "Income Certificate",
    name_hi: "आय प्रमाण पत्र",
    subtitle_en: "Application + Patwari's Income Report + Affidavit",
    subtitle_hi: "आवेदन पत्र + पटवारी आय प्रतिवेदन + शपथ पत्र",
    color: "var(--cert-income)",
    solid: "var(--cert-income-solid)",
    gradient: "linear-gradient(135deg, var(--saffron-600), var(--gold-500))",
    glowColor: "rgba(var(--cert-income-rgb), 0.45)",
    icon: IndianRupee,
    authority_en: "Office of the Tehsildar",
    authority_hi: "कार्यालय तहसीलदार",
    requirements: [
      { serial: 1, ...APPLICATION },
      {
        serial: 2,
        id: "patwari_income_report",
        name_en: "Patwari's Income Report",
        name_hi: "पटवारी द्वारा जारी आय संबंधी प्रतिवेदन",
        mandatory: true,
        docIds: ["doc_patwari_income_report"]
      },
      {
        // Only "in the case of a government servant", so not needed to complete the certificate
        serial: 3,
        id: "salary_proof",
        name_en: "Salary Proof (Government Servants Only)",
        name_hi: "शासकीय सेवक की स्थिति में वेतन का प्रमाण",
        mandatory: false,
        docIds: ["doc_form16", "doc_itr", "doc_salary_certificate"]
      },
      { serial: 4, ...NOTARIZED_AFFIDAVIT }
    ],
    sampleCodePrefix: "CG-INC",
    statutoryClause_en: "Annual income verified on the basis of (1) the applicant's application, (2) the Patwari's income report, and (3) a notarized affidavit, with salary proof in the case of a government servant.",
    statutoryClause_hi: "वार्षिक आय का सत्यापन (१) आवेदक के आवेदन पत्र, (२) पटवारी द्वारा जारी आय संबंधी प्रतिवेदन, एवं (३) नोटराइज्ड शपथ पत्र के आधार पर किया गया है, शासकीय सेवक की स्थिति में वेतन के प्रमाण सहित।"
  },
  {
    id: "obc_caste",
    name_en: "OBC Caste Certificate",
    name_hi: "अन्य पिछड़ा वर्ग जाति प्रमाण पत्र",
    subtitle_en: "Application + Ancestors' Record + Patwari Report + Family Tree + Income Certificate + Affidavit",
    subtitle_hi: "आवेदन पत्र + पूर्वजों का अभिलेख + पटवारी प्रतिवेदन + वंश वृक्ष + आय प्रमाण पत्र + शपथ पत्र",
    color: "var(--cert-obc)",
    solid: "var(--cert-obc-solid)",
    gradient: "linear-gradient(135deg, var(--green-600), var(--green-400))",
    glowColor: "rgba(var(--cert-obc-rgb), 0.45)",
    icon: ShieldCheck,
    authority_en: "Office of the Tehsildar",
    authority_hi: "कार्यालय तहसीलदार",
    requirements: [
      { serial: 1, ...APPLICATION },
      {
        serial: 2,
        id: "ancestor_caste_record",
        name_en: "Ancestors' Record Showing Caste (Before 26.12.1984)",
        name_hi: "पूर्वजों का जाति दर्शाने वाला राजस्व दस्तावेज (26.12.1984 से पूर्व का)",
        mandatory: true,
        docIds: ANCESTOR_RECORD_DOC_IDS
      },
      { serial: 3, ...PATWARI_REPORT },
      { serial: 4, ...FAMILY_TREE },
      {
        serial: 5,
        id: "income_certificate",
        name_en: "Income Certificate (for OBC)",
        name_hi: "आय प्रमाण पत्र (अ.पि.व. हेतु)",
        mandatory: true,
        docIds: ["doc_income_certificate"]
      },
      { serial: 6, ...NOTARIZED_AFFIDAVIT }
    ],
    sampleCodePrefix: "CG-OBC",
    statutoryClause_en: "Other Backward Class status verified on the basis of (1) the applicant's application, (2) ancestors' revenue records showing caste from before 26.12.1984, (3) the Patwari report, (4) the family tree, (5) the income certificate, and (6) a notarized affidavit.",
    statutoryClause_hi: "अन्य पिछड़ा वर्ग की पात्रता का सत्यापन (१) आवेदक के आवेदन पत्र, (२) 26.12.1984 से पूर्व के पूर्वजों का जाति दर्शाने वाले राजस्व दस्तावेज, (३) पटवारी प्रतिवेदन, (४) वंश वृक्ष, (५) आय प्रमाण पत्र, एवं (६) नोटराइज्ड शपथ पत्र के आधार पर किया गया है।"
  },
  {
    id: "scst_caste",
    name_en: "SC / ST Caste Certificate",
    name_hi: "अनुसूचित जाति / जनजाति प्रमाण पत्र",
    subtitle_en: "Application + Ancestors' Record + Patwari Report + Family Tree + Affidavit",
    subtitle_hi: "आवेदन पत्र + पूर्वजों का अभिलेख + पटवारी प्रतिवेदन + वंश वृक्ष + शपथ पत्र",
    color: "var(--cert-scst)",
    solid: "var(--cert-scst-solid)",
    gradient: "linear-gradient(135deg, var(--violet-700), var(--violet-500))",
    glowColor: "rgba(var(--cert-scst-rgb), 0.45)",
    icon: BadgeCheck,
    authority_en: "Office of the Tehsildar",
    authority_hi: "कार्यालय तहसीलदार",
    requirements: [
      { serial: 1, ...APPLICATION },
      {
        serial: 2,
        id: "ancestor_caste_record",
        name_en: "Ancestors' Record Showing Caste (SC: Before 10.08.1950, ST: Before 06.09.1950)",
        name_hi: "पूर्वजों का जाति दर्शाने वाला राजस्व दस्तावेज (अनु. जाति: 10.08.1950, अनु. जनजाति: 06.09.1950 से पूर्व का)",
        mandatory: true,
        docIds: ANCESTOR_RECORD_DOC_IDS
      },
      { serial: 3, ...PATWARI_REPORT },
      { serial: 4, ...FAMILY_TREE },
      // Item 5, the income certificate, is for OBC applicants only
      { serial: 6, ...NOTARIZED_AFFIDAVIT }
    ],
    sampleCodePrefix: "CG-SCST",
    statutoryClause_en: "Scheduled Caste / Scheduled Tribe status verified on the basis of (1) the applicant's application, (2) ancestors' revenue records showing caste from before 10.08.1950 (SC) or 06.09.1950 (ST), (3) the Patwari report, (4) the family tree, and (5) a notarized affidavit.",
    statutoryClause_hi: "अनुसूचित जाति / जनजाति की पात्रता का सत्यापन (१) आवेदक के आवेदन पत्र, (२) अनु. जाति हेतु 10.08.1950 अथवा अनु. जनजाति हेतु 06.09.1950 से पूर्व के पूर्वजों का जाति दर्शाने वाले राजस्व दस्तावेज, (३) पटवारी प्रतिवेदन, (४) वंश वृक्ष, एवं (५) नोटराइज्ड शपथ पत्र के आधार पर किया गया है।"
  },
  {
    id: "marriage",
    name_en: "Marriage Certificate",
    name_hi: "विवाह प्रमाण पत्र",
    subtitle_en: "Affidavit + Joint Photo + Birth Certificates + Signed Documents + Challan + Invitation Card",
    subtitle_hi: "शपथ पत्र + संयुक्त फोटो + जन्म प्रमाण पत्र + हस्ताक्षरित दस्तावेज + चालान + आमंत्रण पत्र",
    color: "var(--cert-marriage)",
    solid: "var(--cert-marriage-solid)",
    gradient: "linear-gradient(135deg, var(--rose-600), var(--pink-500))",
    glowColor: "rgba(var(--cert-marriage-rgb), 0.45)",
    icon: HeartHandshake,
    authority_en: "Office of the Registrar of Marriages",
    authority_hi: "कार्यालय विवाह पंजीयक",
    requirements: [
      { serial: 1, id: "affidavit", name_en: "Affidavit", name_hi: "शपथ पत्र", mandatory: true, docIds: ["doc_affidavit"] },
      { serial: 2, id: "joint_photo", name_en: "Joint Photo of Groom & Bride (2A Size)", name_hi: "वर एवं वधू का संयुक्त फोटो (2A साइज)", mandatory: true, docIds: ["doc_marriage_joint_photo"] },
      { serial: 6, id: "groom_birth", name_en: "Groom's Birth Certificate", name_hi: "वर का जन्म प्रमाण पत्र", mandatory: true, docIds: ["doc_groom_birth_certificate"] },
      { serial: 7, id: "bride_birth", name_en: "Bride's Birth Certificate", name_hi: "वधू का जन्म प्रमाण पत्र", mandatory: true, docIds: ["doc_bride_birth_certificate"] },
      { serial: 8, id: "signed_page1", name_en: "Document Signed by Groom & Bride (Page 1)", name_hi: "वर एवं वधू द्वारा हस्ताक्षरित दस्तावेज (प्रथम पेज)", mandatory: true, docIds: ["doc_signed_document_page1"] },
      { serial: 9, id: "signed_page2", name_en: "Document Signed by Groom & Bride (Page 2)", name_hi: "वर एवं वधू द्वारा हस्ताक्षरित दस्तावेज (द्वितीय पेज)", mandatory: true, docIds: ["doc_signed_document_page2"] },
      { serial: 10, id: "challan", name_en: "Copy of Challan", name_hi: "चालान की प्रति", mandatory: true, docIds: ["doc_challan_copy"] },
      { serial: 11, id: "invitation", name_en: "Marriage Invitation Card", name_hi: "विवाह आमंत्रण पत्र", mandatory: true, docIds: ["doc_marriage_invitation_card"] }
    ],
    sampleCodePrefix: "CG-MAR",
    statutoryClause_en: "Marriage registered on the basis of (1) an Affidavit, (2) a joint 2A-size photo of the groom and bride, (3–4) birth certificates of the groom and bride, (5–6) both pages of the document signed by the groom and bride, (7) a copy of the challan, and (8) the marriage invitation card.",
    statutoryClause_hi: "विवाह पंजीकरण (१) शपथ पत्र, (२) वर एवं वधू का संयुक्त फोटो (2A साइज), (३–४) वर एवं वधू के जन्म प्रमाण पत्र, (५–६) वर एवं वधू द्वारा हस्ताक्षरित दस्तावेज के दोनों पेज, (७) चालान की प्रति, एवं (८) विवाह आमंत्रण पत्र के आधार पर किया गया है।"
  }
];

// Rule helpers shared by the game loop, baskets and guides.
export const acceptsDocument = (cert, docId) =>
  cert.requirements.some(req => req.docIds.includes(docId));

export const mandatoryRequirements = cert =>
  cert.requirements.filter(req => req.mandatory);

export const isRequirementMet = (req, collectedDocIds) =>
  req.docIds.some(id => collectedDocIds.includes(id));

export const metRequirementCount = (cert, collectedDocIds) =>
  mandatoryRequirements(cert).filter(req => isRequirementMet(req, collectedDocIds)).length;

export const isCertificateComplete = (cert, collectedDocIds) =>
  mandatoryRequirements(cert).every(req => isRequirementMet(req, collectedDocIds));

// A document is still worth placing while it can fill an open requirement: one that has
// no document yet, on a certificate that isn't complete. Once every requirement it
// supports is filled (by it or by another document of the same type), it's done.
export const isDocumentStillNeeded = (docId, collectedByCertificate) =>
  CERTIFICATES.some(cert => {
    const collected = collectedByCertificate[cert.id] || [];
    if (isCertificateComplete(cert, collected)) return false;
    return cert.requirements.some(req => req.docIds.includes(docId) && !isRequirementMet(req, collected));
  });

// An empty document collection, one list per certificate
export const emptyCollection = () => Object.fromEntries(CERTIFICATES.map(cert => [cert.id, []]));
