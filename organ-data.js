// organ-data.js
window.ORGAN_DATA = {
  heart: {
    name: 'Heart',
    latin: 'Cor',
    icon: '🫀',
    color: '#e74c3c',
    tagline: 'The relentless pump that never rests.',
    description: 'A four-chambered muscular pump that generates the pressure gradient driving pulmonary and systemic circulation.',
    function: 'Blood circulation, oxygen and nutrient delivery',
    location: 'Middle mediastinum, center-left chest',
    size: 'About the size of a fist',
    weight: '250–350 g',
    bloodSupply: 'Left and right coronary arteries',
    tissue: 'Cardiac muscle (myocardium)',
    note: 'The heart beats about 100,000 times per day in a typical adult.',
    quickFacts: [
      'Troponin I/T is the gold-standard biomarker for myocardial infarction.',
      'BNP / NT-proBNP rises in heart failure.',
      'CK-MB is useful for detecting reinfarction because it normalizes faster than troponin.'
    ],
    clinicalPearls: [
      'Troponin rises within 3–6 hours of injury and stays elevated for 7–14 days.',
      'A CK-MB/total CK ratio >5% suggests myocardial injury.',
      'Lipid profile (LDL, HDL, triglycerides) is a primary risk marker for coronary artery disease.'
    ],
    parts: {
      'aorta': {
        name: 'Aorta',
        desc: 'The main artery leaving the heart, carrying oxygenated blood to the body.',
        mls: {
          tests: ['Lipid profile', 'hs-CRP', 'Serum creatinine (renal arteries)'],
          clinical: ['Aortic aneurysm', 'Aortic dissection', 'Atherosclerosis'],
          examTip: 'Aortic dissection classically shows a widened mediastinum on chest X-ray and a pulse deficit between arms.'
        }
      },
      'left atrium': {
        name: 'Left Atrium',
        desc: 'Receives oxygen-rich blood from the lungs via the pulmonary veins.',
        mls: {
          tests: ['BNP / NT-proBNP', 'Echocardiography (not a lab test)'],
          clinical: ['Mitral stenosis', 'Atrial fibrillation', 'Left atrial enlargement'],
          examTip: 'Mitral stenosis is a classic cause of an enlarged left atrium and atrial fibrillation.'
        }
      },
      'right atrium': {
        name: 'Right Atrium',
        desc: 'Receives oxygen-poor blood from the body via the superior and inferior vena cava.',
        mls: {
          tests: ['Central venous pressure (CVP) monitoring', 'Blood cultures'],
          clinical: ['Tricuspid regurgitation', 'Right heart failure', 'Atrial septal defect'],
          examTip: 'Right atrial pressure is estimated clinically via jugular venous distension (JVD).'
        }
      },
      'left ventricle': {
        name: 'Left Ventricle',
        desc: 'Pumps blood to the entire body via the aorta. The thickest chamber of the heart.',
        mls: {
          tests: ['Troponin I/T', 'CK-MB', 'BNP / NT-proBNP'],
          clinical: ['Myocardial infarction', 'Hypertrophic cardiomyopathy', 'Heart failure'],
          examTip: 'The left ventricle is the most commonly affected chamber in hypertensive heart disease.'
        }
      },
      'right ventricle': {
        name: 'Right Ventricle',
        desc: 'Pumps deoxygenated blood to the lungs via the pulmonary artery.',
        mls: {
          tests: ['D-dimer', 'ABG (pO2, pCO2)'],
          clinical: ['Pulmonary embolism', 'Cor pulmonale', 'Right ventricular infarction'],
          examTip: 'Right ventricular infarction should be suspected when inferior MI is accompanied by hypotension and elevated JVP.'
        }
      }
    }
  },

  brain: {
    name: 'Brain',
    latin: 'Encephalon',
    icon: '🧠',
    color: '#f6c445',
    tagline: 'The command center of the nervous system.',
    description: 'The central organ of the nervous system, responsible for thought, memory, sensory processing, and motor control.',
    function: 'Cognition, sensory processing, motor control, homeostasis',
    location: 'Cranial cavity',
    size: 'About 15 cm long',
    weight: '1.3–1.4 kg',
    bloodSupply: 'Internal carotid and vertebral arteries',
    tissue: 'Nervous tissue (neurons and glia)',
    note: 'The brain uses about 20% of the body’s total oxygen and calories.',
    quickFacts: [
      'CSF glucose is normally ~60% of serum glucose.',
      'A CSF:serum glucose ratio <0.4 strongly suggests bacterial meningitis.',
      'Oligoclonal bands in CSF are a marker for multiple sclerosis.'
    ],
    clinicalPearls: [
      'Bacterial meningitis: high PMNs, low glucose, high protein.',
      'Viral meningitis: lymphocytosis, normal glucose.',
      'Subarachnoid hemorrhage: uniformly blood-stained CSF, xanthochromia.'
    ],
    parts: {
      'cerebrum': {
        name: 'Cerebrum',
        desc: 'Largest part of the brain, responsible for higher functions like thought and memory.',
        mls: {
          tests: ['CSF cell count with differential', 'CSF protein and glucose', 'CSF lactate'],
          clinical: ['Meningitis', 'Encephalitis', 'Stroke'],
          examTip: 'CSF lactate is often elevated in bacterial meningitis and can help differentiate it from viral meningitis.'
        }
      },
      'cerebellum': {
        name: 'Cerebellum',
        desc: 'Coordinates voluntary movements, balance, and posture.',
        mls: {
          tests: ['CSF oligoclonal bands', 'MRI brain'],
          clinical: ['Ataxia', 'Multiple sclerosis', 'Cerebellar stroke'],
          examTip: 'Oligoclonal bands are present in up to 90% of MS patients.'
        }
      },
      'brainstem': {
        name: 'Brainstem',
        desc: 'Controls basic life functions like breathing, heart rate, and consciousness.',
        mls: {
          tests: ['CSF Gram stain and culture', 'CSF lactate'],
          clinical: ['Brainstem stroke', 'Brain death evaluation', 'Central sleep apnea'],
          examTip: 'In brain death evaluation, absence of brainstem reflexes is a key criterion.'
        }
      },
      'hypothalamus': {
        name: 'Hypothalamus',
        desc: 'Regulates hormones, body temperature, hunger, and circadian rhythms.',
        mls: {
          tests: ['TSH', 'ACTH', 'ADH (vasopressin)', 'Cortisol'],
          clinical: ['Diabetes insipidus', 'SIADH', 'Hypothalamic obesity'],
          examTip: 'SIADH causes hyponatremia with concentrated urine; diabetes insipidus causes hypernatremia with dilute urine.'
        }
      },
      'pituitary': {
        name: 'Pituitary Gland',
        desc: 'The "master" endocrine gland, controlling other endocrine organs.',
        mls: {
          tests: ['Prolactin', 'GH', 'FSH', 'LH', 'TSH', 'ACTH'],
          clinical: ['Prolactinoma', 'Acromegaly', 'Cushing disease', 'Hypopituitarism'],
          examTip: 'Prolactinoma is the most common pituitary adenoma and causes galactorrhea and amenorrhea.'
        }
      }
    }
  },

  lungs: {
    name: 'Lungs',
    latin: 'Pulmones',
    icon: '🫁',
    color: '#3498db',
    tagline: 'The gateway for gas exchange.',
    description: 'Pair of spongy, air-filled organs located on either side of the chest.',
    function: 'Gas exchange (oxygen in, carbon dioxide out), acid-base balance',
    location: 'Thoracic cavity',
    size: 'About 25–30 cm tall',
    weight: '1.0–1.2 kg combined',
    bloodSupply: 'Pulmonary arteries and bronchial arteries',
    tissue: 'Alveolar epithelium',
    note: 'The surface area of the lungs is roughly equal to a tennis court.',
    quickFacts: [
      'ABG analysis is the gold standard for assessing oxygenation and ventilation.',
      'Sputum is not saliva: a good specimen has >25 PMNs and <10 squamous epithelial cells per low-power field.',
      'D-dimer is sensitive but not specific for pulmonary embolism.'
    ],
    clinicalPearls: [
      'Respiratory acidosis: low pH, high pCO2. Respiratory alkalosis: high pH, low pCO2.',
      'Pleural fluid pH <7.2 suggests complicated parapneumonic effusion or empyema.',
      'ADA >40 U/L in pleural fluid is suggestive of tuberculous pleurisy.'
    ],
    parts: {
      'trachea': {
        name: 'Trachea',
        desc: 'The windpipe carrying air to the bronchi.',
        mls: {
          tests: ['Sputum culture', 'AFB smear and culture', 'ABG'],
          clinical: ['Tracheitis', 'Foreign-body aspiration', 'Tracheal stenosis'],
          examTip: 'The right main bronchus is wider and more vertical, making it the more common site for aspirated foreign bodies.'
        }
      },
      'bronchi': {
        name: 'Bronchi',
        desc: 'Major air passages branching into the lungs.',
        mls: {
          tests: ['Sputum Gram stain', 'Sputum culture', 'AFB smear'],
          clinical: ['Bronchitis', 'Bronchiectasis', 'Bronchogenic carcinoma'],
          examTip: 'Bronchiectasis is characterized by chronic cough with copious purulent sputum.'
        }
      },
      'alveoli': {
        name: 'Alveoli',
        desc: 'Tiny air sacs where gas exchange occurs.',
        mls: {
          tests: ['Arterial blood gas (pO2, pCO2, pH)', 'DLCO (diffusing capacity)'],
          clinical: ['Emphysema', 'ARDS', 'Pulmonary fibrosis'],
          examTip: 'In ARDS, refractory hypoxemia occurs despite supplemental oxygen.'
        }
      },
      'left lung': {
        name: 'Left Lung',
        desc: 'Has two lobes to accommodate the heart.',
        mls: {
          tests: ['Pleural fluid analysis (pH, LDH, glucose)', 'Pleural fluid culture'],
          clinical: ['Pleural effusion', 'Pneumothorax', 'Lung cancer'],
          examTip: 'Pleural fluid LDH >200 IU/L suggests an exudate.'
        }
      },
      'right lung': {
        name: 'Right Lung',
        desc: 'Has three lobes.',
        mls: {
          tests: ['Pleural fluid adenosine deaminase (ADA)', 'Pleural biopsy'],
          clinical: ['Tuberculous pleurisy', 'Pneumothorax', 'Pleural mesothelioma'],
          examTip: 'ADA is a useful marker for tuberculous pleural effusion, especially in high-prevalence areas.'
        }
      }
    }
  },

  liver: {
    name: 'Liver',
    latin: 'Hepar',
    icon: '🫀',
    color: '#8e44ad',
    tagline: 'The body’s chemical factory.',
    description: 'A large, meaty organ that sits on the right side of the belly.',
    function: 'Metabolism, detoxification, bile production, synthesis of clotting factors and albumin',
    location: 'Right upper quadrant of abdomen',
    size: 'About 15 cm thick',
    weight: '1.4–1.6 kg',
    bloodSupply: 'Hepatic artery and portal vein',
    tissue: 'Hepatocytes',
    note: 'The liver is the only internal organ that can fully regenerate itself.',
    quickFacts: [
      'AST:ALT ratio >2 suggests alcoholic liver disease.',
      'ALT >1000 U/L is typical of acute viral hepatitis.',
      'Prolonged PT/INR in liver disease reflects synthetic dysfunction.'
    ],
    clinicalPearls: [
      'Hepatocellular pattern: ALT/AST ↑↑, ALP ↑.',
      'Cholestatic pattern: ALP/GGT ↑↑, bilirubin ↑.',
      'Cirrhosis: low albumin, prolonged PT/INR, thrombocytopenia.'
    ],
    parts: {
      'right lobe': {
        name: 'Right Lobe',
        desc: 'The larger of the two main lobes.',
        mls: {
          tests: ['ALT', 'AST', 'ALP', 'Bilirubin (total and direct)', 'Albumin', 'PT/INR'],
          clinical: ['Hepatitis', 'Cirrhosis', 'Hepatocellular carcinoma'],
          examTip: 'Alpha-fetoprotein (AFP) is a tumor marker for hepatocellular carcinoma.'
        }
      },
      'left lobe': {
        name: 'Left Lobe',
        desc: 'The smaller lobe extending across the midline.',
        mls: {
          tests: ['Ammonia', 'Albumin', 'PT/INR'],
          clinical: ['Hepatic encephalopathy', 'Portal hypertension'],
          examTip: 'Ammonia is elevated in hepatic encephalopathy, but serial clinical assessment is more important than a single ammonia level.'
        }
      },
      'gallbladder': {
        name: 'Gallbladder',
        desc: 'Stores bile produced by the liver.',
        mls: {
          tests: ['Direct bilirubin', 'GGT', 'ALP', 'Abdominal ultrasound'],
          clinical: ['Cholelithiasis', 'Cholecystitis', 'Choledocholithiasis'],
          examTip: 'Obstructive jaundice gives conjugated hyperbilirubinemia (direct bilirubin ↑), dark urine, and pale stools.'
        }
      },
      'portal vein': {
        name: 'Portal Vein',
        desc: 'Carries nutrient-rich blood from the gut to the liver.',
        mls: {
          tests: ['Platelet count', 'Doppler ultrasound', 'Endoscopy (varices)'],
          clinical: ['Portal hypertension', 'Esophageal varices', 'Hepatic encephalopathy'],
          examTip: 'Portal hypertension causes varices, ascites, and splenomegaly. Thrombocytopenia is often the first sign.'
        }
      }
    }
  },

  kidneys: {
    name: 'Kidneys',
    latin: 'Renes',
    icon: '🫘',
    color: '#e67e22',
    tagline: 'The master filters of the blood.',
    description: 'Bean-shaped organs that filter blood and produce urine.',
    function: 'Filtration, fluid balance, blood pressure regulation, erythropoietin production',
    location: 'Retroperitoneum, posterior abdominal wall',
    size: 'About 10–12 cm long',
    weight: '125–170 g each',
    bloodSupply: 'Renal arteries',
    tissue: 'Nephrons',
    note: 'The kidneys filter about 180 liters of blood every day.',
    quickFacts: [
      'Pre-renal AKI: BUN:creatinine >20:1 with concentrated urine.',
      'Intrinsic AKI: muddy brown casts, isosthenuria.',
      'eGFR is calculated from serum creatinine.'
    ],
    clinicalPearls: [
      'Nephrotic syndrome: proteinuria >3.5 g/day, oval fat bodies, hypoalbuminemia.',
      'Nephritic syndrome: hematuria, RBC casts, hypertension.',
      'Renal tubular acidosis: normal anion gap metabolic acidosis.'
    ],
    parts: {
      'cortex': {
        name: 'Renal Cortex',
        desc: 'The outer layer where glomerular filtration occurs.',
        mls: {
          tests: ['Serum creatinine', 'BUN', 'eGFR', 'Urinalysis with microscopy'],
          clinical: ['Glomerulonephritis', 'Acute tubular necrosis', 'Cortical necrosis'],
          examTip: 'RBC casts are pathognomonic for glomerular bleeding.'
        }
      },
      'medulla': {
        name: 'Renal Medulla',
        desc: 'The inner section containing the Loop of Henle.',
        mls: {
          tests: ['Urine specific gravity', 'Urine osmolality'],
          clinical: ['Acute tubular necrosis', 'Medullary sponge kidney'],
          examTip: 'Isosthenuria (fixed specific gravity ~1.010) suggests loss of concentrating ability.'
        }
      },
      'pelvis': {
        name: 'Renal Pelvis',
        desc: 'Funnel-shaped cavity collecting urine.',
        mls: {
          tests: ['Urinalysis (macroscopic exam)', 'Urine culture', 'CT urogram'],
          clinical: ['Hydronephrosis', 'Renal stones', 'Pyelonephritis'],
          examTip: 'Struvite stones are associated with urease-producing bacteria (e.g., Proteus).'
        }
      },
      'ureter': {
        name: 'Ureter',
        desc: 'Tube carrying urine to the bladder.',
        mls: {
          tests: ['Urinalysis (RBCs)', 'CT non-contrast'],
          clinical: ['Ureteral colic', 'Ureteral stricture', 'Ureteric obstruction'],
          examTip: 'Microscopic hematuria is common in ureteral stones.'
        }
      }
    }
  },

  penis: {
    name: 'Penis',
    latin: 'Penis',
    icon: '🍆',
    color: '#d35400',
    tagline: 'Urethral and reproductive conduit.',
    description: 'Male organ involved in urination and reproduction.',
    function: 'Urination and sexual function',
    location: 'Anterior to the scrotum',
    size: 'Varies',
    weight: 'N/A',
    bloodSupply: 'Internal pudendal artery',
    tissue: 'Erectile tissue (corpora cavernosa)',
    note: 'Contains the urethra, which serves both the urinary and reproductive systems.',
    quickFacts: [
      'Urethral swab culture is used for suspected gonorrhea/chlamydia.',
      'HSV PCR and syphilis serology are key tests for genital lesions.',
      'Urinalysis with WBCs and nitrites suggests UTI.'
    ],
    clinicalPearls: [
      'Gonococcal urethritis: purulent discharge, Gram-negative diplococci intracellularly.',
      'Syphilis: painless chancre, positive VDRL/RPR confirmed by FTA-ABS.',
      'HSV: painful vesicles, positive PCR.'
    ],
    parts: {
      'corpus cavernosum': {
        name: 'Corpus Cavernosum',
        desc: 'Two columns of erectile tissue.',
        mls: {
          tests: ['Doppler ultrasound', 'Testosterone'],
          clinical: ['Erectile dysfunction', 'Priapism', 'Peyronie disease'],
          examTip: 'Priapism is a urologic emergency; ischemia can lead to fibrosis and permanent ED.'
        }
      },
      'corpus spongiosum': {
        name: 'Corpus Spongiosum',
        desc: 'Erectile tissue surrounding the urethra.',
        mls: {
          tests: ['Urethral swab culture', 'NAAT for Chlamydia/Gonorrhea'],
          clinical: ['Urethritis', 'Urethral stricture'],
          examTip: 'NAAT is the preferred test for Chlamydia trachomatis and Neisseria gonorrhoeae.'
        }
      },
      'glans': {
        name: 'Glans Penis',
        desc: 'The sensitive bulbous structure at the tip.',
        mls: {
          tests: ['HSV PCR', 'Syphilis serology (VDRL/RPR, FTA-ABS)'],
          clinical: ['Genital herpes', 'Syphilis chancre', 'Balanitis'],
          examTip: 'A painless ulcer with a clean base is classic for primary syphilis.'
        }
      },
      'urethra': {
        name: 'Urethra',
        desc: 'Tube that carries urine out of the body.',
        mls: {
          tests: ['Urinalysis (WBCs, nitrites, leukocyte esterase)', 'Urine culture'],
          clinical: ['UTI', 'Urethral stricture', 'Urethral caruncle'],
          examTip: 'A midstream clean-catch specimen is preferred for urine culture.'
        }
      }
    }
  },

  stomach: {
    name: 'Stomach',
    latin: 'Gaster',
    icon: '🫃',
    color: '#f39c12',
    tagline: 'The acidic digestion chamber.',
    description: 'Muscular organ that breaks down food using acid and enzymes.',
    function: 'Digestion, intrinsic factor secretion, acid production',
    location: 'Upper left abdomen',
    size: '25 cm long',
    weight: 'Varies',
    bloodSupply: 'Left and right gastric arteries',
    tissue: 'Gastric mucosa',
    note: 'Produces hydrochloric acid and intrinsic factor.',
    quickFacts: [
      'H. pylori is diagnosed by rapid urease (CLO) test, stool antigen, or urea breath test.',
      'Intrinsic factor deficiency causes pernicious anemia (vitamin B12 deficiency).',
      'Gastrin levels are elevated in Zollinger-Ellison syndrome.'
    ],
    clinicalPearls: [
      'Pernicious anemia: macrocytic anemia, low B12, positive intrinsic factor antibodies.',
      'Peptic ulcer disease: H. pylori positive in most cases.',
      'Zollinger-Ellison: gastrin ↑, multiple ulcers.'
    ],
    parts: {
      'cardia': {
        name: 'Cardia',
        desc: 'Where the esophagus meets the stomach.',
        mls: {
          tests: ['H. pylori CLO test', 'H. pylori stool antigen'],
          clinical: ['GERD', 'Cardia cancer', 'Hiatal hernia'],
          examTip: 'Barrett esophagus is a complication of chronic GERD, diagnosed by intestinal metaplasia on biopsy.'
        }
      },
      'fundus': {
        name: 'Fundus',
        desc: 'The upper part of the stomach.',
        mls: {
          tests: ['Gastric acid analysis (rarely used)'],
          clinical: ['Gastric volvulus', 'Fundic gland polyps'],
          examTip: 'Gastric volvulus is a surgical emergency presenting with Borchardt triad: severe epigastric pain, retching without vomiting, and inability to pass an NG tube.'
        }
      },
      'body': {
        name: 'Body',
        desc: 'Main central region of the stomach.',
        mls: {
          tests: ['Gastrin level', 'H. pylori testing'],
          clinical: ['Gastric ulcer', 'Gastric adenocarcinoma'],
          examTip: 'Gastric adenocarcinoma is associated with H. pylori infection and dietary nitrosamines.'
        }
      },
      'pylorus': {
        name: 'Pylorus',
        desc: 'The valve regulating passage to the small intestine.',
        mls: {
          tests: ['Abdominal ultrasound', 'Upper GI series'],
          clinical: ['Pyloric stenosis', 'Gastric outlet obstruction'],
          examTip: 'Pyloric stenosis presents in infants with projectile non-bilious vomiting and a palpable olive-shaped mass.'
        }
      }
    }
  },

  pancreas: {
    name: 'Pancreas',
    latin: 'Pancreas',
    icon: '🥑',
    color: '#1abc9c',
    tagline: 'The dual-action digestive and endocrine gland.',
    description: 'Glandular organ behind the stomach, secreting digestive enzymes and hormones.',
    function: 'Digestion (exocrine) and blood sugar regulation (endocrine)',
    location: 'Behind the stomach',
    size: '15–20 cm long',
    weight: '70–100 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Acinar cells and Islets of Langerhans',
    note: 'Contains both exocrine (digestive) and endocrine (hormonal) tissue.',
    quickFacts: [
      'Lipase is more specific than amylase for pancreatitis and stays elevated longer.',
      'CA 19-9 is a tumor marker for pancreatic cancer.',
      'HbA1c reflects 3-month average blood glucose.'
    ],
    clinicalPearls: [
      'Acute pancreatitis: amylase/lipase ↑↑ (lipase more specific).',
      'Chronic pancreatitis: fecal elastase ↓, steatorrhea.',
      'Diabetes mellitus: fasting glucose ≥126 mg/dL, HbA1c ≥6.5%.'
    ],
    parts: {
      'head': {
        name: 'Head',
        desc: 'The broad part near the duodenum.',
        mls: {
          tests: ['Lipase', 'Amylase', 'CA 19-9', 'Bilirubin'],
          clinical: ['Pancreatic cancer', 'Acute pancreatitis', 'Obstructive jaundice'],
          examTip: 'A painless, palpable gallbladder (Courvoisier sign) suggests malignant obstruction of the distal common bile duct.'
        }
      },
      'body': {
        name: 'Body',
        desc: 'The central section.',
        mls: {
          tests: ['Lipase', 'Amylase', 'Fecal elastase'],
          clinical: ['Chronic pancreatitis', 'Pancreatic pseudocyst'],
          examTip: 'Fecal elastase <200 µg/g is indicative of exocrine pancreatic insufficiency.'
        }
      },
      'tail': {
        name: 'Tail',
        desc: 'The narrow end near the spleen.',
        mls: {
          tests: ['Serum glucose', 'HbA1c'],
          clinical: ['Pancreatic pseudocyst', 'Diabetes mellitus'],
          examTip: 'Tumors in the tail of the pancreas often present late and may cause diabetes.'
        }
      },
      'islets': {
        name: 'Islets of Langerhans',
        desc: 'Clusters of endocrine cells secreting insulin, glucagon, and somatostatin.',
        mls: {
          tests: ['Insulin', 'C-peptide', 'Glucagon', 'HbA1c'],
          clinical: ['Diabetes mellitus', 'Insulinoma', 'Glucagonoma'],
          examTip: 'C-peptide is a marker of endogenous insulin production and is low in type 1 diabetes.'
        }
      }
    }
  },

  spleen: {
    name: 'Spleen',
    latin: 'Splen',
    icon: '🟤',
    color: '#27ae60',
    tagline: 'The blood filter and immune sentinel.',
    description: 'Blood-filtering organ that also plays a role in the immune system.',
    function: 'Filters blood, recycles iron, fights infection, removes old RBCs',
    location: 'Upper left abdomen',
    size: 'About 12 cm long',
    weight: '150 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Red and white pulp',
    note: 'Involved in removing old red blood cells from circulation.',
    quickFacts: [
      'Post-splenectomy: Howell-Jolly bodies, target cells, thrombocytosis.',
      'Asplenic patients are at high risk for encapsulated bacteria (S. pneumoniae, H. influenzae, N. meningitidis).',
      'Splenomegaly can cause pancytopenia due to sequestration.'
    ],
    clinicalPearls: [
      'Hypersplenism: pancytopenia, often with an underlying cause (e.g., portal hypertension, lymphoma).',
      'Splenic rupture: acute hemorrhage, Kehr sign (left shoulder pain).',
      'Sickle cell sequestration crisis: painful splenic enlargement, falling hemoglobin.'
    ],
    parts: {
      'red pulp': {
        name: 'Red Pulp',
        desc: 'Filters blood and removes old RBCs.',
        mls: {
          tests: ['CBC with peripheral smear', 'Howell-Jolly bodies', 'Reticulocyte count'],
          clinical: ['Splenomegaly', 'Hypersplenism', 'Splenic sequestration'],
          examTip: 'Howell-Jolly bodies are a sign of functional asplenia.'
        }
      },
      'white pulp': {
        name: 'White Pulp',
        desc: 'Lymphoid tissue for immune response.',
        mls: {
          tests: ['Flow cytometry', 'Immunoglobulin levels'],
          clinical: ['Lymphoma', 'Immunodeficiency', 'Autoimmune cytopenias'],
          examTip: 'The spleen is a major site of antibody production; asplenic patients have reduced opsonin levels.'
        }
      },
      'hilum': {
        name: 'Hilum',
        desc: 'Where blood vessels enter and exit.',
        mls: {
          tests: ['Doppler ultrasound', 'CT abdomen'],
          clinical: ['Splenic infarction', 'Splenic artery aneurysm'],
          examTip: 'Splenic infarction causes left upper quadrant pain and may be seen on CT as a wedge-shaped defect.'
        }
      }
    }
  }
};