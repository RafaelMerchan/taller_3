



let buttonListener = async (event) => {

    let selectedWord = event.target.value
    try {
  
        //API key
        let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`

        fetch( URL )
        .then(responseText => responseText.json())
        .then(responseJSON => {
            let definitionElement = document.querySelector("#respuesta")
            definitionElement.innerHTML = '';
            let template = `
             <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><a href=" -phonetics-sourceUrl- " target="_blank"> ${responseJSON.word} </a></h5>
                        <audio controls>
                        <source src=" ${responseJSON.phonetics.audio} " type="audio/mpeg">
                        Your browser does not support the audio element.
                        </audio>
                        <h6 class="card-subtitle mb-2 text-muted"> ${responseJSON.phonetics.text} </h6>
                        <p class="card-text text-primary"> ${responseJSON.meanings.synonyms} </p>
                        <p class="card-text text-danger"> ${responseJSON.meanings.antonyms} </p>
                    </div>
                </div>
            </div>
        `

        //Renderizando la plantilla en el elemento HTML
        definitionElement.innerHTML += template;
        
    
      })
        } catch (error) {
            console.log(error)
        }
    }

    let loadDefinition = () => {
        let palabraEscrita = document.querySelector("textarea")
        console.log(palabraEscrita)
        palabraEscrita.addEventListener("change", buttonListener)
    }
