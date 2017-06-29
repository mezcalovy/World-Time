jQuery( document ).ready(function() {
    currentDate = new Date();
    currentSeconds = currentDate.getSeconds();
    currentMinutes = currentSeconds + ( currentDate.getMinutes() * 60 );
    currentAnalogHours = ( currentDate.getHours() > 11 ) ? currentDate.getHours() - 12 : currentDate.getHours();
    currentHours = currentMinutes + ( currentAnalogHours * 3600 );
    $( '.hours' ).css( 'animation-delay', '-' + currentHours + 's' );
    $( '.hours-ir' ).css( 'animation-delay', '-' + (currentHours - 3600) + 's' );
    $( '.hours-jp' ).css( 'animation-delay', '-' + (21600 + currentHours) + 's' );
    $( '.hours-fr' ).css( 'animation-delay', '-' + currentHours + 's' );
    $( '.hours-ru' ).css( 'animation-delay', '-' + (currentHours + 3600) + 's' );
    $( '.minutes' ).css( 'animation-delay', '-' + currentMinutes + 's' );
    $( '.seconds' ).css( 'animation-delay', '-' + currentSeconds + 's' );
    
    
 });
 
 
 
 
 $(document).ready(function(){
    $("button").click(function(){
        $(".seconds").css({ '-webkit-animation': "rotationback 60s infinite linear" });
        $(".seconds").css({ '--moz-animation': "rotationz 60back infinite linear" });
        $(".seconds").css({ 'animation': "rotationz 60back infinite linear" });
        $(".seconds").css({ 'background-color': "green" });
       
    });
});
 
