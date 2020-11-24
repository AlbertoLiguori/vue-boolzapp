

let myApp = new Vue({

  el:"#root",

  data:{

    contactsArray:addressBook,

    filteredArray:addressBook,

    actualContact:addressBook[0],

    textContent:"",

  },

  computed:{

  },


  methods:{

    getAnElementByIndex:function(index){
      let d = new Date();
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

      let contact = this.actualContact;

      let d = new Date();

      let newObjectMessage =
      {
        state:"sent",
        textContent:event.target.value,
        date:d.getDate().toString() +"/" +(d.getMonth()+1).toString()+"/" +d.getFullYear() + "\xa0\xa0" +d.getHours().toString() + " : " + d.getMinutes().toString(),

      };

      let newReceivedObjectMessage =
      {
        state:"received",
        textContent:"Io sono Groot!",
        date:d.getDate().toString() +"/" +(d.getMonth()+1).toString()+"/" +d.getFullYear() + "\xa0\xa0" +d.getHours().toString() + " : " + d.getMinutes().toString(),

      };

      contact.messages.push(newObjectMessage)

      event.target.value=""

      setTimeout(function (){
        contact.messages.push(newReceivedObjectMessage)

      },2000)
    }

  }

})
