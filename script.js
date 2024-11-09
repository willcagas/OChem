// const smilesMap = {
//     // Alkanes
//     "C": { type: "alkane", names: ["methane"] },
//     "CC": { type: "alkane", names: ["ethane"] },
//     "CCC": { type: "alkane", names: ["propane"] },
//     "CCCC": { type: "alkane", names: ["butane"] },
//     "CCCCC": { type: "alkane", names: ["pentane"] },
//     "CCCCCC": { type: "alkane", names: ["hexane"] },
//     "CCCCCCC": { type: "alkane", names: ["heptane"] },
//     "CCCCCCCC": { type: "alkane", names: ["octane"] },
//     "CCCCCCCCC": { type: "alkane", names: ["nonane"] },
//     "CCCCCCCCCC": { type: "alkane", names: ["decane"] },

//     "CC(CC)(CC)C": { type: "alkane", names: ["3,3-dimethylpentane"] },
//     "CC(C)C(CCC)C": { type: "alkane", names: ["2,3-dimethylhexane"] },
//     "BrC(C)C(C)Cl": { type: "alkane", names: ["2-bromo-3-chlorobutane", "3-bromo-2-chlorobutane"] },
//     "C(C)C(CC)(CC)CC": { type: "alkane", names: ["3,3-diethylpentane"] },
//     "C(CC)C(CCC(C)(C)C)CCC": { type: "alkane", names: ["5-propyl-2,2-dimethyloctane"] },

//     // Alkenes
//     "CC(=C)CC(CC)C": { type: "alkene", names: ["2,4-dimethylhex-1-ene"] },
//     "CC=CC=CCC": { type: "alkene", names: ["hepta-2,4-diene"] },
//     "C(CCC)C1=CC(CC1)CC": { type: "alkene", names: ["1-butyl-3-ethylcyclopentene"] },
//     "CC(C)C(C)\\C=C(C)/C1CCC1": { type: "alkene", names: ["3-cyclobutyl-4,5-dimethylhex-2-ene"] }, // BACKSLASH SYNTAX ERROR - WEIRD 
//     "C(C)C(C(C=CC)C)CC": { type: "alkene", names: ["5-ethyl-4-methylhept-2-ene"] },

//     // Alkynes
//     "C(C)C(C#CCC)C(C)C": { type: "alkyne", names: ["5-ethyl-6-methylhept-3-yne", ""] },
//     "C(C)C(C#CC)(CCC)C": { type: "alkyne", names: ["4-ethyl-4-methylhept-2-yne"] },

//     // Cyclic
//     "C(C)C1C(C(CC1)C)C": { type: "cyclic", names: ["1-ethyl-2,3-dimethylcyclopentane", "3-ethyl-1,2-dimethylcyclopentane"] },
//     "C(C)C1C(CC(CC1)C)C": { type: "cyclic", names: ["1-ethyl-2,4-dimethylcyclohexane"] },

//     // Aromatic compounds with duplicate names
//     "CC1=CC(=CC=C1)CCC": { type: "aromatic", names: ["1-methyl-3-propylbenzene", "3-propyltoluene"] },
//     "C1=CC=C(C=C1)O": { type: "aromatic", names: ["benzenol"] },
//     "C1=CC=C(C=C1)O": { type: "aromatic", names: ["3-isopropyltoluene"] },

//     // Alcohols
//     "CO": { type: "alcohol", names: ["methanol", "methan-1-ol"] },
//     "C(C)O": { type: "alcohol", names: ["ethanol", "ethan-1-ol"] },
//     "C(CC)O": { type: "alcohol", names: ["propan-1-ol"] },
//     "C(CCC)O": { type: "alcohol", names: ["butan-1-ol"] },
//     "C(CCCC)O": { type: "alcohol", names: ["pentan-1-ol"] },
//     "C(CCCCC)O": { type: "alcohol", names: ["hexan-1-ol"] },
//     "C(CCCCCC)O": { type: "alcohol", names: ["heptan-1-ol"] },
//     "C(CCCCCCC)O": { type: "alcohol", names: ["octan-1-ol"] },
//     "C(CCCCCCCC)O": { type: "alcohol", names: ["nonan-1-ol"] },
//     "C(CCCCCCCCC)O": { type: "alcohol", names: ["decan-1-ol"] },
//     "CC(C)O": { type: "alcohol", names: ["propan-2-ol"] },
//     "C(C)C(CCO)C(CCCC)C": { type: "alcohol", names: ["3-ethyl-4-methyloctan-1-ol"] },

//     "CC(CC(CC)O)O": { type: "alcohol", names: ["hexane-2,4-diol"] },
//     "C(CC)C(CO)CCCCC": { type: "alcohol", names: ["2-propylheptan-1-ol"] },
//     "CC(CC(C(CCC)O)O)O": { type: "alcohol", names: ["octane-2,4,5-triol"] },

//     // Ethers
//     "C(CCCC)OC1=C(C=CC=C1)Br": { type: "ether", names: ["1-pentoxy-2-bromobenzene"] },
//     "C(C)OC1C=CCC1": { type: "ether", names: ["3-ethoxycyclopentene"] },
//     "C(CCC)OC1=CC(=CC=C1)CC": { type: "ether", names: ["1-butoxy3-ethylbenzene"] },

//     // Aldehydes
//     "C(C)C(CC=O)C(C)C1=CC=CC=C1": { type: "aldehyde", names: ["3-ethyl-4-phenylpentanal"] }, // INCORRECT //
//     "C(CCC)C=1C=C(C=O)C=CC1": { type: "aldehyde", names: ["3-butylbenzaldehyde"] },
//     "C1(CCC1)C(CC=O)C": { type: "aldehyde", names: ["3-cyclobutylbutanal"] },
//     "C(CC)OC(CC=O)CC": { type: "aldehyde", names: ["3-propoxypentanal"] },

//     // Ketones
//     "C(C)C(C(CC)=O)C(C)C": { type: "ketone", names: ["4-ethyl-5-methylhexan-3-one"] },
//     "CC(C(C)=O)CC": { type: "ketone", names: ["3-methylpentan-2-one"] },

//     // Carboxylic acids
//     "C(=O)O": { type: "carboxylic", names: ["methanoic acid"] },
//     "CC(=O)O": { type: "carboxylic", names: ["ethanoic acid"] },
//     "CCC(=O)O": { type: "carboxylic", names: ["propanoic acid"] },
//     "CCCC(=O)O": { type: "carboxylic", names: ["butanoic acid"] },
//     "CCCCC(=O)O": { type: "carboxylic", names: ["pentanoic acid"] },
//     "CCCCCC(=O)O": { type: "carboxylic", names: ["hexanoic acid"] },
//     "CCCCCCC(=O)O": { type: "carboxylic", names: ["heptanoic acid"] },
//     "CCCCCCCC(=O)O": { type: "carboxylic", names: ["octanoic acid"] },
//     "CCCCCCCCC(=O)O": { type: "carboxylic", names: ["nonanoic acid"] },
//     "CCCCCCCCCC(=O)O": { type: "carboxylic", names: ["decanoic acid"] },
//     "CC(CCC(=O)O)CCC": { type: "carboxylic", names: ["4-methylheptanoic acid"] },
//     "CC(CCC(=O)O)(CC)C": { type: "carboxylic", names: ["4,4-dimethylhexanoic acid"] },
//     "C(C1=CC=CC=C1)(=O)O": { type: "carboxylic", names: ["benzoic acid"] },
//     "C(C(=O)O)(=O)O": { type: "carboxylic", names: ["ethanedioic acid"] },
//     "C(C)(C)(C)C(CC(=O)O)CCCCC": { type: "carboxylic", names: ["3-t-butyloctanoic acid"] },
    
//     "ClC1=CC=C(C(=O)O)C=C1": { type: "carboxylic", names: ["4-chlorobenzoic acid"] },
//     "CC(C(=O)O)CC": { type: "carboxylic", names: ["2-methylbutanoic acid"] },
//     "OC1=C(C(=O)O)C=CC=C1": { type: "carboxylic", names: ["2-hydroxybenzoic acid"] },

//     // Esters
//     "C1(=CC=CC=C1)C(C(=O)OCCC)CC": { type: "ester", names: ["propyl 2-phenylbutanoate"] },
//     "C(CC)(=O)OCC(CC)C": { type: "ester", names: ["2-methylbutyl propanoate"] },
//     "BrC(CCC(=O)OCC(CC)C)C": { type: "ester", names: ["2-methylbutyl 4-bromopentanoate"] },
//     "C1(CCCC1)CCC(=O)OCCCCC": { type: "ester", names: ["pentyl 3-cyclopentylpropanoate"] },

//     // Amines
//     "BrNC1=CC=C(C=C1)NBr": { type: "amine", names: ["2,5-dibromoaminobenzene", "2,5-dibromoaniline", "2,5-dibromophenylamine"] },
//     "C(C)N(C(C)CCCCC)CCC": { type: "amine", names: ["N-ethyl-N-propylheptan-2-amine"] },
//     "C(CC)NCCCC": { type: "amine", names: ["N-propylbutan-1-amine"] },

//     // Amides
//     "C(C)N(C(CCC)=O)C": { type: "amide", names: ["N-ethyl-N-methylbutanamide"] },
//     "C(C)C(C(CC(=O)N)C)CC": { type: "amide", names: ["4-ethyl-3-methylhexanamide"] },
//     "CN(C(CC(CC)C)=O)CCC": { type: "amide", names: ["N-methyl-N-propyl-3-methylpentanamide"] },
//     "CN(C(C(CCCC)CCC)=O)C": { type: "amide", names: ["N,N-dimethyl-2-propylhexanamide"] },
// };

let currentCompounds = [];

document.getElementById("hydrocarbonsToggle").addEventListener("change", function() {
    toggleSectionCheckboxes("hydrocarbons", this.checked);
});

document.getElementById("oxygenToggle").addEventListener("change", function() {
    toggleSectionCheckboxes("oxygen-containing", this.checked);
});

document.getElementById("nitrogenToggle").addEventListener("change", function() {
    toggleSectionCheckboxes("nitrogen-containing", this.checked);
});

function toggleSectionCheckboxes(sectionId, isChecked) {
    const section = document.getElementById(sectionId);
    const checkboxes = section.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;

        toggleCheckboxes()
    });
}

function toggleCheckboxes() {
    const selectedCategories = getSelectedCategories();
    const filteredCompounds = getFilteredCompounds(selectedCategories);
    const smilesKeys = Object.keys(filteredCompounds);
    const numCompounds = smilesKeys.length; 

    document.getElementById("numQuestions").textContent = `${numCompounds} / ${totalCompounds}`;
}

function getSelectedCategories() {
    const checkboxes = document.querySelectorAll('#settings input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function getFilteredCompounds(selectedCategories) {
    const filteredCompounds = {};

    // smilesMap
    Object.entries(compounds).forEach(([smiles, data]) => {
        if (selectedCategories.includes(data.type)) {
            filteredCompounds[smiles] = data;
        }
    });

    return filteredCompounds;
}

function nameCompound(i, smiles, compoundListDiv, selectedCategories) {
    const compoundEntry = document.createElement('div');
    compoundEntry.style.display = "inline-block";
    compoundEntry.style.margin = "10px";

    const compoundContainer = document.createElement('div');
    compoundContainer.id = `compound-${i}`;
    compoundContainer.style.width = '300px';
    compoundContainer.style.height = '150px';

    const chemViewer = new Kekule.ChemWidget.Viewer(compoundContainer);
    chemViewer.setDimension('300px', '150px');

    var displayType = null;
    if (selectedCategories.includes("line") && selectedCategories.includes("condensed")) {
        // Randomly choose between skeletal (line) and condensed display types
        displayType = Math.random() < 0.5 
            ? Kekule.Render.Molecule2DDisplayType.SKELETAL
            : Kekule.Render.Molecule2DDisplayType.CONDENSED;
    } else if (selectedCategories.includes("line")) {
        displayType = Kekule.Render.Molecule2DDisplayType.SKELETAL;
    } else if (selectedCategories.includes("condensed")) {
        displayType = Kekule.Render.Molecule2DDisplayType.CONDENSED;
    } else {
        // Default to a display type in case neither option is selected
        displayType = Kekule.Render.Molecule2DDisplayType.SKELETAL;
    }
    // Configure the ChemViewer to display the molecule in 2D
    chemViewer.setRenderType(Kekule.Render.RendererType.R2D);
    chemViewer.setMoleculeDisplayType(displayType);
    chemViewer.setPredefinedSetting('static');

    const molfile = OCL.Molecule.fromSmiles(smiles).toMolfile()
    const mol = Kekule.IO.loadFormatData(molfile, 'mol')
    chemViewer.setChemObj(mol)

    // Append the ChemViewer container first
    compoundEntry.appendChild(compoundContainer);

    const guessDiv = document.createElement('div');
    guessDiv.id = `guessDiv`
    guessDiv.innerHTML = `
        <input type="text" id="input_${i}" placeholder="Name the compound">
        <button onclick="checkAnswer(${i})">Check</button>
    `;
    compoundEntry.appendChild(guessDiv);

    compoundListDiv.appendChild(compoundEntry);
}

function drawCompound(i, smiles, names, compoundListDiv) {
    // Create a container for each compound entry
    const compoundEntry = document.createElement('div');
    compoundEntry.style.display = "inline-block";
    compoundEntry.style.margin = "10px";
    
    // Container for the Composer editor
    const composerContainer = document.createElement('div');
    composerContainer.id = `composer-${i}`;
    composerContainer.style.width = '500px';
    composerContainer.style.height = '400px';
    
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `
        <h4>${names.names[0]}</h4>
    `;
    compoundEntry.appendChild(nameDiv);
 
    // Initialize Composer within the compound container
    var composer = new Kekule.Editor.Composer(composerContainer);
    // Set dimensions
    composer.setDimension('500px', '400px');
    // Set minimal toolbar configuration for a blank editor
    composer.setCommonToolButtons(['newDoc', 'undo', 'redo', 'saveData']);
    composer.setChemToolButtons(['manipulate', 'erase', 'bond', 'ring', 'atomAndFormula']);
    composer.setEnableCreateNewDoc(true);
    composer.setEnableLoadNewFile(false);
    composer.setAllowCreateNewChild(true);
    
    // Store the composer instance in a global object or array
    if (!window.composerInstances) {
        window.composerInstances = {};
    }
    window.composerInstances[i] = [composer, smiles];
    
    // Append the Composer container
    compoundEntry.appendChild(composerContainer);
    
    const guessDiv = document.createElement('div');
    guessDiv.id = `guessDiv-${i}`; // Added index to make ID unique
    guessDiv.innerHTML = `
        <button onclick="checkAnswer(${i})">Check</button>
    `;
    compoundEntry.appendChild(guessDiv);
    
    // Append the entire compound entry to the main compound list
    compoundListDiv.appendChild(compoundEntry);
}

function generateRandomCompounds() {
    currentCompounds = [];
    const compoundListDiv = document.getElementById('compoundList');
    compoundListDiv.innerHTML = ''; 
    
    const selectedCategories = getSelectedCategories();
    const filteredCompounds = getFilteredCompounds(selectedCategories);
    const naming = selectedCategories.includes("naming");
    const drawing = selectedCategories.includes("drawing");

    if (!(naming || drawing) || (naming && !selectedCategories.includes("line") && !selectedCategories.includes("condensed"))) {
        return;
    }    
    
    // 10 questions  
    const smilesKeys = Object.keys(filteredCompounds);
    const numCompounds = smilesKeys.length;

    for (let i = 0; i < numCompounds && smilesKeys.length > 0; i++) {
        console.log("once")
        const randomIndex = Math.floor(Math.random() * smilesKeys.length);
        const smiles = smilesKeys[randomIndex];
        const compoundData = filteredCompounds[smiles];

        // const molecule = OCL.Molecule.fromSmiles(smiles);

        const mode = naming && drawing ? (Math.random() < 0.5 ? "name" : "draw") :
        naming ? "name" : "draw";

        (mode === 'name') ? nameCompound(i, smiles, compoundListDiv, selectedCategories) :
                    drawCompound(i, smiles, filteredCompounds[smiles], compoundListDiv);
            
        currentCompounds.push(compoundData.names);

        smilesKeys.splice(randomIndex, 1);
    }
}

function compareStructures(molA, molB) {
    try {
        const moleculeA = OCL.Molecule.fromSmiles(molA);
        const moleculeB = OCL.Molecule.fromSmiles(molB);
 
        const idCodeA = moleculeA.getIDCode();
        const idCodeB = moleculeB.getIDCode();
        
        // Extract essential structure information (part before first @)
        const essentialA = idCodeA.split('@')[0];
        const essentialB = idCodeB.split('@')[0];
        
        return essentialA === essentialB;
    } catch (error) {
        console.error('Error comparing structures:', error);
        return false;
    }
}

function checkAnswer(index) {
    const correctNames = currentCompounds[index];
    
    if(document.getElementById(`input_${index}`)) {
        const userGuess = document.getElementById(`input_${index}`).value.trim().toLowerCase();
   
        if (correctNames.some(name => name.toLowerCase() === userGuess)) {
            alert("Correct! The compound is: " + correctNames.join(", "));
        } else if (userGuess) {
            alert("Incorrect! Possible correct names are: " + correctNames.join(", "));
        }
    } else {
        try {
            const composer = window.composerInstances[index][0];
            const targetSmiles = window.composerInstances[index][1];
   
            const mol = composer.exportObjs(Kekule.Molecule)[0];
            
            if (!mol) {
                alert("Please draw a structure first!");
                return;
            }
            
            const drawnSmiles = Kekule.IO.saveFormatData(mol, 'smi');
            
            const isCorrect = compareStructures(targetSmiles, drawnSmiles);
            
            if (isCorrect) {
                alert("Correct!");
            } else {
                const viewerDiv = document.createElement('div');
                viewerDiv.style.width = '300px';
                viewerDiv.style.height = '150px';
                
                const viewer = new Kekule.ChemWidget.Viewer(viewerDiv);
                viewer.setDimension('300px', '150px');
                
                const correctMol = OCL.Molecule.fromSmiles(targetSmiles).toMolfile();
                const correctObj = Kekule.IO.loadFormatData(correctMol, 'mol');
                viewer.setChemObj(correctObj);
                
                const alertDiv = document.createElement('div');
                alertDiv.innerHTML = '<h3>Incorrect!</h3><p>The correct structure is:</p>';
                alertDiv.appendChild(viewerDiv);

                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '50%';
                modal.style.left = '50%';
                modal.style.transform = 'translate(-50%, -50%)';
                modal.style.backgroundColor = 'white';
                modal.style.padding = '20px';
                modal.style.border = '1px solid black';
                modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                modal.style.zIndex = '1000';
                
                const closeButton = document.createElement('button');
                closeButton.textContent = 'Close';
                closeButton.onclick = () => modal.remove();
                
                modal.appendChild(alertDiv);
                modal.appendChild(closeButton);
                document.body.appendChild(modal);
            }
        } catch (error) {
            console.error('Error in structure comparison:', error);
            alert("Error comparing structures. Please try again.");
        }
    }
}

generateRandomCompounds();
