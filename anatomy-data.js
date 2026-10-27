// anatomy-data.js
// Curated MLS profiles keyed by lowercase, space-separated structure name.
// Matching in anatomy.html normalises mesh names and falls back through:
// exact -> whole-word prefix -> first word -> any word -> system fallback.

window.MLS_ANATOMY_DATA = {

  /* ===================== MAJOR ORGANS (Rich Detail) ===================== */
  
  heart: {
    type: 'Cardiovascular System',
    latin: 'Cor',
    description: 'A muscular pump that moves blood through the body.',
    function: 'Generates the pressure gradient driving pulmonary and systemic circulation. The conduction system coordinates atrial and ventricular contraction.',
    location: 'Middle mediastinum, center-left chest',
    size: 'About the size of a fist',
    weight: '250–350 g',
    bloodSupply: 'Left and right coronary arteries',
    tissue: 'Cardiac muscle',
    note: 'The heart beats about 100,000 times per day in a typical adult.',
    labTests: [
      'High-sensitivity troponin I/T',
      'CK-MB',
      'BNP / NT-proBNP',
      'Lipid profile (LDL, HDL, triglycerides)',
      'hs-CRP',
      'Potassium, magnesium, calcium',
      'Arterial blood gas'
    ],
    clinical: [
      'Acute myocardial infarction — troponin rise/fall with ischaemic symptoms',
      'Heart failure — BNP / NT-proBNP elevation',
      'Pericarditis — troponin may rise, CRP/ESR elevated',
      'Dysrhythmia — electrolyte disturbances (K, Mg, Ca)'
    ],
    examTip: 'Troponin is more cardiac-specific than CK-MB. CK-MB is useful for detecting reinfarction because it normalises faster.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  brain: {
    type: 'Nervous System',
    latin: 'Encephalon',
    description: 'The central organ of the nervous system, responsible for thought, memory, and control.',
    function: 'Central control organ for cognition, sensation, movement, and homeostasis. The choroid plexus produces cerebrospinal fluid (CSF).',
    location: 'Cranial cavity',
    size: 'About three pounds',
    weight: '1.3–1.4 kg',
    bloodSupply: 'Internal carotid and vertebral arteries',
    tissue: 'Nervous tissue (neurons and glia)',
    note: 'The brain uses about 20% of the body\'s total oxygen and calories.',
    labTests: [
      'CSF cell count with differential',
      'CSF protein and glucose',
      'CSF lactate',
      'CSF Gram stain and culture',
      'CSF India ink (Cryptococcus)',
      'Serum electrolytes, ammonia'
    ],
    clinical: [
      'Bacterial meningitis — high PMNs, low glucose, high protein',
      'Viral meningitis — lymphocytosis, normal glucose',
      'Subarachnoid haemorrhage — uniformly blood-stained CSF, xanthochromia',
      'Multiple sclerosis — oligoclonal bands'
    ],
    examTip: 'CSF glucose is normally ~60% of serum glucose. A CSF:serum ratio <0.4 strongly suggests bacterial meningitis.',
    link: 'course-analysis-of-urine.html',
    linkText: 'Body Fluids (CSF)'
  },

  lungs: {
    type: 'Respiratory System',
    latin: 'Pulmones',
    description: 'Pair of spongy, air-filled organs located on either side of the chest.',
    function: 'Gas exchange — oxygen diffuses into pulmonary capillary blood and CO₂ diffuses out across the alveolar–capillary membrane.',
    location: 'Thoracic cavity',
    size: 'Left lung is smaller than the right',
    weight: '~1 kg combined',
    bloodSupply: 'Pulmonary arteries and bronchial arteries',
    tissue: 'Spongy, porous tissue (alveoli)',
    note: 'The surface area of the lungs is roughly equal to a tennis court.',
    labTests: [
      'Arterial blood gas (pO₂, pCO₂, pH, HCO₃)',
      'Sputum Gram stain and culture',
      'AFB smear and culture (TB)',
      'Sputum cytology',
      'Pleural fluid analysis'
    ],
    clinical: [
      'Pneumonia — sputum culture, Gram stain',
      'Pulmonary tuberculosis — AFB, GeneXpert',
      'Respiratory acidosis/alkalosis by ABG',
      'Lung cancer — sputum cytology, biopsy'
    ],
    examTip: 'Sputum is not saliva — a good specimen has >25 PMNs and <10 squamous epithelial cells per low-power field.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  liver: {
    type: 'Hepatobiliary System',
    latin: 'Hepar',
    description: 'The largest internal organ, responsible for detoxification and metabolism.',
    function: 'Metabolises carbohydrates, proteins and lipids; synthesises albumin and clotting factors; conjugates and excretes bilirubin; detoxifies ammonia to urea.',
    location: 'Right upper quadrant of the abdomen',
    size: 'About the size of a football',
    weight: '1.4–1.6 kg',
    bloodSupply: 'Hepatic artery and portal vein',
    tissue: 'Hepatocytes',
    note: 'The liver can regenerate itself, even if 75% of it is removed.',
    labTests: [
      'ALT and AST',
      'ALP and GGT',
      'Total and direct bilirubin',
      'Albumin and total protein',
      'PT / INR',
      'Ammonia',
      'Hepatitis B and C serology',
      'Alpha-fetoprotein (AFP)'
    ],
    clinical: [
      'Hepatocellular pattern: ALT/AST ↑↑, ALP ↑',
      'Cholestatic pattern: ALP/GGT ↑↑, bilirubin ↑',
      'Cirrhosis: low albumin, prolonged PT/INR, thrombocytopenia',
      'Acute viral hepatitis: ALT >1000, IgM anti-HAV / anti-HBc',
      'Hepatic encephalopathy: ammonia ↑'
    ],
    examTip: 'AST:ALT ratio >2 suggests alcoholic liver disease; ALT > AST is more typical of viral hepatitis.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  kidney: {
    type: 'Urinary System',
    latin: 'Ren',
    description: 'Bean-shaped organs that filter blood to produce urine.',
    function: 'Filters plasma at the glomerulus, reabsorbs water and solutes along the nephron, regulates acid–base and electrolyte balance, produces erythropoietin and renin.',
    location: 'Retroperitoneum (T12–L3)',
    size: 'About the size of a bar of soap',
    weight: '120–150 g each',
    bloodSupply: 'Renal arteries',
    tissue: 'Nephrons (cortex and medulla)',
    note: 'The kidneys filter about 150 quarts of blood daily.',
    labTests: [
      'Serum creatinine',
      'BUN',
      'eGFR / creatinine clearance',
      'Cystatin C',
      'Urinalysis with microscopy',
      'Urine protein:creatinine ratio',
      'Electrolytes (Na, K, Cl, HCO3)'
    ],
    clinical: [
      'Acute kidney injury (pre-renal, intrinsic, post-renal)',
      'Chronic kidney disease staged by eGFR',
      'Glomerulonephritis — RBC casts, dysmorphic RBCs',
      'Nephrotic syndrome — proteinuria >3.5 g/day, oval fat bodies',
      'Renal tubular acidosis'
    ],
    examTip: 'Pre-renal: BUN:creatinine >20:1 with concentrated urine. Intrinsic: muddy brown casts, isosthenuria.',
    link: 'course-analysis-of-urine.html',
    linkText: 'Urinalysis & Body Fluids'
  },

  stomach: {
    type: 'Digestive System',
    latin: 'Gaster',
    description: 'A muscular organ that stores and breaks down food.',
    function: 'Stores and mechanically churns food, secretes HCl and pepsinogen for protein digestion, and secretes intrinsic factor essential for vitamin B₁₂ absorption.',
    location: 'Left upper quadrant of the abdomen',
    size: 'Holds about 1–1.5 liters of food',
    weight: 'Varies',
    bloodSupply: 'Left and right gastric arteries',
    tissue: 'Gastric mucosa (parietal and chief cells)',
    note: 'The stomach produces a new lining every few days to prevent self-digestion.',
    labTests: [
      'Rapid urease (CLO) test for H. pylori',
      'H. pylori stool antigen',
      'Gastric fluid analysis',
      'Serum vitamin B₁₂ and intrinsic factor antibodies',
      'Gastrin'
    ],
    clinical: [
      'Peptic ulcer disease — H. pylori positive',
      'Pernicious anaemia — intrinsic factor deficiency, macrocytic anaemia',
      'Zollinger–Ellison syndrome — gastrin ↑'
    ],
    examTip: 'Intrinsic factor is produced by gastric parietal cells. Loss (atrophy, gastrectomy) → vitamin B₁₂ deficiency → megaloblastic anaemia.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  pancreas: {
    type: 'Digestive & Endocrine',
    latin: 'Pancreas',
    description: 'A glandular organ behind the stomach with both digestive and hormonal functions.',
    function: 'Exocrine acinar cells secrete digestive enzymes; endocrine islets (of Langerhans) secrete insulin, glucagon, somatostatin and pancreatic polypeptide.',
    location: 'Behind the stomach',
    size: 'About 6 inches long',
    weight: '~100 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Acinar cells and Islets of Langerhans',
    note: 'The pancreas secretes about 1.5 liters of digestive juice daily.',
    labTests: [
      'Serum amylase',
      'Serum lipase',
      'Fasting glucose',
      'HbA1c',
      'C-peptide',
      'Faecal elastase'
    ],
    clinical: [
      'Acute pancreatitis — amylase/lipase ↑↑ (lipase more specific)',
      'Diabetes mellitus — glucose ↑, HbA1c ↑',
      'Chronic pancreatitis — faecal elastase ↓'
    ],
    examTip: 'Lipase is more specific than amylase for pancreatitis and stays elevated longer.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  spleen: {
    type: 'Lymphoid System',
    latin: 'Splen',
    description: 'The largest lymphatic organ, acting as a blood filter.',
    function: 'Filters blood, removes senescent or damaged RBCs, mounts immune responses to encapsulated organisms, and serves as a reservoir for platelets and monocytes.',
    location: 'Left upper quadrant, behind the stomach',
    size: 'About the size of a fist',
    weight: '150–200 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Red pulp and white pulp',
    note: 'The spleen removes old red blood cells and produces antibodies.',
    labTests: [
      'CBC with peripheral smear',
      'Howell–Jolly bodies (post-splenectomy)',
      'Direct antiglobulin (Coombs) test',
      'Platelet count',
      'Abdominal ultrasound (structure)'
    ],
    clinical: [
      'Hypersplenism — pancytopenia',
      'Splenic rupture — acute haemorrhage',
      'Post-splenectomy — Howell–Jolly bodies, target cells, ↑ infection risk',
      'Sickle cell sequestration crisis'
    ],
    examTip: 'Asplenic patients are at high risk for sepsis from encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis).',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  penis: {
    type: 'Reproductive System',
    latin: 'Penis',
    description: 'The male organ for urination and sexual reproduction.',
    function: 'Excretion of urine, delivery of semen.',
    location: 'Anterior to the scrotum',
    size: 'Varies',
    weight: 'Varies',
    bloodSupply: 'Internal pudendal artery',
    tissue: 'Erectile tissue (corpora cavernosa)',
    note: 'It contains a network of blood vessels that fill during an erection.',
    labTests: [
      'Urinalysis',
      'STI cultures/PCR (Chlamydia, Gonorrhea)',
      'Syphilis serology'
    ],
    clinical: [
      'Hypospadias',
      'Erectile dysfunction',
      'Phimosis',
      'Urethritis'
    ],
    examTip: 'The urethra passes through the corpus spongiosum.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  /* ===================== DIGESTIVE & RESPIRATORY ===================== */
  
  intestine: {
    type: 'Digestive System',
    function: 'Small intestine (duodenum, jejunum, ileum) is the main site of nutrient absorption. Large intestine reabsorbs water and electrolytes and forms stool.',
    labTests: [
      'Stool O&P (ova and parasites)',
      'Faecal immunochemical test (FIT)',
      'Stool culture',
      'Faecal calprotectin',
      'Celiac serology (tTG-IgA)'
    ],
    clinical: [
      'Parasitic infection — Giardia, Entamoeba, Ascaris',
      'Colorectal cancer screening — FIT, colonoscopy',
      'Inflammatory bowel disease — calprotectin ↑',
      'Celiac disease — tTG-IgA ↑, villous atrophy'
    ],
    examTip: 'Stool O&P requires three separate specimens collected on different days for adequate sensitivity.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  'large intestine': {
    type: 'Digestive System',
    function: 'Reabsorbs water and electrolytes from indigestible food residue, forms and stores stool, and hosts a large commensal bacterial population.',
    labTests: [
      'Stool culture',
      'FIT / FOBT',
      'C. difficile toxin / PCR',
      'Stool O&P'
    ],
    clinical: [
      'Colorectal carcinoma',
      'Clostridioides difficile colitis',
      'Ulcerative colitis / Crohn disease',
      'Bacterial dysentery (Shigella, Salmonella, Campylobacter)'
    ],
    examTip: 'C. difficile disease is diagnosed by toxin detection or PCR; asymptomatic colonisation is common in hospitalised patients.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  bladder: {
    type: 'Urinary System',
    function: 'Muscular reservoir that stores urine until micturition. Transitional epithelium (urothelium) lines the bladder and is the site of most urothelial carcinomas.',
    labTests: [
      'Urinalysis',
      'Urine culture with colony count',
      'Urine cytology',
      'Bladder biopsy'
    ],
    clinical: [
      'Urinary tract infection — E. coli most common',
      'Urothelial carcinoma — painless haematuria',
      'Interstitial cystitis'
    ],
    examTip: 'A midstream clean-catch specimen is preferred for urine culture; ≥10⁵ CFU/mL of a single organism suggests infection.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  ureter: {
    type: 'Urinary System',
    function: 'Peristaltic muscular tube that transports urine from the renal pelvis to the urinary bladder.',
    labTests: [
      'Urinalysis',
      'Serum creatinine, BUN',
      'Urine culture',
      'Imaging (CT urogram)'
    ],
    clinical: [
      'Ureteric colic (stone) — haematuria, severe flank pain',
      'Ureteric obstruction — hydronephrosis, AKI',
      'Ureteric stricture'
    ],
    examTip: 'Stone disease is diagnosed by CT non-contrast; urinalysis commonly shows microscopic haematuria.',
    link: 'course-analysis-of-urine.html',
    linkText: 'Urinalysis & Body Fluids'
  },

  thyroid: {
    type: 'Endocrine System',
    function: 'Produces thyroxine (T4) and triiodothyronine (T3) which regulate basal metabolic rate, and calcitonin which lowers serum calcium.',
    labTests: [
      'TSH',
      'Free T4',
      'Free T3',
      'Anti-TPO and anti-thyroglobulin antibodies',
      'Thyroglobulin (post-thyroidectomy)',
      'Calcitonin'
    ],
    clinical: [
      'Primary hypothyroidism — TSH ↑, fT4 ↓',
      'Hyperthyroidism (Graves) — TSH ↓, fT4/fT3 ↑',
      'Hashimoto thyroiditis — anti-TPO ↑',
      'Medullary thyroid carcinoma — calcitonin ↑'
    ],
    examTip: 'TSH is the most sensitive first-line test for primary thyroid disease; it changes opposite to thyroid hormone.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  adrenal: {
    type: 'Endocrine System',
    function: 'Adrenal cortex secretes cortisol, aldosterone and androgens. Adrenal medulla secretes catecholamines (epinephrine, norepinephrine).',
    labTests: [
      'Morning cortisol',
      'ACTH',
      'Aldosterone and renin',
      'Plasma metanephrines',
      'Dexamethasone suppression test'
    ],
    clinical: [
      'Cushing syndrome — cortisol ↑, loss of diurnal rhythm',
      'Addison disease — cortisol ↓, ACTH ↑, hyperkalaemia, hyponatraemia',
      'Primary aldosteronism — aldosterone ↑, renin ↓',
      'Pheochromocytoma — metanephrines ↑'
    ],
    examTip: 'Addison disease produces hyponatraemia and hyperkalaemia from aldosterone deficiency; Cushing produces the opposite pattern.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  gallbladder: {
    type: 'Hepatobiliary System',
    function: 'Stores and concentrates bile produced by the liver, releasing it into the duodenum after a fatty meal to aid fat digestion.',
    labTests: [
      'ALP, GGT',
      'Bilirubin (direct)',
      'Abdominal ultrasound',
      'Bile culture'
    ],
    clinical: [
      'Cholelithiasis — gallstones, RUQ pain',
      'Cholecystitis — Murphy sign positive, leukocytosis',
      'Choledocholithiasis — obstructive jaundice, dark urine, pale stool'
    ],
    examTip: 'Obstructive jaundice gives conjugated hyperbilirubinaemia (direct bilirubin ↑), dark urine from bilirubinuria, and pale stools.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  esophagus: {
    type: 'Digestive System',
    function: 'Muscular tube that transports swallowed food from the pharynx to the stomach via peristalsis.',
    labTests: [
      'Endoscopic biopsy',
      'Barium swallow',
      'CBC (chronic bleeding)'
    ],
    clinical: [
      'Gastro-oesophageal reflux disease (GERD)',
      'Barrett oesophagus — intestinal metaplasia on biopsy',
      'Oesophageal carcinoma',
      'Varices — portal hypertension'
    ],
    examTip: 'Barrett oesophagus is diagnosed by intestinal metaplasia (goblet cells) on biopsy.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  trachea: {
    type: 'Respiratory System',
    function: 'Cartilage-ringed airway that conducts air from the larynx to the main bronchi.',
    labTests: [
      'Sputum culture',
      'AFB smear',
      'Arterial blood gas'
    ],
    clinical: [
      'Tracheal stenosis',
      'Tracheitis — bacterial or viral',
      'Foreign-body aspiration'
    ],
    examTip: 'The tracheal bifurcation (carina) is where inhaled foreign bodies often lodge on the right side because the right main bronchus is wider and more vertical.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  thymus: {
    type: 'Lymphoid System',
    function: 'Primary lymphoid organ where T lymphocytes mature and undergo positive and negative selection. Largest in childhood, involutes after puberty.',
    labTests: [
      'Flow cytometry (T-cell subsets)',
      'Chest imaging',
      'Anti-acetylcholine receptor antibodies (myasthenia gravis)'
    ],
    clinical: [
      'Thymoma — anterior mediastinal mass',
      'Myasthenia gravis — associated with thymic hyperplasia/thymoma',
      'DiGeorge syndrome — thymic aplasia, T-cell deficiency'
    ],
    examTip: 'DiGeorge syndrome (22q11 deletion) causes thymic aplasia with low T cells, hypocalcaemia, and cardiac defects.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  tonsil: {
    type: 'Lymphoid System',
    function: 'Waldeyer ring lymphoid tissue that samples antigens entering via the mouth and nose to initiate mucosal immune responses.',
    labTests: [
      'Throat swab culture',
      'Rapid strep antigen test',
      'ASO titre',
      'EBV serology'
    ],
    clinical: [
      'Streptococcal pharyngitis — group A Streptococcus',
      'Infectious mononucleosis — EBV, atypical lymphocytes',
      'Peritonsillar abscess'
    ],
    examTip: 'Infectious mononucleosis shows atypical lymphocytes and a positive heterophile antibody (Monospot) test; avoid amoxicillin (rash).',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  appendix: {
    type: 'Digestive System',
    function: 'Small blind-ended lymphoid tissue pouch attached to the caecum; may serve as a reservoir for gut flora.',
    labTests: [
      'CBC (neutrophilia)',
      'CRP',
      'Abdominal ultrasound / CT'
    ],
    clinical: [
      'Acute appendicitis — RLQ pain, leukocytosis',
      'Perforated appendix — peritonitis'
    ],
    examTip: 'Appendicitis typically shows neutrophilic leukocytosis; CRP often rises later than WBC count.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  'bone marrow': {
    type: 'Haematopoietic System',
    function: 'Primary site of haematopoiesis in adults. Red marrow produces RBCs, WBCs and platelets; yellow marrow is fat storage.',
    labTests: [
      'CBC with differential',
      'Bone marrow aspirate',
      'Bone marrow biopsy',
      'Flow cytometry and cytogenetics',
      'Iron studies, Prussian blue stain'
    ],
    clinical: [
      'Leukaemia — blast infiltration',
      'Aplastic anaemia — hypocellular marrow',
      'Myelodysplastic syndrome — dysplasia',
      'Iron deficiency vs anaemia of chronic disease (Prussian blue)'
    ],
    examTip: 'Bone marrow aspirate evaluates cell morphology; biopsy evaluates cellularity and architecture. Both are usually needed.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  /* ===================== BONES ===================== */
  
  femur: {
    type: 'Skeletal System',
    function: 'Longest and strongest bone; transmits body weight from hip to tibia and provides attachment for the thigh and hip muscles. Proximal metaphysis contains red marrow in adults.',
    labTests: [
      'CBC',
      'Calcium, phosphate, ALP',
      'Vitamin D',
      'PTH',
      'Bone marrow biopsy (iliac crest)'
    ],
    clinical: [
      'Fracture — risk of fat embolism and ARDS',
      'Osteomyelitis — S. aureus most common',
      'Paget disease — isolated ALP elevation',
      'Metastatic marrow infiltration — leukoerythroblastic smear'
    ],
    examTip: 'The iliac crest (near the proximal femur) is the standard bone marrow biopsy site in adults.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  tibia: {
    type: 'Skeletal System',
    function: 'Weight-bearing bone of the lower leg; articulates with femur and talus to form the knee and ankle joints.',
    labTests: ['Serum calcium', 'ALP', 'Vitamin D'],
    clinical: [
      'Tibial fracture',
      'Osteomyelitis',
      'Compartment syndrome'
    ],
    examTip: 'The tibia is the most commonly fractured long bone and has poor soft-tissue coverage, so open fractures are common.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  humerus: {
    type: 'Skeletal System',
    function: 'Long bone of the arm; articulates with the scapula at the shoulder and with radius and ulna at the elbow.',
    labTests: ['Serum calcium', 'ALP'],
    clinical: [
      'Humeral fracture — risk of radial nerve injury',
      'Osteomyelitis',
      'Metastatic bone disease'
    ],
    examTip: 'Mid-shaft humeral fracture can injure the radial nerve → wrist drop.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  radius: {
    type: 'Skeletal System',
    function: 'Lateral forearm bone; rotates around the ulna to allow pronation and supination.',
    labTests: ['Serum calcium', 'ALP'],
    clinical: ['Colles fracture — distal radius fracture from a fall on outstretched hand'],
    examTip: 'A Colles fracture is a distal radius fracture with dorsal displacement; a Smith fracture is volar.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  ulna: {
    type: 'Skeletal System',
    function: 'Medial forearm bone; its olecranon process forms the point of the elbow.',
    labTests: ['Serum calcium', 'ALP'],
    clinical: ['Olecranon fracture', 'Monteggia fracture-dislocation'],
    examTip: 'A Monteggia fracture is an ulnar shaft fracture with radial head dislocation.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  skull: {
    type: 'Skeletal System',
    function: 'Protects the brain and special sense organs; houses paranasal sinuses and the upper airway.',
    labTests: ['CSF analysis (if trauma)', 'Serum electrolytes'],
    clinical: [
      'Skull fracture',
      'Subdural / epidural haematoma',
      'Meningitis — CSF analysis'
    ],
    examTip: 'CSF leak after basilar skull fracture can show a positive halo sign (glucose-containing fluid).',
    link: 'course-analysis-of-urine.html',
    linkText: 'Body Fluids (CSF)'
  },

  vertebra: {
    type: 'Skeletal System',
    function: 'Bony segment of the vertebral column that protects the spinal cord and supports the trunk.',
    labTests: ['CSF analysis (lumbar puncture)', 'Serum calcium', 'ALP'],
    clinical: [
      'Vertebral compression fracture — osteoporosis',
      'Discitis / vertebral osteomyelitis',
      'Metastatic bone disease'
    ],
    examTip: 'Lumbar puncture is performed between L3–L4 or L4–L5 where the spinal cord has ended (conus medullaris ends at ~L1–L2).',
    link: 'course-analysis-of-urine.html',
    linkText: 'Body Fluids (CSF)'
  },

  rib: {
    type: 'Skeletal System',
    function: 'Curved bones forming the thoracic cage, protecting the heart and lungs and allowing breathing through rib movement.',
    labTests: ['Serum calcium', 'ALP'],
    clinical: ['Rib fracture — risk of pneumothorax', 'Flail chest'],
    examTip: 'Rib fractures involving multiple adjacent ribs can produce a flail chest, requiring immediate stabilisation.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  pelvis: {
    type: 'Skeletal System',
    function: 'Ring of bones (ilium, ischium, pubis) connecting the spine to the lower limbs and protecting the pelvic viscera.',
    labTests: ['CBC', 'Calcium, ALP', 'Urinalysis'],
    clinical: [
      'Pelvic fracture — risk of massive haemorrhage',
      'Pubic symphysis separation in pregnancy',
      'Hip fracture'
    ],
    examTip: 'The iliac crest is also a common bone marrow aspiration site in adults.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  /* ===================== MUSCLES ===================== */
  
  biceps: {
    type: 'Muscular System',
    function: 'Flexes the elbow and supinates the forearm; the short head also assists shoulder flexion.',
    labTests: ['CK', 'Aldolase', 'Myoglobin', 'Electrolytes'],
    clinical: [
      'Rhabdomyolysis — CK ↑↑, myoglobinuria',
      'Muscular dystrophy — CK ↑, muscle biopsy',
      'Biceps tendon rupture'
    ],
    examTip: 'CK is the main lab marker of muscle injury; myoglobinuria can cause false-positive blood on urine dipstick without RBCs.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  triceps: {
    type: 'Muscular System',
    function: 'Extends the elbow; the long head extends the shoulder.',
    labTests: ['CK', 'Aldolase'],
    clinical: ['Rhabdomyolysis', 'Triceps tendon avulsion'],
    examTip: 'Muscle enzymes (CK, aldolase) are the main chemistry markers of skeletal muscle injury.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  deltoid: {
    type: 'Muscular System',
    function: 'Abducts the arm at the shoulder and assists flexion, extension and rotation.',
    labTests: ['CK', 'Aldolase'],
    clinical: ['Deltoid injection-site reaction', 'Axillary nerve injury'],
    examTip: 'The deltoid is the preferred intramuscular injection site for most adult vaccines (e.g., influenza, COVID-19).',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  pectoralis: {
    type: 'Muscular System',
    function: 'Adducts and medially rotates the arm, and assists in deep inspiration.',
    labTests: ['CK', 'Troponin (if chest pain)'],
    clinical: ['Pectoral muscle strain', 'Costochondritis'],
    examTip: 'Costochondritis is common chest pain in young adults; troponin is normal, differentiating it from MI.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  diaphragm: {
    type: 'Muscular System',
    function: 'Principal muscle of inspiration; when it contracts, thoracic volume increases and air is drawn in.',
    labTests: ['Arterial blood gas', 'Phrenic nerve conduction', 'CK'],
    clinical: [
      'Diaphragmatic paralysis — phrenic nerve injury',
      'Hiccups — diaphragmatic irritation',
      'Reduced respiratory effort in ALS'
    ],
    examTip: 'In a phrenic nerve injury, the affected hemidiaphragm is elevated on chest X-ray and paradoxical movement may be seen on fluoroscopy.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'rectus abdominis': {
    type: 'Muscular System',
    function: 'Flexes the trunk and increases intra-abdominal pressure for forced expiration, defecation and micturition.',
    labTests: ['CK', 'Serum lactate'],
    clinical: ['Rectus sheath haematoma', 'Abdominal wall hernia'],
    examTip: 'Rectus sheath haematoma is a cause of acute abdominal pain that can mimic appendicitis; diagnosed by CT.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  gluteus: {
    type: 'Muscular System',
    function: 'The gluteus maximus extends and externally rotates the hip; gluteus medius and minimus abduct the hip.',
    labTests: ['CK', 'CRP (if injection-site infection)'],
    clinical: ['Sciatic nerve injury from misplaced gluteal injection', 'Gluteal muscle atrophy'],
    examTip: 'The ventrogluteal site is preferred over the dorsogluteal for IM injections to avoid the sciatic nerve.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  gastrocnemius: {
    type: 'Muscular System',
    function: 'Plantarflexes the foot at the ankle and assists knee flexion — the main calf muscle.',
    labTests: ['CK', 'D-dimer (if DVT suspected)', 'Doppler ultrasound'],
    clinical: ['Calf muscle tear', 'Deep vein thrombosis (mimics muscle pain)'],
    examTip: 'Calf pain has a wide differential: DVT (D-dimer and Doppler), muscle tear (CK ↑), and compartment syndrome.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  quadriceps: {
    type: 'Muscular System',
    function: 'Four-headed extensor of the knee (rectus femoris, vastus lateralis, medialis, intermedius).',
    labTests: ['CK', 'Aldolase'],
    clinical: ['Quadriceps tendon rupture', 'Patellar tendinopathy'],
    examTip: 'A ruptured quadriceps tendon produces a palpable suprapatellar gap and inability to extend the knee.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  trapezius: {
    type: 'Muscular System',
    function: 'Elevates, retracts and rotates the scapula; upper fibres extend the neck.',
    labTests: ['CK', 'MRI / EMG'],
    clinical: ['Trapezius strain', 'Spinal accessory nerve injury (CN XI)'],
    examTip: 'CN XI injury causes trapezius wasting and shoulder droop; tested clinically by shoulder shrug against resistance.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  /* ===================== VESSELS ===================== */
  
  aorta: {
    type: 'Cardiovascular (Arterial)',
    function: 'Main systemic artery; carries oxygenated blood from the left ventricle to the body.',
    labTests: ['Lipid profile', 'hs-CRP', 'Serum creatinine (renal arteries)', 'Imaging (CT aortogram)'],
    clinical: [
      'Aortic aneurysm',
      'Aortic dissection — tearing chest pain, widened mediastinum',
      'Atherosclerosis'
    ],
    examTip: 'Aortic dissection classically shows a widened mediastinum on chest X-ray and a pulse deficit between arms.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  coronary: {
    type: 'Cardiovascular (Arterial)',
    function: 'Supply oxygenated blood to the myocardium; obstruction causes myocardial ischaemia.',
    labTests: ['High-sensitivity troponin', 'CK-MB', 'Lipid profile', 'hs-CRP'],
    clinical: ['Acute coronary syndrome', 'Myocardial infarction', 'Stable angina'],
    examTip: 'Troponin rises within 3–6 hours of injury and stays elevated for 7–14 days; CK-MB peaks faster and normalises in ~2–3 days.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  carotid: {
    type: 'Cardiovascular (Arterial)',
    function: 'Supplies the head and neck; the internal carotid supplies the brain, the external supplies face and scalp.',
    labTests: ['Lipid profile', 'Carotid Doppler ultrasound', 'CT/MR angiography'],
    clinical: ['Carotid stenosis — TIA/stroke risk', 'Carotid bruit', 'Carotid dissection'],
    examTip: 'A carotid bruit on auscultation suggests stenosis; Doppler ultrasound is the first-line evaluation.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'pulmonary artery': {
    type: 'Cardiovascular (Arterial)',
    function: 'Carries deoxygenated blood from the right ventricle to the lungs for gas exchange — the only artery in the body that carries deoxygenated blood.',
    labTests: ['ABG', 'BNP / NT-proBNP', 'D-dimer', 'CT pulmonary angiogram'],
    clinical: ['Pulmonary embolism', 'Pulmonary hypertension', 'Pulmonary stenosis'],
    examTip: 'D-dimer is sensitive but not specific for PE; a negative D-dimer in low-risk patients effectively excludes PE.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'vena cava': {
    type: 'Cardiovascular (Venous)',
    function: 'Superior and inferior vena cava return systemic venous blood to the right atrium.',
    labTests: ['CBC', 'Coagulation studies', 'Imaging'],
    clinical: ['Superior vena cava syndrome', 'Thrombosis', 'Central venous pressure measurement'],
    examTip: 'SVC syndrome produces facial and upper-limb swelling; often caused by mediastinal tumours or thrombosis.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'portal vein': {
    type: 'Cardiovascular (Venous)',
    function: 'Carries nutrient-rich blood from the gastrointestinal tract and spleen to the liver sinusoids.',
    labTests: ['LFTs', 'Ammonia', 'Doppler ultrasound', 'Endoscopy (varices)'],
    clinical: ['Portal hypertension', 'Oesophageal varices', 'Hepatic encephalopathy'],
    examTip: 'Portal hypertension causes varices, ascites, and splenomegaly. Ammonia is elevated in hepatic encephalopathy.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  /* ===================== NERVES ===================== */
  
  'spinal cord': {
    type: 'Nervous System',
    function: 'Conducts motor and sensory signals between brain and body; site of reflex arcs and CSF circulation.',
    labTests: ['CSF analysis', 'MRI', 'Serum B₁₂'],
    clinical: ['Spinal cord injury', 'Multiple sclerosis', 'Vitamin B₁₂ deficiency (subacute combined degeneration)'],
    examTip: 'B₁₂ deficiency causes subacute combined degeneration of the spinal cord with dorsal column and corticospinal signs.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  'sciatic nerve': {
    type: 'Nervous System',
    function: 'Largest nerve in the body; supplies the posterior thigh and most of the leg and foot.',
    labTests: ['MRI lumbar spine', 'EMG / nerve conduction studies'],
    clinical: ['Sciatica — radicular pain from disc herniation', 'Sciatic nerve injury from misplaced IM injection'],
    examTip: 'The ventrogluteal IM injection site is preferred over the dorsogluteal site to avoid sciatic nerve injury.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'median nerve': {
    type: 'Nervous System',
    function: 'Supplies the thenar muscles and lateral forearm; passes through the carpal tunnel at the wrist.',
    labTests: ['Nerve conduction studies', 'EMG', 'TSH (hypothyroidism can cause CTS)'],
    clinical: ['Carpal tunnel syndrome', 'Median nerve injury (ape-hand deformity)'],
    examTip: 'Carpal tunnel syndrome causes nocturnal numbness in the thumb, index, middle and radial half of the ring finger.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'optic nerve': {
    type: 'Nervous System',
    function: 'Carries visual information from the retina to the lateral geniculate nucleus (cranial nerve II).',
    labTests: ['Visual field testing', 'MRI brain and orbits', 'CSF opening pressure'],
    clinical: ['Optic neuritis — often first sign of MS', 'Papilloedema — raised intracranial pressure', 'Ischaemic optic neuropathy'],
    examTip: 'Papilloedema is bilateral optic disc swelling from raised ICP; optic neuritis is usually unilateral with pain on eye movement.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  'vagus nerve': {
    type: 'Nervous System',
    function: 'Cranial nerve X — provides parasympathetic innervation to thoracic and abdominal viscera and motor supply to the pharynx and larynx.',
    labTests: ['ECG', 'Gastric acid studies'],
    clinical: ['Vasovagal syncope', 'Vocal cord paralysis', 'Diabetic autonomic neuropathy'],
    examTip: 'Vasovagal syncope is triggered by increased vagal tone → bradycardia and hypotension.',
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },

  /* ===================== INTEGUMENT / LYMPHOID MISC ===================== */
  
  skin: {
    type: 'Integumentary System',
    function: 'Protects against pathogens and water loss, regulates temperature, synthesises vitamin D, and provides sensation.',
    labTests: ['Wound swab culture', 'Skin biopsy', 'Fungal KOH prep', 'IgE / allergy testing'],
    clinical: ['Cellulitis — S. aureus, β-haemolytic strep', 'Fungal infection — dermatophytes', 'Psoriasis', 'Contact dermatitis'],
    examTip: 'Superficial wound swabs often grow colonisers; deep tissue aspirate or biopsy is more reliable for the true pathogen.',
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },

  'lymph node': {
    type: 'Lymphoid System',
    function: 'Filters lymph, presents antigen to lymphocytes, and coordinates regional immune responses.',
    labTests: ['CBC with differential', 'Lymph node biopsy (FNA or excision)', 'Flow cytometry', 'LDH'],
    clinical: ['Reactive lymphadenopathy', 'Lymphoma — painless enlargement, B symptoms', 'Metastatic carcinoma', 'Tuberculous lymphadenitis'],
    examTip: 'Painless, firm, fixed lymph nodes suggest malignancy; tender, mobile nodes usually indicate infection.',
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },

  /* ===================== SUB-PARTS (Inheritance) ===================== */
  
  'aorta': {
    type: 'Cardiovascular (Arterial)',
    description: 'The main and largest artery in the human body.',
    function: 'Carries oxygenated blood from the left ventricle to the systemic circulation.',
    labTests: ['Lipid profile', 'hs-CRP', 'Creatinine'],
    clinical: ['Aortic aneurysm', 'Aortic dissection', 'Atherosclerosis'],
    examTip: 'Aortic dissection classically presents with a widened mediastinum.'
  },
  
  'left atrium': {
    type: 'Cardiovascular System',
    description: 'One of the four chambers of the heart.',
    function: 'Receives oxygen-rich blood from the lungs and pumps it to the left ventricle.',
    labTests: ['BNP', 'Troponin'],
    clinical: ['Mitral stenosis', 'Atrial fibrillation'],
    examTip: 'The left atrium is the most common site for blood clots that cause stroke.'
  },
  
  'right atrium': {
    type: 'Cardiovascular System',
    description: 'One of the four chambers of the heart.',
    function: 'Receives oxygen-poor blood from the body and pumps it to the right ventricle.',
    labTests: ['CVP monitoring', 'BNP'],
    clinical: ['Tricuspid regurgitation', 'Right heart failure'],
    examTip: 'The SA node is located in the upper wall of the right atrium.'
  },
  
  'renal cortex': {
    type: 'Urinary System',
    description: 'The outer portion of the kidney.',
    function: 'Contains the glomeruli and convoluted tubules where filtration begins.',
    labTests: ['Creatinine', 'BUN', 'Urinalysis'],
    clinical: ['Cortical necrosis', 'Glomerulonephritis'],
    examTip: 'The renal cortex produces erythropoietin (EPO).'
  }
};

/* Per-system fallbacks — shown when a mesh has no curated entry and no inherited
   parent. Ensures NO click is ever empty. */
window.MLS_SYSTEM_FALLBACKS = {
  skeleton: {
    type: 'Skeletal System',
    function: 'Supports and protects soft tissues, stores calcium and phosphate, and houses bone marrow for haematopoiesis.',
    labTests: ['CBC with differential', 'Serum calcium', 'Phosphate', 'Alkaline phosphatase (ALP)', 'Vitamin D', 'PTH'],
    clinical: ['Fracture', 'Osteomyelitis — S. aureus most common', 'Metabolic bone disease', 'Marrow infiltration'],
    examTip: 'Bone pain with isolated ALP elevation suggests Paget disease; marrow replacement can produce a leukoerythroblastic peripheral smear.'
  },
  muscles: {
    type: 'Muscular System',
    function: 'Produces movement, maintains posture, and generates heat through contraction.',
    labTests: ['Creatine kinase (CK)', 'Aldolase', 'Myoglobin', 'Serum electrolytes'],
    clinical: ['Rhabdomyolysis — CK ↑↑, risk of AKI', 'Muscular dystrophy', 'Myositis', 'Electrolyte imbalance'],
    examTip: 'CK is the main lab marker of skeletal muscle injury; myoglobinuria can cause a false-positive blood on urine dipstick.'
  },
  organs: {
    type: 'Internal Organs',
    function: 'Visceral structures responsible for digestion, metabolism, excretion and endocrine regulation.',
    labTests: ['Comprehensive metabolic panel', 'Liver and renal function tests', 'Endocrine panels (TSH, cortisol, etc.)', 'Urinalysis'],
    clinical: ['Organ-specific disease — see the parent organ profile for the full MLS correlation', 'Use system toggles to isolate this organ, then click to read its profile'],
    examTip: 'Many internal organ injuries are detected first by serum chemistry (LFTs, RFTs, amylase, lipase) rather than imaging.'
  },
  nerves: {
    type: 'Nervous System',
    function: 'Transmits electrical impulses between the central nervous system and peripheral tissues.',
    labTests: ['CSF analysis (cell count, protein, glucose, lactate)', 'Serum electrolytes', 'Vitamin B₁₂', 'Nerve conduction studies / EMG'],
    clinical: ['Peripheral neuropathy', 'Guillain–Barré syndrome', 'Meningitis (CNS)', 'Nerve injury'],
    examTip: 'Bacterial meningitis shows high CSF protein, low CSF glucose and neutrophilic pleocytosis; viral meningitis usually has normal glucose.'
  },
  circulatory: {
    type: 'Circulatory System',
    function: 'Transports oxygen, nutrients, hormones and waste products throughout the body via arteries, veins and capillaries.',
    labTests: ['CBC', 'Coagulation studies (PT/INR, aPTT)', 'Lipid profile', 'D-dimer', 'Blood cultures'],
    clinical: ['Atherosclerosis', 'Thrombosis (DVT, PE)', 'Hypertension', 'Haemorrhage / shock'],
    examTip: 'Arterial blood has higher pO₂ and pH than venous blood; sample type matters for ABG interpretation. Never draw ABG from a vein.'
  },
  lymphoid: {
    type: 'Lymphoid System',
    function: 'Filters lymph and blood, presents antigen, and coordinates adaptive immune responses.',
    labTests: ['CBC with differential', 'Lymph node biopsy', 'Flow cytometry', 'LDH', 'Serum protein electrophoresis'],
    clinical: ['Lymphoma', 'Reactive lymphadenopathy', 'Splenomegaly', 'Immunodeficiency'],
    examTip: 'B symptoms (fever, night sweats, weight loss) plus painless lymphadenopathy should prompt biopsy and flow cytometry for lymphoma.'
  }
};