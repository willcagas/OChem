const compounds = {
    //1st Quiz
    "CC(CC)(CC)C": { type: "alkane", names: ["3,3-dimethylpentane"] },
    "CC(C)C(CCC)C": { type: "alkane", names: ["2,3-dimethylhexane"] },
    "BrC(C)C(C)Cl": { type: "alkane", names: ["2-bromo-3-chlorobutane"] },
    "C(C)C(CC)(CC)CC": { type: "alkane", names: ["3,3-diethylpentane"] },
    "C(CC)C(CCC(C)(C)C)CCC": { type: "alkane", names: ["2,2-dimethyl-5-propyloctane"] },
    "C(C)C1C(C(CC1)C)C": { type: "cyclic", names: ["1-ethyl-2,3-dimethylcyclopentane", "3-ethyl-1,2-dimethylcyclopentane"] },
    "C(C)C1C(CC(CC1)C)C": { type: "cyclic", names: ["1-ethyl-2,4-dimethylcyclohexane"] },
    
    //2nd Quiz
    "CC(=C)CC(CC)C": { type: "alkene", names: ["2,4-dimethylhex-1-ene"] },
    "CC=CC=CCC": { type: "alkene", names: ["hepta-2,4-diene"] },
    "C(CCC)C1=CC(CC1)CC": { type: "alkene", names: ["2-butyl-5-ethylcyclopentene"] },
    "CC(C)C(C)\\C=C(C)/C1CCC1": { type: "alkene", names: ["3-cyclobutyl-4,5-dimethylhex-2-ene"] }, // BACKSLASH SYNTAX ERROR - WEIRD ASL
    "C(C)C(C(C=CC)C)CC": { type: "alkene", names: ["5-ethyl-4-methylhept-2-ene"] },
    "C(C)C(C#CCC)C(C)C": { type: "alkyne", names: ["5-ethyl-6-methylhept-3-yne", ""] },
    "C(C)C(C#CC)(CCC)C": { type: "alkyne", names: ["4-ethyl-4-methylhept-2-yne"] },
    //3rd Quiz


    //4th Quiz
    "CC(CC(CC)O)O": { type: "alcohol", names: ["hexane-2,4-diol"] },
    "C(CC)C(CO)CCCCC": { type: "alcohol", names: ["2-propylheptan-1-ol"] },
    "C(C)OC1C=CCC1": { type: "ether", names: ["3-ethoxycyclopentene"] },
    "C(CCC)OC1=CC(=CC=C1)CC": { type: "ether", names: ["1-butoxy-3-ethylbenzene"] },
    "CC(CC(C(CCC)O)O)O": { type: "alcohol", names: ["octane-2,4,5-triol"] },
    "C(CCCC)OC1=C(C=CC=C1)Br": { type: "ether", names: ["1-pentoxy-2-bromobenzene"] },
    "[N+](=O)([O-])C1=CC=C(C=C1)O": { type: "ether", names: ["4-nitrobenzenol"] },

    //5th Quiz
    "C(C)C(CC=O)C(C)C1=CC=CC=C1": { type: "aldehyde", names: ["3-ethyl-4-phenylpentanal"] },
    "C(CCC)C=1C=C(C=O)C=CC1": { type: "aldehyde", names: ["3-butylbenzaldehyde"] },
    "C1(CCC1)C(CC=O)C": { type: "aldehyde", names: ["3-cyclobutylbutanal"] },
    "C(CC)OC(CC=O)CC": { type: "aldehyde", names: ["3-propoxypentanal"] },
    "C(C)C(C(CC)=O)C(C)C": { type: "ketone", names: ["4-ethyl-5-methylhexan-3-one"] },
    "CC(C(C)=O)CC": { type: "ketone", names: ["3-methylpentan-2-one"] },

    //6th Quiz
    "C1(=CC=CC=C1)C(C(=O)OCCC)CC": { type: "ester", names: ["propyl 2-phenylbutanoate"] },
    "ClC1=CC=C(C(=O)O)C=C1": { type: "carboxylic", names: ["4-chlorobenzoic acid"] },
    "C(CC)(=O)OCC(CC)C": { type: "ester", names: ["2-methylbutyl propanoate"] },
    "CC(C(=O)O)CC": { type: "carboxylic", names: ["2-methylbutanoic acid"] },
    "BrC(CCC(=O)OCC(CC)C)C": { type: "ester", names: ["2-methylbutyl 4-bromopentanoate"] },
    "OC1=C(C(=O)O)C=CC=C1": { type: "carboxylic", names: ["2-hydroxybenzoic acid"] },
    "C1(CCCC1)CCC(=O)OCCCCC": { type: "ester", names: ["pentyl 3-cyclopentylpropanoate"] },

    //7th Quiz
    "C(C)N(C(CCC)=O)C": { type: "amide", names: ["N-ethyl-N-methylbutanamide"] },
    "BrNC1=CC=C(C=C1)NBr": { type: "amine", names: ["2,5-dibromoaminobenzene", "2,5-dibromoaniline", "2,5-dibromophenylamine"] },
    "C(C)C(C(CC(=O)N)C)CC": { type: "amide", names: ["4-ethyl-3-methylhexanamide"] },
    "C(C)N(C(C)CCCCC)CCC": { type: "amine", names: ["N-ethyl-N-propylheptan-2-amine"] },
    "CN(C(CC(CC)C)=O)CCC": { type: "amide", names: ["N-methyl-N-propyl-3-methylpentanamide"] },
    "C(CC)NCCCC": { type: "amine", names: ["N-propylbutan-1-amine"] },
    "CN(C(C(CCCC)CCC)=O)C": { type: "amide", names: ["N,N-dimethyl-2-propylhexanamide"] },
};

const totalCompounds = Object.keys(compounds).length;

function displayTotalCompounds() {
    document.getElementById("numQuestions").textContent = `/ ${totalCompounds}`;
}

window.onload = displayTotalCompounds;