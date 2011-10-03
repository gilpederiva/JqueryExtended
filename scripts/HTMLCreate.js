HTMLCreate = {
    content: '',
        
    initForm: function(options){          
        this.content = "<form method='"+options.method+"' action='"+options.action+"' name='"+options.name+"' id='"+options.id+"'>";
        return this;
    },
        
    closeForm: function(){            
        this.content += "</form>";
        return this;
    },
        
    getContent: function(){
        return this.content;
    },
        
        
    createInput: function(options){
        if (options.type == 'hidden'){
            this.content += "<input type='"+options.type+"' name='"+options.name+"' id='"+options.id+"' />";
        }else{
            this.content += "<input type='"+options.type+"' name='"+options.name+"' id='"+options.id+"' size='"+options.size+"' />";
        }            
        return this;
    },
        
    createButton: function(options){
        this.content += "<button type='"+options.type+"'>"+options.textButton+"</button>";
        return this;
    },
    
    createLabel: function(options){
        this.content += "<label for='"+options.forLabel+"' class='"+options.classLabel+"'>"+options.content+"</label>";
        return this;
    },
    
    createSubmtin: function(options){
        this.content += "<button type='submit' id='" + options.id + "'>Enviar</button>";
        return this;
        
    }
        
        
}