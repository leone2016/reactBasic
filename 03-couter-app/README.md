## Snippets 

* ``` rafcp ``` created a **funcional component** with PropTypes
* ``` test ``` created a **basic dev test**
* ``` desc ``` created a **basic dev describe**
### Unit tests


**Characteristics**
1. Easy to write
2. Easy to Ready
3. Trustworthy
4. Fast
5. principally unit

### AAA [Arrange,Act, Assert] (Arreglar, actuar, afirmar)

**Arrange:**
 
this is the step that we establish the init start and we know as subject to test here 
* Start variables
* Important imports

**Act:**
  
In this step, we applied to subject actions and stimulate, in other words here we call the step before
* Call methods
* Simulate click
* It will do the actions for the  last step
 
**Assert**

In Resume,  It will observe the result actions
* Are the results expected ?
* Eg. That some change, some increment or nothing doing
 


**ToBe** compare if the value is equals to the, it's only used with the primitives attribute of Js

**toStrictEqual** compare if the content is equals, Eg {} === {} is false because this both object point to the same space of memory in the fact we need to use toStrictEquals

**toEqual** Compare if two object have the same properties and the same values