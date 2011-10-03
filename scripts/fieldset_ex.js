(function( $ ) {
    
    var methods = {
     
        init : function( options ) {
            
            var settings = {
                'toggleable' : false,
                'textShadow': '',                
                'effect': 'blind',
                'speedEffect' : 300,
                'toggleIn': function(){},
                'toggleOut': function(){}
            }
            
                        
            var baseClasses = "ui-fieldset ui-widget ui-widget-content ui-corner-all";                    
            var legendClasses = "ui-fieldset-legend ui-corner-all ui-state-default";            
            var spanToggleableClasses = "ui-fieldset-toggler ui-icon ui-icon-minusthick";
            
                
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                        
                var legend = $( this ).find('legend').eq(0).clone();
                $( this ).find('legend').eq(0).detach();
                var conteudo = $( this ).html();
                
                if (settings.toggleable){                    
                    $( this ).empty().addClass( baseClasses+' ui-fieldset-toggleable'  )                    
                    .append(legend).find('legend').eq(0).addClass( legendClasses )
                    .append("<span class='"+spanToggleableClasses+"'></span>");
                }                
                else{
                    $( this ).empty().addClass( baseClasses )
                    .append(legend).find('legend').eq(0).addClass( legendClasses );                                                                                
                }
                
                $( this ).css('padding-bottom', '10px')
                .append("<div class='ui-fieldset-content'>"+conteudo+"</div>")
                .find('legend').eq(0)
                .hover(
                    function(){
                        $( this ).addClass('ui-state-hover');
                    },
                    function(){
                        $( this ).removeClass('ui-state-hover');
                }) ;
                
                if (settings.textShadow)
                    $( this ).find('legend').eq(0).css('text-shadow', settings.textShadow);
                
                
                if (settings.toggleable) {
                                        
                    $(this).find( "legend.ui-fieldset-legend" ).eq(0).toggle(
                        function(){                            
                           $(this).find('span.ui-icon-minusthick').removeClass('ui-icon-minusthick').addClass('ui-icon-plusthick');
                           $(this).siblings("div.ui-fieldset-content").eq(0).toggle( settings.effect, settings.speedEffect, settings.toggleIn );            
                        },
                        function(){                           
                           $(this).find('span.ui-icon-plusthick').removeClass('ui-icon-plusthick').addClass('ui-icon-minusthick');     
                           $(this).siblings("div.ui-fieldset-content").eq(0).toggle( settings.effect, settings.speedEffect, settings.toggleOut );          
                        }
                     );                                    
                }                   
                                                                                                   
            });
        
        }        
    };
    //fim dos métodos
       
    
    
    //define a inicialização do plugin
    $.fn.fieldsetGP = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.fieldsetGP' );
        }                 
    };
      
    
})( jQuery );