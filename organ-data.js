// organ-data.js
window.ORGAN_DATA = {
  heart: {
    name: 'Heart', latin: 'Cor', icon: '🫀', color: '#e74c3c',
    tagline: 'The relentless pump that never rests.',
    description: 'A four-chambered muscular pump that generates the pressure gradient driving pulmonary and systemic circulation.',
    function: 'Blood circulation, oxygen and nutrient delivery',
    location: 'Middle mediastinum, center-left chest',
    size: 'About the size of a fist', weight: '250–350 g',
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
      'aorta': { name: 'Aorta', desc: 'Main artery leaving the heart.', mls: 'Lipid profile, hs-CRP. Aortic aneurysm, dissection.' },
      'left atrium': { name: 'Left Atrium', desc: 'Receives oxygen-rich blood from lungs.', mls: 'BNP/NT-proBNP. Mitral stenosis, atrial fibrillation.' },
      'right atrium': { name: 'Right Atrium', desc: 'Receives oxygen-poor blood from body.', mls: 'CVP monitoring. Tricuspid regurgitation, right heart failure.' },
      'left ventricle': { name: 'Left Ventricle', desc: 'Pumps blood to entire body.', mls: 'Troponin, CK-MB, BNP. Myocardial infarction, hypertrophic cardiomyopathy.' },
      'right ventricle': { name: 'Right Ventricle', desc: 'Pumps blood to the lungs.', mls: 'D-dimer, ABG. Pulmonary embolism, cor pulmonale.' }
    }
  },
  brain: {
    name: 'Brain', latin: 'Encephalon', icon: '🧠', color: '#f6c445',
    tagline: 'The command center of the nervous system.',
    description: 'Central organ of the nervous system, responsible for thought, memory, sensory processing, and motor control.',
    function: 'Cognition, sensory processing, motor control, homeostasis',
    location: 'Cranial cavity', size: 'About 15 cm long', weight: '1.3–1.4 kg',
    bloodSupply: 'Internal carotid and vertebral arteries',
    tissue: 'Nervous tissue (neurons and glia)',
    note: 'The brain uses about 20% of the body’s total oxygen and calories.',
    quickFacts: ['CSF glucose is normally ~60% of serum glucose.', 'A CSF:serum glucose ratio <0.4 strongly suggests bacterial meningitis.', 'Oligoclonal bands in CSF are a marker for multiple sclerosis.'],
    clinicalPearls: ['Bacterial meningitis: high PMNs, low glucose, high protein.', 'Viral meningitis: lymphocytosis, normal glucose.', 'Subarachnoid hemorrhage: uniformly blood-stained CSF, xanthochromia.'],
    parts: {
      'cerebrum': { name: 'Cerebrum', desc: 'Largest part; higher functions.', mls: 'CSF cell count, protein, glucose, lactate. Meningitis, encephalitis.' },
      'cerebellum': { name: 'Cerebellum', desc: 'Coordinates movement and balance.', mls: 'CSF oligoclonal bands, MRI. Ataxia, multiple sclerosis.' },
      'brainstem': { name: 'Brainstem', desc: 'Controls basic life functions.', mls: 'CSF Gram stain, lactate. Brainstem stroke, brain death evaluation.' },
      'hypothalamus': { name: 'Hypothalamus', desc: 'Regulates hormones and temperature.', mls: 'TSH, ACTH, ADH, cortisol. Diabetes insipidus, SIADH.' },
      'pituitary': { name: 'Pituitary Gland', desc: 'The "master" endocrine gland.', mls: 'Prolactin, GH, FSH, LH, TSH, ACTH. Prolactinoma, acromegaly, Cushing disease.' }
    }
  },
  lungs: {
    name: 'Lungs', latin: 'Pulmones', icon: '🫁', color: '#3498db',
    tagline: 'The gateway for gas exchange.',
    description: 'Pair of spongy, air-filled organs located on either side of the chest.',
    function: 'Gas exchange, acid-base balance',
    location: 'Thoracic cavity', size: 'About 25–30 cm tall', weight: '1.0–1.2 kg combined',
    bloodSupply: 'Pulmonary and bronchial arteries',
    tissue: 'Alveolar epithelium',
    note: 'The surface area of the lungs is roughly equal to a tennis court.',
    quickFacts: ['ABG analysis is the gold standard for assessing oxygenation and ventilation.', 'A good sputum specimen has >25 PMNs and <10 squamous epithelial cells per low-power field.', 'D-dimer is sensitive but not specific for pulmonary embolism.'],
    clinicalPearls: ['Respiratory acidosis: low pH, high pCO2. Respiratory alkalosis: high pH, low pCO2.', 'Pleural fluid pH <7.2 suggests complicated parapneumonic effusion or empyema.', 'ADA >40 U/L in pleural fluid is suggestive of tuberculous pleurisy.'],
    parts: {
      'trachea': { name: 'Trachea', desc: 'The windpipe carrying air to the bronchi.', mls: 'Sputum culture, AFB smear, ABG. Tracheitis, foreign-body aspiration.' },
      'bronchi': { name: 'Bronchi', desc: 'Major air passages branching into the lungs.', mls: 'Sputum Gram stain, culture, AFB smear. Bronchitis, bronchiectasis.' },
      'alveoli': { name: 'Alveoli', desc: 'Tiny air sacs where gas exchange occurs.', mls: 'Arterial blood gas (pO2, pCO2, pH), DLCO. Emphysema, ARDS, pulmonary fibrosis.' },
      'left lung': { name: 'Left Lung', desc: 'Has two lobes to accommodate the heart.', mls: 'Pleural fluid analysis (pH, LDH, glucose), culture. Pleural effusion, pneumothorax.' },
      'right lung': { name: 'Right Lung', desc: 'Has three lobes.', mls: 'Pleural fluid ADA, pleural biopsy. Tuberculous pleurisy, pneumothorax.' }
    }
  },
  liver: {
    name: 'Liver', latin: 'Hepar', icon: '🫀', color: '#8e44ad',
    tagline: 'The body’s chemical factory.',
    description: 'A large, meaty organ that sits on the right side of the belly.',
    function: 'Metabolism, detoxification, bile production, synthesis of clotting factors and albumin',
    location: 'Right upper quadrant of abdomen', size: 'About 15 cm thick', weight: '1.4–1.6 kg',
    bloodSupply: 'Hepatic artery and portal vein',
    tissue: 'Hepatocytes',
    note: 'The liver is the only internal organ that can fully regenerate itself.',
    quickFacts: ['AST:ALT ratio >2 suggests alcoholic liver disease.', 'ALT >1000 U/L is typical of acute viral hepatitis.', 'Prolonged PT/INR in liver disease reflects synthetic dysfunction.'],
    clinicalPearls: ['Hepatocellular pattern: ALT/AST ↑↑, ALP ↑.', 'Cholestatic pattern: ALP/GGT ↑↑, bilirubin ↑.', 'Cirrhosis: low albumin, prolonged PT/INR, thrombocytopenia.'],
    parts: {
      'right lobe': { name: 'Right Lobe', desc: 'The larger of the two main lobes.', mls: 'ALT, AST, ALP, bilirubin, albumin, PT/INR. Hepatitis, cirrhosis, HCC.' },
      'left lobe': { name: 'Left Lobe', desc: 'The smaller lobe extending across the midline.', mls: 'Ammonia, albumin, PT/INR. Hepatic encephalopathy, portal hypertension.' },
      'gallbladder': { name: 'Gallbladder', desc: 'Stores bile produced by the liver.', mls: 'Direct bilirubin, GGT, ALP, ultrasound. Cholelithiasis, cholecystitis, choledocholithiasis.' },
      'portal vein': { name: 'Portal Vein', desc: 'Carries nutrient-rich blood from the gut to the liver.', mls: 'Platelet count, Doppler ultrasound, endoscopy. Portal hypertension, esophageal varices.' }
    }
  },
  kidneys: {
    name: 'Kidneys', latin: 'Renes', icon: '🫘', color: '#e67e22',
    tagline: 'The master filters of the blood.',
    description: 'Bean-shaped organs that filter blood and produce urine.',
    function: 'Filtration, fluid balance, blood pressure regulation, erythropoietin production',
    location: 'Retroperitoneum, posterior abdominal wall', size: 'About 10–12 cm long', weight: '125–170 g each',
    bloodSupply: 'Renal arteries',
    tissue: 'Nephrons',
    note: 'The kidneys filter about 180 liters of blood every day.',
    quickFacts: ['Pre-renal AKI: BUN:creatinine >20:1 with concentrated urine.', 'Intrinsic AKI: muddy brown casts, isosthenuria.', 'eGFR is calculated from serum creatinine.'],
    clinicalPearls: ['Nephrotic syndrome: proteinuria >3.5 g/day, oval fat bodies, hypoalbuminemia.', 'Nephritic syndrome: hematuria, RBC casts, hypertension.', 'Renal tubular acidosis: normal anion gap metabolic acidosis.'],
    parts: {
      'cortex': { name: 'Renal Cortex', desc: 'Outer layer where glomerular filtration occurs.', mls: 'Serum creatinine, BUN, eGFR, urinalysis. Glomerulonephritis, acute tubular necrosis.' },
      'medulla': { name: 'Renal Medulla', desc: 'Inner section containing the Loop of Henle.', mls: 'Urine specific gravity, osmolality. Acute tubular necrosis, medullary sponge kidney.' },
      'pelvis': { name: 'Renal Pelvis', desc: 'Funnel-shaped cavity collecting urine.', mls: 'Urinalysis, urine culture, CT urogram. Hydronephrosis, renal stones, pyelonephritis.' },
      'ureter': { name: 'Ureter', desc: 'Tube carrying urine to the bladder.', mls: 'Urinalysis (RBCs), CT non-contrast. Ureteral colic, stricture, obstruction.' }
    }
  },
  stomach: {
    name: 'Stomach', latin: 'Gaster', icon: '🫃', color: '#f39c12',
    tagline: 'The acidic digestion chamber.',
    description: 'Muscular organ that breaks down food using acid and enzymes.',
    function: 'Digestion, intrinsic factor secretion, acid production',
    location: 'Upper left abdomen', size: '25 cm long', weight: 'Varies',
    bloodSupply: 'Left and right gastric arteries',
    tissue: 'Gastric mucosa',
    note: 'Produces hydrochloric acid and intrinsic factor.',
    quickFacts: ['H. pylori is diagnosed by rapid urease (CLO) test, stool antigen, or urea breath test.', 'Intrinsic factor deficiency causes pernicious anemia.', 'Gastrin levels are elevated in Zollinger-Ellison syndrome.'],
    clinicalPearls: ['Pernicious anemia: macrocytic anemia, low B12, positive intrinsic factor antibodies.', 'Peptic ulcer disease: H. pylori positive in most cases.', 'Zollinger-Ellison: gastrin ↑, multiple ulcers.'],
    parts: {
      'cardia': { name: 'Cardia', desc: 'Where the esophagus meets the stomach.', mls: 'H. pylori CLO test, stool antigen. GERD, cardia cancer.' },
      'fundus': { name: 'Fundus', desc: 'The upper part of the stomach.', mls: 'Gastric acid analysis (rarely used). Gastric volvulus, fundic gland polyps.' },
      'body': { name: 'Body', desc: 'Main central region of the stomach.', mls: 'Gastrin level, H. pylori testing. Gastric ulcer, gastric adenocarcinoma.' },
      'pylorus': { name: 'Pylorus', desc: 'Valve regulating passage to small intestine.', mls: 'Abdominal ultrasound, upper GI series. Pyloric stenosis, gastric outlet obstruction.' }
    }
  },
  pancreas: {
    name: 'Pancreas', latin: 'Pancreas', icon: '🥑', color: '#1abc9c',
    tagline: 'The dual-action digestive and endocrine gland.',
    description: 'Glandular organ behind the stomach, secreting digestive enzymes and hormones.',
    function: 'Digestion (exocrine) and blood sugar regulation (endocrine)',
    location: 'Behind the stomach', size: '15–20 cm long', weight: '70–100 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Acinar cells and Islets of Langerhans',
    note: 'Contains both exocrine (digestive) and endocrine (hormonal) tissue.',
    quickFacts: ['Lipase is more specific than amylase for pancreatitis and stays elevated longer.', 'CA 19-9 is a tumor marker for pancreatic cancer.', 'HbA1c reflects 3-month average blood glucose.'],
    clinicalPearls: ['Acute pancreatitis: amylase/lipase ↑↑ (lipase more specific).', 'Chronic pancreatitis: fecal elastase ↓, steatorrhea.', 'Diabetes mellitus: fasting glucose ≥126 mg/dL, HbA1c ≥6.5%.'],
    parts: {
      'head': { name: 'Head', desc: 'Broad part near the duodenum.', mls: 'Lipase, amylase, CA 19-9, bilirubin. Pancreatic cancer, acute pancreatitis.' },
      'body': { name: 'Body', desc: 'The central section.', mls: 'Lipase, amylase, fecal elastase. Chronic pancreatitis, pseudocyst.' },
      'tail': { name: 'Tail', desc: 'Narrow end near the spleen.', mls: 'Serum glucose, HbA1c. Pancreatic pseudocyst, diabetes mellitus.' },
      'islets': { name: 'Islets of Langerhans', desc: 'Clusters of endocrine cells.', mls: 'Insulin, C-peptide, glucagon, HbA1c. Diabetes mellitus, insulinoma, glucagonoma.' }
    }
  },
  spleen: {
    name: 'Spleen', latin: 'Splen', icon: '🟤', color: '#27ae60',
    tagline: 'The blood filter and immune sentinel.',
    description: 'Blood-filtering organ that also plays a role in the immune system.',
    function: 'Filters blood, recycles iron, fights infection, removes old RBCs',
    location: 'Upper left abdomen', size: 'About 12 cm long', weight: '150 g',
    bloodSupply: 'Splenic artery',
    tissue: 'Red and white pulp',
    note: 'Involved in removing old red blood cells from circulation.',
    quickFacts: ['Post-splenectomy: Howell-Jolly bodies, target cells, thrombocytosis.', 'Asplenic patients are at high risk for encapsulated bacteria (S. pneumoniae, H. influenzae, N. meningitidis).', 'Splenomegaly can cause pancytopenia due to sequestration.'],
    clinicalPearls: ['Hypersplenism: pancytopenia, often with an underlying cause (e.g., portal hypertension, lymphoma).', 'Splenic rupture: acute hemorrhage, Kehr sign (left shoulder pain).', 'Sickle cell sequestration crisis: painful splenic enlargement, falling hemoglobin.'],
    parts: {
      'red pulp': { name: 'Red Pulp', desc: 'Filters blood and removes old RBCs.', mls: 'CBC, peripheral smear, Howell-Jolly bodies, reticulocyte count. Splenomegaly, hypersplenism.' },
      'white pulp': { name: 'White Pulp', desc: 'Lymphoid tissue for immune response.', mls: 'Flow cytometry, immunoglobulin levels. Lymphoma, immunodeficiency.' },
      'hilum': { name: 'Hilum', desc: 'Where blood vessels enter and exit.', mls: 'Doppler ultrasound, CT abdomen. Splenic infarction, splenic artery aneurysm.' }
    }
  },
  thyroid: {
    name: 'Thyroid', latin: 'Glandula thyroidea', icon: '🦋', color: '#e67e22',
    tagline: 'The butterfly-shaped metabolic regulator.',
    description: 'A butterfly-shaped gland in the neck that produces hormones regulating metabolism.',
    function: 'Produces thyroxine (T4) and triiodothyronine (T3), regulates basal metabolic rate',
    location: 'Anterior neck, below the larynx', size: 'About 5 cm wide', weight: '25–30 g',
    bloodSupply: 'Superior and inferior thyroid arteries',
    tissue: 'Follicular cells and parafollicular C cells',
    note: 'The thyroid is the only endocrine gland that stores its hormones in large quantities.',
    quickFacts: ['TSH is the most sensitive first-line test for primary thyroid disease.', 'Anti-TPO antibodies are positive in Hashimoto thyroiditis.', 'Calcitonin is a tumor marker for medullary thyroid carcinoma.'],
    clinicalPearls: ['Primary hypothyroidism: TSH ↑, free T4 ↓.', 'Hyperthyroidism (Graves): TSH ↓, free T4/T3 ↑.', 'Hashimoto thyroiditis: anti-TPO ↑, lymphocytic infiltration.'],
    parts: {
      'right lobe': { name: 'Right Lobe', desc: 'The larger lobe on the right side.', mls: 'TSH, free T4, anti-TPO. Thyroid nodules, goiter.' },
      'left lobe': { name: 'Left Lobe', desc: 'The lobe on the left side.', mls: 'TSH, free T4, thyroglobulin. Thyroid cancer, multinodular goiter.' },
      'isthmus': { name: 'Isthmus', desc: 'Connects the two lobes.', mls: 'Fine-needle aspiration (FNA) biopsy. Papillary thyroid carcinoma.' },
      'parathyroid': { name: 'Parathyroid Glands', desc: 'Four small glands on the posterior surface.', mls: 'PTH, calcium, phosphate. Hyperparathyroidism, hypoparathyroidism.' }
    }
  },
  thymus: {
    name: 'Thymus', latin: 'Thymus', icon: '🛡️', color: '#9b59b6',
    tagline: 'The training ground for T lymphocytes.',
    description: 'Primary lymphoid organ where T lymphocytes mature and undergo selection.',
    function: 'T-cell maturation, immune system development',
    location: 'Anterior mediastinum, behind the sternum', size: 'Largest in childhood, involutes after puberty', weight: 'Varies with age',
    bloodSupply: 'Internal thoracic arteries',
    tissue: 'Lymphoid tissue with Hassall corpuscles',
    note: 'The thymus is largest relative to body size in infancy and gradually shrinks after puberty.',
    quickFacts: ['DiGeorge syndrome (22q11 deletion) causes thymic aplasia and T-cell deficiency.', 'Thymoma is associated with myasthenia gravis.', 'Hassall corpuscles are a histological hallmark of the thymus.'],
    clinicalPearls: ['DiGeorge syndrome: low T cells, hypocalcemia, cardiac defects.', 'Myasthenia gravis: anti-acetylcholine receptor antibodies, thymic hyperplasia or thymoma.', 'Thymoma: anterior mediastinal mass, may cause pure red cell aplasia.'],
    parts: {
      'cortex': { name: 'Cortex', desc: 'Outer region where T cells undergo positive selection.', mls: 'Flow cytometry (T-cell subsets). T-cell deficiency, DiGeorge syndrome.' },
      'medulla': { name: 'Medulla', desc: 'Inner region with Hassall corpuscles.', mls: 'Histology (Hassall corpuscles). Thymoma, thymic hyperplasia.' },
      'hassall': { name: 'Hassall Corpuscles', desc: 'Concentric whorls of epithelial cells.', mls: 'Histology. Marker of thymic tissue, especially in thymoma.' }
    }
  },
  'female reproductive system': {
    name: 'Female Reproductive System', latin: 'Systema genitale femininum', icon: '♀️', color: '#e84393',
    tagline: 'The complex system of reproduction and hormonal regulation.',
    description: 'Internal and external organs involved in reproduction, hormone production, and fetal development.',
    function: 'Gamete production, hormone secretion, fertilization, fetal development',
    location: 'Pelvic cavity', size: 'Varies by organ', weight: 'Varies by organ',
    bloodSupply: 'Uterine, ovarian, and vaginal arteries',
    tissue: 'Endometrium, myometrium, ovarian follicles',
    note: 'The ovaries produce both gametes (eggs) and hormones (estrogen, progesterone).',
    quickFacts: ['hCG is the biomarker for pregnancy, detectable as early as 6–8 days post-conception.', 'CA-125 is a tumor marker for ovarian cancer.', 'Pap smear screens for cervical cancer by detecting HPV-related changes.'],
    clinicalPearls: ['Ectopic pregnancy: hCG positive, ultrasound shows no intrauterine pregnancy.', 'Ovarian cancer: CA-125 ↑, often diagnosed at an advanced stage.', 'Cervical cancer: HPV 16 and 18 are the highest-risk types.'],
    parts: {
      'ovary': { name: 'Ovary', desc: 'Produces eggs and hormones (estrogen, progesterone).', mls: 'hCG, CA-125, FSH, LH, estradiol. Ovarian cancer, PCOS.' },
      'uterus': { name: 'Uterus', desc: 'Site of fetal development.', mls: 'hCG, Pap smear, endometrial biopsy. Endometrial cancer, fibroids.' },
      'cervix': { name: 'Cervix', desc: 'Lower part of the uterus opening into the vagina.', mls: 'Pap smear, HPV DNA test. Cervical cancer, cervical dysplasia.' },
      'fallopian tube': { name: 'Fallopian Tube', desc: 'Site of fertilization.', mls: 'hCG, ultrasound. Ectopic pregnancy, tubal blockage.' },
      'vagina': { name: 'Vagina', desc: 'Birth canal and copulatory organ.', mls: 'Vaginal swab, wet mount, pH. Bacterial vaginosis, candidiasis, trichomoniasis.' }
    }
  },
  bladder: {
    name: 'Urinary Bladder', latin: 'Vesica urinaria', icon: '💧', color: '#3498db',
    tagline: 'The muscular reservoir for urine.',
    description: 'A hollow, muscular organ that stores urine before micturition.',
    function: 'Urine storage and expulsion',
    location: 'Pelvic cavity, behind the pubic symphysis', size: 'About 5 cm when empty', weight: 'Varies with filling',
    bloodSupply: 'Superior and inferior vesical arteries',
    tissue: 'Transitional epithelium (urothelium) and detrusor muscle',
    note: 'The bladder can hold about 400–600 mL of urine before the urge to void becomes strong.',
    quickFacts: ['Urinalysis is the first-line test for bladder infection (UTI).', 'Urine cytology is used to screen for urothelial carcinoma.', 'A midstream clean-catch specimen is preferred for culture.'],
    clinicalPearls: ['UTI: E. coli is the most common cause, diagnosed by urine culture.', 'Urothelial carcinoma: painless hematuria, diagnosed by cytology and cystoscopy.', 'Interstitial cystitis: chronic pelvic pain, negative cultures.'],
    parts: {
      'detrusor': { name: 'Detrusor Muscle', desc: 'Smooth muscle layer that contracts during urination.', mls: 'Urodynamic studies. Detrusor overactivity, urinary retention.' },
      'trigone': { name: 'Trigone', desc: 'Triangular area between the ureters and urethra.', mls: 'Urine culture, cytology. Trigonitis, bladder cancer.' },
      'urothelium': { name: 'Urothelium', desc: 'Transitional epithelium lining the bladder.', mls: 'Urine cytology. Urothelial carcinoma, cystitis.' },
      'urethra': { name: 'Urethra', desc: 'Tube that carries urine out of the body.', mls: 'Urinalysis, urine culture. UTI, urethral stricture.' }
    }
  }
};