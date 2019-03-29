window.onload = function () {
    var city = document.getElementById('city');
    var info = document.getElementById('info');
    var date = document.getElementById('date');
    var time = document.getElementById('time');



    fetch("https://api.openaq.org/v1/measurements/")
        .then(resp => resp.json())
        .then(showCards)

    // .then(resp => {
    //     for (var i = 0; i < resp.results.length; i++) {

    //         if (resp.results[i].location == 'Wrocław - Korzeniowskiego') {
    //             console.log(resp.results[i]);
    //             city.innerText = resp.results[i].location
    //             info.innerText = Math.round(resp.results[i].value) + '\xa0' + 'µg/m³'
    //             date.innerText = resp.results[i].date.local.substring(0, 10);
    //             time.innerText = resp.results[i].date.local.substring(11, 19);
    //         }

    //     }

    // });

    function showCards(resp) {
        resp.results.forEach(element => {
            $(`<div class="card custom">
        <div class="card-body">
          <h5 class="card-title">${element.location}</h5>
          <p class="card-text">${element.value}</p>
        </div>
      </div>`).appendTo($('#cardBody'));

            // var nextCard = '<div>' + element + '</div>'
            // cardBody.innerHTML += nextCard;
        })
    }
}
