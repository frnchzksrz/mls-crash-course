// organ-data.js
window.ORGAN_DATA = {
  heart: {
    name: 'Heart',
    latin: 'Cor',
    icon: '🫀',
    color: '#e74c3c',
    description: 'A muscular pump that moves blood through the body.',
    function: 'Blood circulation',
    location: 'Center-left chest',
    size: 'About the size of a fist',
    weight: '250-350 g',
    bloodSupply: 'Left and right coronary arteries',
    tissue: 'Cardiac muscle',
    note: 'The heart beats about 100,000 times per day in a typical adult.',
    parts: {
      'aorta': { name: 'Aorta', desc: 'The main artery leaving the heart.', mls: 'Serum markers: Lipid profile, hs-CRP. Clinical: Aneurysm, Dissection.' },
      'left atrium': { name: 'Left Atrium', desc: 'Receives oxygen-rich blood from the lungs.', mls: 'Clinical: Mitral stenosis, Atrial fibrillation.' },
      'right atrium': { name: 'Right Atrium', desc: 'Receives oxygen-poor blood from the body.', mls: 'Clinical: Tricuspid regurgitation, Central venous pressure monitoring.' },
      'left ventricle': { name: 'Left Ventricle', desc: 'Pumps blood to the entire body.', mls: 'Serum markers: BNP/NT-proBNP (Heart failure). Clinical: Hypertrophic cardiomyopathy.' },
      'right ventricle': { name: 'Right Ventricle', desc: 'Pumps blood to the lungs.', mls: 'Serum markers: D-dimer. Clinical: Pulmonary embolism, Cor pulmonale.' }
    }
  },
  brain: {
    name: 'Brain',
    latin: 'Encephalon',
    icon: '🧠',
    color: '#f6c445',
    description: 'The central organ of the nervous system, responsible for thought, memory, and control.',
    function: 'Cognition, sensory processing, motor control',
    location: 'Cranial cavity',
    size: 'About 15 cm long',
    weight: '1.3-1.4 kg',
    bloodSupply: 'Internal carotid and vertebral arteries',
    tissue: 'Nervous tissue (neurons and glia)',
    note: 'The brain uses about 20% of the body’s total oxygen and calories.',
    parts: {
      'cerebrum': { name: 'Cerebrum', desc: 'Largest part, responsible for higher functions.', mls: 'CSF analysis: Cell count, protein, glucose. Clinical: Meningitis, Encephalitis.' },
      'cerebellum': { name: 'Cerebellum', desc: 'Coordinates voluntary movements and balance.', mls: 'CSF: Oligoclonal bands. Clinical: Ataxia, Multiple sclerosis.' },
      'brainstem': { name: 'Brainstem', desc: 'Controls basic life functions like breathing.', mls: 'CSF: Lactate, Gram stain. Clinical: Brain death evaluation, Brainstem stroke.' },
      'hypothalamus': { name: 'Hypothalamus', desc: 'Regulates hormones and body temperature.', mls: 'Endocrine: TSH, ACTH, ADH, Cortisol. Clinical: Diabetes insipidus, SIADH.' },
      'pituitary': { name: 'Pituitary Gland', desc: 'The "master" endocrine gland.', mls: 'Endocrine: Prolactin, GH, FSH, LH. Clinical: Prolactinoma, Acromegaly.' }
    }
  },
  lungs: {
    name: 'Lungs',
    latin: 'Pulmones',
    icon: '🫁',
    color: '#3498db',
    description: 'Pair of spongy, air-filled organs located on either side of the chest.',
    function: 'Gas exchange (oxygen in, carbon dioxide out)',
    location: 'Thoracic cavity',
    size: 'About 25-30 cm tall',
    weight: '1.0-1.2 kg combined',
    bloodSupply: 'Pulmonary arteries and bronchial arteries',
    tissue: 'Alveolar epithelium',
    note: 'The surface area of the lungs is roughly equal to a tennis court.',
    parts: {
      'trachea': { name: 'Trachea', desc: 'The windpipe carrying air to the bronchi.', mls: 'Microbiology: Sputum culture. Clinical: Tracheitis, Foreign body aspiration.' },
      'bronchi': { name: 'Bronchi', desc: 'Major air passages branching into the lungs.', mls: 'Microbiology: AFB smear (TB). Clinical: Bronchitis, Bronchiectasis.' },
      'alveoli': { name: 'Alveoli', desc: 'Tiny air sacs where gas exchange occurs.', mls: 'ABG: pO2, pCO2. Clinical: Emphysema, ARDS.' },
      'left lung': { name: 'Left Lung', desc: 'Has two lobes to accommodate the heart.', mls: 'Pleural fluid: pH, LDH, Glucose. Clinical: Pleural effusion.' },
      'right lung': { name: 'Right Lung', desc: 'Has three lobes.', mls: 'Pleural fluid: Adenosine deaminase (TB). Clinical: Pneumothorax.' }
    }
  },
  liver: {
    name: 'Liver',
    latin: 'Hepar',
    icon: '🫀',
    color: '#8e44ad',
    description: 'A large, meaty organ that sits on the right side of the belly.',
    function: 'Metabolism, detoxification, bile production',
    location: 'Right upper quadrant of abdomen',
    size: 'About 15 cm thick',
    weight: '1.4-1.6 kg',
    bloodSupply: 'Hepatic artery and portal vein',
    tissue: 'Hepatocytes',
    note: 'The liver is the only internal organ that can fully regenerate itself.',
    parts: {
      'right lobe': { name: 'Right Lobe', desc: 'The larger of the two main lobes.', mls: 'Chemistry: ALT, AST, ALP, Bilirubin. Clinical: Hepatitis, Cirrhosis.' },
      'left lobe': { name: 'Left Lobe', desc: 'The smaller lobe extending across the midline.', mls: 'Chemistry: Albumin, PT/INR. Clinical: Hepatic encephalopathy.' },
      'gallbladder': { name: 'Gallbladder', desc: 'Stores bile produced by the liver.', mls: 'Chemistry: Direct bilirubin, GGT. Clinical: Cholelithiasis, Cholecystitis.' },
      'portal vein': { name: 'Portal Vein', desc: 'Carries nutrient-rich blood from the gut to the liver.', mls: 'Hematology: Platelet count (portal HTN). Clinical: Esophageal varices.' }
    }
  },
  kidneys: {
    name: 'Kidneys',
    latin: 'Renes',
    icon: '🫘',
    color: '#e67e22',
    description: 'Bean-shaped organs that filter blood and produce urine.',
    function: 'Filtration, fluid balance, blood pressure regulation',
    location: 'Retroperitoneum, posterior abdominal wall',
    size: 'About 10-12 cm long',
    weight: '125-170 g each',
    bloodSupply: 'Renal arteries',
    tissue: 'Nephrons',
    note: 'The kidneys filter about 180 liters of blood every day.',
    parts: {
      'cortex': { name: 'Renal Cortex', desc: 'The outer layer where glomerular filtration occurs.', mls: 'Chemistry: Creatinine, BUN, eGFR. Clinical: Glomerulonephritis.' },
      'medulla': { name: 'Renal Medulla', desc: 'The inner section containing the Loop of Henle.', mls: 'Urinalysis: Specific gravity. Clinical: Acute tubular necrosis.' },
      'pelvis': { name: 'Renal Pelvis', desc: 'Funnel-shaped cavity collecting urine.', mls: 'Urinalysis: Macroscopic exam. Clinical: Hydronephrosis, Renal stones.' },
      'ureter': { name: 'Ureter', desc: 'Tube carrying urine to the bladder.', mls: 'Urinalysis: RBCs. Clinical: Ureteral colic.' }
    }
  },
  penis: {
    name: 'Penis',
    latin: 'Penis',
    icon: '🍆',
    color: '#d35400',
    description: 'Male organ involved in urination and reproduction.',
    function: 'Urination and sexual function',
    location: 'Anterior to the scrotum',
    size: 'Varies',
    weight: 'N/A',
    bloodSupply: 'Internal pudendal artery',
    tissue: 'Erectile tissue (corpora cavernosa)',
    note: 'Contains the urethra, which serves both the urinary and reproductive systems.',
    parts: {
      'corpus cavernosum': { name: 'Corpus Cavernosum', desc: 'Two columns of erectile tissue.', mls: 'Clinical: Erectile dysfunction, Priapism.' },
      'corpus spongiosum': { name: 'Corpus Spongiosum', desc: 'Erectile tissue surrounding the urethra.', mls: 'Urinalysis: Urethral swab culture. Clinical: Urethritis (Chlamydia, Gonorrhea).' },
      'glans': { name: 'Glans Penis', desc: 'The sensitive bulbous structure at the tip.', mls: 'Microbiology: HSV PCR, Syphilis serology. Clinical: Genital herpes, Syphilis chancre.' },
      'urethra': { name: 'Urethra', desc: 'Tube that carries urine out of the body.', mls: 'Urinalysis: WBCs, Nitrites. Clinical: UTI, Urethral stricture.' }
    }
  },
  stomach: {
    name: 'Stomach',
    latin: 'Gaster',
    icon: '🫃',
    color: '#f39c12',
    description: 'Muscular organ that breaks down food using acid and enzymes.',
    function: 'Digestion',
    location: 'Upper left abdomen',
    size: '25 cm long',
    weight: 'Varies',
    bloodSupply: 'Left and right gastric arteries',
    tissue: 'Gastric mucosa',
    note: 'Produces hydrochloric acid and intrinsic factor.',
    parts: {
      'cardia': { name: 'Cardia', desc: 'Where the esophagus meets the stomach.', mls: 'Microbiology: H. pylori CLO test. Clinical: GERD.' },
      'fundus': { name: 'Fundus', desc: 'The upper part of the stomach.', mls: 'Clinical: Gastric volvulus.' },
      'body': { name: 'Body', desc: 'Main central region of the stomach.', mls: 'Chemistry: Gastrin level. Clinical: Gastric ulcer.' },
      'pylorus': { name: 'Pylorus', desc: 'The valve regulating passage to the small intestine.', mls: 'Clinical: Pyloric stenosis.' }
    }
  },
  pancreas: {
    name: 'Pancreas',
    latin: 'Pancreas',
    icon: '🥑',
    color: '#1abc9c',
    description: 'Glandular organ behind the stomach, secreting digestive enzymes and hormones.',
    function: 'Digestion and blood sugar regulation',
    location: 'Behind the stomach',
    size: '15-20 cm long',
    weight: '70-100 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Acinar cells and Islets of Langerhans',
    note: 'Contains both exocrine (digestive) and endocrine (hormonal) tissue.',
    parts: {
      'head': { name: 'Head', desc: 'The broad part near the duodenum.', mls: 'Chemistry: Lipase, Amylase. Clinical: Pancreatic cancer.' },
      'body': { name: 'Body', desc: 'The central section.', mls: 'Chemistry: CA 19-9. Clinical: Chronic pancreatitis.' },
      'tail': { name: 'Tail', desc: 'The narrow end near the spleen.', mls: 'Clinical: Pancreatic pseudocyst.' },
      'islets': { name: 'Islets of Langerhans', desc: 'Clusters of endocrine cells.', mls: 'Chemistry: Insulin, Glucagon, HbA1c. Clinical: Diabetes mellitus.' }
    }
  },
  spleen: {
    name: 'Spleen',
    latin: 'Splen',
    icon: '🟤',
    color: '#27ae60',
    description: 'Blood-filtering organ that also plays a role in the immune system.',
    function: 'Filters blood, recycles iron, fights infection',
    location: 'Upper left abdomen',
    size: 'About 12 cm long',
    weight: '150 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Red and white pulp',
    note: 'Involved in removing old red blood cells from circulation.',
    parts: {
      'red pulp': { name: 'Red Pulp', desc: 'Filters blood and removes old RBCs.', mls: 'Hematology: Howell-Jolly bodies (post-splenectomy). Clinical: Splenomegaly.' },
      'white pulp': { name: 'White Pulp', desc: 'Lymphoid tissue for immune response.', mls: 'Immunology: Opsonins. Clinical: Increased infection risk with encapsulated bacteria.' },
      'hilum': { name: 'Hilum', desc: 'Where blood vessels enter/exit.', mls: 'Clinical: Splenic infarction.' }
    }
  }
};