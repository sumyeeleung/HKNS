$(document).on('click', '.close', function() {
    $(".over").fadeOut();
});

var events = [
    { Title: "Chow, 17, Female ", Date: new Date("08/02/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Conflict with family"},
    { Title: "Chan, 21, Male", Date: new Date("09/07/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Study stress "},
    { Title: "Chan, 11, Male", Date: new Date("09/10/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Study stress "},
    { Title: "Chu, 13, Male", Date: new Date("09/23/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Study stress "},
    { Title: "Ng, 17, Male", Date: new Date("10/24/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Depression"},
    { Title: "Wong, 21, Female; Ng, 21, Male", Date: new Date("11/04/2017"), year:"Suicide year: 2015; Suicide year: 2015", reason:"Presumed motive: Study stress; Presumed motive: Conflict with family"},
    { Title: "Leung, 18, Male", Date: new Date("11/09/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Depression, study stress"},
    { Title: "Chan, 22, Male", Date: new Date("12/15/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Unknown"},
    { Title: "Wong, 15, Male", Date: new Date("12/16/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Unhappy life"},
    { Title: "Cheng, 18, Male", Date: new Date("12/28/2017"), year:"Suicide year: 2015", reason:"Presumed motive: Study stress"},
    { Title: "Ho, 15, Male", Date: new Date("01/04/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unhappy life"},
    { Title: "Siu, 19, Female", Date: new Date("01/06/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress, financial difficulty"},
    { Title: "Lee, 20, Female", Date: new Date("01/17/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Lam, 14, Male", Date: new Date("01/18/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Wong, 21, Female", Date: new Date("01/20/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Lai, 12, Female; Tam, 15, Male", Date: new Date("02/12/2017"), year:"Suicide year: 2016; Suicide year: 2017", reason:"Presumed motive: Unhappy school life; Presumed motive: Study stres"},
    { Title: "Ng, 16, Male", Date: new Date("02/18/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Cheng, 20, Female", Date: new Date("03/05/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Chow, 15, Male", Date: new Date("03/07/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Ng, 12, Male; So, 20, Male", Date: new Date("03/08/2017"), year:"Suicide year: 2016; Suicide year: 2016", reason:"Presumed motive: Study stress; Presumed motive: Study stress"},
    { Title: "Cheng, 20, Male", Date: new Date("03/11/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Eye diseases, depression"},
    { Title: "Tam, 11, Female", Date: new Date("03/12/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Family issue, unwilling to enter senior high school"},
    { Title: "Yip, 21, Female", Date: new Date("03/13/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unhappy life"},
    { Title: "Chow, 22, Male", Date: new Date("03/26/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unhappy life"},
    { Title: "Kwan, 17, Female", Date: new Date("03/27/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Relationship issue"},
    { Title: "Yueng, 20, Male", Date: new Date("04/04/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Siu, 17, Male", Date: new Date("04/13/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Family issue"},
    { Title: "So, 22, Female", Date: new Date("04/14/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Relationship issue"},
    { Title: "Tse, 16, Male", Date: new Date("04/19/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Family issue"},
    { Title: "Wong, 18, Male", Date: new Date("04/24/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unwilling to study in US again"},
    { Title: "Lau, 18, Male", Date: new Date("06/10/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Ng, 20, Male", Date: new Date("06/17/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Wong, 14, Male", Date: new Date("06/23/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress, relationship issue"},
    { Title: "Lee, 17, Male", Date: new Date("08/05/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress, relationship issue"},
    { Title: "Cheng, 22, Male", Date: new Date("08/26/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unknown"},
    { Title: "Leung, 20, Male", Date: new Date("09/28/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Wong, 16, Male", Date: new Date("10/04/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Reproached by tutor(s)"},
    { Title: "Fung, 21, Female", Date: new Date("11/12/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Failed to handle interpersonal relations"},
    { Title: "Chung, 20, Female; So, 20, Male", Date: new Date("11/21/2017"), year:"Suicide year: 2016; Suicide year: 2016", reason:"Presumed motive: Family issue; Presumed motive: Financial difficulty"},
    { Title: "Tsui, 16, Male", Date: new Date("11/23/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Ho, 19, Male", Date: new Date("12/10/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Unknown"},
    { Title: "Chim, 15, Female", Date: new Date("12/12/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Relationship issue"},
    { Title: "Ng, 16, Male; Leung, 13, Female", Date: new Date("12/16/2017"), year:"Suicide year: 2016; Suicide year: 2016", reason:"Presumed motive: Study stress; Presumed motive: Study stress, extracurricular work's issue"},
    { Title: "Ku, 19, Female", Date: new Date("12/19/2017"), year:"Suicide year: 2016", reason:"Presumed motive: Study stress"},
    { Title: "Chu, 25, Male", Date: new Date("01/12/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Study stress"},
    { Title: "Yueng, 21, Male", Date: new Date("01/24/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Study stress"},
    { Title: "Lo, 16, Male", Date: new Date("02/05/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Study stress"},
    { Title: "Choi, 13, Female", Date: new Date("02/06/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Unhappy life"},
    { Title: "Foreigner, 15, Male", Date: new Date("02/17/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Unhappy school life"},
    { Title: "Lung, 13, Male", Date: new Date("02/21/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Unhappy life"},
    { Title: "Lau, 13, Male", Date: new Date("03/01/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Study stress, extracurricular work's issue"},
    { Title: "Tam, 21, Male", Date: new Date("03/09/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Illness harass"},
    { Title: "Luk, 21, Male", Date: new Date("03/10/2017"), year:"Suicide year: 2017", reason:"Presumed motive: Relationship issue"},
    {Title: "NGNGNG", Date: new Date("12/31/2012"), year:"Suicide year: N/A", reason:"Bad guys don't die."},

  ];

$("#datepicker").datepicker({

    beforeShowDay: function(date) {
        var result = [false, '', null];
        var matching = $.grep(events, function(event) {
            return event.Date.valueOf() === date.valueOf();
        });

        if (matching.length) {
            result = [true, 'highlight', null];
        }
        return result;
    },
    onSelect: function(dateText) {
    var date,
        selectedDate = new Date(dateText),
        i = 0,
        event = null;

        while (i < events.length && !event) {
            date = events[i].Date;

            if (selectedDate.valueOf() === date.valueOf()) {
                event = events[i];
            }
            i++;
        }
            if (event) {

                $(".eventdata").empty();
                $(".over").fadeIn("slow");
                $(".eventdata").append("<h1>"+event.Title+"</h1><p>"+"<br>"+event.year+"<br>"+event.reason+"</p>"+"<br>");
            }
    }

});
