// reference-data.js — all reference values + formulas
// Edit this file to add/update content. The page picks it up automatically.

window.REFERENCE_DATA = {
  chemistry: {
    label: 'Clinical Chemistry',
    icon: '🧪',
    groups: [
      {
        name: 'Glucose & Diabetes',
        values: [
          { test: 'Fasting plasma glucose', value: '70 – 99', unit: 'mg/dL' },
          { test: '2-hour OGTT', value: '< 140', unit: 'mg/dL' },
          { test: 'Random plasma glucose', value: '70 – 140', unit: 'mg/dL' },
          { test: 'HbA1c (normal)', value: '< 5.7', unit: '%' },
          { test: 'HbA1c (prediabetes)', value: '5.7 – 6.4', unit: '%' },
          { test: 'HbA1c (diabetes)', value: '≥ 6.5', unit: '%' }
        ]
      },
      {
        name: 'Lipid Profile',
        values: [
          { test: 'Total cholesterol', value: '< 200', unit: 'mg/dL' },
          { test: 'LDL cholesterol', value: '< 100', unit: 'mg/dL' },
          { test: 'HDL cholesterol (male)', value: '> 40', unit: 'mg/dL' },
          { test: 'HDL cholesterol (female)', value: '> 50', unit: 'mg/dL' },
          { test: 'Triglycerides', value: '< 150', unit: 'mg/dL' }
        ]
      },
      {
        name: 'Electrolytes & Acid-Base',
        values: [
          { test: 'Sodium (Na⁺)', value: '135 – 145', unit: 'mEq/L' },
          { test: 'Potassium (K⁺)', value: '3.5 – 5.1', unit: 'mEq/L' },
          { test: 'Chloride (Cl⁻)', value: '98 – 107', unit: 'mEq/L' },
          { test: 'Bicarbonate (HCO₃⁻)', value: '22 – 29', unit: 'mEq/L' },
          { test: 'Ionized calcium', value: '4.5 – 5.3', unit: 'mg/dL' },
          { test: 'Magnesium', value: '1.7 – 2.4', unit: 'mg/dL' },
          { test: 'Phosphorus (inorganic)', value: '2.5 – 4.5', unit: 'mg/dL' },
          { test: 'Anion gap', value: '8 – 16', unit: 'mEq/L' },
          { test: 'Serum osmolality', value: '275 – 295', unit: 'mOsm/kg' }
        ]
      },
      {
        name: 'Renal Function',
        values: [
          { test: 'BUN', value: '7 – 18', unit: 'mg/dL' },
          { test: 'Creatinine (male)', value: '0.7 – 1.3', unit: 'mg/dL' },
          { test: 'Creatinine (female)', value: '0.6 – 1.1', unit: 'mg/dL' },
          { test: 'Uric acid (male)', value: '3.4 – 7.0', unit: 'mg/dL' },
          { test: 'Uric acid (female)', value: '2.4 – 6.0', unit: 'mg/dL' }
        ]
      },
      {
        name: 'Liver Function',
        values: [
          { test: 'Total protein', value: '6.0 – 8.0', unit: 'g/dL' },
          { test: 'Albumin', value: '3.5 – 5.0', unit: 'g/dL' },
          { test: 'Total bilirubin', value: '0.1 – 1.2', unit: 'mg/dL' },
          { test: 'Direct (conjugated) bilirubin', value: '0.0 – 0.3', unit: 'mg/dL' },
          { test: 'AST (SGOT)', value: '5 – 40', unit: 'U/L' },
          { test: 'ALT (SGPT)', value: '7 – 56', unit: 'U/L' },
          { test: 'Alkaline phosphatase', value: '44 – 147', unit: 'U/L' },
          { test: 'GGT (male)', value: '8 – 61', unit: 'U/L' },
          { test: 'GGT (female)', value: '5 – 36', unit: 'U/L' }
        ]
      },
      {
        name: 'Cardiac & Muscle',
        values: [
          { test: 'CK total (male)', value: '39 – 308', unit: 'U/L' },
          { test: 'CK total (female)', value: '26 – 192', unit: 'U/L' },
          { test: 'CK-MB', value: '< 25', unit: 'U/L' },
          { test: 'LDH', value: '140 – 280', unit: 'U/L' },
          { test: 'Troponin I', value: '< 0.04', unit: 'ng/mL' }
        ]
      },
      {
        name: 'Pancreatic & Endocrine',
        values: [
          { test: 'Amylase', value: '30 – 110', unit: 'U/L' },
          { test: 'Lipase', value: '10 – 140', unit: 'U/L' },
          { test: 'TSH', value: '0.4 – 4.0', unit: 'mIU/L' },
          { test: 'Free T4', value: '0.8 – 1.8', unit: 'ng/dL' },
          { test: 'Total T4', value: '5.0 – 12.0', unit: 'µg/dL' }
        ]
      }
    ]
  },

  hematology: {
    label: 'Hematology',
    icon: '🩸',
    groups: [
      {
        name: 'Complete Blood Count',
        values: [
          { test: 'Hemoglobin (male)', value: '13.5 – 17.5', unit: 'g/dL' },
          { test: 'Hemoglobin (female)', value: '12.0 – 15.5', unit: 'g/dL' },
          { test: 'Hematocrit (male)', value: '41 – 53', unit: '%' },
          { test: 'Hematocrit (female)', value: '36 – 46', unit: '%' },
          { test: 'RBC (male)', value: '4.5 – 5.9', unit: '×10¹²/L' },
          { test: 'RBC (female)', value: '4.1 – 5.1', unit: '×10¹²/L' },
          { test: 'WBC', value: '4.5 – 11.0', unit: '×10⁹/L' },
          { test: 'Platelet count', value: '150 – 450', unit: '×10⁹/L' }
        ]
      },
      {
        name: 'RBC Indices',
        values: [
          { test: 'MCV', value: '80 – 100', unit: 'fL' },
          { test: 'MCH', value: '27 – 33', unit: 'pg' },
          { test: 'MCHC', value: '32 – 36', unit: 'g/dL' },
          { test: 'RDW', value: '11.5 – 14.5', unit: '%' },
          { test: 'Reticulocyte count', value: '0.5 – 1.5', unit: '%' }
        ]
      },
      {
        name: 'WBC Differential',
        values: [
          { test: 'Neutrophils (segs)', value: '50 – 70', unit: '%' },
          { test: 'Band neutrophils', value: '0 – 5', unit: '%' },
          { test: 'Lymphocytes', value: '20 – 40', unit: '%' },
          { test: 'Monocytes', value: '2 – 8', unit: '%' },
          { test: 'Eosinophils', value: '1 – 4', unit: '%' },
          { test: 'Basophils', value: '0 – 1', unit: '%' }
        ]
      },
      {
        name: 'Coagulation',
        values: [
          { test: 'PT', value: '11 – 13.5', unit: 'sec' },
          { test: 'INR (no anticoagulation)', value: '0.8 – 1.2', unit: '' },
          { test: 'aPTT', value: '25 – 35', unit: 'sec' },
          { test: 'Fibrinogen', value: '200 – 400', unit: 'mg/dL' },
          { test: 'D-dimer', value: '< 500', unit: 'ng/mL FEU' },
          { test: 'Bleeding time (Ivy)', value: '2 – 7', unit: 'min' }
        ]
      },
      {
        name: 'Other',
        values: [
          { test: 'ESR (male)', value: '0 – 15', unit: 'mm/hr' },
          { test: 'ESR (female)', value: '0 – 20', unit: 'mm/hr' }
        ]
      }
    ]
  },

  'analysis-of-urine': {
    label: 'Urinalysis & Body Fluids',
    icon: '💧',
    groups: [
      {
        name: 'Urine — Physical',
        values: [
          { test: '24-hour volume', value: '600 – 2000', unit: 'mL' },
          { test: 'Specific gravity', value: '1.003 – 1.030', unit: '' },
          { test: 'pH', value: '4.5 – 8.0', unit: '' },
          { test: 'Color', value: 'Straw to dark yellow', unit: '' },
          { test: 'Clarity', value: 'Clear', unit: '' }
        ]
      },
      {
        name: 'Urine — Chemical',
        values: [
          { test: 'Protein (24-hour)', value: '< 150', unit: 'mg/24h' },
          { test: 'Glucose', value: 'Negative', unit: '' },
          { test: 'Ketones', value: 'Negative', unit: '' },
          { test: 'Blood', value: 'Negative', unit: '' },
          { test: 'Nitrite', value: 'Negative', unit: '' },
          { test: 'Leukocyte esterase', value: 'Negative', unit: '' },
          { test: 'Urobilinogen', value: '0.2 – 1.0', unit: 'EU/2h' }
        ]
      },
      {
        name: 'CSF',
        values: [
          { test: 'Appearance', value: 'Clear, colorless', unit: '' },
          { test: 'Opening pressure', value: '90 – 180', unit: 'mm H₂O' },
          { test: 'WBC count', value: '0 – 5', unit: 'cells/µL' },
          { test: 'Glucose (as % blood)', value: '60 – 70', unit: '%' },
          { test: 'Protein', value: '15 – 45', unit: 'mg/dL' },
          { test: 'Lactate', value: '< 2.1', unit: 'mmol/L' }
        ]
      },
      {
        name: 'Synovial Fluid',
        values: [
          { test: 'Appearance (normal)', value: 'Clear, pale yellow', unit: '' },
          { test: 'WBC (normal)', value: '< 200', unit: 'cells/µL' },
          { test: 'WBC (non-inflammatory)', value: '200 – 2000', unit: 'cells/µL' },
          { test: 'WBC (inflammatory)', value: '2000 – 50,000', unit: 'cells/µL' },
          { test: 'WBC (septic)', value: '> 50,000', unit: 'cells/µL' },
          { test: 'Glucose (vs blood)', value: '~equal', unit: '' }
        ]
      },
      {
        name: 'Semen Analysis (WHO 5th ed.)',
        values: [
          { test: 'Volume', value: '≥ 1.4', unit: 'mL' },
          { test: 'Sperm concentration', value: '≥ 15', unit: '×10⁶/mL' },
          { test: 'Total sperm number', value: '≥ 39', unit: '×10⁶/ejaculate' },
          { test: 'Total motility', value: '≥ 40', unit: '%' },
          { test: 'Progressive motility', value: '≥ 32', unit: '%' },
          { test: 'Normal morphology', value: '≥ 4', unit: '%' }
        ]
      },
      {
        name: 'Amniotic Fluid',
        values: [
          { test: 'Appearance (normal)', value: 'Clear, pale yellow', unit: '' },
          { test: 'Delta OD 450 (interpretation)', value: 'Zone I/II/III', unit: '' },
          { test: 'Foam stability (L/S ratio)', value: '≥ 2.0 = mature', unit: '' }
        ]
      }
    ]
  },

  microbiology: {
    label: 'Microbiology',
    icon: '🦠',
    groups: [
      {
        name: 'Common Culture Media',
        values: [
          { test: 'Blood agar', value: 'Tryptic soy + 5% sheep blood', unit: 'General purpose + hemolysis' },
          { test: 'MacConkey agar', value: 'Selective for GNB, differential for lactose', unit: '' },
          { test: 'EMB agar', value: 'Selective + differential (green sheen = E. coli)', unit: '' },
          { test: 'Chocolate agar', value: 'Lysed blood, for fastidious organisms', unit: '' },
          { test: 'Thayer-Martin', value: 'Selective for Neisseria', unit: '' },
          { test: 'BCYE', value: 'Buffered charcoal yeast extract, for Legionella', unit: '' },
          { test: 'TCBS', value: 'Thiosulfate-citrate-bile-sucrose, for Vibrio', unit: '' },
          { test: 'Löwenstein-Jensen', value: 'For mycobacteria (solid)', unit: '' }
        ]
      },
      {
        name: 'Growth Conditions',
        values: [
          { test: 'Enterobacteriaceae', value: '35 °C, ambient air', unit: '' },
          { test: 'Campylobacter', value: '42 °C, microaerophilic', unit: '' },
          { test: 'Legionella', value: '35 °C, BCYE, 3-5 days', unit: '' },
          { test: 'Mycobacterium', value: '35-37 °C, 6-8 weeks (LJ)', unit: '' },
          { test: 'Anaerobes', value: '35 °C, anaerobic jar/chamber', unit: '' },
          { test: 'Neisseria', value: '35-37 °C, 5% CO₂', unit: '' }
        ]
      }
    ]
  },

  'immunoserology-blood-bank': {
    label: 'Immunoserology & Blood Bank',
    icon: '🧬',
    groups: [
      {
        name: 'Blood Product Storage & Shelf Life',
        values: [
          { test: 'Packed RBCs (CPDA-1)', value: '1 – 6', unit: '°C, 35 days' },
          { test: 'Packed RBCs (additive solution)', value: '1 – 6', unit: '°C, 42 days' },
          { test: 'Platelets', value: '20 – 24', unit: '°C, 5 days with agitation' },
          { test: 'Fresh frozen plasma', value: '≤ –18', unit: '°C, 12 months' },
          { test: 'Thawed FFP', value: '1 – 6', unit: '°C, 24 hours' },
          { test: 'Cryoprecipitate (frozen)', value: '≤ –18', unit: '°C, 12 months' },
          { test: 'Thawed cryoprecipitate', value: '20 – 24', unit: '°C, 4-6 hours' }
        ]
      },
      {
        name: 'Common Reaction Timeline',
        values: [
          { test: 'Acute hemolytic reaction', value: 'Within minutes to 24h', unit: '' },
          { test: 'Febrile non-hemolytic reaction', value: 'Within 4h', unit: '' },
          { test: 'TRALI', value: 'Within 6h', unit: '' },
          { test: 'TACO', value: 'Within 12h', unit: '' },
          { test: 'Delayed hemolytic reaction', value: '3 – 14 days', unit: '' },
          { test: 'Post-transfusion purpura', value: '5 – 14 days', unit: '' }
        ]
      }
    ]
  },

  'histology-histopathology': {
    label: 'Histopathology',
    icon: '🔬',
    groups: [
      {
        name: 'Fixation & Processing',
        values: [
          { test: 'Standard fixative', value: '10% neutral buffered formalin', unit: '' },
          { test: 'Fixative-to-tissue ratio', value: '≥ 10:1 (ideally 20:1)', unit: '' },
          { test: 'Small biopsy fixation time', value: '6 – 24', unit: 'hours' },
          { test: 'Large specimen fixation time', value: '24 – 48', unit: 'hours' },
          { test: 'Routine clearing agent', value: 'Xylene', unit: '' },
          { test: 'Routine embedding medium', value: 'Paraffin wax (56-58 °C)', unit: '' },
          { test: 'Routine section thickness', value: '4 – 6', unit: 'µm' }
        ]
      },
      {
        name: 'Common Stains',
        values: [
          { test: 'H&E', value: 'Nuclei blue/purple · Cytoplasm pink', unit: '' },
          { test: 'PAS', value: 'Glycogen, mucins, basement membranes', unit: 'magenta' },
          { test: 'Congo red', value: 'Amyloid (apple-green birefringence)', unit: '' },
          { test: 'Prussian blue', value: 'Iron / hemosiderin', unit: 'blue' },
          { test: 'Von Kossa', value: 'Calcium', unit: 'black' },
          { test: 'Masson trichrome', value: 'Collagen', unit: 'blue or green' },
          { test: 'Reticulin', value: 'Type III collagen', unit: 'black' },
          { test: 'Verhoeff-Van Gieson', value: 'Elastic fibers', unit: 'black' }
        ]
      }
    ]
  },

  'medtech-laws': {
    label: 'MedTech Laws & Lab Management',
    icon: '⚖️',
    groups: [
      {
        name: 'Philippine Medical Technology Laws',
        values: [
          { test: 'RA 5527 — Philippine Medical Technology Act', value: 'Signed June 21, 1969', unit: '' },
          { test: 'RA 6132 — Amendment to RA 5527', value: 'Signed 1970', unit: '' },
          { test: 'PD 498 — Regulating MedTech Practice', value: 'Signed 1974', unit: '' },
          { test: 'PD 1534 — Clarifying Scope of Practice', value: 'Signed 1978; requires BSMT for licensure', unit: '' },
          { test: 'RA 10912 — Continuing Professional Development Act', value: 'Signed 2016; requires CPD for renewal', unit: '' },
          { test: 'RA 10173 — Data Privacy Act', value: 'Signed 2012', unit: '' },
          { test: 'Father of Medical Technology in the Philippines', value: 'Dr. Willa Hedrick', unit: '' },
          { test: 'Year BSMT first offered in the Philippines', value: '1954 · University of the Philippines', unit: '' }
        ]
      },
      {
        name: 'Regulatory Bodies',
        values: [
          { test: 'Professional Regulation Commission (PRC)', value: 'Oversees all licensed professions', unit: '' },
          { test: 'PRC Board of Medical Technology', value: '1 chairman + 2 members', unit: '' },
          { test: 'Board member term of office', value: '3 years · renewable once (max 6 years)', unit: '' },
          { test: 'Chairman qualification', value: 'Licensed physician (pathologist)', unit: '' },
          { test: 'Member qualification', value: 'Registered medical technologist', unit: '' },
          { test: 'PAMET', value: 'Philippine Association of Medical Technologists, Inc.', unit: 'National org.' },
          { test: 'PASMETH', value: 'Philippine Association of Schools of Medical Technology and Public Health', unit: '' },
          { test: 'DOH — Bureau of Health Facilities and Services', value: 'Licenses clinical laboratories', unit: '' }
        ]
      },
      {
        name: 'Licensure Requirements',
        values: [
          { test: 'Minimum education for MTLE', value: 'BSMT or equivalent', unit: '' },
          { test: 'Passing score — MTLE', value: '75% general average', unit: 'no grade below 60%' },
          { test: 'Passing score — previous standard (RA 5527)', value: '70% general average', unit: 'no grade below 50%' },
          { test: 'License renewal period', value: 'Every 3 years', unit: '' },
          { test: 'CPD units required per renewal', value: '45 units per 3-year cycle', unit: 'varies by PRC' },
          { test: 'Reinstatement after revocation', value: 'After 2 years', unit: 'petition required' }
        ]
      },
      {
        name: 'Grounds for Suspension or Revocation',
        values: [
          { test: 'Conviction of a crime involving moral turpitude', value: 'Revocation ground', unit: '' },
          { test: 'Unprofessional or unethical conduct', value: 'Revocation ground', unit: '' },
          { test: 'Gross incompetence or negligence', value: 'Revocation ground', unit: '' },
          { test: 'Violation of RA 5527 provisions', value: 'Revocation ground', unit: '' },
          { test: 'Fraud or deceit in obtaining a license', value: 'Revocation ground', unit: '' }
        ]
      },
      {
        name: 'Biosafety Levels',
        values: [
          { test: 'BSL-1', value: 'Basic · non-pathogenic organisms · standard precautions', unit: '' },
          { test: 'BSL-2', value: 'Moderate risk · most clinical labs · biosafety cabinet for aerosols', unit: '' },
          { test: 'BSL-3', value: 'High risk · respiratory transmission · negative pressure', unit: '' },
          { test: 'BSL-4', value: 'Highest risk · dangerous/exotic agents · positive pressure suit', unit: '' },
          { test: 'Mycobacterial culture lab', value: 'BSL-3', unit: '' },
          { test: 'Ebola handling', value: 'BSL-4', unit: '' }
        ]
      },
      {
        name: 'Quality Control — Westgard Rules',
        values: [
          { test: '1-2s warning rule', value: 'One value exceeds 2 SD', unit: 'warning' },
          { test: '1-3s rejection rule', value: 'One value exceeds 3 SD', unit: 'random error' },
          { test: '2-2s rejection rule', value: 'Two consecutive values exceed 2 SD on the same side', unit: 'systematic error' },
          { test: 'R-4s rejection rule', value: 'Range between two values exceeds 4 SD', unit: 'systematic error' },
          { test: '4-1s rejection rule', value: 'Four consecutive values exceed 1 SD on same side', unit: 'systematic error' },
          { test: '10x rejection rule', value: 'Ten consecutive values on the same side of the mean', unit: 'systematic error' },
          { test: 'Standard deviation coverage', value: '68% / 95% / 99.7%', unit: '1/2/3 SD' },
          { test: 'Accuracy', value: 'Closeness to the true value', unit: '' },
          { test: 'Precision', value: 'Reproducibility of measurements', unit: '' },
          { test: 'Delta check', value: 'Comparing current result with previous result on same patient', unit: '' }
        ]
      },
      {
        name: 'Biosafety & Waste Management',
        values: [
          { test: 'Recommended handwashing duration', value: '≥ 20 seconds with soap and water', unit: '' },
          { test: 'Standard Precautions', value: 'Treat all blood/body fluids as infectious', unit: '' },
          { test: 'Blood spill disinfectant', value: '1:10 dilution of household bleach (0.5% NaOCl)', unit: 'freshly prepared' },
          { test: 'PPE for clinical lab', value: 'Gloves · lab coat/gown · mask · eye protection', unit: '' },
          { test: 'Yellow bag waste', value: 'Infectious / pathological waste', unit: '' },
          { test: 'Red bag waste', value: 'Chemotherapeutic / pharmaceutical waste', unit: '' },
          { test: 'Black bag waste', value: 'Non-infectious general waste', unit: '' },
          { test: 'Sharps container', value: 'Puncture-resistant · never overfilled · rigid', unit: '' },
          { test: 'Autoclave standard', value: '121 °C at 15 psi for 15 minutes', unit: '' }
        ]
      },
      {
        name: 'Fire Safety & Emergency',
        values: [
          { test: 'Class A fire', value: 'Wood, paper, cloth', unit: '' },
          { test: 'Class B fire', value: 'Flammable liquids and gases', unit: '' },
          { test: 'Class C fire', value: 'Electrical equipment', unit: '' },
          { test: 'Class D fire', value: 'Combustible metals', unit: '' },
          { test: 'Class K fire', value: 'Kitchen oils and fats', unit: '' },
          { test: 'RACE acronym', value: 'Remove · Alarm · Contain · Extinguish / Evacuate', unit: '' },
          { test: 'PASS acronym', value: 'Pull · Aim · Squeeze · Sweep', unit: '' }
        ]
      }
    ]
  }
};

window.FORMULAS = [
  {
    id: 'mcv',
    title: 'MCV',
    subtitle: 'Mean Corpuscular Volume',
    unit: 'fL',
    normal: '80 – 100 fL',
    inputs: [
      { key: 'hct', label: 'Hematocrit', unit: '%', placeholder: 'e.g., 42' },
      { key: 'rbc', label: 'RBC', unit: '×10¹²/L', placeholder: 'e.g., 4.5', step: '0.01' }
    ],
    calc: v => (v.hct / v.rbc) * 10,
    note: 'MCV = (Hct ÷ RBC) × 10'
  },
  {
    id: 'mch',
    title: 'MCH',
    subtitle: 'Mean Corpuscular Hemoglobin',
    unit: 'pg',
    normal: '27 – 33 pg',
    inputs: [
      { key: 'hgb', label: 'Hemoglobin', unit: 'g/dL', placeholder: 'e.g., 14', step: '0.1' },
      { key: 'rbc', label: 'RBC', unit: '×10¹²/L', placeholder: 'e.g., 4.5', step: '0.01' }
    ],
    calc: v => (v.hgb / v.rbc) * 10,
    note: 'MCH = (Hgb ÷ RBC) × 10'
  },
  {
    id: 'mchc',
    title: 'MCHC',
    subtitle: 'Mean Corpuscular Hemoglobin Concentration',
    unit: 'g/dL',
    normal: '32 – 36 g/dL',
    inputs: [
      { key: 'hgb', label: 'Hemoglobin', unit: 'g/dL', placeholder: 'e.g., 14', step: '0.1' },
      { key: 'hct', label: 'Hematocrit', unit: '%', placeholder: 'e.g., 42' }
    ],
    calc: v => (v.hgb / v.hct) * 100,
    note: 'MCHC = (Hgb ÷ Hct) × 100'
  },
  {
    id: 'aniongap',
    title: 'Anion Gap',
    subtitle: 'Serum Anion Gap',
    unit: 'mEq/L',
    normal: '8 – 16 mEq/L',
    inputs: [
      { key: 'na', label: 'Sodium', unit: 'mEq/L', placeholder: 'e.g., 140' },
      { key: 'cl', label: 'Chloride', unit: 'mEq/L', placeholder: 'e.g., 102' },
      { key: 'hco3', label: 'Bicarbonate', unit: 'mEq/L', placeholder: 'e.g., 24' }
    ],
    calc: v => v.na - (v.cl + v.hco3),
    note: 'AG = Na − (Cl + HCO₃)'
  },
  {
    id: 'osmolality',
    title: 'Serum Osmolality',
    subtitle: 'Calculated Osmolality',
    unit: 'mOsm/kg',
    normal: '275 – 295 mOsm/kg',
    inputs: [
      { key: 'na', label: 'Sodium', unit: 'mEq/L', placeholder: 'e.g., 140' },
      { key: 'glu', label: 'Glucose', unit: 'mg/dL', placeholder: 'e.g., 100' },
      { key: 'bun', label: 'BUN', unit: 'mg/dL', placeholder: 'e.g., 15' }
    ],
    calc: v => 2 * v.na + (v.glu / 18) + (v.bun / 2.8),
    note: '2[Na] + [glucose/18] + [BUN/2.8]'
  },
  {
    id: 'correctedca',
    title: 'Corrected Calcium',
    subtitle: 'Albumin-Corrected Calcium',
    unit: 'mg/dL',
    normal: '8.6 – 10.3 mg/dL',
    inputs: [
      { key: 'ca', label: 'Measured Ca', unit: 'mg/dL', placeholder: 'e.g., 8.5', step: '0.1' },
      { key: 'alb', label: 'Albumin', unit: 'g/dL', placeholder: 'e.g., 3.0', step: '0.1' }
    ],
    calc: v => v.ca + 0.8 * (4.0 - v.alb),
    note: 'Ca_corrected = Ca + 0.8 × (4.0 − albumin)'
  },
  {
    id: 'ldl',
    title: 'LDL (Friedewald)',
    subtitle: 'Estimated LDL Cholesterol',
    unit: 'mg/dL',
    normal: '< 100 mg/dL',
    inputs: [
      { key: 'tc', label: 'Total Cholesterol', unit: 'mg/dL', placeholder: 'e.g., 180' },
      { key: 'hdl', label: 'HDL', unit: 'mg/dL', placeholder: 'e.g., 50' },
      { key: 'tg', label: 'Triglycerides', unit: 'mg/dL', placeholder: 'e.g., 120' }
    ],
    calc: v => v.tc - v.hdl - (v.tg / 5),
    note: 'LDL = TC − HDL − (TG ÷ 5). Invalid if TG > 400.'
  },
  {
    id: 'crcl',
    title: 'Creatinine Clearance',
    subtitle: 'Cockcroft-Gault Estimate',
    unit: 'mL/min',
    normal: '> 90 mL/min (normal renal function)',
    inputs: [
      { key: 'age', label: 'Age', unit: 'years', placeholder: 'e.g., 40' },
      { key: 'wt', label: 'Weight', unit: 'kg', placeholder: 'e.g., 70' },
      { key: 'scr', label: 'Serum Creatinine', unit: 'mg/dL', placeholder: 'e.g., 1.0', step: '0.01' },
      { key: 'female', label: 'Female? (1=yes, 0=no)', unit: '', placeholder: '0' }
    ],
    calc: v => {
      const base = ((140 - v.age) * v.wt) / (72 * v.scr);
      return v.female ? base * 0.85 : base;
    },
    note: 'CrCl = ((140−age) × weight) ÷ (72 × SCr) · ×0.85 if female'
  },
  {
    id: 'transfersat',
    title: 'Transferrin Saturation',
    subtitle: 'Iron Saturation',
    unit: '%',
    normal: '20 – 50%',
    inputs: [
      { key: 'iron', label: 'Serum Iron', unit: 'µg/dL', placeholder: 'e.g., 80' },
      { key: 'tibc', label: 'TIBC', unit: 'µg/dL', placeholder: 'e.g., 300' }
    ],
    calc: v => (v.iron / v.tibc) * 100,
    note: 'TSAT = (Serum Iron ÷ TIBC) × 100'
  },
  {
    id: 'anc',
    title: 'Absolute Neutrophil Count',
    subtitle: 'ANC',
    unit: '×10⁹/L',
    normal: '1.5 – 8.0 ×10⁹/L',
    inputs: [
      { key: 'wbc', label: 'WBC', unit: '×10⁹/L', placeholder: 'e.g., 7.0', step: '0.1' },
      { key: 'segs', label: 'Segs', unit: '%', placeholder: 'e.g., 60' },
      { key: 'bands', label: 'Bands', unit: '%', placeholder: 'e.g., 4' }
    ],
    calc: v => (v.wbc * (v.segs + v.bands)) / 100,
    note: 'ANC = WBC × (%segs + %bands) ÷ 100'
  }
];