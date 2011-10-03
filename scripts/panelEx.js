(function( $, undefined ) {

    $.widget("ui.panelEx", {
    
        options:{
            footer : '',
            textShadow: '',
            toggle: false,
            effect: 'blind',
            speedEffect : 300,
            toggleIn: function(){},
            toggleOut: function(){}        
        },
        
        
        _create: function(){
            
            var self = this,
            options = self.options;
            
            var titulo = $.trim( this.element.attr( 'title' ) );            
            var $conteudo = this.element.html();
            var rodape = this.options.footer;        
            
            $conteudo.wrapAll("<div class='ui-panel-content ui-widget-content'></div>");
            
            $conteudo.appendTo("body");
                     
//            if (rodape != ''){
//                rodape = "<div class='ui-panel-footer ui-widget-content'>"+rodape+"</div>";
//            }
//        
//            
//              
//              //conteudo = "<div class='ui-panel-content ui-widget-content'>"+conteudo+"</div>";
//              
//            if (rodape != ''){
//                $conteudo.insertAfter
//            }  
//            
//            if (this.options.toggle){
//                titulo = "<div class='ui-panel-titlebar ui-widget-header ui-corner-all'>"
//                +"<span class='ui-panel-title'>"+titulo+"</span>"
//                +"<a href='javascript:void(0)' class='ui-panel-titlebar-icon ui-corner-all ui-state-default'>"
//                +"<span class='ui-icon ui-icon-minusthick'></span>"
//                +"</a>"
//                +"</div>";                                                 
//            }else{
//                titulo = "<div class='ui-panel-titlebar ui-widget-header ui-corner-all'>"
//                +"<span class='ui-panel-title'>"+titulo+"</span>"
//                +"</div>";    
//            }
//            
//                   
//            this.element.empty().append ( titulo + conteudo + rodape ).addClass( "ui-panel ui-widget ui-widget-content ui-corner-all" );    
//            
//            if (this.options.textShadow != '')
//                this.element.find('span.ui-panel-title').css('text-shadow', this.options.textShadow );
//                
//                
//            if (this.options.toggle) {
//                                              
//                var $link = this.element.find( "a.ui-panel-titlebar-icon" );
//                                    
//                $link.toggle(
//                    function(){
//                        $link.find('span.ui-icon-minusthick').removeClass('ui-icon-minusthick').addClass('ui-icon-plusthick');
//                        $link.closest('div.ui-panel').find('div.ui-panel-content').toggle( options.effect, options.speedEffect, options.toggleIn );                                 
//                    },
//                    function(){
//                        $link.find('span.ui-icon-plusthick').removeClass('ui-icon-plusthick').addClass('ui-icon-minusthick');     
//                        $link.closest('div.ui-panel').find('div.ui-panel-content').toggle( options.effect, options.speedEffect, options.toggleOut );                                  
//                    }
//                );                                                        
//            }                    
        }        
    });
})( jQuery );

//
//
//
//(function( $, undefined ) {
//
//    $.widget("ui.panelEx", {
//    
//        options:{
//            footer : '',
//            textShadow: '',
//            toggle: false,
//            effect: 'blind',
//            speedEffect : 300,
//            toggleIn: function(){},
//            toggleOut: function(){}        
//        },
//        
//        
//        _create: function(){
//            
//            var self = this,
//            options = self.options;
//            
//            var titulo = $.trim( this.element.attr( 'title' ) );            
//            var conteudo = this.element.html();
//            var rodape = this.options.footer;                                
//                     
//            if (rodape != ''){
//                rodape = "<div class='ui-panel-footer ui-widget-content'>"+rodape+"</div>";
//            }
//        
//            conteudo = "<div class='ui-panel-content ui-widget-content'>"+conteudo+"</div>";
//            
//            if (this.options.toggle){
//                titulo = "<div class='ui-panel-titlebar ui-widget-header ui-corner-all'>"
//                +"<span class='ui-panel-title'>"+titulo+"</span>"
//                +"<a href='javascript:void(0)' class='ui-panel-titlebar-icon ui-corner-all ui-state-default'>"
//                +"<span class='ui-icon ui-icon-minusthick'></span>"
//                +"</a>"
//                +"</div>";                                                 
//            }else{
//                titulo = "<div class='ui-panel-titlebar ui-widget-header ui-corner-all'>"
//                +"<span class='ui-panel-title'>"+titulo+"</span>"
//                +"</div>";    
//            }
//            
//                   
//            this.element.empty().append ( titulo + conteudo + rodape ).addClass( "ui-panel ui-widget ui-widget-content ui-corner-all" );    
//            
//            if (this.options.textShadow != '')
//                this.element.find('span.ui-panel-title').css('text-shadow', this.options.textShadow );
//                
//                
//            if (this.options.toggle) {
//                                              
//                var $link = this.element.find( "a.ui-panel-titlebar-icon" );
//                                    
//                $link.toggle(
//                    function(){
//                        $link.find('span.ui-icon-minusthick').removeClass('ui-icon-minusthick').addClass('ui-icon-plusthick');
//                        $link.closest('div.ui-panel').find('div.ui-panel-content').toggle( options.effect, options.speedEffect, options.toggleIn );                                 
//                    },
//                    function(){
//                        $link.find('span.ui-icon-plusthick').removeClass('ui-icon-plusthick').addClass('ui-icon-minusthick');     
//                        $link.closest('div.ui-panel').find('div.ui-panel-content').toggle( options.effect, options.speedEffect, options.toggleOut );                                  
//                    }
//                );                                                        
//            }                    
//        }        
//    });
//})( jQuery );