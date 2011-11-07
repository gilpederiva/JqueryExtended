(function( $ ) {
    
    var methods = {
     
        init : function( options ) {
            
            var settings = {
                'toggleable' : false
            }
            
                        
            var baseClasses = "ui-fieldset ui-widget ui-widget-content ui-corner-all";                    
            var legendClasses = "ui-fieldset-legend ui-corner-all ui-state-default";            
            var spanToggleableClasses = "ui-fieldset-toggler ui-icon ui-icon-minusthick";
            
                
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                        
                $(this).find("li").addClass("directory");
//                
//                $(this).find("li").bind('click', function(){
//                    $(this).find("ul:eq(0)").slideDown(200).end().addClass("aberto");
//                });
                
                $(this).find( "li" ).toggle(
                        function(){                            
                           //$(this).find('ul:eq(0)').toggle( 'blind', 200 ).end().removeClass("fechado").addClass("aberto"); 
                           $(this).find('ul:eq(0)').slideDown(200).end().removeClass("fechado collapsed").addClass("aberto expanded"); 
                           
                        },
                        function(){                           
                           $(this).find('ul:eq(0)').slideUp(200).end().removeClass("aberto expanded").addClass("fechado collapsed"); 
                        }
                     );                   
                                                                                                   
            });
        
        }        
    };
    //fim dos métodos
       
    
    
    //define a inicialização do plugin
    $.fn.treeList = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.fieldsetGP' );
        }                 
    };
      
    
})( jQuery );