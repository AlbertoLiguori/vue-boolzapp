

let myApp = new Vue({

  el:"#root",

  data:{

    contactsArray:addressBook,

    filteredArray:addressBook,

    actualContact:addressBook[0],

    textContent:"",

  },


  methods:{

    getAnElementByIndex:function(){
      let d = new Date();
      let index = parseInt(event.target.value);
      this.actualContact = this.filteredArray[index];
      this.actualContact.lastAccess= " "+ String(d.getHours()) + " : " + String(d.getMinutes())

    },

    getFilteredElements:function(){

      let searchEl = String(event.target.value)

      this.filteredArray = this.contactsArray.filter(function(element){
        return element.name.toLowerCase().includes(searchEl.toLowerCase())
      });

    },

    getMessage: function(){
      let d = new Date();

      let newObjectMessage =

      {
        state:"sent",
        textContent:event.target.value,
        date:d.getDate().toString() +"/" +(d.getMonth()+1).toString()+"/" +d.getFullYear() + "\xa0\xa0" +d.getHours().toString() + " : " + d.getMinutes().toString(),

      };

      this.actualContact.messages.push(newObjectMessage)

      event.target.value=""
    }

  }

})
