let anArrayOfObjects=[
                  {
                    name: "ciccio",
                    age:23,
                    gender:"M"

                },

                {
                  name: "weila",
                  age:99,
                  gender:"F"

                },

                {
                  name: "ciccio",
                  age:35,
                  gender:"M"

                }
];





function getAnElementByIndex(index){
  let anObject=anArrayOfObjects[index];
  console.log(anObject)
  return anObject

}

getAnElementByIndex(0);
getAnElementByIndex(2);
