/**
 * Created by Rohan on 11/23/2015.
 */

$(function() {
    "use strict";
    var apiKey = 'f0d2025d-3221-4cb0-860c-4466ccc1b0b0'; //for right now
    var rfaURL = 'http://api.pugetsound.onebusaway.org/api/where/routes-for-agency/1.json?key=' + apiKey;
    // var sfrURL = 'http://api.pugetsound.onebusaway.org/api/where/stops-for-route/1_100228.json?key=' + apiKey;
    // var adfsURL = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_5400.json?key='
    // + apiKey

    var routeNum;
    $('#choose-route-form').submit(function(evt) {
        evt.preventDefault();
        routeNum = $(this).find('[name=routeNum]').val();
        console.log(routeNum);

        $.getJSON(rfaURL)
            .then(function(data) {
                console.log(data);
            });
    });
});