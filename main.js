function printTable(arg) {
    var arr = fetch("https://rata.digitraffic.fi/api/v1/metadata/stations")
        .then(res => res.json())
        .then(data => {
            var selection = document.getElementById('pass');
            var link = "";
            var string = "<tr><th>Station Short Code</th><th>Station Name</th><th>longitude</th><th>latitude</th><th>passengerTraffic</th><th>MAP</th></tr>";

            if (arg == 1) {
                var name = document.getElementById('search').value;
                console.log("HERE");
                for (var i = 0; i < data.length; i++) {
                    if (data[i].stationName == name) {
                        string += fillTable(data[i]);
                    }
                }
            } else {
                if (selection.checked) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].passengerTraffic) {
                            string += fillTable(data[i]);
                        }
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        string += fillTable(data[i]);
                    }
                }
            }
            document.getElementById('rails').innerHTML = string;
        });
}

function fillTable(data) {
    var link = "https://www.google.fi/maps/@" + data.latitude + "," + data.longitude + ",15z?hl=en";
    return "<td>" + data.stationShortCode + "</td>" + "<td>" + data.stationName + "</td>" + "<td>" + data.longitude + "</td>" + "<td>" + data.latitude + "</td>" + "<td>" + data.passengerTraffic + "</td>" + "<td> <a href=\" " + link + "\">Map</a>" + "</td></tr>";
}