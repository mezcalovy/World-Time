jQuery( document ).ready(function() {
    currentDate = new Date();
    currentSeconds = currentDate.getSeconds();
    currentMinutes = currentSeconds + ( currentDate.getMinutes() * 60 );
    currentAnalogHours = ( currentDate.getHours() > 11 ) ? currentDate.getHours() - 12 : currentDate.getHours();
    currentHours = currentMinutes + ( currentAnalogHours * 3600 );
    jQuery( '.hours' ).css( 'animation-delay', '-' + currentHours + 's' );
    jQuery( '.hours-ir' ).css( 'animation-delay', '-' + (currentHours - 3600) + 's' );
    jQuery( '.hours-jp' ).css( 'animation-delay', '-' + (21600 + currentHours) + 's' );
    jQuery( '.hours-fr' ).css( 'animation-delay', '-' + currentHours + 's' );
    jQuery( '.hours-ru' ).css( 'animation-delay', '-' + (currentHours + 3600) + 's' );
    jQuery( '.minutes' ).css( 'animation-delay', '-' + currentMinutes + 's' );
    jQuery( '.seconds' ).css( 'animation-delay', '-' + currentSeconds + 's' );
    
    
 });
 
 
 
 
 $(document).ready(function(){
    $("button").click(function(){
        $("#div1").addClass("blue");
        
        $(".seconds").css({ '-webkit-animation': "rotationz 60s infinite linear" });
        $(".seconds").css({ '--moz-animation': "rotationz 60s infinite linear" });
        $(".seconds").css({ 'animation': "rotationz 60s infinite linear" });
        $(".seconds").css({ 'background-color': "green" });
       
    });
});
 
