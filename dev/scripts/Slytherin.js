import React from 'react';

const Slytherin = (props) => {
    return (
        <div>
            {props.characters.map((character) => {
                let characterBio;
                characterBio = (
                    <div>
                        <h2>{character.name}</h2>
                        <h6 className={character.house}>{character.house}</h6>

                        <h6>{character.bloodStatus}</h6>
                        <h6>{character.wand}</h6>

                        <h6>{character.patronus}</h6>
                    </div>
                )

                let slytherin;
                if (character.house === "Slytherin") {
                    slytherin = (characterBio)
                }
                console.log(slytherin)

                return(
                    <div>
                        {slytherin}
                    </div>
                )
            })}
        </div>
    )
}

export default Slytherin;