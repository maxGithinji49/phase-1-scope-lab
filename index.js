// // Write your solution in this file!
// describe('Fix the Scope', function() {
//     describe('declare customerName to be bob in global scope', function() {
//       it('returns the customerName', function() {
//         expect(window.customerName).to.equal('bob');
//       });
//     });
  
//     describe('upperCaseCustomerName()', function() {
//       it('modifies the customerName variable', function() {
//         expect(window.customerName).to.equal('bob');
  
//         upperCaseCustomerName();
  
//         expect(window.customerName).to.equal('BOB');
//       });
//     });
//     describe('setBestCustomer()', function() {
//       it('setBestCustomer', function() {
//         expect(window.bestCustomer).to.equal(undefined);
  
//         setBestCustomer();
  
//         expect(window.bestCustomer).to.equal('not bob');
//       });
//     });
  
//     describe('overwriteBestCustomer()', function() {
//       it('overwrites the best customer', function() {
//         overwriteBestCustomer('maybe bob');
  
//         expect(window.bestCustomer).to.equal('maybe bob');
//       });
//     });
  
//     describe('changeLeastFavoriteCustomer()', function() {
//       it('unsuccessfully tries to reassign the least favorite customer', function() {
//         expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//       });
//     });
//   });
  
var customerName = 'bob'
// var bestCustomer = 'not bob'

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

 var setBestCustomer = function(){
    return bestCustomer = 'not bob'
 }
 
function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

const LeastFavoriteCustomer = 'Jasper'

function changeLeastFavoriteCustomer(){
    return LeastFavoriteCustomer = 'not Jasper'
}