// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  console.log(mockUpStrand())
  
  const pAequorFactory = (number, dna)=>{
    return {
      number: number,
      dna: dna,
      mutate: function() {
        let newDNA = mockUpStrand()
        let dnaBases = ['A', 'T', 'C', 'G']
        dnaBases.splice(dnaBases.indexOf(dna[0]), 1);
        dnaBases = dnaBases[Math.floor(Math.random() * 3)]
        
        if (this.dna[0] == newDNA[0]){
        
           newDNA.splice(0,1,dnaBases);
           console.log('Random Gene: ' + dnaBases)
           return this.dna = newDNA;
           
           
        } else {
            return this.dna = newDNA;
        }
      },
      compareDNA: function(specimen){
        let i = 0;
        let ar=[]
        
       
        for (let i=0; i<this.dna.length; i++){
          if (this.dna[i]===specimen.dna[i]){
           ar.push(this.dna[i])

           // console.log((i))
          }

        }
        let compare = Math.floor((ar.length * 100) / this.dna.length) 
          console.log( `specimen ${this.number} and specimen ${specimen.number} have ${compare}% DNA in common.`)
          console.log(specimen)
            
          },
      willLikelySurvive: function(){
        let i = 0;
        let arr = []
        for (let i=0; i<this.dna.length; i++){
          if (this.dna[i] === 'G'|| this.dna[i] === 'C') {
            arr.push(this.dna[i])

          }

        }
          console.log(Math.floor((arr.length * 100)/this.dna.length))
        if (Math.floor((arr.length * 100)/this.dna.length) >= 60){
          return true;
        } else {
          return false;
        }
        
      } 

      }
  
  };
  const specimen1 = pAequorFactory(1,['A','D'])
  specimen1.mutate()
  const specimen2 = pAequorFactory(2,['A','D','G'])
  specimen2.mutate()
  
  console.log(specimen1)
  console.log(specimen2)
  specimen2.compareDNA(specimen1)
  specimen1.compareDNA(specimen1);
  specimen1.willLikelySurvive()
  
const newSpecimen = function(){
  let i = 0;
  let specimen = pAequorFactory (i, mutate())
  for (let i=0; i<10; i++){
    specimen = pAequorFactory(i,mutate())
    console.timeLog(specimen)
  }
}
  //test