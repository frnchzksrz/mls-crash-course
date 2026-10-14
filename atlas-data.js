// atlas-data.js — MLS Crash Course Image Atlas
// Add entries by adding objects to the `entries` array.
// image: path relative to project root. If the file is missing, a placeholder shows.

window.ATLAS_DATA = {
  hematology: {
    label: 'Hematology',
    icon: '🩸',
    description: 'Peripheral blood smear morphology — RBCs, WBCs, and platelets.',
    entries: [
      {
        id: 'normal-rbc',
        title: 'Normal Red Blood Cell',
        image: 'assets/atlas/hematology/normal-rbc.jpg',
        tags: ['RBC', 'normal'],
        features: [
          'Biconcave disc shape on smear',
          'Central area of pallor ~1/3 of cell diameter',
          'Diameter 6-8 µm',
          'Uniform pink-orange color on Wright stain'
        ],
        associated: ['Normal peripheral blood']
      },
      {
        id: 'target-cell',
        title: 'Target Cell (Codocyte)',
        image: 'assets/atlas/hematology/target-cell.jpg',
        tags: ['RBC', 'abnormal'],
        features: [
          'Bullseye appearance with central hemoglobin dot',
          'Ring of pallor between central dot and outer rim',
          'Thin, flattened "bell-shaped" on wet prep'
        ],
        associated: ['Thalassemia', 'Liver disease', 'Post-splenectomy', 'HbC disease', 'Iron deficiency (occasional)']
      },
      {
        id: 'sickle-cell',
        title: 'Sickle Cell (Drepanocyte)',
        image: 'assets/atlas/hematology/sickle-cell.jpg',
        tags: ['RBC', 'abnormal', 'hemoglobinopathy'],
        features: [
          'Crescent or banana shape',
          'Pointed ends',
          'Rigid, non-deformable membrane'
        ],
        associated: ['Sickle cell anemia (HbSS)', 'Sickle cell trait (rare)', 'Any sickling hemoglobinopathy']
      },
      {
        id: 'spherocyte',
        title: 'Spherocyte',
        image: 'assets/atlas/hematology/spherocyte.jpg',
        tags: ['RBC', 'abnormal'],
        features: [
          'Perfectly round, no central pallor',
          'Smaller than normal RBC',
          'Darker color (higher MCHC)',
          'Hyperchromic on smear'
        ],
        associated: ['Hereditary spherocytosis', 'ABO HDFN', 'Autoimmune hemolytic anemia', 'Burns']
      },
      {
        id: 'schistocyte',
        title: 'Schistocyte (Fragmented Cell)',
        image: 'assets/atlas/hematology/schistocyte.jpg',
        tags: ['RBC', 'abnormal', 'hemolysis'],
        features: [
          'Fragmented RBC: helmet cells, triangle cells, bite cells',
          'Irregular shape with sharp edges',
          'Variable size'
        ],
        associated: ['Microangiopathic hemolytic anemia', 'TTP/HUS', 'DIC', 'Prosthetic heart valve', 'March hemoglobinuria']
      },
      {
        id: 'ovalocyte',
        title: 'Elliptocyte (Ovalocyte)',
        image: 'assets/atlas/hematology/ovalocyte.jpg',
        tags: ['RBC', 'abnormal'],
        features: [
          'Oval or cigar-shaped',
          'Smooth, regular outline',
          'Central pallor often preserved'
        ],
        associated: ['Hereditary elliptocytosis', 'Iron deficiency (pencil cells)', 'Thalassemia', 'Megaloblastic anemia']
      },
      {
        id: 'stomatocyte',
        title: 'Stomatocyte',
        image: 'assets/atlas/hematology/stomatocyte.jpg',
        tags: ['RBC', 'abnormal'],
        features: [
          'Slit-like or "mouth-shaped" central pallor',
          'Uni- or bipolar central linear pallor'
        ],
        associated: ['Hereditary stomatocytosis', 'Liver disease', 'Rh null phenotype', 'Artifact from slide prep']
      },
      {
        id: 'basophilic-stippling',
        title: 'Basophilic Stippling',
        image: 'assets/atlas/hematology/basophilic-stippling.jpg',
        tags: ['RBC', 'inclusion', 'abnormal'],
        features: [
          'Multiple blue-purple granules in RBC cytoplasm',
          'Aggregates of ribosomal RNA',
          'Evenly distributed'
        ],
        associated: ['Lead poisoning', 'Thalassemia', 'Sideroblastic anemia', 'Megaloblastic anemia', 'Alcoholism']
      },
      {
        id: 'howell-jolly',
        title: 'Howell-Jolly Body',
        image: 'assets/atlas/hematology/howell-jolly.jpg',
        tags: ['RBC', 'inclusion'],
        features: [
          'Single, dense, round blue-purple inclusion',
          'Nuclear remnant (DNA)',
          'Usually one per cell',
          'Often near cell membrane'
        ],
        associated: ['Post-splenectomy', 'Megaloblastic anemia', 'Hemolytic anemia', 'Functional asplenia (sickle cell)']
      },
      {
        id: 'pappenheimer',
        title: 'Pappenheimer Body',
        image: 'assets/atlas/hematology/pappenheimer.jpg',
        tags: ['RBC', 'inclusion'],
        features: [
          'Small, irregular blue-purple granules',
          'Clustered near periphery of RBC',
          'Iron-containing (siderotic) granules'
        ],
        associated: ['Sideroblastic anemia', 'Post-splenectomy', 'Hemolytic anemia']
      },
      {
        id: 'heinz-body',
        title: 'Heinz Body',
        image: 'assets/atlas/hematology/heinz-body.jpg',
        tags: ['RBC', 'inclusion'],
        features: [
          'Denatured hemoglobin (requires supravital stain)',
          'Round refractile granules on crystal violet',
          'Not visible on Wright stain',
          'Permanent; "bite cells" seen on Wright'
        ],
        associated: ['G6PD deficiency', 'Unstable hemoglobinopathy', 'Oxidative drug exposure', 'Toxic exposure']
      },
      {
        id: 'segmented-neutrophil',
        title: 'Segmented Neutrophil',
        image: 'assets/atlas/hematology/segmented-neutrophil.jpg',
        tags: ['WBC', 'normal'],
        features: [
          'Nucleus has 2-5 lobes connected by thin filaments',
          'Cytoplasm pale pink-blue',
          'Fine granules',
          'Diameter 10-15 µm',
          '50-70% of peripheral WBCs'
        ],
        associated: ['Normal differential']
      },
      {
        id: 'band-neutrophil',
        title: 'Band Neutrophil',
        image: 'assets/atlas/hematology/band-neutrophil.jpg',
        tags: ['WBC', 'immature'],
        features: [
          'Nucleus is unsegmented, horseshoe or U-shaped',
          'Uniform thickness throughout',
          'No filament between lobes',
          '0-5% of peripheral WBCs'
        ],
        associated: ['Left shift', 'Bacterial infection', 'Acute inflammation']
      },
      {
        id: 'hypersegmented-neutrophil',
        title: 'Hypersegmented Neutrophil',
        image: 'assets/atlas/hematology/hypersegmented-neutrophil.jpg',
        tags: ['WBC', 'abnormal'],
        features: [
          'Nucleus has 6 or more lobes',
          'Large cell',
          'Seen with impaired DNA synthesis'
        ],
        associated: ['Megaloblastic anemia (B12/folate deficiency)', 'Myelodysplastic syndrome', 'Chemotherapy']
      },
      {
        id: 'lymphocyte',
        title: 'Lymphocyte',
        image: 'assets/atlas/hematology/lymphocyte.jpg',
        tags: ['WBC', 'normal'],
        features: [
          'Round nucleus occupies ~90% of cell',
          'Dense, clumped chromatin',
          'Minimal pale blue cytoplasm',
          'Diameter 7-10 µm (small) or 10-15 µm (large)',
          '20-40% of peripheral WBCs'
        ],
        associated: ['Viral infection (atypical/reactive)', 'Chronic lymphocytic leukemia', 'Normal differential']
      },
      {
        id: 'monocyte',
        title: 'Monocyte',
        image: 'assets/atlas/hematology/monocyte.jpg',
        tags: ['WBC', 'normal'],
        features: [
          'Largest peripheral WBC (12-20 µm)',
          'Kidney-shaped, folded, or lobulated nucleus',
          'Abundant grey-blue cytoplasm',
          'Vacuoles common',
          '2-8% of peripheral WBCs'
        ],
        associated: ['Chronic infection', 'Tuberculosis', 'Monocytic leukemia', 'Normal differential']
      },
      {
        id: 'eosinophil',
        title: 'Eosinophil',
        image: 'assets/atlas/hematology/eosinophil.jpg',
        tags: ['WBC', 'normal'],
        features: [
          'Bilobed nucleus ("sunglasses")',
          'Prominent orange-red granules',
          'Granules fill cytoplasm',
          '1-4% of peripheral WBCs'
        ],
        associated: ['Allergic reactions', 'Parasitic infections', 'Eosinophilic leukemia', 'Hodgkin lymphoma']
      },
      {
        id: 'basophil',
        title: 'Basophil',
        image: 'assets/atlas/hematology/basophil.jpg',
        tags: ['WBC', 'normal'],
        features: [
          'Coarse dark blue-black granules',
          'Granules often obscure the nucleus',
          'Rare in peripheral blood',
          '0-1% of peripheral WBCs'
        ],
        associated: ['Chronic myeloid leukemia', 'Myeloproliferative neoplasms', 'Urticaria pigmentosa']
      },
      {
        id: 'blast-cell',
        title: 'Blast Cell',
        image: 'assets/atlas/hematology/blast-cell.jpg',
        tags: ['WBC', 'immature', 'leukemia'],
        features: [
          'Large cell with high N:C ratio',
          'Fine, delicate chromatin',
          'One or more prominent nucleoli',
          'Scant cytoplasm',
          'No granules (unless myeloblast with Auer rods)'
        ],
        associated: ['Acute leukemia (AML or ALL)', 'Blast crisis of CML']
      },
      {
        id: 'platelet',
        title: 'Platelet',
        image: 'assets/atlas/hematology/platelet.jpg',
        tags: ['platelet', 'normal'],
        features: [
          'Small (2-4 µm)',
          'Irregular shape',
          'Purple-blue with central granules',
          'Often seen clumped or singly'
        ],
        associated: ['Normal smear', 'Thrombocytosis', 'Thrombocytopenia', 'Platelet clumping (EDTA artifact)']
      }
    ]
  },
  'analysis-of-urine': {
    label: 'Urinalysis & Body Fluids',
    icon: '💧',
    description: 'Urinary sediment — cells, casts, and crystals.',
    entries: [
      {
        id: 'hyaline-cast',
        title: 'Hyaline Cast',
        image: 'assets/atlas/urinalysis/hyaline-cast.jpg',
        tags: ['cast', 'urine'],
        features: [
          'Colorless, transparent',
          'Cylindrical with rounded ends',
          'Low refractive index — often need reduced light to see',
          'Composed of Tamm-Horsfall mucoprotein'
        ],
        associated: ['Normal after exercise/dehydration', 'Nonspecific — any renal disease']
      },
      {
        id: 'rbc-cast',
        title: 'RBC Cast',
        image: 'assets/atlas/urinalysis/rbc-cast.jpg',
        tags: ['cast', 'urine', 'renal'],
        features: [
          'Cylindrical with RBCs embedded or on surface',
          'Orange-red to brown color',
          'Strongly indicates intratubular hemorrhage'
        ],
        associated: ['Glomerulonephritis', 'Glomerular bleeding', 'Lupus nephritis', 'Malignant hypertension']
      },
      {
        id: 'wbc-cast',
        title: 'WBC Cast',
        image: 'assets/atlas/urinalysis/wbc-cast.jpg',
        tags: ['cast', 'urine', 'renal'],
        features: [
          'Cylindrical with WBCs within the matrix',
          'Granular appearance due to degenerating cells',
          'Distinguishes upper from lower UTI'
        ],
        associated: ['Pyelonephritis', 'Interstitial nephritis', 'Acute kidney injury with inflammation']
      },
      {
        id: 'granular-cast',
        title: 'Granular Cast',
        image: 'assets/atlas/urinalysis/granular-cast.jpg',
        tags: ['cast', 'urine'],
        features: [
          'Cylindrical with granules in matrix',
          '"Coarsely" or "finely" granular',
          'Granules are degraded cellular debris'
        ],
        associated: ['Nonspecific tubular injury', 'Acute tubular necrosis', 'Chronic renal disease']
      },
      {
        id: 'waxy-cast',
        title: 'Waxy Cast',
        image: 'assets/atlas/urinalysis/waxy-cast.jpg',
        tags: ['cast', 'urine', 'renal'],
        features: [
          'Smooth, highly refractive',
          'Sharp, often broken edges',
          'Wax-like appearance',
          'Broad casts common'
        ],
        associated: ['Chronic renal failure', 'Advanced tubular atrophy', 'End-stage renal disease']
      },
      {
        id: 'calcium-oxalate-dihydrate',
        title: 'Calcium Oxalate Dihydrate Crystal',
        image: 'assets/atlas/urinalysis/calcium-oxalate-dihydrate.jpg',
        tags: ['crystal', 'urine'],
        features: [
          'Envelope or octahedral shape',
          'Colorless',
          'Birefringent',
          'Forms in acidic to neutral urine'
        ],
        associated: ['Ethylene glycol poisoning (classic)', 'Hyperoxaluria', 'Following renal stone episode']
      },
      {
        id: 'uric-acid-crystal',
        title: 'Uric Acid Crystal',
        image: 'assets/atlas/urinalysis/uric-acid-crystal.jpg',
        tags: ['crystal', 'urine'],
        features: [
          'Rhombic or barrel-shaped',
          'Yellow to reddish-brown',
          'Often in rosette clusters',
          'Forms in acidic urine (pH < 5.5)'
        ],
        associated: ['Gout', 'Hyperuricemia', 'Chemotherapy (tumor lysis)', 'Purine-rich diet']
      },
      {
        id: 'struvite-crystal',
        title: 'Struvite Crystal',
        image: 'assets/atlas/urinalysis/struvite-crystal.jpg',
        tags: ['crystal', 'urine'],
        features: [
          '"Coffin-lid" shape',
          'Colorless, birefringent',
          'Forms in alkaline urine (pH > 7)',
          'Also called triple phosphate'
        ],
        associated: ['Urease-producing organisms (Proteus, Klebsiella)', 'Struvite stones', 'Chronic UTI']
      },
      {
        id: 'cystine-crystal',
        title: 'Cystine Crystal',
        image: 'assets/atlas/urinalysis/cystine-crystal.jpg',
        tags: ['crystal', 'urine'],
        features: [
          'Hexagonal shape',
          'Colorless',
          'Hexagonal plate with equal sides',
          'Forms in acidic urine'
        ],
        associated: ['Cystinuria', 'Cystine stones']
      },
      {
        id: 'squamous-epithelial',
        title: 'Squamous Epithelial Cell',
        image: 'assets/atlas/urinalysis/squamous-epithelial.jpg',
        tags: ['cell', 'urine', 'contaminant'],
        features: [
          'Large, flat, irregular',
          'Abundant cytoplasm',
          'Small central nucleus',
          'Lines distal urethra and vagina'
        ],
        associated: ['Normal contaminant (especially in females)', 'Not clinically significant']
      },
      {
        id: 'transitional-epithelial',
        title: 'Transitional Epithelial Cell',
        image: 'assets/atlas/urinalysis/transitional-epithelial.jpg',
        tags: ['cell', 'urine'],
        features: [
          'Round to pear-shaped',
          'Smaller than squamous',
          'May have two nuclei',
          'Lines renal pelvis, ureter, bladder'
        ],
        associated: ['Normal if few', 'Increased in UTI', 'Urothelial carcinoma (if atypical)']
      },
      {
        id: 'renal-tubular-epithelial',
        title: 'Renal Tubular Epithelial Cell',
        image: 'assets/atlas/urinalysis/renal-tubular-epithelial.jpg',
        tags: ['cell', 'urine', 'renal'],
        features: [
          'Round to cuboidal',
          'Slightly larger than WBC',
          'Eccentric nucleus',
          'May have granules'
        ],
        associated: ['Acute tubular necrosis', 'Ischemic or toxic renal injury', 'Renal transplant rejection']
      },
      {
        id: 'yeast-cell',
        title: 'Yeast Cell',
        image: 'assets/atlas/urinalysis/yeast-cell.jpg',
        tags: ['cell', 'urine'],
        features: [
          'Oval to round',
          'Budding forms common',
          'Refractile',
          'Similar size to RBC but no biconcave center'
        ],
        associated: ['Candida UTI', 'Diabetes mellitus', 'Immunocompromised', 'Vaginal candidiasis']
      }
    ]
  },
  microbiology: {
    label: 'Microbiology',
    icon: '🦠',
    description: 'Colony morphology and Gram stain appearances.',
    entries: [
      {
        id: 'staph-aureus-colonies',
        title: 'Staphylococcus aureus — Blood Agar',
        image: 'assets/atlas/microbiology/staph-aureus-colonies.jpg',
        tags: ['bacteria', 'gram-positive'],
        features: [
          'Golden-yellow colonies',
          'Beta-hemolytic (clear zone)',
          'Gram-positive cocci in clusters',
          'Catalase + · Coagulase +'
        ],
        associated: ['Skin infections', 'Abscesses', 'Endocarditis', 'Toxic shock syndrome', 'MRSA']
      },
      {
        id: 'pseudomonas-colonies',
        title: 'Pseudomonas aeruginosa — Blood Agar',
        image: 'assets/atlas/microbiology/pseudomonas-colonies.jpg',
        tags: ['bacteria', 'gram-negative'],
        features: [
          'Blue-green pigment (pyocyanin)',
          'Grape-like or fruity odor',
          'Metallic sheen',
          'Gram-negative bacillus, oxidase +',
          'Grows at 42 °C'
        ],
        associated: ['Burn wounds', 'Puncture wounds', 'CF respiratory infections', 'Hospital-acquired infections']
      },
      {
        id: 'e-coli-macconkey',
        title: 'E. coli — MacConkey Agar',
        image: 'assets/atlas/microbiology/e-coli-macconkey.jpg',
        tags: ['bacteria', 'gram-negative', 'lactose-fermenter'],
        features: [
          'Bright pink colonies (lactose fermenter)',
          'Metallic green sheen on EMB',
          'Gram-negative bacillus',
          'Oxidase negative'
        ],
        associated: ['UTI', 'Diarrhea (ETEC, EHEC/O157:H7)', 'Neonatal meningitis']
      },
      {
        id: 'gram-positive-cocci-clusters',
        title: 'Gram-Positive Cocci in Clusters',
        image: 'assets/atlas/microbiology/gram-positive-cocci-clusters.jpg',
        tags: ['gram stain', 'gram-positive'],
        features: [
          'Purple-blue (gram-positive) cocci',
          'Arranged in grape-like clusters',
          'Suggests Staphylococcus species'
        ],
        associated: ['Staphylococcus aureus', 'Coagulase-negative staph (S. epi)']
      },
      {
        id: 'gram-negative-diplococci',
        title: 'Gram-Negative Diplococci',
        image: 'assets/atlas/microbiology/gram-negative-diplococci.jpg',
        tags: ['gram stain', 'gram-negative'],
        features: [
          'Pink-red (gram-negative) cocci',
          'Paired (diplococci)',
          'Kidney-bean shape',
          'Often intracellular (in neutrophils)'
        ],
        associated: ['Neisseria gonorrhoeae', 'Neisseria meningitidis', 'Moraxella catarrhalis']
      },
      {
        id: 'gram-positive-bacilli-spores',
        title: 'Gram-Positive Bacilli with Spores',
        image: 'assets/atlas/microbiology/gram-positive-bacilli-spores.jpg',
        tags: ['gram stain', 'gram-positive', 'spore'],
        features: [
          'Purple-blue bacilli',
          'Terminal or subterminal spores',
          'Spores appear clear (not stained)',
          'Drumstick appearance'
        ],
        associated: ['Clostridium species (tetani, perfringens, botulinum, difficile)', 'Bacillus species']
      }
    ]
  },
  chemistry: {
    label: 'Clinical Chemistry',
    icon: '🧪',
    description: 'Sample integrity, electrophoresis patterns, and assay principles.',
    entries: [
      {
        id: 'icteric-sample',
        title: 'Icteric Sample (Hemolyzed, Lipemic, Icteric Trio)',
        image: 'assets/atlas/chemistry/icteric-sample.jpg',
        tags: ['sample integrity', 'interference'],
        features: [
          'Deep yellow to orange plasma/serum',
          'Bilirubin > 2 mg/dL causes visible icterus',
          'Interferes with creatinine (Jaffe), cholesterol, and total protein assays',
          'Use serum blank or bichromatic correction to compensate'
        ],
        associated: ['Obstructive jaundice', 'Hemolytic disease', 'Hepatitis', 'Any assay with bilirubin interference']
      },
      {
        id: 'lipemic-sample',
        title: 'Lipemic Sample',
        image: 'assets/atlas/chemistry/lipemic-sample.jpg',
        tags: ['sample integrity', 'interference'],
        features: [
          'Milky or creamy plasma/serum',
          'Due to elevated triglycerides (chylomicrons or VLDL)',
          'Interferes with most spectrophotometric assays (light scattering)',
          'Specimen should be ultracentrifuged or patient fasted'
        ],
        associated: ['Hyperlipidemia', 'Non-fasting collection', 'Diabetes', 'Nephrotic syndrome']
      },
      {
        id: 'hemolyzed-sample',
        title: 'Hemolyzed Sample',
        image: 'assets/atlas/chemistry/hemolyzed-sample.jpg',
        tags: ['sample integrity', 'interference'],
        features: [
          'Pink to red plasma/serum',
          'Due to in-vitro RBC rupture (needle too small, prolonged tourniquet, vigorous mixing)',
          'Falsely elevates potassium, LDH, AST, ACP, magnesium',
          'Falsely decreases sodium, chloride, glucose (dilution)',
          'Reject or note on report'
        ],
        associated: ['Pre-analytical error', 'Difficult phlebotomy', 'Small-bore needles', 'Prolonged storage']
      },
      {
        id: 'spe-normal',
        title: 'Serum Protein Electrophoresis — Normal Pattern',
        image: 'assets/atlas/chemistry/spe-normal.jpg',
        tags: ['electrophoresis', 'SPE'],
        features: [
          'Five fractions: albumin, alpha-1, alpha-2, beta, gamma',
          'Albumin largest peak (50-60%)',
          'Gamma region broad and polyclonal',
          'No monoclonal spikes'
        ],
        associated: ['Normal serum protein pattern']
      },
      {
        id: 'spe-myeloma',
        title: 'SPE — Monoclonal Spike (M-Protein)',
        image: 'assets/atlas/chemistry/spe-myeloma.jpg',
        tags: ['electrophoresis', 'SPE', 'malignancy'],
        features: [
          'Sharp, narrow spike in gamma region (or occasionally beta)',
          'Dense, tall peak — one clone of plasma cells',
          'Loss of normal polyclonal gamma appearance'
        ],
        associated: ['Multiple myeloma', 'Waldenström macroglobulinemia', 'MGUS (monoclonal gammopathy of undetermined significance)']
      },
      {
        id: 'spe-nephrotic',
        title: 'SPE — Nephrotic Pattern',
        image: 'assets/atlas/chemistry/spe-nephrotic.jpg',
        tags: ['electrophoresis', 'SPE'],
        features: [
          'Decreased albumin (urinary loss)',
          'Increased alpha-2 fraction (compensatory synthesis of large proteins)',
          'Increased beta fraction',
          'Reduced gamma fraction'
        ],
        associated: ['Nephrotic syndrome', 'Membranous nephropathy', 'Minimal change disease']
      },
      {
        id: 'spe-cirrhosis',
        title: 'SPE — Cirrhosis (Beta-Gamma Bridge)',
        image: 'assets/atlas/chemistry/spe-cirrhosis.jpg',
        tags: ['electrophoresis', 'SPE'],
        features: [
          'Beta-gamma bridging — no clear separation between beta and gamma',
          'Decreased albumin',
          'Diffuse gamma elevation',
          'Overall decreased total protein'
        ],
        associated: ['Cirrhosis', 'Chronic liver disease', 'Polyclonal gammopathy']
      },
      {
        id: 'hb-electrophoresis-normal',
        title: 'Hemoglobin Electrophoresis — Normal (Alkaline pH)',
        image: 'assets/atlas/chemistry/hb-electrophoresis-normal.jpg',
        tags: ['electrophoresis', 'hemoglobin'],
        features: [
          'Cellulose acetate at pH 8.6',
          'HbA1 band largest (95-98%)',
          'HbA2 small band (2-3%)',
          'HbF barely visible (< 1%)',
          'Anodal migration order: HbA > HbF > HbS > HbC'
        ],
        associated: ['Normal adult']
      },
      {
        id: 'hb-electrophoresis-sc',
        title: 'Hemoglobin Electrophoresis — Sickle Cell Disease (HbSS)',
        image: 'assets/atlas/chemistry/hb-electrophoresis-sc.jpg',
        tags: ['electrophoresis', 'hemoglobin'],
        features: [
          'HbS band dominant',
          'No HbA band (or trace)',
          'HbF variable (3-20%)',
          'HbS migrates between HbA and HbC'
        ],
        associated: ['Sickle cell anemia', 'Sickle cell crisis']
      },
      {
        id: 'michaelis-menten',
        title: 'Michaelis-Menten Curve (Enzyme Kinetics)',
        image: 'assets/atlas/chemistry/michaelis-menten.jpg',
        tags: ['enzyme kinetics', 'graph'],
        features: [
          'Hyperbolic curve plotting reaction velocity vs. substrate concentration',
          'Vmax = maximum velocity (all enzyme saturated)',
          'Km = substrate concentration at Vmax/2',
          'Km relates to enzyme-substrate affinity (lower Km = higher affinity)'
        ],
        associated: ['Enzyme rate reactions', 'Zero-order kinetics at high substrate (clinical assays)']
      }
    ]
  },
  'immunoserology-blood-bank': {
    label: 'Immunoserology & Blood Banking',
    icon: '🧬',
    description: 'Agglutination reactions, blood typing, and antibody identification patterns.',
    entries: [
      {
        id: 'agglutination-grading',
        title: 'Agglutination Reaction Grading (4+, 3+, 2+, 1+, ±)',
        image: 'assets/atlas/immunoserology/agglutination-grading.jpg',
        tags: ['agglutination', 'grading'],
        features: [
          '4+ — One solid clump, clear background',
          '3+ — Several large clumps, clear background',
          '2+ — Many medium clumps, clear background',
          '1+ — Many small clumps, cloudy background',
          '± (weak) — Tiny clumps, turbid background',
          '0 — No agglutination, uniform suspension'
        ],
        associated: ['ABO typing', 'Antibody screening', 'Crossmatch', 'All hemagglutination tests']
      },
      {
        id: 'abo-forward-typing',
        title: 'ABO Forward (Cell) Typing — All Four Groups',
        image: 'assets/atlas/immunoserology/abo-forward-typing.jpg',
        tags: ['blood typing', 'ABO'],
        features: [
          'A: agglutination with anti-A only',
          'B: agglutination with anti-B only',
          'AB: agglutination with both anti-A and anti-B',
          'O: no agglutination with either'
        ],
        associated: ['Routine pre-transfusion typing']
      },
      {
        id: 'abo-reverse-typing',
        title: 'ABO Reverse (Serum) Typing — All Four Groups',
        image: 'assets/atlas/immunoserology/abo-reverse-typing.jpg',
        tags: ['blood typing', 'ABO'],
        features: [
          'A serum has anti-B → agglutinates B cells',
          'B serum has anti-A → agglutinates A cells',
          'AB serum has neither → no agglutination',
          'O serum has both → agglutinates both',
          'Landsteiner rule: serum contains antibodies against antigens the patient lacks'
        ],
        associated: ['ABO confirmation', 'ABO discrepancy detection']
      },
      {
        id: 'mixed-field-reaction',
        title: 'Mixed-Field Reaction',
        image: 'assets/atlas/immunoserology/mixed-field-reaction.jpg',
        tags: ['agglutination', 'special'],
        features: [
          'Two distinct populations of agglutinated and unagglutinated RBCs',
          'Indicates two populations of cells with different antigen expression',
          'Commonly seen with recent transfusion or fetal-maternal hemorrhage'
        ],
        associated: ['Recent transfusion', 'Post-transplant chimera', 'Weak D or partial D', 'Fetomaternal hemorrhage (with anti-D)']
      },
      {
        id: 'gel-column-reaction',
        title: 'Gel Column Agglutination (Column Agglutination Technology)',
        image: 'assets/atlas/immunoserology/gel-column-reaction.jpg',
        tags: ['agglutination', 'CAT', 'modern'],
        features: [
          'RBCs migrate down a gel-filled column by centrifugation',
          'Agglutinates stay at top or in column; non-agglutinated cells pellet at bottom',
          'Graded 4+ (all cells at top) to negative (all cells at bottom)',
          'Standardized, automated-friendly, more sensitive than tube testing'
        ],
        associated: ['ABO/Rh typing', 'Antibody screen', 'DAT', 'Crossmatch (modern platforms)']
      },
      {
        id: 'weak-d-test',
        title: 'Weak D Testing (Indirect Antiglobulin Test)',
        image: 'assets/atlas/immunoserology/weak-d-test.jpg',
        tags: ['blood typing', 'Rh'],
        features: [
          'Initial D typing is negative or weak',
          'Add anti-human globulin (AHG) and centrifuge',
          'Agglutination = weak D positive',
          'Weak D patients are typed as D-positive as donors, D-negative as recipients'
        ],
        associated: ['Weak D phenotype', 'Partial D', 'Rh typing discrepancies']
      },
      {
        id: 'dat-positive',
        title: 'Direct Antiglobulin Test (DAT) — Positive',
        image: 'assets/atlas/immunoserology/dat-positive.jpg',
        tags: ['DAT', 'coombs'],
        features: [
          'Patient RBCs already coated with antibody/complement in vivo',
          'Add AHG directly to patient cells → agglutination',
          'Positive DAT indicates in-vivo sensitization',
          'Does not identify antibody specificity — only confirms coating'
        ],
        associated: ['Autoimmune hemolytic anemia', 'HDFN', 'Hemolytic transfusion reaction', 'Drug-induced hemolysis']
      },
      {
        id: 'iat-antibody-screen',
        title: 'Antibody Screen — Indirect Antiglobulin Test',
        image: 'assets/atlas/immunoserology/iat-antibody-screen.jpg',
        tags: ['IAT', 'antibody screen'],
        features: [
          'Patient serum incubated with reagent panel cells',
          'Add AHG → agglutination = antibody present',
          'Panel typically has 2-3 group O cells with known antigen phenotypes',
          'Positive screen requires antibody identification panel'
        ],
        associated: ['Alloantibody detection', 'Crossmatch', 'Prenatal screening']
      },
      {
        id: 'hdfn-cord-blood-dat',
        title: 'HDFN — Positive Cord Blood DAT',
        image: 'assets/atlas/immunoserology/hdfn-cord-blood-dat.jpg',
        tags: ['HDFN', 'DAT', 'pediatric'],
        features: [
          'Cord blood RBCs coated with maternal IgG antibody',
          'Positive DAT on cord blood sample',
          'Antibody specificity identified in maternal serum',
          'Severity assessed by bilirubin, hemoglobin, and clinical exam'
        ],
        associated: ['Rh HDFN (anti-D)', 'ABO HDFN', 'Kell HDFN', 'Other IgG-mediated HDFN']
      },
      {
        id: 'anti-d-reaction',
        title: 'Anti-D Agglutination Reaction',
        image: 'assets/atlas/immunoserology/anti-d-reaction.jpg',
        tags: ['Rh', 'agglutination'],
        features: [
          'IgG anti-D reacts at 37 °C',
          'Requires AHG phase for detection in tube testing',
          'Strongly agglutinates D-positive cells',
          'No agglutination with D-negative cells'
        ],
        associated: ['Rh-positive confirmation', 'RhoGAM recipients (Rh-negative mothers)', 'HDFN workup']
      }
    ]
  },
  'histology-histopathology': {
    label: 'Histology & Histopathology',
    icon: '🔬',
    description: 'Normal tissue architecture, pathological patterns, and special stains.',
    entries: [
      {
        id: 'he-normal-liver',
        title: 'H&E — Normal Liver',
        image: 'assets/atlas/histopathology/he-normal-liver.jpg',
        tags: ['H&E', 'liver', 'normal'],
        features: [
          'Uniform hexagonal lobules',
          'Central vein surrounded by radiating hepatocyte cords',
          'Sinusoids between cords',
          'Portal triads (artery, vein, bile duct) at lobule corners'
        ],
        associated: ['Normal hepatic histology']
      },
      {
        id: 'he-cirrhosis',
        title: 'H&E — Cirrhosis',
        image: 'assets/atlas/histopathology/he-cirrhosis.jpg',
        tags: ['H&E', 'liver', 'pathology'],
        features: [
          'Bridging fibrosis with regenerative nodules',
          'Loss of normal lobular architecture',
          'Nodules surrounded by fibrous septa',
          'Hepatocyte steatosis common'
        ],
        associated: ['Chronic hepatitis', 'Alcoholism', 'NASH', 'Hemochromatosis']
      },
      {
        id: 'masson-trichrome',
        title: 'Masson Trichrome — Collagen Blue',
        image: 'assets/atlas/histopathology/masson-trichrome.jpg',
        tags: ['special stain', 'collagen'],
        features: [
          'Collagen stained blue (or green depending on variant)',
          'Cytoplasm, muscle, and RBCs stained red',
          'Nuclei stained blue-black',
          'Highlights fibrosis, scarring, and connective tissue'
        ],
        associated: ['Liver fibrosis staging', 'Renal interstitial fibrosis', 'Cardiac fibrosis']
      },
      {
        id: 'pas-stain',
        title: 'PAS — Glycogen and Mucin Magenta',
        image: 'assets/atlas/histopathology/pas-stain.jpg',
        tags: ['special stain', 'PAS'],
        features: [
          'Glycogen, mucins, and basement membranes stain magenta',
          'Periodic acid oxidizes vicinal diols to aldehydes',
          'Schiff reagent then forms magenta complex',
          'Can be coupled with diastase to distinguish glycogen (diastase-sensitive) from mucin (diastase-resistant)'
        ],
        associated: ['Fungal infections', 'Glycogen storage disease', 'Basement membrane evaluation', 'Mucin-producing tumors']
      },
      {
        id: 'congo-red-birefringence',
        title: 'Congo Red — Amyloid with Apple-Green Birefringence',
        image: 'assets/atlas/histopathology/congo-red-birefringence.jpg',
        tags: ['special stain', 'amyloid'],
        features: [
          'Under normal light: amyloid stains salmon-pink to red',
          'Under polarized light: apple-green birefringence — diagnostic',
          'Amyloid consists of misfolded protein fibrils in beta-pleated sheet',
          'Classic for diagnosis of amyloidosis'
        ],
        associated: ['AL amyloidosis (plasma cell)', 'AA amyloidosis (chronic inflammation)', 'Transthyretin amyloid', 'Familial amyloidosis']
      },
      {
        id: 'prussian-blue-iron',
        title: 'Prussian Blue — Iron/Hemosiderin',
        image: 'assets/atlas/histopathology/prussian-blue-iron.jpg',
        tags: ['special stain', 'iron'],
        features: [
          'Ferric iron (Fe³⁺) forms blue precipitate with potassium ferrocyanide',
          'Hemosiderin appears as blue granules',
          'Used for bone marrow iron stores and liver iron'
        ],
        associated: ['Hemochromatosis', 'Hemosiderosis', 'Bone marrow iron stores', 'Sideroblastic anemia']
      },
      {
        id: 'granuloma',
        title: 'Granuloma (Non-Caseating)',
        image: 'assets/atlas/histopathology/granuloma.jpg',
        tags: ['H&E', 'inflammation'],
        features: [
          'Aggregate of epithelioid histiocytes',
          'Multinucleated giant cells (Langhans, foreign-body)',
          'Rim of lymphocytes',
          'Non-caseating = no central necrosis; caseating = necrotic center'
        ],
        associated: ['Sarcoidosis (non-caseating)', 'Tuberculosis (caseating)', 'Crohn disease', 'Fungal infection', 'Foreign body reaction']
      },
      {
        id: 'adenocarcinoma',
        title: 'Adenocarcinoma — Gland-Forming Malignancy',
        image: 'assets/atlas/histopathology/adenocarcinoma.jpg',
        tags: ['H&E', 'malignancy'],
        features: [
          'Malignant cells forming glandular structures',
          'Irregular, back-to-back glands',
          'Nuclear atypia, hyperchromasia, prominent nucleoli',
          'Loss of normal architecture, invasion into stroma',
          'Mucin production common'
        ],
        associated: ['Colon adenocarcinoma', 'Lung adenocarcinoma', 'Gastric adenocarcinoma', 'Pancreatic adenocarcinoma']
      },
      {
        id: 'squamous-cell-carcinoma',
        title: 'Squamous Cell Carcinoma',
        image: 'assets/atlas/histopathology/squamous-cell-carcinoma.jpg',
        tags: ['H&E', 'malignancy'],
        features: [
          'Nests of malignant squamous cells invading stroma',
          'Intercellular bridges (desmosomes) between cells',
          'Keratin pearls (concentric layers of keratin)',
          'Central necrosis common in larger nests'
        ],
        associated: ['Skin SCC', 'Lung SCC', 'Head and neck SCC', 'Cervical SCC', 'Esophageal SCC']
      },
      {
        id: 'caseating-necrosis',
        title: 'Caseating Necrosis (TB)',
        image: 'assets/atlas/histopathology/caseating-necrosis.jpg',
        tags: ['H&E', 'necrosis', 'infection'],
        features: [
          'Amorphous, granular, eosinophilic debris',
          '"Cheese-like" macroscopic appearance',
          'Surrounded by epithelioid granulomas with Langhans giant cells',
          'Acid-fast bacilli identifiable by Ziehl-Neelsen stain'
        ],
        associated: ['Tuberculosis', 'Histoplasmosis', 'Some fungal infections']
      }
    ]
  },
};

// ============================================================
// CATEGORIES — assign each entry to a subheading within its subject.
// To add a new category, add a key with an array of entry IDs.
// Entries not listed anywhere fall into an "Other" bucket.
// ============================================================
window.ATLAS_CATEGORIES = {
  hematology: {
    'Normal Blood Cells': [
      'normal-rbc',
      'segmented-neutrophil',
      'band-neutrophil',
      'lymphocyte',
      'monocyte',
      'eosinophil',
      'basophil',
      'platelet'
    ],
    'RBC Morphology': [
      'target-cell',
      'sickle-cell',
      'spherocyte',
      'schistocyte',
      'ovalocyte',
      'stomatocyte'
    ],
    'RBC Inclusions': [
      'basophilic-stippling',
      'howell-jolly',
      'pappenheimer',
      'heinz-body'
    ],
    'WBC Abnormalities': [
      'hypersegmented-neutrophil',
      'blast-cell'
    ]
  },
  'analysis-of-urine': {
    'Cells': [
      'squamous-epithelial',
      'transitional-epithelial',
      'renal-tubular-epithelial',
      'yeast-cell'
    ],
    'Casts': [
      'hyaline-cast',
      'rbc-cast',
      'wbc-cast',
      'granular-cast',
      'waxy-cast'
    ],
    'Crystals': [
      'calcium-oxalate-dihydrate',
      'uric-acid-crystal',
      'struvite-crystal',
      'cystine-crystal'
    ]
  },
  microbiology: {
    'Colony Morphology': [
      'staph-aureus-colonies',
      'pseudomonas-colonies',
      'e-coli-macconkey'
    ],
    'Gram Stain Appearances': [
      'gram-positive-cocci-clusters',
      'gram-negative-diplococci',
      'gram-positive-bacilli-spores'
    ]
  },
  chemistry: {
    'Sample Integrity': [
      'icteric-sample',
      'lipemic-sample',
      'hemolyzed-sample'
    ],
    'Electrophoresis Patterns': [
      'spe-normal',
      'spe-myeloma',
      'spe-nephrotic',
      'spe-cirrhosis',
      'hb-electrophoresis-normal',
      'hb-electrophoresis-sc'
    ],
    'Principles & Graphs': [
      'michaelis-menten'
    ]
  },
  'immunoserology-blood-bank': {
    'Agglutination Reactions': [
      'agglutination-grading',
      'mixed-field-reaction',
      'gel-column-reaction'
    ],
    'Blood Typing': [
      'abo-forward-typing',
      'abo-reverse-typing',
      'weak-d-test',
      'anti-d-reaction'
    ],
    'Antibody Detection': [
      'dat-positive',
      'iat-antibody-screen',
      'hdfn-cord-blood-dat'
    ]
  },
  'histology-histopathology': {
    'Normal Tissue': [
      'he-normal-liver'
    ],
    'Special Stains': [
      'masson-trichrome',
      'pas-stain',
      'congo-red-birefringence',
      'prussian-blue-iron'
    ],
    'Pathological Patterns': [
      'he-cirrhosis',
      'granuloma',
      'adenocarcinoma',
      'squamous-cell-carcinoma',
      'caseating-necrosis'
    ]
  }
};