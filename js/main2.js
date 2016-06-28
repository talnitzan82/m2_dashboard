(function() {
    var flickerAPI = "php/getRevenue.php";
    $.getJSON( flickerAPI, {
            format: "json"
        })
        .done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 3 ) {
                    return false;
                }
            });
        });
})();
