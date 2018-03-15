/**
 * add customer to the list
 */
import Customer from './Customer';

class CustomerAddController {
    constructor($scope, customerService, $state) {
        //initilize customer object
        $scope.customer = new Customer();
        //action form
        $scope.submitForm = ()=>{
            //check if form is valid
            if ($scope.customerForm.$valid) {
                // add new customer
                let newCusto = customerService.add($scope.customer);
                if(newCusto){
                    // if added redirect to show page
                    $state.go('App.show_customer', {customerId: newCusto.customerID});
                }
            }
        }
    }
}
CustomerAddController.$inject = ['$scope', 'customerService', '$state']; //inject service in controller
export default CustomerAddController;
