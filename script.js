let addressBook= [
  {
    name:"Michele",
    imgSrc:"css/img/avatar_1.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Fabio",
    imgSrc:"css/img/avatar_2.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Samuele",
    imgSrc:"css/img/avatar_3.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Luisa",
    imgSrc:"css/img/avatar_4.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Ciccio",
    imgSrc:"css/img/avatar_5.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Ale",
    imgSrc:"css/img/avatar_6.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"Nina",
    imgSrc:"css/img/avatar_7.jpg",
    lastAccess:"",
    messages:[],
  },

  {
    name:"John",
    imgSrc:"css/img/avatar_8.jpg",
    lastAccess:"",
    messages:[],
  },
];

let myApp = new Vue({

  el:"#root",

  data:{

    contactsArray:addressBook,

    filteredArray:addressBook,

    actualContact:addressBook[0],

  },



  methods:{

    getAnElementByIndex:function(){
      let d = new Date();
      let index = parseInt(event.target.value);
      this.actualContact = this.filteredArray[index];
      this.actualContact.lastAccess= d.getHours() + d.getMinutes()

    },

    getFilteredElements:function(){

      let searchEl = String(event.target.value)

      this.filteredArray = this.contactsArray.filter(function(element){
        return element.name.toLowerCase().includes(searchEl.toLowerCase())
      });

    },

  }

})
