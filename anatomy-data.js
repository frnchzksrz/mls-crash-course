// anatomy-data.js
window.MLS_ANATOMY_DATA = {
  /* ===================== SPECIFIC ORGANS ===================== */
  heart: {
    type: 'Cardiovascular System',
    latin: 'Cor',
    description: 'A muscular pump that moves blood through the body.',
    function: 'Blood circulation',
    location: 'Center-left chest',
    size: 'About the size of a fist',
    weight: '250–350 g',
    bloodSupply: 'Left and right coronary arteries',
    tissue: 'Cardiac muscle',
    note: 'The heart beats about 100,000 times per day in a typical adult.',
    labTests: ['Troponin I/T', 'CK-MB', 'BNP', 'Lipid Profile'],
    clinical: ['Myocardial infarction', 'Heart failure', 'Pericarditis'],
    examTip: 'Troponin is more cardiac-specific than CK-MB.'
  },
  brain: {
    type: 'Nervous System',
    latin: 'Encephalon',
    description: 'The central organ of the nervous system, responsible for thought, memory, and control.',
    function: 'Cognition, sensation, movement, homeostasis',
    location: 'Cranial cavity',
    size: 'About three pounds',
    weight: '1.3–1.4 kg',
    bloodSupply: 'Internal carotid and vertebral arteries',
    tissue: 'Nervous tissue (neurons and glia)',
    note: 'The brain uses about 20% of the body\'s total oxygen and calories.',
    labTests: ['CSF analysis', 'Glucose', 'Electrolytes'],
    clinical: ['Meningitis', 'Stroke', 'Encephalopathy'],
    examTip: 'CSF glucose is normally 60% of blood glucose.'
  },
  lungs: {
    type: 'Respiratory System',
    latin: 'Pulmones',
    description: 'Pair of spongy, air-filled organs located on either side of the chest.',
    function: 'Gas exchange (oxygen in, carbon dioxide out)',
    location: 'Thoracic cavity',
    size: 'Left lung is smaller than the right',
    weight: '~1 kg combined',
    bloodSupply: 'Pulmonary arteries and bronchial arteries',
    tissue: 'Spongy, porous tissue (alveoli)',
    note: 'The surface area of the lungs is roughly equal to a tennis court.',
    labTests: ['ABG', 'Sputum culture', 'AFB smear'],
    clinical: ['Pneumonia', 'Tuberculosis', 'Respiratory acidosis'],
    examTip: 'Sputum is not saliva. A good specimen has >25 PMNs.'
  },
  liver: {
    type: 'Hepatobiliary System',
    latin: 'Hepar',
    description: 'The largest internal organ, responsible for detoxification and metabolism.',
    function: 'Metabolism, detoxification, protein synthesis',
    location: 'Right upper quadrant of the abdomen',
    size: 'About the size of a football',
    weight: '1.4–1.6 kg',
    bloodSupply: 'Hepatic artery and portal vein',
    tissue: 'Hepatocytes',
    note: 'The liver can regenerate itself, even if 75% of it is removed.',
    labTests: ['ALT', 'AST', 'ALP', 'Bilirubin', 'Albumin'],
    clinical: ['Cirrhosis', 'Hepatitis', 'Jaundice'],
    examTip: 'AST:ALT ratio > 2 suggests alcoholic liver disease.'
  },
  kidney: {
    type: 'Urinary System',
    latin: 'Ren',
    description: 'Bean-shaped organs that filter blood to produce urine.',
    function: 'Filtration, fluid balance, blood pressure regulation',
    location: 'Retroperitoneum (T12–L3)',
    size: 'About the size of a bar of soap',
    weight: '120–150 g each',
    bloodSupply: 'Renal arteries',
    tissue: 'Nephrons (cortex and medulla)',
    note: 'The kidneys filter about 150 quarts of blood daily.',
    labTests: ['BUN', 'Creatinine', 'eGFR', 'Urinalysis'],
    clinical: ['AKI', 'CKD', 'Glomerulonephritis'],
    examTip: 'BUN:Creatinine > 20:1 suggests pre-renal failure.'
  },
  stomach: {
    type: 'Digestive System',
    latin: 'Gaster',
    description: 'A muscular organ that stores and breaks down food.',
    function: 'Digestion, secretion of acid and intrinsic factor',
    location: 'Left upper quadrant of the abdomen',
    size: 'Holds about 1–1.5 liters of food',
    weight: 'Varies',
    bloodSupply: 'Left and right gastric arteries',
    tissue: 'Gastric mucosa (parietal and chief cells)',
    note: 'The stomach produces a new lining every few days to prevent self-digestion.',
    labTests: ['H. pylori test', 'Gastrin', 'Intrinsic factor'],
    clinical: ['Peptic ulcer', 'Pernicious anemia', 'Gastritis'],
    examTip: 'Intrinsic factor is essential for Vitamin B12 absorption.'
  },
  pancreas: {
    type: 'Endocrine & Digestive',
    latin: 'Pancreas',
    description: 'A glandular organ behind the stomach with both digestive and hormonal functions.',
    function: 'Digestion (enzymes) and blood sugar regulation (insulin)',
    location: 'Behind the stomach',
    size: 'About 6 inches long',
    weight: '~100 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Acinar cells and Islets of Langerhans',
    note: 'The pancreas secretes about 1.5 liters of digestive juice daily.',
    labTests: ['Amylase', 'Lipase', 'Fasting glucose', 'HbA1c'],
    clinical: ['Pancreatitis', 'Diabetes mellitus', 'Pancreatic cancer'],
    examTip: 'Lipase is more specific than amylase for pancreatitis.'
  },
  spleen: {
    type: 'Lymphoid System',
    latin: 'Splen',
    description: 'The largest lymphatic organ, acting as a blood filter.',
    function: 'Filters blood, mounts immune response',
    location: 'Left upper quadrant, behind the stomach',
    size: 'About the size of a fist',
    weight: '150–200 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Red pulp and white pulp',
    note: 'The spleen removes old red blood cells and produces antibodies.',
    labTests: ['CBC', 'Peripheral smear', 'Coombs test'],
    clinical: ['Splenomegaly', 'Asplenia', 'Hemolytic anemia'],
    examTip: 'Post-splenectomy, expect Howell-Jolly bodies on a smear.'
  },
  penis: {
    type: 'Reproductive System',
    latin: 'Penis',
    description: 'The male organ for urination and sexual reproduction.',
    function: 'Excretion of urine, delivery of semen',
    location: 'Anterior to the scrotum',
    size: 'Varies',
    weight: 'Varies',
    bloodSupply: 'Internal pudendal artery',
    tissue: 'Erectile tissue (corpora cavernosa)',
    note: 'It contains a network of blood vessels that fill during an erection.',
    labTests: ['Urinalysis', 'STI cultures/PCR'],
    clinical: ['Hypospadias', 'Erectile dysfunction', 'Phimosis'],
    examTip: 'The urethra passes through the corpus spongiosum.'
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

/* Fallbacks for whole-body view (kept from previous) */
window.MLS_SYSTEM_FALLBACKS = {
  skeleton: { type: 'Skeletal System', function: 'Supports body, protects organs.', labTests: ['CBC', 'Ca++', 'ALP'], clinical: ['Osteoporosis'], examTip: 'Bone pain with high ALP suggests Paget disease.' },
  muscles: { type: 'Muscular System', function: 'Movement and posture.', labTests: ['CK', 'Aldolase'], clinical: ['Rhabdomyolysis'], examTip: 'CK rises in muscle injury.' },
  organs: { type: 'Internal Organs', function: 'Visceral functions.', labTests: ['CMP', 'CBC'], clinical: ['Organ failure'], examTip: 'Click a specific organ for details.' },
  nerves: { type: 'Nervous System', function: 'Signals to/from brain.', labTests: ['CSF', 'B12'], clinical: ['Neuropathy'], examTip: 'CSF protein is high in meningitis.' },
  circulatory: { type: 'Circulatory System', function: 'Blood transport.', labTests: ['CBC', 'PT/INR', 'D-dimer'], clinical: ['DVT', 'PE'], examTip: 'D-dimer is sensitive but not specific.' },
  lymphoid: { type: 'Lymphoid System', function: 'Immune defense.', labTests: ['CBC', 'Flow cytometry'], clinical: ['Lymphoma'], examTip: 'B symptoms + painless nodes = biopsy.' }
};