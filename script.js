

let myApp = new Vue({

  el:"#root",

  data:{

    contactsArray:addressBook,

    actualContact:addressBook[0],

    textContent:"",

    searchEl:"",
  },

  computed:{
    filteredArray: function() {
      searchInput = this.searchEl;
      return this.contactsArray.filter(function(element){
        return element.name.toLowerCase().includes(searchInput.toLowerCase())
      });

    },

  },

  methods:{

    getAnElementByIndex:function(index){
      let d = new Date();
      this.actualContact = this.contactsArray[index];
      this.actualContact.lastAccess= " "+ String(d.getHours()) + " : " + String(d.getMinutes())
    },

    getSearchEl:function(){
      this.searchEl = event.target.value
    },

    getMessage: function(){

      let contact = this.actualContact;
      let d = new Date();
      let newObjectMessage = {
                                state:"sent",
                                textContent:event.target.value,
                                date:d.getDate().toString() +"/" +(d.getMonth()+1).toString()+"/" +d.getFullYear() + "\xa0\xa0" +d.getHours().toString() + " : " + d.getMinutes().toString(),

      };

      let newReceivedObjectMessage = {
                                        state:"received",
                                        textContent:"Io sono Groot!",
                                        date:d.getDate().toString() +"/" +(d.getMonth()+1).toString()+"/" +d.getFullYear() + "\xa0\xa0" +d.getHours().toString() + " : " + d.getMinutes().toString(),

      };

      contact.messages.push(newObjectMessage)
      event.target.value=""

      setTimeout(function (){
        contact.messages.push(newReceivedObjectMessage)

      },1200)
    }

  }

})
