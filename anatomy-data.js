// anatomy-data.js
window.MLS_ANATOMY_DATA = {
  'heart': {
    type: 'Cardiovascular System',
    inMls: `
      <ul>
        <li><strong>Cardiac Markers:</strong> Troponin I/T and CK-MB are measured to diagnose myocardial infarction.</li>
        <li><strong>Blood Banking:</strong> Heart surgeries require extensive crossmatching and blood typing.</li>
        <li><strong>Lipid Profile:</strong> High LDL cholesterol is a primary risk factor for coronary artery disease.</li>
      </ul>
    `,
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },
  'liver': {
    type: 'Digestive System',
    inMls: `
      <ul>
        <li><strong>Liver Function Tests (LFT):</strong> ALT, AST, ALP, and GGT are measured to assess hepatic damage.</li>
        <li><strong>Bilirubin:</strong> Direct and indirect bilirubin levels help differentiate pre-hepatic (hemolytic) from post-hepatic (obstructive) jaundice.</li>
        <li><strong>Coagulation:</strong> The liver synthesizes clotting factors (PT/INR is prolonged in severe liver disease).</li>
      </ul>
    `,
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },
  'kidney': {
    type: 'Urinary System',
    inMls: `
      <ul>
        <li><strong>Renal Function Tests:</strong> BUN and Creatinine are core markers of glomerular filtration rate (GFR).</li>
        <li><strong>Urinalysis:</strong> Detection of proteinuria, hematuria, and casts helps diagnose nephrotic and nephritic syndromes.</li>
        <li><strong>Hematology:</strong> The kidneys produce erythropoietin; renal failure often leads to normocytic normochromic anemia.</li>
      </ul>
    `,
    link: 'course-analysis-of-urine.html',
    linkText: 'Urinalysis & Body Fluids'
  },
  'lung': {
    type: 'Respiratory System',
    inMls: `
      <ul>
        <li><strong>Microbiology:</strong> Sputum cultures are vital for identifying pathogens like <em>Mycobacterium tuberculosis</em> (AFB stain) and <em>Aspergillus</em>.</li>
        <li><strong>Blood Gases:</strong> Arterial blood gas (ABG) analysis evaluates pO2, pCO2, and pH to assess respiratory acidosis/alkalosis.</li>
      </ul>
    `,
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },
  'brain': {
    type: 'Nervous System',
    inMls: `
      <ul>
        <li><strong>CSF Analysis:</strong> Cerebrospinal fluid is collected via lumbar puncture to diagnose bacterial/viral meningitis, subarachnoid hemorrhage, and multiple sclerosis.</li>
        <li><strong>CSF Parameters:</strong> Evaluated for opening pressure, WBC count, glucose (normally 60% of blood glucose), and protein.</li>
      </ul>
    `,
    link: 'course-analysis-of-urine.html',
    linkText: 'Body Fluids (CSF)'
  },
  'bone': {
    type: 'Skeletal System',
    inMls: `
      <ul>
        <li><strong>Hematopoiesis:</strong> Bone marrow is the primary site of blood cell production.</li>
        <li><strong>Bone Marrow Biopsy:</strong> Performed on the posterior iliac crest to diagnose leukemias, aplastic anemia, and myelodysplastic syndromes.</li>
        <li><strong>Bone Marrow Iron:</strong> Prussian blue stain assesses iron stores for diagnosing iron deficiency vs. anemia of chronic disease.</li>
      </ul>
    `,
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },
  'spleen': {
    type: 'Lymphoid System',
    inMls: `
      <ul>
        <li><strong>RBC Clearance:</strong> The spleen removes old/damaged RBCs. Splenectomy leads to Howell-Jolly bodies and target cells on a peripheral smear.</li>
        <li><strong>Immunology:</strong> The spleen filters blood-borne pathogens and produces opsonins. Asplenic patients are at high risk for encapsulated bacteria (e.g., <em>Streptococcus pneumoniae</em>).</li>
      </ul>
    `,
    link: 'course-clinical-hematology.html',
    linkText: 'Clinical Hematology'
  },
  'stomach': {
    type: 'Digestive System',
    inMls: `
      <ul>
        <li><strong>Gastric Analysis:</strong> The stomach is biopsied to test for <em>Helicobacter pylori</em> using the rapid urease test (CLO test).</li>
        <li><strong>Intrinsic Factor:</strong> Parietal cells in the stomach produce intrinsic factor, which is essential for Vitamin B12 absorption (deficiency causes pernicious anemia).</li>
      </ul>
    `,
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },
  'pancreas': {
    type: 'Digestive & Endocrine',
    inMls: `
      <ul>
        <li><strong>Pancreatitis:</strong> Elevated serum amylase and lipase are the primary diagnostic markers for acute pancreatitis.</li>
        <li><strong>Endocrinology:</strong> The Islets of Langerhans secrete insulin and glucagon, regulating blood glucose.</li>
      </ul>
    `,
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },
  'intestine': {
    type: 'Digestive System',
    inMls: `
      <ul>
        <li><strong>Parasitology:</strong> Stool samples from the intestines are examined for ova, cysts, and parasites (O&P).</li>
        <li><strong>Occult Blood:</strong> Fecal immunochemical tests (FIT) screen for colorectal cancer and GI bleeding.</li>
      </ul>
    `,
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  },
  'muscle': {
    type: 'Muscular System',
    inMls: `
      <ul>
        <li><strong>Muscle Enzymes:</strong> Elevated Creatine Kinase (CK) and Aldolase indicate skeletal muscle damage, such as rhabdomyolysis or muscular dystrophy.</li>
        <li><strong>Myoglobin:</strong> High myoglobin in urine (myoglobinuria) can lead to acute kidney injury following severe muscle trauma.</li>
      </ul>
    `,
    link: 'course-clinical-chemistry.html',
    linkText: 'Clinical Chemistry'
  },
  'bladder': {
    type: 'Urinary System',
    inMls: `
      <ul>
        <li><strong>Urinalysis:</strong> A midstream clean-catch urine specimen is collected to diagnose cystitis (bladder infection).</li>
        <li><strong>Microbiology:</strong> The most common cause of bladder infection is <em>Escherichia coli</em>, detected via urine culture and nitrite/leukocyte esterase dipsticks.</li>
      </ul>
    `,
    link: 'course-microbiology.html',
    linkText: 'Microbiology'
  }
};