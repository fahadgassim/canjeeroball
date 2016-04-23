/** Document Ready Functions **/
/********************************************************************/

$( document ).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
        
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    
    var chart = AmCharts.makeChart( "chartdiv", {
      "type": "serial",
      "theme": "light",
      "dataProvider": [ {
        "player": "Abdi",
        "points": 1,
        "color": "#3F48CC"
      }, {
        "player": "MG",
        "points": 3,
        "color": "#3F48CC"
      }, {
        "player": "Zaid",
        "points": 4,
        "color": "#3F48CC"
      }, {
        "player": "Zak",
        "points": 3,
        "color": "#3F48CC"
      }, {
        "player": "Abdu",
        "points": 3,
        "color": "#ED1C24"
      }, {
        "player": "Ash",
        "points": 1,
        "color": "#ED1C24"
      }, {
        "player": "FG",
        "points": 2,
        "color": "#ED1C24"
      }, {
        "player": "Liban",
        "points": 3,
        "color": "#ED1C24"
      }],
      "valueAxes": [ {
        "gridColor": "#333",
        "gridAlpha": 0.05,
        "dashLength": 0,
        "minMaxMultiplier": 1,
        "minVerticalGap": 15,
        "minimum": 0,
        "precision": 0,
      },{
        "gridColor": "#ffffff",
        "gridAlpha": 0.8,
        "position": "left",
        "title": "Points",
        "dashLength": 0
      }, ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "columnWidth": 0.6,
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "points"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "player",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }

    } );

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    
    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        

    });
}