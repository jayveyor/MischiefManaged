import React from 'react';

const Ravenclaw = (props) => {
    
    //     }
    // render() {
        // {console.log(props.characters)}
           
        return (
            
            <div>
        {props.characters.map((character) =>{
            // console.log(character)
        let characterBio;
        characterBio = (
        <div>
        
        <h2>{character.name}</h2>
        <h6 className={character.house}>{character.house}</h6>
      
          <h6>{character.bloodStatus}</h6> 
          <h6>{character.wand}</h6>
        
          <h6>{character.patronus}</h6>
          {/* <h6>{affiliation}</h6> */}
        </div>
      )
        let ravenclaw;
        if (character.house === "Ravenclaw") {
              ravenclaw = (characterBio)
            } 
            console.log(ravenclaw)

            return (
                <div>
                    {ravenclaw}
                </div>
            )
        })
    };
    
            </div>
        )
    // }
    
}

export default Ravenclaw;