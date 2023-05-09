// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


//showing shot options based off whether there is an opponent


function shotView() {
    $('.choices').attr('disabled', false);
    let checker = document.getElementById('opponent');
    
    if (checker.checked == true) {
      // If true, check which game is chosen
      if ($('#rps').is(':checked')) {
        $('.moves').css('visibility', 'visible');
        $('.rpslsmoves').hide();
      } else {
        $('.moves').css('visibility', 'visible');
        $('.rpslsmoves').show();
      }
    } else {
      // Always show Rock, Paper, and Scissors options
      $('.moves').css('visibility', 'visible');
      // Show Lizard and Spock options only when the corresponding radio button is checked
      if ($('#rpsls').is(':checked')) {
        $('.rpslsmoves').show();
      } else {
        $('.rpslsmoves').hide();
      }
    }
  }
  
  

function showResults(){
    $('.results').show();
    $('input').attr('disabled',true);
    $('#play').attr('disabled',true);

}
function hideResults(){
    $('.results').hide();
    $('#play').attr('disabled',false);

}
function showRules(r){
    if (r == 1){
        $('.rules').css('visibility', 'visible');
        $('#show').hide();
        $('#hide').show();
    } else {
        $('.rules').css('visibility', 'hidden');
        $('#show').show();
        $('#hide').hide();
    }
}
function resetPage(){
    shotView();
    hideResults();

}
async function playGame(){
    var str = "";
    try {
    let game = $('input[type=radio][name=gameStyle]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();
    let url = '/app/'+ game + '/play/';
    
    if($('#opponent').is(':checked')){
        url = url + "?shot=" + shot;
    }
    console.log(url)
    console.log(shot)

    let response = await fetch(url);
    let result = await response.json();

    
    let title = "";

    if($('#opponent').is(':checked')){
        $('#opponentImage').attr("src", `img/${result.opponent}.jpg`)
        $('#playerImage').attr("src", `img/${result.player}.jpg`)
        str = `You played ${result.player} and your opponent played ${result.opponent}.`;
        if(result.result == "win"){
            title = "You Won!!";
        } else if (result.result == "lose") {
            title = "Aw You Lost :( Maybe next time!";
        } else {
            title = "It's a tie! Could be worse.";
            str =`Both players played ${result.player}.`
        }
        $('.resultTitle').text(title);
    } else {
        str = `player played ${result.player}.`;
    }
    
    } catch (error){
        window.alert("Please make sure that you've chosen which game you want to play and if available select your move.");
    } finally {
        $('.resultText').text(str);
        showResults();
    }

}
