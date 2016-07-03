var data={
    name: 'my tree',
    children: [
        {name:'a'},
        {name:'b',children: [
            {name:'b1'},
            {name:'b2'}
        ]},
        {name:'c'}
    ]
}

Vue.component('item',{
    template:"#item-template",
    props:{
        model:Object
    },
    data: function(){
        return {
            open:false
        }
    },
    computed:{
        isFolder : function(){
           return this.model.children && this.model.children.length
        }
    },
    methods:{
        toggle: function(){
            if(this.isFolder){
                this.open=!this.open;
            }
            
        },
        changeType: function(){
            if(!this.isFolder){
                Vue.set(this.model,'children',[]);
                this.addChild();
                this.open=true;
            }
        },
        addChild: function(){
            this.model.children.push({name:'new item'});
        }
    }
})

var demo = new Vue({
    el:"#demo",
    data:{
        treeData:data
    }
})