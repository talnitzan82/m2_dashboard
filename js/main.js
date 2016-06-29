var MINUTES_INTERVAL = 1;
var DEMANDS_WE_WANT = ["Total","Yume", "Tremor"];
var baseRev = 0;
var coun1terUpdateInterval;
var revChart;
function  startUpdatingCounters() {
    updateIntervalFunctions();
    counterUpdateInterval = setInterval(updateIntervalFunctions, MINUTES_INTERVAL * 5 * 1000, this);
}

function updateIntervalFunctions() {
    var a = 0;
    var minutesToQuery = MINUTES_INTERVAL;
    if (new Date().getMinutes() == 59 ) minutesToQuery = 60;
    if ( baseRev == 0)  a=1;
    var date = new Date();
    var MS_PER_MINUTE = 60000;
    var myStartDate = new Date(date - 1 * MS_PER_MINUTE);
    var hour = myStartDate.getUTCHours();
    var minute = myStartDate.getUTCMinutes();
    console.log(hour +":"+minute);

    console.log("going to server");
    var flickerAPI = "php/getRevenue.php?h=" + hour + "&m=" + minute + "&a=" + a;
    $.getJSON( flickerAPI, {
            format: "json"
        })
        .done(function(data) {
            console.log("back from server");
            var rev = calculateRev(data);
            if (baseRev == 0) {
                addDemandsCounters(rev);
                revChart = new chart;
            } else {
                console.log(rev);
                console.log(minutesToQuery);
                var timeToUpdate = 1;
                if (minutesToQuery == MINUTES_INTERVAL) timeToUpdate = 60;
                for (var i = 0; i < counters.length; i++) {
                    counters[i].newValue = counters[i].value + rev[counters[i].name];
                    counters[i].update(counters[i].newValue, timeToUpdate);
                    if (counters[i].name == "Total") {
                        var time  = myStartDate.getUTCHours()+myStartDate.getUTCMinutes();
                        dps.push({ x: new Date(), y: rev[counters[i].name] });
                        revChart.chart.render();
                    }
                }
            }
        });
}

function calculateRev(data) {
    var rev = {};
    rev["Total"] = 0;
    for (var i = 0; i < data.length; i++) {
        rev["Total"] += data[i].rev*1;
        rev[data[i].partner] = data[i].rev*1;
    }
    return rev;
}

function addDemandsCounters(rev) {
    for (var i = 0; i < DEMANDS_WE_WANT.length; i++) {
        if (rev[DEMANDS_WE_WANT[i]] > 0) {
            $('.counters').append("<h1>"+DEMANDS_WE_WANT[i]+"</h1>");
            $('.counters').append("<div id='odometer' class='odometer "+DEMANDS_WE_WANT[i]+"'>333555</div>");
            window[DEMANDS_WE_WANT[i] + "_counter"] = new Counter(DEMANDS_WE_WANT[i],rev[DEMANDS_WE_WANT[i]]);
            setTimeout(function() {

            },1);
        }
    }
    baseRev = rev["Total"];
}
startUpdatingCounters();