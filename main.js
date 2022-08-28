// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Coded by Jeremaquai
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let i = Math.floor(Math.random() * 15)
      let newBase = returnRandBase();
      if (newBase != this.dna[i]) {
        this.dna[i] = newBase;
      } else {
        this.mutate();
      }
      return this.dna;
    },
    compareDNA(specimenToCompare) {
      let sequenceMatches = 0;
      for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === specimenToCompare.dna[i]) {
            sequenceMatches++;
          }
        
      }
      let matchPercetage = ((sequenceMatches / 15) * 100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and specimen #${specimenToCompare.specimenNum} have ${matchPercetage}% DNA in common`);
    },
    willLikelySurvive() {
      let cAndGMatches = 0;
      for (let j = 0; j < this.dna.length; j++) {
        if (this.dna[j] === 'C' || this.dna[j] === 'G') {
          cAndGMatches++;
        }
      }
      if (((cAndGMatches / 15) * 100).toFixed() >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let complementDna = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
          complementDna.push('T');  
          break;
          case 'T':
          complementDna.push('A');  
          break;
          case 'C':
            complementDna.push('G');
            break;
          case 'G':
            complementDna.push('C');
            break;
        }
      }
      return complementDna;
    },
  }
};

const survivingOrgs = [];
let idCounter = 1;

while (survivingOrgs.length < 30) {
  newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingOrgs.push(newOrg);
  }
  idCounter++;
  
}



// Uncomment to test the code
// console.log(survivingOrgs);
//console.log(org1 = pAequorFactory(1, mockUpStrand()));
//console.log(org1.complementStrand());
// org2 = pAequorFactory(2, mockUpStrand());
// console.log(org1.compareDNA(org2));
// console.log(org1.willLikelySurvive());
// console.log(org2.willLikelySurvive());


