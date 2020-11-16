// var myInit = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     mode: 'cors',
//     cache: 'default'
// };

// var myRequest = new Request("https://rata.digitraffic.fi/api/v1/metadata/stations", myInit);
function printTable(arg) {
    var arr = fetch("https://rata.digitraffic.fi/api/v1/metadata/stations")
        .then(res => res.json())
        .then(data => {

            var obj = [];



            for (var i = 0; i < data.length; i++) {
                obj[i] = data[i];

            }

            getData(obj);
        });
}

function getData(arr) {
    // var arr = JSON.parse(arg);
    var string = "<tr><th>Station Short Code</th><th>Station Name</th><th>longitudd</th><th>latitude</th></tr>";
    for (var i = 0; i < arr.length; i++) {
        string += "<tr><td>" + arr[i].stationShortCode + "</td>" + "<td>" + arr[i].stationName + "</td>" + "<td>" + arr[i].longitude + "</td>" + "<td>" + arr[i].latitude + "</td><tr>";
    }

    document.getElementById('rails').innerHTML = string;
}


printTable(1);

// function getData(obj) {
//     var arr = JSON.parse(obj);
//     console.log(arr[0]);
// }