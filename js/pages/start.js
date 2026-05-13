import {appContainer} from "../containers.js"
export let startContent = `
    
    <div class="item-container">

            <div class="item clickable-item" id="0">
                <h2 class="item-title">Drafts that meant something to me in the past.</h2>
                <p class="item-description">Be careful, I get really personal in some of these</p>
            </div>
     
            <div class="item clickable-item" id="1">
                <h2 class="item-title">Drafts that meant something to me in the past.</h2>
                <p class="item-description">Be careful, I get really personal in some of these</p>
            </div>

            <div class="item clickable-item" id="2">
                <h2 class="item-title">Drafts that meant something to me in the past.</h2>
                <p class="item-description">Be careful, I get really personal in some of these</p>
            </div>

            <div class="item clickable-item" id="3">
                <h2 class="item-title">Drafts that meant something to me in the past.</h2>
                <p class="item-description">Be careful, I get really personal in some of these</p>
            </div>




    </div>

        
    `




appContainer.addEventListener("click", itemSelector)


function itemSelector(e){
    console.log(`
    Item id=${e.target.parentNode.id}
    Operation=${e.target.id}
    `)

    if (e.target.id == "e"){
        console.log(`Trigger btn: ${e.target.parentNode.id}`)
    } else if (e.target.id == "f"){
        // toFavoriteItem(e.target.parentNode.id)
        console.log(`Trigger btn: ${e.target.parentNode.id}`)
    } else if (e.target.id == "r"){
        // e.target.parentNode.id is the id of the item, 0 is the origin "Items"
        removeItem(e.target.parentNode.id, 0)
    }

}